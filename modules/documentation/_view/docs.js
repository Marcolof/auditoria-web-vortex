// Módulo Documentación: lista de documentos con búsqueda en su contenido; con ?doc=<ruta.md> muestra uno.
// La lista sale de las tablas del README (fuente del índice).
(function () {
  const V = window.MdViewer;
  const INDEX = 'README.md';
  const params = new URLSearchParams(location.search);
  const requestedDoc = params.get('doc');
  const current = requestedDoc ? V.safePath(requestedDoc, INDEX) : null;
  const highlight = (params.get('q') || '').trim();

  const mainEl = document.getElementById('dc-content');
  const crumbsEl = document.getElementById('dc-crumbs');

  const META_LABELS = { id: 'ID', type: 'Tipo', evidence: 'Evidencia', updated: 'Actualizado' };
  const STATUS_LABELS = { draft: 'Borrador', review: 'En revisión', approved: 'Aprobado', superseded: 'Reemplazado' };

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function docUrl(path, hash, q) {
    let url = './?doc=' + encodeURIComponent(path).replace(/%2F/g, '/');
    if (q) url += '&q=' + encodeURIComponent(q);
    return url + (hash ? '#' + hash : '');
  }

  // Minúsculas y sin tildes, para buscar "publicos" y encontrar "públicos".
  function norm(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  }

  // Texto plano aproximado del Markdown, para buscar y mostrar fragmentos.
  function plain(md) {
    return md
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/[#>*_`|]/g, ' ')
      .replace(/-{3,}/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Documentos listados en las tablas del README, agrupados por su sección (h2).
  function readIndex(indexBody) {
    const tmp = document.createElement('div');
    tmp.innerHTML = V.toHtml(indexBody);
    const docs = [];
    tmp.querySelectorAll('h2').forEach((h2) => {
      const table = h2.nextElementSibling;
      if (!table || table.tagName !== 'TABLE') return;
      table.querySelectorAll('tbody tr').forEach((tr) => {
        const a = tr.querySelector('a[href$=".md"]');
        if (!a) return;
        const cells = tr.querySelectorAll('td');
        docs.push({
          path: V.resolve(INDEX, a.getAttribute('href')),
          title: a.textContent.trim(),
          area: h2.textContent.trim(),
          desc: cells[1] ? cells[1].textContent.trim() : '',
          status: cells[cells.length - 1].textContent.trim(),
        });
      });
    });
    return docs;
  }

  async function loadDocs(docs) {
    await Promise.all(docs.map(async (d) => {
      try {
        const { meta, body } = V.parse(await V.load(d.path));
        d.meta = meta;
        d.text = plain(body);
        d.haystack = norm(d.title + ' ' + d.desc + ' ' + d.text);
      } catch (err) {
        d.meta = {};
        d.text = '';
        d.haystack = norm(d.title + ' ' + d.desc);
      }
    }));
  }

  function snippet(d, terms) {
    const hay = norm(d.text);
    const pos = hay.indexOf(terms[0]);
    if (pos === -1) return null;
    const start = Math.max(0, pos - 70);
    const end = Math.min(d.text.length, pos + terms[0].length + 110);
    const frag = el('p', 'dc-snippet');
    if (start > 0) frag.append('…');
    const piece = d.text.slice(start, end);
    const pieceNorm = norm(piece);
    let i = 0;
    const re = new RegExp(terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
    let m;
    while ((m = re.exec(pieceNorm))) {
      frag.append(piece.slice(i, m.index), el('mark', '', piece.slice(m.index, m.index + m[0].length)));
      i = m.index + m[0].length;
    }
    frag.append(piece.slice(i));
    if (end < d.text.length) frag.append('…');
    return frag;
  }

  function renderList(docs) {
    document.title = 'Documentación · Vortex IT';
    mainEl.innerHTML = '';
    mainEl.classList.add('is-list');

    const head = el('header', 'dc-head');
    head.append(el('p', 'dc-eyebrow', 'Vortex IT'), el('h1', 'dc-title', 'Documentación'));

    const search = el('div', 'dc-search');
    search.setAttribute('role', 'search');
    const label = el('label', 'dc-visually-hidden', 'Buscar en la documentación');
    label.htmlFor = 'dc-q';
    const input = el('input', 'dc-search-input');
    input.id = 'dc-q';
    input.type = 'search';
    input.placeholder = 'Buscar en todos los documentos…';
    input.autocomplete = 'off';
    input.value = params.get('q') || '';
    search.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
    search.append(label, input);

    const count = el('p', 'dc-count');
    count.setAttribute('aria-live', 'polite');
    const list = el('ul', 'dc-list');
    list.setAttribute('role', 'list');
    const empty = el('p', 'dc-empty', 'No hay documentos que coincidan con la búsqueda.');

    const guide = el('a', 'dc-guide', 'Cómo está organizada esta documentación →');
    guide.href = docUrl(INDEX);

    mainEl.append(head, search, count, list, empty, guide);

    function update() {
      const q = input.value.trim();
      const terms = norm(q).split(/\s+/).filter(Boolean);
      const url = new URL(location.href);
      if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
      history.replaceState(null, '', url);

      const shown = terms.length ? docs.filter((d) => terms.every((t) => d.haystack.includes(t))) : docs;
      list.innerHTML = '';
      shown.forEach((d) => {
        const li = document.createElement('li');
        const a = el('a', 'dc-item' + (V.statusKind(d.status) === 'superseded' ? ' is-superseded' : ''));
        a.href = docUrl(d.path, null, q);
        const top = el('span', 'dc-item-top');
        top.append(el('span', 'dc-item-area', d.area), V.badge(d.status));
        a.append(top, el('span', 'dc-item-title', d.title), el('span', 'dc-item-desc', d.desc));
        if (terms.length) {
          const s = snippet(d, terms);
          if (s) a.appendChild(s);
        }
        if (d.meta && d.meta.updated) a.appendChild(el('span', 'dc-item-date', 'Actualizado ' + d.meta.updated));
        li.appendChild(a);
        list.appendChild(li);
      });
      count.textContent = terms.length
        ? shown.length + (shown.length === 1 ? ' documento' : ' documentos') + ' con «' + q + '»'
        : docs.length + ' documentos';
      empty.hidden = shown.length > 0;
    }

    input.addEventListener('input', update);
    update();
    if (!('ontouchstart' in window)) input.focus();
  }

  // Marca en el documento las coincidencias de la búsqueda que llevó hasta él.
  function markTerms(container, q) {
    const terms = norm(q).split(/\s+/).filter((t) => t.length > 1);
    if (!terms.length) return;
    const re = new RegExp(terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const text = node.nodeValue;
      const n = norm(text);
      if (n.length !== text.length) return;
      re.lastIndex = 0;
      if (!re.test(n)) return;
      re.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let i = 0;
      let m;
      while ((m = re.exec(n))) {
        frag.append(text.slice(i, m.index), el('mark', 'dc-hit', text.slice(m.index, m.index + m[0].length)));
        i = m.index + m[0].length;
      }
      frag.append(text.slice(i));
      node.parentNode.replaceChild(frag, node);
    });
    const first = container.querySelector('mark.dc-hit');
    if (first) first.scrollIntoView({ block: 'center' });
  }

  async function renderDoc(path) {
    const listLink = el('a', 'dc-crumb', 'Documentación');
    listLink.href = highlight ? './?q=' + encodeURIComponent(highlight) : './';
    crumbsEl.append(el('span', 'dc-sep', '/'), listLink);

    const { meta, body } = V.parse(await V.load(path));
    const metaEl = el('div', 'dc-meta');
    if (meta.id) {
      if (meta.status) metaEl.appendChild(V.badge(STATUS_LABELS[meta.status] || meta.status));
      Object.entries(META_LABELS).forEach(([key, label]) => {
        if (!meta[key]) return;
        const chip = el('span', 'dc-chip');
        chip.append(el('span', '', label), ' ' + meta[key]);
        metaEl.appendChild(chip);
      });
    }

    const article = el('article', 'dc-doc md-body');
    article.innerHTML = V.toHtml(body);
    V.enhance(article, path, (p, hash) => docUrl(p, hash));

    const back = el('a', 'dc-guide', '← Volver a la lista');
    back.href = listLink.href;

    mainEl.innerHTML = '';
    mainEl.classList.add('is-doc');
    mainEl.append(metaEl, article, back);

    const h1 = article.querySelector('h1');
    if (h1) document.title = h1.textContent + ' · Documentación · Vortex IT';
    if (location.hash) V.scrollToHash();
    else if (highlight) markTerms(article, highlight);
  }

  function renderError(err) {
    mainEl.innerHTML = '';
    mainEl.append(el('h1', 'dc-title', 'No se pudo cargar'), el('p', 'dc-empty', V.errorMessage(err)));
    const a = el('a', 'dc-guide', '← Volver a la lista');
    a.href = './';
    mainEl.appendChild(a);
  }

  async function init() {
    try {
      if (current) {
        await renderDoc(current);
        return;
      }
      const docs = readIndex(V.parse(await V.load(INDEX)).body);
      await loadDocs(docs);
      renderList(docs);
    } catch (err) {
      renderError(err);
    }
  }

  init();
})();
