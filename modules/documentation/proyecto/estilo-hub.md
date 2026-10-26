---
id: proyecto.estilo-hub
type: hub-style
status: draft
evidence: observed
updated: 2026-10-26
scope: hub-only
sources: [vortex-it.com 2026-10-26]
---

# Estilo del UX Hub

> Relevado de [vortex-it.com](https://vortex-it.com/) el 2026-10-26 (estilos calculados de la home, el canvas del hero y el logo).
> El Hub adopta la identidad visual de Vortex, adaptada a un espacio de lectura de documentos.

> **Alcance: sólo el Hub.** Estos estilos visten el portal de entregables y sus módulos documentales (research y los que se sumen). **No son la base de la propuesta de diseño** para Vortex: esa propuesta se definirá con su propio research, sus tokens y su módulo, aislados del Hub. Que el Hub use el verde actual no implica ninguna decisión sobre la marca ni sobre la web futura.

## Lo que usa la web de Vortex

| Elemento | Valor observado | Dónde aparece |
|---|---|---|
| Verde de marca | `#A0D232` (rgb 160, 210, 50) | Títulos, botones principales, navegación activa, bordes |
| Violetas | `#8A3CE0`, `#A374F5`, `#C49EFF`, `#6A3AC7` | Partículas del hero, brillos (glow), punto del logo |
| Violeta profundo | `#391F52` (gradientes), `#0D0918` y `rgba(18,12,30,.92)` (superficies) | Fondos con gradiente radial, paneles |
| Fondo | `#000000` | Body |
| Texto | Blanco con opacidades (100 %, 86 %, 75 %, 50 %, 40 %) | Párrafos, textos secundarios |
| Tipografía | **Rubik** 300 / 400 / 500 / 700 (Google Fonts) | Todo el sitio. Cuerpo en 300 |
| Títulos | Rubik 500, **mayúsculas**, verde | h2 de secciones (~39 px) |
| Botón principal | Fondo verde, texto negro, Rubik 500, 14 px, mayúsculas, radio 6 px | "Conocé nuestra visión", "Agendar una llamada" |
| Botón secundario | Borde verde, texto verde, fondo transparente, 13 px, mayúsculas, tracking 0.78 px | "Conocé más", "Hablemos" |
| Navegación | 12 px, mayúsculas, tracking 0.72 px, 500 | Menú superior |
| Radio | 6 px | Botones y controles |
| Brillos | `0 0 38px 4px rgba(163,116,245,.18)` y similares en violeta | Tarjetas y elementos destacados |

## Cómo se traslada al Hub

| Decisión | Motivo |
|---|---|
| Modo oscuro como única apariencia | La marca es oscura; un modo claro con el verde no alcanza contraste para texto |
| Verde para acción y foco; violeta para lo secundario y los brillos | Respeta la jerarquía de la web: el verde llama a actuar, el violeta da atmósfera |
| Títulos en mayúsculas sólo en encabezados cortos (home, eyebrows, etiquetas) | Los documentos tienen títulos largos; en mayúsculas se leen peor |
| Cuerpo de documentos en Rubik 400, no 300 | Rubik 300 sobre negro cansa en textos largos |
| Radio 6 px en controles y 12 px en tarjetas | 6 px es el de la marca; las tarjetas grandes necesitan algo más de suavidad |
| Gradiente radial violeta de fondo, sin partículas | Evoca el hero sin animaciones que distraigan la lectura |
| Impresión en claro | Para quien quiera imprimir o pasar a PDF un documento |

## Tokens

| Token | Valor | Contraste sobre `--vx-bg` |
|---|---|---|
| `--vx-bg` | `#0D0918` | — |
| `--vx-surface` | `#16111F` | — |
| `--vx-surface-2` | `#1E1729` | — |
| `--vx-border` | `rgba(255,255,255,.10)` | — |
| `--vx-text` | `#FFFFFF` | 19.6 : 1 |
| `--vx-text-2` | `#B3AEBE` | 9.1 : 1 |
| `--vx-text-3` | `#8C8798` | 5.6 : 1 |
| `--vx-green` | `#A0D232` | 11.0 : 1 |
| `--vx-on-green` | `#000000` | 11.8 : 1 sobre verde |
| `--vx-violet` | `#A374F5` | 6.0 : 1 |
| `--vx-violet-light` | `#C49EFF` | 9.1 : 1 |
| `--vx-violet-deep` | `#391F52` | — (sólo fondos) |
| `--vx-radius` | `6px` | — |
| `--vx-radius-card` | `12px` | — |
| `--vx-font` | `"Rubik", system-ui, sans-serif` | — |

`#8A3CE0` (3.6 : 1) se usa sólo en brillos y decoración, nunca para texto.

## Pendiente de confirmar con Vortex

- Si existe un manual de marca con valores oficiales (los de esta tabla son los que usa la web, no necesariamente los del manual).
- El logo se usa en el Hub a pedido del equipo UX: `assets/brand/vortex-logo.svg`, descargado de `https://vortex-it.com/assets/Logo VX_blanco y violeta.svg` el 2026-10-26 (letras blancas, punto `#6A3AC7`). Confirmar con Vortex si hay una versión oficial.
