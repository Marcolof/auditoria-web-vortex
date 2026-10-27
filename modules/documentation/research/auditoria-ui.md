---
id: research.auditoria-ui
type: ui-audit
status: draft
evidence: observed
updated: 2026-10-27
depends_on: [research.analisis-visual, research.auditoria-web]
feeds: [research/visual-ui]
sources: [vortex-it.com snapshot 2026-10-27]
---

# Auditoría UI · vortex-it.com

> **Qué responde:** qué sistema visual tiene hoy la web, qué tan consistente es y dónde se rompe. No propone un diseño nuevo; describe el sistema actual para decidir qué se conserva, qué se unifica y qué se rediseña.
>
> **Método:** Claude (modelo de IA) leyó los estilos reales de las 8 páginas en español (inicio, Soluciones, Cómo trabajamos, Sobre Vortex, Plataformas, Blog, Hablemos y Trabajá con nosotros). Se midió en escritorio (1280 × 800) y en mobile emulado (375 × 812): las reglas CSS declaradas, los estilos calculados de cada texto y de cada elemento interactivo, y capturas de las secciones. Fecha: 2026-10-27. **No participaron personas.** Los valores son exactos para lo que está en el código; la lectura de composición es juicio experto.

Complementa el [análisis visual](analisis-visual.md), que evalúa cómo se ve y qué tan atractivo es (V1 a V9). Este documento baja al nivel del **sistema y los componentes**. Cuando un hallazgo ya existe allá, acá se cita y no se repite.

## 1. Resumen

- **Hay una identidad, pero no un sistema.** Negro, verde `#A0D232`, blanco y una sola tipografía (Rubik) se usan con coherencia en todo el sitio. Pero el código no tiene variables de diseño, y cada página trae sus propios estilos. El resultado es una marca reconocible con muchas variantes chicas que nadie decidió.
- **Lo más consistente:** cabecera y menú, pie, botón principal verde y títulos de sección verdes en mayúsculas.
- **Dónde se rompe:** la escala tipográfica (51 tamaños distintos entre las 8 páginas), los tamaños y formas de los botones, los radios de las esquinas y los estados de foco, que casi no existen.
- **4 hallazgos** (UI1, UI3, UI4 y UI6): 2 menores y 2 cosméticos, después de fusionar los que se superponían (sección 5). Ninguno impide usar el sitio. Juntos explican por qué el sitio se siente "armado a mano" y por qué cada cambio cuesta más de lo necesario.

## 2. El sistema de hecho

Lo que el sitio usa en la práctica, reconstruido desde el código. Sirve como **línea de base** para medir la mejora.

### 2.1 Arquitectura de estilos

| Dato | Valor observado |
|---|---|
| Variables de diseño (custom properties en `:root`) | **Ninguna.** Todos los valores están escritos a mano |
| Hoja común (`vortex.css`) | 96 reglas, compartidas por todas las páginas |
| Estilos propios de cada página | Entre 34 (Blog) y 179 (inicio) reglas en un bloque `<style>` dentro de cada página |
| Tipografía | Rubik desde Google Fonts, pesos 300, 400, 500 y 700 |
| Animación | GSAP con ScrollTrigger y Three.js (globo y partículas) |

### 2.2 Color

| Rol | Valores observados | Comentario |
|---|---|---|
| Fondo | Negro `#000` con partículas; paneles `rgb(13 9 24)`, `rgb(13 9 20)`, `rgba(18 12 30 / .92)`, `rgba(19 13 29 / .96)` | Cuatro casi-negros violáceos distintos para el mismo papel |
| Acento | Verde `#A0D232` (83 usos declarados); hover `rgb(178 226 63)`; transparencias al 8, 28, 55, 80 y 85 % | El acento está bien elegido y se usa con constancia |
| Texto | Blanco y blanco con transparencia al 30, 45, 50, 70, 75, 78 y 80 % | Siete grises "por transparencia" para texto, sin regla de cuál va dónde |
| Bordes y superficies | Blanco al 6, 7, 10, 12, 15, 20, 22 y 35 % | Ocho niveles para bordes y fondos de tarjeta |
| Efectos | Violetas `rgb(163 116 245)`, `rgb(132 76 222)`, `rgb(96 50 180)`, `rgb(57 31 82)` en brillos y degradados | El violeta queda en lo decorativo, no en la interfaz: es una buena decisión |

### 2.3 Tipografía

| Dato | Valor observado |
|---|---|
| Tamaños distintos (escritorio, 8 páginas) | **51** (30 redondeando al píxel), de 10 a 84 px |
| Tamaños por página | Entre 8 (Trabajá con nosotros) y 24 (inicio) |
| Título principal (`h1`) | 55,7 px (Hablemos, Trabajá con nosotros), 58,9 px (Soluciones, Cómo trabajamos, Sobre Vortex, Plataformas), 71,6 px (Blog). La home no tiene `h1` (ver H8 de la [auditoría web](auditoria-web.md)) |
| Títulos de sección (`h2`) | De 16,6 px (Hablemos) a 55,7 px (inicio), en pesos 300, 400, 500 y 600 |
| Pesos usados | 300, 400, 500 y 600. **El 600 no se carga**: el navegador lo muestra como 700 |
| Texto de lectura | 14 a 17 px en peso 300 (liviano) |
| Textos chicos | Menú y pie en 12–13 px, peso 300; etiquetas de formulario en 11 px; datos del equipo en Sobre Vortex en 10 px (8,5 px en pantallas más angostas) |
| Cómo escalan | Fijos en px para lo chico; `clamp()` con ancho **y alto** de la ventana para títulos (por ejemplo `min(4vw, 5.5vh)`) |
| Mayúsculas | Títulos, botones, menú, etiquetas y nombres: buena parte del texto corto está en mayúsculas |

### 2.4 Espaciado, radios, sombras y movimiento

| Dato | Valor observado |
|---|---|
| Separaciones (`gap`) | 4, 5, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 48 y 64 px, más una docena de `clamp()` |
| Rellenos de botón | 8 × 15, 9 × 18, 10 × 24, 10 × 26, 14 × 32, 14 × 36, 14 × 40 y 15 × 40 px |
| Radios | 6, 8, 10, 14, 16, 18 y 20 px, 100 px, 999 px y 50 % (**10 valores**) |
| Sombras | Brillos violetas hechos a mano para cada elemento; una sombra negra para paneles |
| Duraciones de transición | 0,2; 0,22; 0,25; 0,3; 0,34; 0,35; 0,45; 0,5 y 1 s, sin una curva común |
| Movimiento reducido | **Sí** respeta `prefers-reduced-motion` |
| Cortes de diseño (*breakpoints*) | 600, 768/769, 900 px (o pantalla táctil), 1100 y 1320 px, y un corte por **alto** de ventana (≤ 820 px) |
| Ancho máximo de contenido | Un contenedor de 1240 px; el resto usa anchos propios por bloque (150 a 700 px) |

## 3. Inventario de componentes

Consistencia: **Alta** = se ve y se comporta igual en todas las páginas donde aparece; **Media** = misma idea con variantes menores; **Baja** = misma función con formas distintas.

| Componente | Dónde | Variantes observadas | Consistencia |
|---|---|---|---|
| **Cabecera y menú** | Todas | Logo, 6 enlaces en 12 px mayúsculas, selector ES/EN, íconos de redes; ítem activo en verde | Alta |
| **Botón del menú "Hablemos"** | Todas | Con borde verde; relleno sólo en su propia página (sirve de estado activo) | Alta |
| **Menú mobile (hamburguesa)** | Todas, en mobile | Botón de 32 × 23 px. Detalles en V6 | Alta (con problemas de tamaño) |
| **Botón principal** (verde lleno) | Todas | 12 px y 36 px de alto (plataformas en la home); 14 px y 47–48 px de alto (cierres de página, plataformas); 14 px, 49 px de alto y radio 8 (envío de formularios). Seis nombres de clase para el mismo componente | Media |
| **Botón secundario** (con borde) | Inicio, Sobre Vortex, aviso de cookies | Rectángulo con radio 6 ("Conocé más", 13 px); píldora de radio 100 (LinkedIn del equipo, 12 px); píldora de radio 999 (cookies, 12,5 px) | Baja |
| **Botón circular "volver arriba"** | Todas | 52 × 52 px, borde verde. Tapa contenido en mobile (V5) | Alta |
| **Tarjeta de servicio** | Inicio | Vidrio translúcido, radio 20, ícono a la izquierda | — (una sola página) |
| **Ícono de servicio o etapa** | Soluciones, Cómo trabajamos, inicio | Círculos de 92 px que abren contenido (V4) | Media |
| **Ficha emergente** ("constelación") | Inicio, Sobre Vortex | Panel oscuro con botón de cierre de 28 × 28 px | Media |
| **Tarjeta de blog** | Blog | Radio 16, borde blanco al 6 %, textos de 11–13 px | — (una sola página) |
| **Ficha de equipo** | Sobre Vortex | Foto circular, nombre en 15 px peso 600 (se ve en 700), cargo en 13,6 px, etiquetas de 10 px | — (una sola página) |
| **Bloque de plataforma** | Inicio, Plataformas | Logo, lista de funciones, maqueta de dispositivos y botón principal; en la home el botón es más chico que en Plataformas | Media |
| **Logos de clientes y partners** | Inicio | Logos a color con fondos propios (bloque rojo, círculo, amarillo) junto a logos sobre negro. Tamaños desparejos (V9) | Baja |
| **Campos de formulario** | Hablemos, Trabajá con nosotros | Campo, desplegable y texto largo con radio 8, 44 px de alto, fondo negro al 40 %, borde blanco al 12 %; etiquetas de 11 px en mayúsculas, verde al 85 % | Alta (entre los dos formularios) |
| **Aviso de cookies** | Todas | Panel flotante abajo a la izquierda, botones píldora | Alta |
| **Pie** | Todas | Cuatro columnas, enlaces de 13 px en peso 300, blanco al 50 % (contraste: V3) | Alta |

## 4. Estados de interacción

| Estado | Qué hay | Evaluación |
|---|---|---|
| **Hover** (pasar el mouse) | De 12 a 21 reglas por página: el verde se aclara, los bordes se iluminan y las tarjetas se elevan | Presente y coherente |
| **Foco con teclado** | **Ninguna regla propia** en todo el sitio. En los campos de formulario se quita el contorno (`outline: none`) y sólo cambia el color del borde a verde al 55 % | Débil: ver UI6 |
| **Activo / presionado** | Sin reglas | Falta |
| **Deshabilitado** | Sin reglas | No hay casos visibles hoy; falta definirlo para el formulario |
| **Error de formulario** | No se probó: no se envían formularios del sitio de Vortex | Pendiente de verificar con el equipo del sitio |
| **Página actual** | Ítem del menú en verde y "Hablemos" relleno en su página | Bien resuelto |

## 5. Hallazgos

Severidad en la escala de Nielsen (0 a 4), igual que la [auditoría web](auditoria-web.md) y el [análisis visual](analisis-visual.md). La columna **Afecta** distingue el impacto en las personas del impacto en el mantenimiento del sitio.

> **Revisión del 2026-10-27.** La primera versión tenía 10 hallazgos (UI1 a UI10). Varios eran síntomas de la misma causa y se fusionaron: **UI2, UI5, UI9 y UI10 en UI1**; **UI8 en UI3 y UI4**; **UI7 en H8** de la [auditoría web](auditoria-web.md). Quedan **4 hallazgos: UI1, UI3, UI4 y UI6**. Los identificadores fusionados no se reutilizan.

### UI1 · No hay un sistema en el código: valores sueltos y componentes reescritos por página — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Mantenimiento y consistencia; indirectamente, a las personas |
| Observación | **Valores sueltos:** el sitio no declara ninguna variable CSS. El verde aparece escrito 83 veces; hay 4 casi-negros para paneles, 7 transparencias de blanco para texto y 8 para bordes y superficies; 10 radios de esquina (6, 8, 10, 14, 16, 18 y 20 px, 100 px, 999 px y 50 %); 9 duraciones de transición (0,2 a 1 s) sin una curva común; y 6 cortes de ancho más uno de alto, repartidos entre la hoja común y cada página. **Componentes reescritos:** además de la hoja común (96 reglas), cada página trae entre 34 y 179 reglas propias; el botón de cierre de página existe con seis nombres distintos (`btn-primary`, `sol-cierre-btn`, `ct-cierre-btn`, `sv-cierre-btn`, `hb-enviar`, `tcn-enviar`) |
| Criterio | Consistencia y estándares (Nielsen 4); buenas prácticas de sistemas de diseño |
| Interpretación | Cada pantalla se ajustó "a ojo". La marca se mantiene porque la paleta es corta, pero aparecen diferencias de pocos píxeles que nadie decidió y que suman la sensación de "casi igual". Cualquier cambio (por ejemplo, subir el contraste del pie) hay que buscarlo y repetirlo en muchos lugares. Es la causa de buena parte de UI3 y UI4 |
| Evidencia | Recorrido de todas las reglas CSS y media queries de las 8 páginas; clases y estilos calculados de los botones |
| Límite | Que dos páginas cambien de diseño en anchos distintos es una inferencia: no se recorrieron todos los anchos. La IA no evalúa si las animaciones son fluidas (ver [análisis visual](analisis-visual.md), sección 1) |
| Recomendación | Definir tokens con roles (color, radios, espaciado, duraciones, cortes de diseño) y pasar los componentes repetidos (botones, títulos de sección, tarjetas, formularios) a la hoja común, con variantes explícitas. Tres radios, dos o tres duraciones con una curva común y tres o cuatro cortes |
| Incluye | UI2, UI5, UI9 y UI10 de la primera versión |

### UI2 · Cada página reescribe sus componentes — Fusionado en UI1

> Fusionado en **UI1** el 2026-10-27: es la misma causa (no hay un sistema en el código). No se cuenta aparte.

### UI3 · Escala tipográfica sin sistema y textos chicos — Severidad 2

| Campo | Contenido |
|---|---|
| Afecta | Personas (legibilidad y jerarquía) y mantenimiento |
| Observación | Entre las 8 páginas hay **51 tamaños distintos** en escritorio (24 sólo en la home). El `h1` mide 55,7, 58,9 o 71,6 px según la página. Los `h2` van de 16,6 a 55,7 px y usan cuatro pesos. Los títulos escalan con el **alto** de la ventana: el mismo título se achica en una notebook de pantalla baja. Se declara un peso 600 que la fuente no carga, y se ve como 700. **Textos chicos y livianos:** menú en 12 px, peso 300 y mayúsculas; pie en 13 px; etapas de "Cómo trabajamos" en 13,4 px; etiquetas de los formularios en 11 px, mayúsculas y verde al 85 %; datos del equipo en Sobre Vortex en 10 px |
| Criterio | Consistencia (Nielsen 4); legibilidad |
| Interpretación | Un mismo nivel de título no se ve igual en dos páginas, y la jerarquía depende del tamaño de la ventana. Los textos de 10 a 13 px en peso liviano sobre negro cuestan, sobre todo en el celular; las etiquetas del formulario, que son lo primero que se lee al contactar, son el texto más chico de la página |
| Evidencia | Estilos calculados de todos los textos visibles a 1280 × 800 y a 375 × 812 |
| Recomendación | Escala de 6 a 8 pasos con roles (título de página, título de sección, subtítulo, texto, texto chico, etiqueta), escalado sólo por ancho, mínimo de 14 px para lectura (también en etiquetas, en minúscula) y cargar sólo los pesos que se usan |
| Incluye | V2 del [análisis visual](analisis-visual.md) y las etiquetas de UI8 |

### UI4 · Botones: la jerarquía funciona, los tamaños y formas no siguen una regla — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Personas (reconocer qué es un botón y cuál es el principal) |
| Observación | El botón principal verde se reconoce bien (VF3). Pero el mismo llamado "Conocer [plataforma]" mide 36 px de alto con texto de 12 px en la home y 47 px con texto de 14 px en Plataformas. El botón de envío de los formularios usa radio 8 y relleno 15 × 40, distinto del resto (radio 6). Los botones secundarios tienen tres formas: rectángulo con radio 6, píldora de radio 100 y píldora de radio 999 |
| Criterio | Consistencia y estándares (Nielsen 4) |
| Interpretación | Los botones no se leen como una familia; la píldora del aviso de cookies parece de otro sitio |
| Evidencia | Estilos calculados de los elementos interactivos de cada página |
| Recomendación | Tres tamaños (chico, mediano, grande) y dos o tres estilos (principal, secundario, texto), con una sola forma de esquina. El envío de formulario usa el botón principal grande |
| Incluye | El botón de envío de UI8 |

### UI5 · Diez radios de esquina distintos — Fusionado en UI1

> Fusionado en **UI1** el 2026-10-27: los radios son uno de los valores sueltos. No se cuenta aparte.

### UI6 · Casi no hay estados de foco ni de error — Severidad 2

| Campo | Contenido |
|---|---|
| Afecta | Personas que navegan con teclado; cumplimiento de accesibilidad |
| Observación | No hay ninguna regla de foco propia en el sitio. Enlaces y botones dependen del anillo por defecto del navegador. En los formularios se quita el contorno y el foco se indica sólo con un cambio de color del borde al verde al 55 %. No hay estilos para presionado ni deshabilitado. No se pudo ver el estado de error, porque no se envían formularios del sitio de Vortex |
| Criterio | WCAG 2.2: 2.4.7 (foco visible) y 1.4.11 (contraste de elementos no textuales); Nielsen 1 (visibilidad del estado) |
| Interpretación | En el formulario, que es el paso más importante para un cliente nuevo, quien usa el teclado puede perder de vista en qué campo está |
| Evidencia | Recorrido de selectores `:focus`, `:focus-visible`, `:active` y `disabled` en las 8 páginas |
| Límite | No se hizo una prueba completa con teclado ni se midió el contraste del borde de foco sobre el fondo real |
| Recomendación | Un estilo de foco visible y común (por ejemplo, un contorno verde de 2 px con separación) para enlaces, botones y campos. Definir y mostrar el estado de error de cada campo |

### UI7 · La jerarquía visual no siempre coincide con la del contenido — Fusionado en H8

> Fusionado en **H8** de la [auditoría web](auditoria-web.md) el 2026-10-27: es el mismo problema de estructura de encabezados, visto desde el estilo. No se cuenta aparte.

### UI8 · Formularios prolijos pero con su propio lenguaje — Fusionado en UI3 y UI4

> Fusionado el 2026-10-27: las etiquetas de 11 px pasan a **UI3** y el botón de envío a **UI4**. Que los campos están bien resueltos (etiquetas asociadas, 44 px de alto, mismo estilo en los dos formularios) queda en el inventario de la sección 3. No se cuenta aparte.

### UI9 · Cortes de diseño dispersos y dependientes del alto de la ventana — Fusionado en UI1

> Fusionado en **UI1** el 2026-10-27: los cortes de diseño son uno de los valores sueltos. No se cuenta aparte.

### UI10 · Movimiento sin una regla común — Fusionado en UI1

> Fusionado en **UI1** el 2026-10-27: las duraciones son uno de los valores sueltos. Que el sitio respeta el movimiento reducido queda en la sección 2.4. No se cuenta aparte.

## 6. Diagnóstico: qué conservar, qué unificar y qué rediseñar

| Decisión | Qué | Por qué |
|---|---|---|
| **Conservar** | Paleta negro, verde `#A0D232` y blanco; violeta sólo en efectos; Rubik como única familia; botón principal verde lleno con texto negro; títulos de sección verdes; cabecera y pie | Son la parte reconocible de la marca y ya se usan con constancia |
| **Unificar** | Color por roles, radios, duraciones, cortes de diseño y componentes comunes en una sola hoja (UI1); escala tipográfica (UI3); familia de botones (UI4) | La identidad ya está; falta convertirla en reglas. No cambia cómo se ve la marca: la ordena |
| **Agregar** | Estados de foco, presionado, deshabilitado y error (UI6) | Hoy faltan, y afectan al paso de contacto |
| **Rediseñar** | Jerarquía de encabezados por página (H8); etiquetas de formulario (UI3); tratamiento de logos (V9); y lo que ya señaló el análisis visual: peso visual, contenido oculto tras íconos y largo de la home (V1, V4, V8) | Son decisiones de composición, no sólo de valores; conviene resolverlas en la propuesta de diseño |

**Recomendación:** antes de rediseñar, escribir la base del sistema (tokens y componentes) a partir de lo que hay que conservar. Así la propuesta de diseño parte de reglas y el sitio actual puede mejorar sin esperar el rediseño completo.

## 7. Cómo entra en el plan de mejoras

| Hallazgo | Mejora |
|---|---|
| UI1, UI4 | **M18** · Sistema visual base |
| UI3 | M15 (mínimo de lectura y escala corta) y M18 (escala como tokens) |
| UI6 | M15 (foco visible) |

Detalle e indicadores en el [plan de mejoras](plan-de-mejoras-web.md).

## 8. Lo que no se verificó

- **Envío y errores de formulario:** no se envían formularios del sitio de Vortex.
- **Navegación completa con teclado y lector de pantalla.**
- **Todos los anchos intermedios:** se midió a 1280 y 375 px; los cortes de 600, 900, 1100 y 1320 px se leyeron del código.
- **Versión en inglés:** se asume igual a la española; no se midió página por página.
- **Animaciones de entrada:** en dos cargas de páginas internas, el título tardó en aparecer en una pestaña de navegador que no estaba en primer plano. No se cuenta como hallazgo: puede deberse a la pestaña y no al sitio (ver H10).
