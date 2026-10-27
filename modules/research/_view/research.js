// Módulo UX Research: sin parámetro muestra las tarjetas de sus módulos; con ?m=<id> muestra ese módulo.
(function () {
  const V = window.MdViewer;
  const ESTADOS = {
    'para-revisar': { label: 'Para revisar', kind: 'review' },
    'en-curso': { label: 'En curso', kind: 'progress' },
    'pendiente': { label: 'Pendiente', kind: 'pending' },
    'aprobado': { label: 'Aprobado', kind: 'done' },
  };

  const mainEl = document.getElementById('rs-content');
  const crumbsEl = document.getElementById('rs-crumbs');
  const requested = new URLSearchParams(location.search).get('m');

  function icon(paths) {
    return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + '</svg>';
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderLanding(modulos) {
    document.title = 'UX Research · Vortex IT';
    mainEl.innerHTML = '';

    const head = el('header', 'rs-head');
    head.append(el('p', 'rs-eyebrow', 'Vortex IT'), el('h1', 'rs-title', 'UX Research'));
    head.appendChild(el('p', 'rs-lead', 'A quién le tiene que hablar Vortex y qué necesita cada uno para confiar.'));

    const grid = el('ul', 'rs-grid');
    grid.setAttribute('role', 'list');
    modulos.forEach((m) => {
      const estado = ESTADOS[m.estado] || ESTADOS.pendiente;
      const li = document.createElement('li');
      const a = el('a', 'rs-card' + (m.estado === 'pendiente' ? ' is-pending' : ''));
      a.href = '?m=' + encodeURIComponent(m.id);
      const ic = el('span', 'rs-card-icon');
      ic.innerHTML = icon(m.icono);
      const body = el('span', 'rs-card-body');
      body.append(el('span', 'rs-card-title', m.titulo), el('span', 'rs-card-desc', m.descripcion));
      a.append(ic, body, V.badge(estado.label, estado.kind));
      li.appendChild(a);
      grid.appendChild(li);
    });

    mainEl.append(head, grid);
  }

  async function renderModule(m) {
    const crumb = el('a', 'rs-crumb', 'Research');
    crumb.href = './';
    crumbsEl.append(el('span', 'rs-sep', '/'), crumb);

    const estado = ESTADOS[m.estado] || ESTADOS.pendiente;
    const article = el('article', 'rs-doc md-body');
    const status = el('div', 'rs-doc-status');
    status.appendChild(V.badge(estado.label, estado.kind));

    const text = await V.load(m.id + '.md');
    article.innerHTML = V.toHtml(V.parse(text).body);
    V.enhance(article, m.id + '.md', (path, hash) => '?m=' + path.replace(/\.md$/, '') + (hash ? '#' + hash : ''));

    const back = el('a', 'rs-doc-back', '← Volver a Research');
    back.href = './';

    mainEl.innerHTML = '';
    mainEl.classList.add('is-doc');
    mainEl.append(status, article, back);
    document.title = m.titulo + ' · UX Research · Vortex IT';
    V.scrollToHash();
  }

  function renderError(err) {
    mainEl.innerHTML = '';
    mainEl.append(el('h1', 'rs-title', 'No se pudo cargar'), el('p', 'rs-lead', V.errorMessage(err)));
    const a = el('a', 'rs-doc-back', '← Volver a Research');
    a.href = './';
    mainEl.appendChild(a);
  }

  async function init() {
    try {
      const { modulos, redirecciones = {} } = JSON.parse(await V.load('modulos.json'));
      // Un id retirado abre el módulo que lo reemplazó y corrige la URL.
      const id = redirecciones[requested] || requested;
      if (id !== requested) history.replaceState(null, '', '?m=' + encodeURIComponent(id) + location.hash);
      const m = id && modulos.find((x) => x.id === id);
      if (id && !m) throw new Error('módulo «' + id + '»');
      if (m) await renderModule(m);
      else renderLanding(modulos);
    } catch (err) {
      renderError(err);
    }
  }

  init();
})();
