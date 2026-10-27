---
id: research.analisis-visual
type: visual-review
status: draft
evidence: observed
updated: 2026-10-26
depends_on: [research.auditoria-web]
feeds: [research/visual-usabilidad]
sources: [vortex-it.com snapshot 2026-10-26]
---

# Análisis visual · vortex-it.com

> **Método:** revisión hecha por Claude (modelo de IA) sobre capturas del sitio en escritorio (1280 × 800) y mobile (375 × 812, emulado), más la lectura de los estilos reales del código: tamaños de letra, colores, contrastes calculados, alturas de secciones y tamaño de los elementos táctiles. Fecha: 2026-10-26. **No hay personas detrás de este análisis**: lo estético es juicio experto y lo perceptivo se valida con usuarios.

## 1. Qué tan bien puede analizar lo visual una IA

| Lo que hace bien | Precisión |
|---|---|
| **Medir desde el código:** tamaños de letra, colores, contraste, alturas, tamaño de botones | Exacta para lo que está en el código |
| **Leer capturas:** jerarquía, composición, consistencia, uso del espacio, legibilidad aparente | Buena aproximación, comparable a una revisión experta |
| **Recorrer el sitio:** desplazarse, abrir menús, seguir enlaces, comparar escritorio y mobile | Buena, con emulación |

| Lo que no puede o hace mal | Por qué |
|---|---|
| **Detalle fino de píxeles** | Las capturas llegan reducidas: alineaciones o bordes de pocos píxeles se pueden escapar |
| **Animaciones** | Las ve como fotos sucesivas: no percibe si son fluidas, si dan tirones o si marean |
| **Rendimiento real** | No mide carga, consumo ni comportamiento en teléfonos reales |
| **Contraste sobre imágenes o 3D** | Sólo se calcula sobre fondos lisos; sobre el globo o las partículas es una estimación visual |
| **Reacción emocional y de marca** | Puede opinar si algo "se ve premium", pero no sabe cómo lo siente el público de Vortex |

**En resumen:** lo medible es confiable; la lectura de composición es tan buena como la de un revisor experto; lo perceptivo y emocional necesita personas reales.

## 2. Lo que funciona visualmente

| # | Fortaleza | Evidencia |
|---|---|---|
| VF1 | **Identidad fuerte y coherente:** negro, verde `#A0D232` y partículas violetas en todas las páginas | Capturas |
| VF2 | **El texto principal se lee muy bien:** blanco sobre negro (21 a 1) y verde sobre negro (11,8 a 1), muy por encima del mínimo de 4,5 a 1 | Contraste calculado |
| VF3 | **Botón principal claro:** verde lleno con texto negro, distinto del secundario con borde | Capturas y estilos |
| VF4 | **Las maquetas de las plataformas** muestran producto real en pantallas, lo que da concreción | Capturas de Plataformas |
| VF5 | **Títulos de sección consistentes:** verde, mayúsculas, centrados | Capturas |

## 3. Hallazgos

Severidad en escala de Nielsen (0 a 4), igual que la [auditoría web](auditoria-web.md).

### V1 · La home es muy larga y usa una mecánica de scroll que puede confundir — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | La home mide unos 8.500 px en escritorio (casi 11 pantallas) y 8.900 px en mobile. Usa desplazamiento con "imán" obligatorio entre secciones (`scroll-snap: y mandatory`) y animaciones ligadas al scroll (GSAP ScrollTrigger y Three.js). Varias secciones son más altas que la pantalla: hay tramos de casi una pantalla con sólo el fondo de partículas (después del titular y debajo de las tarjetas de Soluciones). Con varios giros rápidos de la rueda, la página saltó de Soluciones a Cómo trabajamos; con giros de a uno avanzó de a poco |
| Criterio | Nielsen 3 (control y libertad del usuario); necesidad común n.º 1 (entender rápido) |
| Interpretación | Quien recorre rápido puede saltarse contenido o sentir que la página "se mueve sola". Quien llega con poco tiempo, como quien decide, tiene que desplazarse mucho para llegar a clientes, cifras y contacto |
| Evidencia | Alturas medidas en el código; prueba con rueda en escritorio emulado |
| Límite | No se probó con trackpad, teclado ni teléfono real |
| Recomendación | Revisar con personas cómo se vive el recorrido. Evaluar quitar el imán obligatorio y reducir los tramos vacíos |

### V2 · Demasiados tamaños de letra y textos chicos o livianos — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | La home usa **23 tamaños de letra distintos**, de 11 a 84 px. El menú superior está en 12 px, peso liviano (300) y mayúsculas. Las etapas de "Cómo trabajamos" están en 13,4 px, verde al 80 %. Las etiquetas de las cifras son chicas y grises |
| Criterio | Consistencia (Nielsen 4); legibilidad |
| Interpretación | La escala tipográfica no tiene un sistema claro. Los textos de 12–13 px en peso liviano sobre negro cuestan, sobre todo en pantallas chicas o para personas mayores |
| Evidencia | Estilos calculados de todos los textos de la home |
| Recomendación | Definir una escala tipográfica corta (6 a 8 tamaños) y un mínimo de 14 px para textos de lectura |
| Ampliación | La [auditoría UI](auditoria-ui.md) (UI3) midió las 8 páginas: 51 tamaños distintos en escritorio |

### V3 · Contraste insuficiente en el pie y texto sobre el globo — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | El aviso de derechos está en 12 px, blanco al 30 %: **2,5 a 1**. La descripción del pie, en 13 px al 45 %: **4,4 a 1**. Ambos quedan por debajo de 4,5 a 1. El texto verde "Con origen en Córdoba…" está sobre un globo 3D que gira, con fondo variable |
| Criterio | WCAG 2.2, 1.4.3 Contraste mínimo |
| Interpretación | Afecta a personas con baja visión y a cualquiera con brillo bajo o luz de sol. El caso del globo depende del momento de la animación |
| Evidencia | Contraste calculado sobre fondo negro; el del globo es estimación visual |
| Recomendación | Subir la opacidad de esos textos y separar el texto del globo |

### V4 · Contenido que sólo aparece al tocar íconos — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | En "Cómo trabajamos" de la home se ven sólo cuatro íconos con su etiqueta; la explicación se abre al tocarlos. En Sobre Vortex, los seis principios funcionan igual, con la instrucción "Tocá cada ícono para leer de qué se trata" |
| Criterio | Nielsen 6 (reconocer antes que recordar); necesidad común n.º 1 |
| Interpretación | Quien escanea la página no ve el contenido si no interactúa. La necesidad de una instrucción indica que la interacción no es evidente |
| Evidencia | Capturas y estructura del código |
| Recomendación | Mostrar un resumen visible de cada etapa o principio sin necesidad de tocar |

### V5 · Elementos táctiles chicos y botón flotante que tapa contenido en mobile — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | En mobile: selector de idioma de 23 × 19 px, botón de menú de 32 × 23 px, íconos de redes de 18 × 18 px y enlaces del pie de 15 px de alto. Los ítems del menú miden 31 px de alto. El botón flotante "↓" queda encima de textos, por ejemplo las características de Loyalix |
| Criterio | WCAG 2.2, 2.5.8 Tamaño del objetivo (mínimo 24 × 24 px); buena práctica de 44 × 44 px |
| Interpretación | Los íconos de redes y el selector de idioma están por debajo del mínimo; es fácil tocar el equivocado |
| Evidencia | Tamaños medidos en mobile emulado; captura de Plataformas |
| Recomendación | Agrandar el área táctil a 44 × 44 px y ocultar o mover el botón flotante cuando tapa contenido |

### V6 · Detalles del menú mobile — Severidad 1

| Campo | Contenido |
|---|---|
| Observación | El menú se despliega sobre el titular sin oscurecer el fondo, y el titular se ve por debajo. El botón no indica si el menú está abierto o cerrado (`aria-expanded`) |
| Criterio | WCAG 2.2, 4.1.2 Nombre, función y valor |
| Interpretación | Quienes usan lector de pantalla no saben el estado del menú. Visualmente es menor |
| Evidencia | Captura con el menú abierto; atributos del botón |
| Recomendación | Agregar el estado al botón y un fondo detrás del menú |

## 4. Valoración subjetiva del atractivo

> **Cómo leer esta sección:** es la opinión de quien revisa (Claude) sobre qué tan atractiva, equilibrada y agradable de recorrer es la web. Se apoya en capturas en escritorio (1280 × 800) y en mediciones de imágenes y del scroll, pero **el puntaje es un juicio, no un dato**. Otra persona experta podría puntuar distinto, y lo que importa al final es cómo lo vive el público de Vortex.

### 4.1 Puntaje por dimensión

Escala de 1 (muy débil) a 5 (muy bien logrado).

| Dimensión | Puntaje | En pocas palabras |
|---|---|---|
| **Primera impresión** | 4 | Impacta: titular grande en verde, esfera de partículas, aire tecnológico y moderno. Dice poco de qué hace la empresa (H1), pero se ve profesional |
| **Identidad y coherencia** | 4 | Negro, verde y violeta, la misma tipografía y los mismos íconos en todas las páginas. Se reconoce como una marca |
| **Color** | 4 | Paleta acotada y con carácter. El verde funciona como color de acción y de títulos a la vez, lo que le quita un poco de fuerza al botón |
| **Imágenes y recursos** | 3 | Las maquetas de las plataformas son lo mejor visualmente. Pero los archivos son mucho más grandes de lo que se muestran (V7) y los logos tienen tamaños visuales desparejos (V9) |
| **Tipografía** | 3 | Rubik da un tono moderno y amable. Los títulos funcionan; los textos chicos y livianos no (V2) |
| **Distribución del peso visual** | 2 | Mucho espacio decorativo y poco contenido por pantalla. En varias secciones el ojo no encuentra dónde detenerse (V8) |
| **Ritmo y uso del espacio** | 2 | Once pantallas de home con tramos vacíos. El ritmo es lento para quien busca información (V1) |
| **Scroll y movimiento** | 3 | En la máquina de prueba fue fluido y las animaciones se sienten cuidadas. El salto con imán entre secciones y las tarjetas que vuelan sobre el título restan control (V1) |
| **Legibilidad** | 3 | Lo grande se lee muy bien; lo chico, sobre todo en el pie y en mobile, no (V2, V3, V5) |

**Promedio: 3,1 de 5.** La web **impacta y se ve moderna**, pero **prioriza la atmósfera sobre la información**: impresiona en los primeros segundos y después pide mucho scroll y mucha atención para encontrar lo que se busca.

### 4.2 Recorrido sección por sección

| Sección | Lo que funciona | Lo que no funciona |
|---|---|---|
| **Inicio (hero)** | Punto focal claro: titular verde sobre la esfera. Botón visible | Después del titular hay casi una pantalla sólo con partículas |
| **Nuestra visión** | La mejor composición de la home: texto a la izquierda y video a la derecha, equilibrados | — |
| **Soluciones** | Íconos 3D con identidad propia | Cuatro tarjetas chicas, con sólo un título, repartidas en una sección de dos pantallas. Durante la animación pasan por encima del título "Soluciones". El peso queda disperso |
| **Cómo trabajamos** | Los cuatro íconos en órbita son atractivos | El peso está en la decoración: las etiquetas de cada etapa son chicas (13,4 px) y el contenido se abre sólo al tocar (V4) |
| **Confían en nosotros** | Clientes de peso, carrusel en movimiento | Logos con tamaños visuales muy distintos: Carrefour y Arcor se ven chicos al lado de Galicia o Correo Argentino; AWS se ve más chico que el resto de los partners (V9) |
| **Plataformas** | La sección más concreta y atractiva: pantallas reales de producto | Dos plataformas por pantalla, con listas cortas y chicas al lado de maquetas grandes |
| **Cifras** | Los números grandes en verde son un buen punto focal | Etiquetas muy chicas; el texto sobre el globo compite con él |
| **Cierre** | Mensaje fuerte y dirigido a quien decide | El texto se superpone al globo; el botón queda chico frente a dos párrafos grandes |
| **Pie** | Ordenado en columnas | Letra chica y de bajo contraste (V3) |
| **Página Soluciones** | Primera pantalla clara con los cuatro servicios | Los bloques de detalle tienen texto chico y debajo dejan otra franja vacía |

### 4.3 Imágenes y recursos: medición

| Grupo | Archivo original | Se muestra a | Relación | Carga |
|---|---|---|---|---|
| Íconos de Soluciones (4) | 512 × 505 px, unos 35–38 KB cada uno | 72 × 72 px | **7 veces más grande** | Al cargar la página |
| Íconos de Cómo trabajamos (4) | 512 × 502 px, 34–43 KB | 115–160 px | 3 a 4 veces | Al cargar la página |
| Maquetas de plataformas (16) | 813 a 1.400 px de lado, 63–138 KB cada una | 113 a 368 px | **3 a 7 veces más grande** | `eager`: todas al cargar, aunque estén varias pantallas más abajo |
| Logos de clientes, partners y membresías (15) | SVG de 1–3 KB | 37–64 px de alto | Vectoriales | Correcto |
| Miniatura del video | 1.280 × 720 px, 86 KB | 563 × 317 px | 2,3 veces | `lazy`: correcto |

- Todas las imágenes de mapa de bits están en **WebP**, que es un formato liviano. Bien.
- **Ninguna tiene versiones por tamaño de pantalla** (`srcset`): el celular descarga lo mismo que el escritorio.
- En total, las imágenes de la home suman **unos 2 MB**. Para pantallas de alta densidad alcanza con unas 2 veces el tamaño mostrado, por lo que gran parte de ese peso no se aprovecha.
- La medición se hizo con caché del navegador y en una conexión rápida; no indica cuánto tarda en un celular con datos.

### 4.4 Scroll y movimiento: medición

- **Fluidez:** al recorrer la home completa en la máquina de prueba, el tiempo entre cuadros tuvo una mediana de 6 ms y ningún cuadro superó los 50 ms. **Fue fluido**, pero es una computadora potente: no dice cómo se comporta en un teléfono de gama media.
- **Mecánica:** desplazamiento con imán obligatorio entre secciones, animaciones ligadas al scroll (GSAP) y fondo 3D (Three.js). Ver V1.
- **Movimiento reducido:** el código del sitio menciona la preferencia del sistema "reducir movimiento"; no se probó qué cambia cuando está activa.

## 5. Hallazgos de la valoración subjetiva

### V7 · Imágenes mucho más grandes de lo que se muestran, cargadas de entrada — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | Íconos de 512 px mostrados a 72 px y 16 maquetas de hasta 1.400 px mostradas a 113–368 px, todas con carga anticipada (`eager`) y sin versiones por pantalla. La home suma unos 2 MB en imágenes |
| Criterio | Rendimiento percibido; buenas prácticas de imágenes web |
| Interpretación | En celulares con datos móviles, la página tarda más y consume más de lo necesario, justo en una home cargada de animaciones. No se midió en un teléfono real |
| Evidencia | Medición de dimensiones y tamaños de archivo en el navegador |
| Severidad | 2: afecta a todas las visitas en mobile, aunque no impide usar el sitio |
| Recomendación | Exportar las imágenes a unas 2 veces su tamaño mostrado, sumar versiones por pantalla y diferir la carga de las que están más abajo |
| Tipo | Técnico |

### V8 · El peso visual está en la decoración, no en el contenido — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | En Soluciones, cuatro tarjetas chicas con sólo un título ocupan una sección de dos pantallas y se superponen al título durante la animación. En Cómo trabajamos, los íconos grandes dominan y las etiquetas son chicas. En el cierre, el texto se apoya sobre el globo y el botón queda chico |
| Criterio | Jerarquía visual: lo más importante debe ser lo más visible |
| Interpretación | Opinión de quien revisa: la web impresiona, pero obliga a buscar el contenido. Quien decide con poco tiempo no encuentra rápido dónde detenerse |
| Evidencia | Capturas de escritorio, 2026-10-26 |
| Severidad | 2 |
| Recomendación | Dar más tamaño y espacio al contenido (qué hace cada servicio, qué hace cada etapa) y menos a la decoración; separar textos del globo |
| Tipo | Visual |

### V9 · Logos con tamaños visuales desparejos — Severidad 1

| Campo | Contenido |
|---|---|
| Observación | Todos los logos de clientes tienen la misma altura, pero Carrefour (80 px de ancho) y Arcor (92 px) se ven mucho más chicos que Galicia o Correo Argentino (210 px). Entre los partners, AWS se ve más chico (62 px) que el resto (105–150 px) |
| Criterio | Equilibrio visual; trato parejo a cada cliente |
| Interpretación | Detalle de pulido: unos clientes parecen más importantes que otros |
| Evidencia | Tamaños medidos en la home |
| Severidad | 1 |
| Recomendación | Igualar el tamaño visual (área), no sólo la altura |
| Tipo | Visual |

## 6. Corrección a la auditoría web

En una segunda prueba en mobile emulado, la bajada y el botón del hero se vieron completos al cargar. El hallazgo **H10** de la [auditoría web](auditoria-web.md) no se reprodujo y queda pendiente de verificar en un teléfono real.

## 7. Qué no se verificó

- Rendimiento de las animaciones 3D en teléfonos, y qué cambia con la preferencia de "reducir movimiento" activa.
- Navegación con teclado y con lector de pantalla.
- Teléfonos y navegadores reales.
- Las páginas internas en mobile, salvo el menú.
