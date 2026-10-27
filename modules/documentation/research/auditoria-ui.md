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
- **10 hallazgos nuevos** (UI1 a UI10): 2 menores y 8 cosméticos. Ninguno impide usar el sitio. Juntos explican por qué el sitio se siente "armado a mano" y por qué cada cambio cuesta más de lo necesario.

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

### UI1 · No hay variables de diseño: todos los valores están escritos a mano — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Mantenimiento y consistencia; indirectamente, a las personas |
| Observación | El sitio no declara ninguna variable CSS. El verde aparece escrito 83 veces. Hay 4 casi-negros para paneles, 7 transparencias de blanco para texto y 8 para bordes y superficies, sin un criterio visible de cuál usar |
| Criterio | Consistencia y estándares (Nielsen 4); buenas prácticas de sistemas de diseño |
| Interpretación | Cada pantalla se ajustó "a ojo". La marca se mantiene porque la paleta es corta, pero cualquier cambio (por ejemplo, subir el contraste del pie) hay que buscarlo y repetirlo en muchos lugares |
| Evidencia | Recorrido de todas las reglas CSS de las 8 páginas |
| Recomendación | Definir tokens de color con roles (fondo, superficie, borde, texto principal, texto secundario, acento, acento hover) y reemplazar los valores sueltos |

### UI2 · Cada página reescribe sus componentes — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Mantenimiento; consistencia visible entre páginas |
| Observación | Además de la hoja común (96 reglas), cada página trae entre 34 y 179 reglas propias. El botón de cierre de página existe con seis nombres distintos (`btn-primary`, `sol-cierre-btn`, `ct-cierre-btn`, `sv-cierre-btn`, `hb-enviar`, `tcn-enviar`), con cuatro rellenos y dos radios |
| Criterio | Consistencia y estándares (Nielsen 4) |
| Interpretación | Las variantes no vienen de una decisión de diseño sino de copiar y ajustar. Es la causa de varias diferencias chicas que se ven en UI3, UI4 y UI5 |
| Evidencia | Hojas de estilo por página; clases y estilos calculados de los botones |
| Recomendación | Pasar los componentes repetidos (botones, títulos de sección, tarjetas, formularios) a la hoja común, con variantes explícitas |

### UI3 · La escala tipográfica no se sostiene entre páginas — Severidad 2

| Campo | Contenido |
|---|---|
| Afecta | Personas (legibilidad y jerarquía) y mantenimiento |
| Observación | Amplía V2, que medía sólo la home. Entre las 8 páginas hay **51 tamaños distintos** en escritorio. El `h1` mide 55,7, 58,9 o 71,6 px según la página. Los `h2` van de 16,6 a 55,7 px y usan cuatro pesos. Los títulos escalan con el **alto** de la ventana: el mismo título se achica en una notebook de pantalla baja. Se declara un peso 600 que la fuente no carga, y se ve como 700 |
| Criterio | Consistencia (Nielsen 4); legibilidad |
| Interpretación | Un mismo nivel de título no se ve igual en dos páginas, y la jerarquía depende del tamaño de la ventana. Quien recorre varias páginas no aprende "cómo se ve un título" |
| Evidencia | Estilos calculados de todos los textos visibles a 1280 × 800 y a 375 × 812 |
| Recomendación | Escala de 6 a 8 pasos con roles (título de página, título de sección, subtítulo, texto, texto chico, etiqueta), escalado sólo por ancho, mínimo de 14 px para lectura y cargar sólo los pesos que se usan |

### UI4 · Botones: la jerarquía funciona, los tamaños y formas no siguen una regla — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Personas (reconocer qué es un botón y cuál es el principal) |
| Observación | El botón principal verde se reconoce bien (VF3). Pero el mismo llamado "Conocer [plataforma]" mide 36 px de alto con texto de 12 px en la home y 47 px con texto de 14 px en Plataformas. Los botones secundarios tienen tres formas: rectángulo con radio 6, píldora de radio 100 y píldora de radio 999 |
| Criterio | Consistencia y estándares (Nielsen 4) |
| Interpretación | Los botones secundarios no se leen como una familia; la píldora del aviso de cookies parece de otro sitio |
| Evidencia | Estilos calculados de los elementos interactivos de cada página |
| Recomendación | Tres tamaños (chico, mediano, grande) y dos o tres estilos (principal, secundario, texto), con una sola forma de esquina |

### UI5 · Diez radios de esquina distintos — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Percepción de prolijidad |
| Observación | 6, 8, 10, 14, 16, 18 y 20 px, 100 px, 999 px y 50 %. Las tarjetas usan 16 (video, blog), 18 o 20 px (servicios); los botones, 6; los campos y el botón de envío, 8 |
| Criterio | Consistencia visual |
| Interpretación | Diferencias de pocos píxeles que no se notan una por una, pero que suman la sensación de "casi igual" |
| Evidencia | Reglas CSS declaradas |
| Recomendación | Tres radios (chico para controles, mediano para tarjetas, completo para píldoras y círculos) |

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

### UI7 · La jerarquía visual no siempre coincide con la del contenido — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Personas que escanean o usan lector de pantalla; buscadores |
| Observación | En Plataformas, "¿Qué permite?" es un encabezado de 14,7 px, mientras el nombre de cada producto es un párrafo de 19 px. Hay un `h2` oculto. En Sobre Vortex, un `h2` va en peso 400 y los nombres del equipo son `h3` de 15 px. En la home el titular principal no es un encabezado (H8) |
| Criterio | WCAG 2.2: 1.3.1 (información y relaciones); Nielsen 4 |
| Interpretación | El tamaño se eligió por cómo se ve y no por el nivel del contenido. Eso agrava UI3: no hay una correspondencia fija entre nivel y estilo |
| Evidencia | Encabezados de cada página con sus estilos calculados |
| Recomendación | Asignar un estilo fijo a cada nivel de encabezado y usar el nivel que corresponde al contenido |

### UI8 · Formularios prolijos pero con su propio lenguaje — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Personas (lectura de etiquetas) y consistencia |
| Observación | Los campos están bien resueltos: etiquetas asociadas, 44 px de alto, mismo estilo en Hablemos y Trabajá con nosotros. Pero las etiquetas van en 11 px, mayúsculas y verde al 85 %. Campos y botón de envío usan radio 8 y relleno 15 × 40, distintos del resto de los botones (radio 6) |
| Criterio | Legibilidad; consistencia |
| Interpretación | Las etiquetas son lo primero que se lee en un formulario y hoy son el texto más chico de la página |
| Evidencia | Estilos calculados de los dos formularios |
| Recomendación | Etiquetas de al menos 14 px en minúscula, y que el botón de envío sea el botón principal grande del sistema |

### UI9 · Cortes de diseño dispersos y dependientes del alto de la ventana — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Mantenimiento; posibles diferencias entre pantallas |
| Observación | Seis cortes de ancho (600, 768/769, 900, 1100 y 1320 px, más "pantalla táctil") y uno de alto (≤ 820 px), declarados en la hoja común y en cada página. Los títulos también escalan con el alto (UI3) |
| Criterio | Buenas prácticas de diseño adaptable |
| Interpretación | Con tantos cortes repartidos por página, es probable que dos páginas cambien de diseño en anchos distintos. Es una inferencia: no se recorrieron todos los anchos |
| Evidencia | Media queries de las hojas de estilo |
| Recomendación | Tres o cuatro cortes comunes, declarados una sola vez |

### UI10 · Movimiento sin una regla común — Severidad 1

| Campo | Contenido |
|---|---|
| Afecta | Percepción de pulido |
| Observación | Nueve duraciones de transición distintas (0,2 a 1 s), sin una curva de aceleración común. A favor: el sitio respeta la preferencia de movimiento reducido |
| Criterio | Consistencia visual |
| Interpretación | Detalle fino. Se nota poco por separado, pero suma a la sensación de que cada parte se ajustó por su cuenta |
| Evidencia | Reglas CSS declaradas |
| Límite | La IA ve las animaciones como fotos sucesivas: no evalúa si son fluidas (ver [análisis visual](analisis-visual.md), sección 1) |
| Recomendación | Dos o tres duraciones (rápida, media, lenta) y una curva común, aparte de las animaciones de escena (globo, partículas) |

## 6. Diagnóstico: qué conservar, qué unificar y qué rediseñar

| Decisión | Qué | Por qué |
|---|---|---|
| **Conservar** | Paleta negro, verde `#A0D232` y blanco; violeta sólo en efectos; Rubik como única familia; botón principal verde lleno con texto negro; títulos de sección verdes; cabecera y pie | Son la parte reconocible de la marca y ya se usan con constancia |
| **Unificar** | Color por roles (UI1); componentes comunes en una sola hoja (UI2); escala tipográfica (UI3); familia de botones (UI4); radios (UI5); duraciones (UI10); cortes de diseño (UI9) | La identidad ya está; falta convertirla en reglas. No cambia cómo se ve la marca: la ordena |
| **Agregar** | Estados de foco, presionado, deshabilitado y error (UI6) | Hoy faltan, y afectan al paso de contacto |
| **Rediseñar** | Jerarquía de encabezados por página (UI7); etiquetas de formulario (UI8); tratamiento de logos (V9); y lo que ya señaló el análisis visual: peso visual, contenido oculto tras íconos y largo de la home (V1, V4, V8) | Son decisiones de composición, no sólo de valores; conviene resolverlas en la propuesta de diseño |

**Recomendación:** antes de rediseñar, escribir la base del sistema (tokens y componentes) a partir de lo que hay que conservar. Así la propuesta de diseño parte de reglas y el sitio actual puede mejorar sin esperar el rediseño completo.

## 7. Cómo entra en el plan de mejoras

| Hallazgo | Mejora |
|---|---|
| UI1, UI2, UI4, UI5, UI8, UI9, UI10 | **M18** · Sistema visual base (nueva) |
| UI3 | M15 (mínimo de lectura y escala corta) y M18 (escala como tokens) |
| UI6 | M15 (foco visible) |
| UI7 | M4 (encabezados) |

Detalle e indicadores en el [plan de mejoras](plan-de-mejoras-web.md).

## 8. Lo que no se verificó

- **Envío y errores de formulario:** no se envían formularios del sitio de Vortex.
- **Navegación completa con teclado y lector de pantalla.**
- **Todos los anchos intermedios:** se midió a 1280 y 375 px; los cortes de 600, 900, 1100 y 1320 px se leyeron del código.
- **Versión en inglés:** se asume igual a la española; no se midió página por página.
- **Animaciones de entrada:** en dos cargas de páginas internas, el título tardó en aparecer en una pestaña de navegador que no estaba en primer plano. No se cuenta como hallazgo: puede deberse a la pestaña y no al sitio (ver H10).
