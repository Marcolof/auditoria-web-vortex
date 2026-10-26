// Motor común para mostrar Markdown en los módulos del Hub. Cada módulo pone su propio layout y estilos.
// Requiere marked (cdnjs) cargado antes.
(function () {
  const SAFE_PATH = /^[\w\-./]+\.md$/;

  marked.setOptions({ breaks: true });

  const STATUS = [
    [/^reemplazado|^superseded/i, 'superseded'],
    [/^en revisión|^para revisar|^borrador para revisar|^review/i, 'review'],
    [/^en curso/i, 'progress'],
    [/^borrador|^draft/i, 'draft'],
    [/^pendiente/i, 'pending'],
    [/^aprobado|^cerrado|^listo|^approved/i, 'done'],
    // Resultados de tareas de usabilidad
    [/^éxito$/i, 'done'],
    [/^parcial$/i, 'progress'],
    [/^fallo$/i, 'superseded'],
  ];

  function statusKind(text) {
    const match = STATUS.find(([re]) => re.test(text.trim()));
    return match ? match[1] : null;
  }

  function safePath(path, fallback) {
    return path && SAFE_PATH.test(path) && !path.includes('..') ? path : fallback;
  }

  function slugify(text) {
    return text.trim().toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .replace(/\s/g, '-');
  }

  function dirOf(path) {
    const i = path.lastIndexOf('/');
    return i === -1 ? '' : path.slice(0, i + 1);
  }

  // Resuelve una ruta relativa al documento actual dentro del módulo.
  function resolve(base, rel) {
    const out = [];
    for (const p of (dirOf(base) + rel).split('/')) {
      if (p === '..') out.pop();
      else if (p !== '.' && p !== '') out.push(p);
    }
    return out.join('/');
  }

  async function load(path) {
    const res = await fetch(path, { cache: 'no-cache' });
    if (!res.ok) throw new Error(res.status + ' ' + path);
    return res.text();
  }

  // Metadatos simples entre --- (clave: valor, listas como [a, b]).
  function parse(text) {
    const meta = {};
    let body = text;
    const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    if (m) {
      body = text.slice(m[0].length);
      m[1].split(/\r?\n/).forEach((line) => {
        const kv = line.match(/^([\w-]+):\s*(.*)$/);
        if (!kv) return;
        let value = kv[2].trim();
        if (/^\[.*\]$/.test(value)) value = value.slice(1, -1).split(',').map((v) => v.trim()).filter(Boolean);
        meta[kv[1]] = value;
      });
    }
    return { meta, body };
  }

  function toHtml(md) {
    return marked.parse(md);
  }

  // docUrl(path, hash) construye el enlace a otro documento del mismo módulo.
  function enhance(container, basePath, docUrl) {
    container.querySelectorAll('h1, h2, h3, h4').forEach((h) => {
      if (!h.id) h.id = slugify(h.textContent);
    });

    container.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (/^[a-z]+:/i.test(href)) {
        a.target = '_blank';
        a.rel = 'noopener';
        return;
      }
      if (href.startsWith('#') || href.includes('?')) return;
      const [file, hash] = href.split('#');
      if (file.endsWith('.md')) a.href = docUrl(resolve(basePath, file), hash);
    });

    container.querySelectorAll('table').forEach((t) => {
      const wrap = document.createElement('div');
      wrap.className = 'md-table';
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });

    container.querySelectorAll('td').forEach((td) => {
      const text = td.textContent.trim();
      const kind = statusKind(text);
      if (!kind) return;
      const strong = td.querySelector('strong');
      const label = (strong ? strong.textContent : text.split(/[:(]/)[0]).trim();
      const rest = text.slice(text.indexOf(label) + label.length).replace(/^[\s:]+/, '');
      td.innerHTML = '';
      td.appendChild(badge(label, kind));
      if (rest) td.append(' ', rest);
    });

    container.querySelectorAll('blockquote').forEach((bq) => {
      if (/reemplazado/i.test(bq.textContent)) bq.classList.add('md-note--warn');
    });
  }

  function badge(label, kind) {
    const el = document.createElement('span');
    el.className = 'md-badge md-badge--' + (kind || statusKind(label) || 'pending');
    el.textContent = label;
    return el;
  }

  function scrollToHash() {
    if (!location.hash) return;
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView();
  }

  function errorMessage(err) {
    return location.protocol === 'file:'
      ? 'El navegador no permite leer los documentos abriendo el archivo directamente. Abrí el Hub con un servidor local o desde su publicación.'
      : 'El contenido pedido no existe o no se pudo cargar (' + err.message + ').';
  }

  window.MdViewer = { load, parse, toHtml, enhance, badge, statusKind, safePath, resolve, slugify, scrollToHash, errorMessage };
})();
