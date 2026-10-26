# Vortex IT · UX Hub

Portal de entregables UX para Vortex IT. Reúne el research (síntesis para cliente y ejecutivos) y la documentación detallada del proyecto.

## Estructura

```
index.html                  Home del Hub
assets/                     Estilos y scripts comunes del Hub (tokens, visor de Markdown, logo)
modules/research/           UX Research: submódulos en síntesis (<id>.md + modulos.json)
modules/documentation/      Documentación detallada en Markdown con metadatos
.project/project.yaml       Estado del proyecto (no se publica)
```

Los `.md` son la fuente del contenido. Las páginas los leen y los muestran en el navegador; no hay paso de build.

## Ver en local

Hace falta un servidor HTTP (abrir el `index.html` con doble clic no carga los documentos):

```bash
python -m http.server 8765
```

y abrir http://localhost:8765

## Despliegue en Vercel

Sitio estático, sin build ni dependencias.

| Ajuste en Vercel | Valor |
|---|---|
| Framework Preset | Other |
| Root Directory | `./` (raíz del repositorio) |
| Build Command | vacío (desactivado) |
| Output Directory | `.` |
| Install Command | vacío (desactivado) |
| Variables de entorno | Ninguna por ahora |

`vercel.json` define:

- `trailingSlash: true`, para que `/modules/research` redirija a `/modules/research/` y las rutas relativas funcionen.
- `X-Robots-Tag: noindex, nofollow`, para que los buscadores no indexen el Hub. Quitarlo si se quiere que sea público e indexable.
- Sin caché para `.md` y `.json`, para que los cambios de contenido se vean al recargar.

`.vercelignore` deja fuera del despliegue `.project/`, `.claude/` y este README.

### Variables de entorno

El Hub no usa ninguna hoy. Si en el futuro se suma un servicio (analítica, formulario, API), los valores van en **Vercel → Settings → Environment Variables**, nunca en el repositorio. Los nombres se documentan en un `.env.example` sin valores.

### Dependencias externas

Se cargan desde CDN y necesitan conexión: `marked` 12.0.2 (cdnjs) para mostrar Markdown, y la fuente Rubik (Google Fonts).
