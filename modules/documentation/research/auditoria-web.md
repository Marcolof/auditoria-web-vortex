---
id: research.auditoria-web
type: ux-audit
status: draft
evidence: observed
updated: 2026-10-26
depends_on: [research.modelo-de-publicos, research.encuadre-v1]
feeds: [research/auditoria-web]
sources: [vortex-it.com snapshot 2026-10-26]
---

# Auditoría web · vortex-it.com

> **Método:** revisión experta sobre el sitio publicado el 2026-10-26, recorrido como cada público del [modelo de públicos](modelo-de-publicos.md). **No hay usuarios reales ni datos de analítica detrás de estos hallazgos**: son observaciones y juicios de quien audita. Lo que dependa de cómo reaccionan las personas queda marcado como hipótesis y se contrasta en el paso 6.

## 1. Resumen ejecutivo

El sitio cuenta bien **cómo trabaja** Vortex y qué problemas resuelve cada servicio, y tiene una estructura clara y bilingüe. Lo que más le falta es lo que **un comprador necesita para confiar**: decir con claridad a quién ayuda y mostrar resultados concretos.

**Los dos hallazgos de mayor prioridad:**

1. **H1.** En el primer vistazo no se entiende qué hace Vortex ni para quién. El titular es una afirmación general sobre la IA.
2. **H2.** No hay pruebas de resultados: casos, testimonios o relatos de proyectos. Hay logos de clientes y cifras, pero sin contexto de qué se hizo con ellos.

**Decisión que se pide al equipo de Vortex:** confirmar si la prioridad es que el sitio convenza a quien contrata (en cuyo caso H1 y H2 van primero) y qué casos de clientes se pueden mostrar.

## 2. Alcance y método

| Aspecto | Detalle |
|---|---|
| Objeto | vortex-it.com, versión en español y en inglés |
| Páginas revisadas | Inicio, Soluciones, Cómo trabajamos, Sobre Vortex, Plataformas, Blog, Hablemos, Trabajá con nosotros, y la versión `/en/` de la home. Existen las 7 páginas internas en inglés (respondieron 200) |
| Tipo | Heurística de mensaje y contenido, más controles básicos de estructura y accesibilidad visibles en el código |
| Criterios | Heurísticas de Nielsen (en particular 1, 2, 4 y 10), las cuatro dimensiones de confianza y las tres necesidades comunes del [modelo de públicos](modelo-de-publicos.md) |
| Severidad | Escala de Nielsen: 0 no es un problema · 1 cosmético · 2 menor · 3 mayor · 4 crítico. Se justifica por frecuencia, impacto y persistencia |
| Fuera de alcance | LinkedIn, YouTube e Instagram (van en [análisis de comunicación](../research/?m=comunicacion)); sitios de las plataformas (QuickPass, Loyalix, Omnia, Rutex); posicionamiento en buscadores |

### Qué no se verificó

- Navegación con teclado ni lectores de pantalla.
- Contraste de todos los textos. Sólo se calculó el verde de marca sobre negro (11,8 a 1).
- Velocidad de carga y comportamiento en dispositivos reales: el recorrido mobile se probó con emulación.
- Qué hace cada visitante en el sitio: no hay analítica.

## 3. Lo que funciona bien

| # | Fortaleza | Evidencia |
|---|---|---|
| F1 | **Los servicios se explican desde el problema del cliente.** Cada uno tiene "qué resolvemos / qué hacemos / resultado" | Soluciones |
| F2 | **El método es claro y creíble:** cuatro etapas, cada una con qué se hace y qué se obtiene | Cómo trabajamos |
| F3 | **El cierre le habla a quien decide** ("Es una decisión estratégica") y el formulario ofrece un campo opcional con la etapa de la iniciativa, desde "explorando" | Inicio, Hablemos |
| F4 | **Hay señales de solidez:** más de 25 años, +250 cuentas activas, +600 proyectos, +130 profesionales, clientes de gran empresa, partners tecnológicos y membresías | Inicio |
| F5 | **Se ve al equipo directivo:** nueve personas con cargo, trayectoria y LinkedIn, incluidas las direcciones regionales | Sobre Vortex |
| F6 | **Sitio bilingüe completo y bien declarado:** las páginas existen en ambos idiomas, con `hreflang` correcto y `lang` en cada versión. El blog en inglés avisa que los artículos están en español | Código, Blog EN |
| F7 | **Las plataformas se presentan como "de un desafío a un producto"**, lo que las vincula con la experiencia de Vortex | Plataformas |
| F8 | **Contenido propio y activo:** el blog tiene 21 entradas, la última del 30 de septiembre de 2026 | Blog |
| F9 | **Todas las imágenes tienen el atributo `alt`** (varias vacías, probablemente decorativas; no se revisó cuáles), y el formulario incluye un aviso sobre el tratamiento de datos | Código, Hablemos |

## 4. Hallazgos

Ordenados por severidad.

### H1 · El primer vistazo no dice qué hace Vortex ni para quién — Severidad 3

| Campo | Contenido |
|---|---|
| Ubicación | Inicio, primera pantalla (ES y EN) |
| Observación | El titular es "La IA cambió las reglas". La bajada dice que impulsan "la evolución de las organizaciones mediante estrategias de Transformación Digital AI-First". No menciona qué entregan, a qué tipo de empresa ni en qué sector. Los servicios concretos aparecen unas pantallas más abajo |
| Criterio | Nielsen 2 (correspondencia con el mundo real); necesidad común n.º 1 del modelo: entender en segundos qué hace la empresa y para quién |
| Interpretación | La primera pantalla afecta a todos los públicos. Quien decide, quien impulsa y los asistentes de IA necesitan una frase que les diga si es para ellos. "AI-First" es un término que usan muchas consultoras (hipótesis H5 del encuadre) |
| Evidencia | Texto de la home, 2026-10-26 |
| Severidad | 3: afecta a todas las visitas, en el punto de entrada, y persiste |
| Recomendación | Probar una bajada que diga qué se resuelve y para quién, y medir con un test de primera impresión (paso 6). No está validada |
| Tipo | Contenido |

### H2 · No hay pruebas de resultados — Severidad 3

| Campo | Contenido |
|---|---|
| Ubicación | Inicio ("Confían en nosotros"), Sobre Vortex y todo el sitio |
| Observación | Hay seis logos de clientes sin enlace ni contexto, logos de partners y cuatro cifras sin fuente. No se encontró ninguna página de casos, testimonios con nombre ni descripción de un proyecto con su resultado. Las "Plataformas" son productos propios, no casos de clientes |
| Criterio | Dimensiones **capacidad** e **integridad** del modelo de confianza; Nielsen 10 (ayuda y documentación: dar elementos para decidir) |
| Interpretación | Quien decide y quien evalúa la parte técnica necesitan ver que Vortex ya resolvió un problema parecido al suyo. Los logos muestran trayectoria (**solidez**), pero no capacidad. La hipótesis H5 del encuadre apunta a que éste es el diferencial real, y se valida en el paso 6 |
| Evidencia | Revisión de las nueve páginas; los logos de clientes no tienen enlace |
| Severidad | 3: afecta a los públicos prioritarios y no hay otro lugar del sitio que lo compense |
| Recomendación | Definir con Vortex qué casos se pueden mostrar (con o sin nombre del cliente) y cómo se presentan: problema, qué se hizo, resultado |
| Tipo | Contenido |

### H3 · Los sectores se mencionan en los metadatos y en los logos, no en el contenido — Fusionado en C1

> Fusionado en **C1** del [análisis de comunicación](analisis-comunicacion.md) el 2026-10-27: es una de las diferencias de mensaje entre fuentes que C1 ya registra (el sector). No se cuenta aparte. Se conserva el registro original.

| Campo | Contenido |
|---|---|
| Ubicación | Inicio: `meta description` frente al contenido visible |
| Observación | La descripción que ven los buscadores dice "Acompañamos a empresas de banca, retail y fintech…". El contenido visible de la página no nombra ninguna industria. Los logos de clientes sí corresponden a banca, fintech, retail y consumo masivo |
| Criterio | Nielsen 4 (consistencia); coherencia entre canales (necesidad común n.º 3) |
| Interpretación | Quien visita el sitio no ve el foco sectorial que sí se comunica en los resultados de búsqueda. Contradicción entre fuentes registrada sin resolver: no sabemos cuál refleja el foco comercial real (pregunta abierta para el paso 1) |
| Evidencia | `meta description` de `/` y `/en/` frente al texto visible |
| Severidad | 2: el efecto depende de si el foco sectorial es una decisión de negocio |
| Recomendación | Confirmar el foco con Vortex y, según la respuesta, reflejarlo en el contenido o ajustar la descripción |
| Tipo | Contenido |

### H4 · "Agendar una llamada" lleva a un formulario, no a una agenda — Severidad 2

| Campo | Contenido |
|---|---|
| Ubicación | Inicio, cierre (ES y EN); Hablemos |
| Observación | El botón dice "Agendar una llamada" ("Book a call"). Abre una página con un formulario con 6 campos obligatorios (nombre, empresa, cargo, email corporativo, país y servicio de interés), que promete que el equipo "se pondrá en contacto". No permite elegir un horario |
| Criterio | Nielsen 2 y 1: lo que promete el botón debe coincidir con lo que pasa al hacer clic |
| Interpretación | Quien espera elegir un horario puede abandonar al ver el formulario. El pie del sitio ofrece email, teléfono y WhatsApp como alternativas, pero no están en esa página. Sin analítica no se puede saber cuánta gente abandona |
| Evidencia | Destino del botón: `hablemos.html#formulario` |
| Severidad | 2: afecta a quien está listo para dar el siguiente paso, que es el más valioso |
| Recomendación | Alinear texto y destino (por ejemplo, "Contanos tu desafío"), o incorporar una agenda real. Evaluar medios de contacto alternativos junto al formulario |
| Tipo | Contenido / funcional |

### H5 · Las plataformas mezclan audiencias y sus destinos no son coherentes — Severidad 2

| Campo | Contenido |
|---|---|
| Ubicación | Inicio ("Plataformas") y Plataformas |
| Observación | Se presentan cuatro productos para compradores distintos: eventos, fidelización, selección de personal y gestión de modelos de IA. En la home, tres botones llevan a sitios externos (quickpass.app, loyalix.app, omniatalents.com) y el cuarto, "Conocer Rutex AI", lleva al formulario de contacto de Vortex |
| Criterio | Nielsen 4 (consistencia) y 1 (visibilidad del estado) |
| Interpretación | Cuatro botones con la misma forma prometen lo mismo y hacen cosas distintas. Además, los productos se dirigen a públicos diferentes del comprador de consultoría, lo que puede diluir el mensaje (hipótesis H6 del encuadre, a validar) |
| Evidencia | Enlaces de la sección Plataformas de la home |
| Severidad | 2 |
| Recomendación | Unificar el tratamiento (indicar visualmente que salen del sitio, o que no hay sitio todavía). Decidir con Vortex el rol de las plataformas frente al mensaje principal |
| Tipo | Contenido / funcional |

### H6 · Todo el blog vive en LinkedIn — Severidad 2

| Campo | Contenido |
|---|---|
| Ubicación | Blog (ES y EN) |
| Observación | Las 21 entradas se listan en vortex-it.com pero cada una abre un artículo de LinkedIn en otra pestaña. En los cuatro enlaces revisados, los artículos corresponden a una misma cuenta personal. El texto del blog en inglés aclara que los artículos están en español |
| Criterio | Coherencia entre canales; **buena fe** (contenido útil que no exige nada a cambio) |
| Interpretación | El contenido es relevante para quien decide (adopción de IA, riesgos, procesos), pero al salir del sitio se pierde el contexto y el siguiente paso, y los buscadores asocian los artículos a LinkedIn. La concentración en una sola voz es una hipótesis a confirmar con Vortex |
| Evidencia | Destinos de los enlaces de `blog.html` |
| Severidad | 2: el contenido es un activo del sitio y hoy no refuerza el recorrido |
| Recomendación | Evaluar publicar los artículos en el sitio, o al menos añadir un acompañamiento de llamada a la acción. Tema para el [análisis de comunicación](../research/?m=comunicacion) |
| Tipo | Contenido |

### H7 · Información incompleta para buscadores y asistentes de IA — Severidad 2

| Campo | Contenido |
|---|---|
| Ubicación | Código de todas las páginas |
| Observación | No tienen `og:title` ni `og:image` (vista previa al compartir en LinkedIn o WhatsApp), `canonical` ni datos estructurados (JSON-LD). Las rutas `/robots.txt` y `/sitemap.xml` respondieron 404. Sí tienen título, descripción y `hreflang` en cada página |
| Criterio | Público "buscadores y asistentes de IA" del modelo: información clara, explícita y coherente |
| Interpretación | Los asistentes de IA y los buscadores forman la primera impresión de un comprador antes de que visite el sitio. Sin datos estructurados dependen de interpretar el texto. La consecuencia es una hipótesis (H6 del encuadre) |
| Evidencia | Código de las nueve páginas y respuestas de las rutas, 2026-10-26 |
| Severidad | 2: no se ve en la pantalla pero afecta a todas las visitas que llegan por buscador o recomendación |
| Recomendación | Completar metadatos sociales, canonical, sitemap, robots y datos de organización. Contrastar con lo que hoy responden los asistentes de IA (paso 3, análisis de comunicación) |
| Tipo | Técnico |

### H8 · Estructura y jerarquía de encabezados — Severidad 2

| Campo | Contenido |
|---|---|
| Ubicación | Inicio (ES y EN), Sobre Vortex, Plataformas |
| Observación | La home no tiene ningún `h1`: el titular del hero no es un encabezado. En Sobre Vortex el `h1` es solamente "Sobre". Las demás páginas tienen un `h1` descriptivo |
| Jerarquía visual | Sumado el 2026-10-27 desde la [auditoría UI](auditoria-ui.md) (antes UI7). El tamaño de los títulos no sigue su nivel: en Plataformas, "¿Qué permite?" es un encabezado de 14,7 px mientras el nombre de cada producto es un párrafo de 19 px, y hay un `h2` oculto; en Sobre Vortex, un `h2` va en peso 400 y los nombres del equipo son `h3` de 15 px |
| Criterio | WCAG 2.2 (1.3.1 Información y relaciones; 2.4.6 Encabezados y etiquetas) |
| Interpretación | Quienes navegan con lector de pantalla y los buscadores usan los encabezados para entender la página. Afecta sobre todo a la accesibilidad y a la interpretación automática |
| Evidencia | Recuento de `h1` por página en el código |
| Severidad | 2: corrección simple, impacto acotado |
| Recomendación | Marcar el titular de la home como `h1`, dar a Sobre Vortex un `h1` completo, usar el nivel que corresponde al contenido y asignar un estilo fijo a cada nivel |
| Tipo | Técnico |

### H9 · No se encontraron datos formales de la empresa — Severidad 2

| Campo | Contenido |
|---|---|
| Ubicación | Pie de página y menú |
| Observación | En los enlaces del pie de la home sólo hay contacto (email, teléfono, WhatsApp), redes y Trabajá con nosotros. No se encontró un enlace a política de privacidad, términos ni datos legales de la empresa. Los formularios incluyen un aviso breve sobre el uso de los datos |
| Criterio | Dimensiones **integridad** y **solidez**; necesidades de compras, legales y seguridad |
| Interpretación | Quien debe habilitar a un proveedor busca estos datos y, si no los encuentra, tiene que pedirlos. No se revisó si existen en otra parte del sitio. Es un público secundario según el orden preliminar |
| Evidencia | Enlaces de la home, 2026-10-26 |
| Severidad | 2: retrasa un paso formal, no impide decidir |
| Recomendación | Confirmar con Vortex qué documentación formal existe y dónde publicarla |
| Tipo | Contenido |

### H10 · En mobile, el cuerpo del hero aparece con animación gradual — A verificar (no cuenta como hallazgo)

> Revisión del 2026-10-27: no se reprodujo en una segunda prueba, así que deja de contarse como hallazgo y queda como **duda a verificar** en un teléfono real (mejora M5).

| Campo | Contenido |
|---|---|
| Ubicación | Inicio, primera pantalla en mobile (375 × 812, emulado) |
| Observación | Tras cargar, la pantalla mostró el titular y una animación de partículas. La bajada y el botón existen en la primera pantalla pero aparecen de forma gradual; en la prueba, unos 4 segundos después de cargar todavía no eran visibles. Después medí una opacidad cercana al 60 % |
| Criterio | Nielsen 1; necesidad común n.º 1 (entender en segundos) |
| Interpretación | Si se confirma en dispositivos reales, parte de las visitas en mobile no vería el mensaje ni el botón en los primeros segundos. La prueba usó emulación y un solo intento, por lo que **no es concluyente** |
| Evidencia | Capturas y mediciones en navegador emulado, 2026-10-26 |
| Severidad | Sin asignar hasta verificar (antes 2, provisoria) |
| Recomendación | Probar en uno o dos dispositivos reales y con conexiones lentas |
| Actualización | En una segunda prueba del mismo día (mobile emulado) la bajada y el botón se vieron completos al cargar. **No se reprodujo.** Sigue pendiente de verificar en un teléfono real. Ver [análisis visual](analisis-visual.md) |
| Tipo | Funcional |

### H11 · Talento: formulario correcto, poco contexto — Severidad 1

| Campo | Contenido |
|---|---|
| Ubicación | Trabajá con nosotros; sección final de Sobre Vortex |
| Observación | Hay un formulario simple (email, puesto, CV hasta 8 MB, perfil de LinkedIn opcional) y un aviso de datos. No hay información sobre cultura, tipo de proyectos, proceso de selección ni vacantes abiertas. El puesto se escribe a mano |
| Criterio | Dimensión **buena fe** y necesidades del público talento |
| Interpretación | Cumple como canal para recibir CV, pero no ayuda a quien duda en postularse. El público no es prioritario para captar clientes |
| Evidencia | Texto y campos de la página |
| Acceso y vacantes | Sumado el 2026-10-27 desde la [usabilidad simulada](usabilidad-simulada.md) (antes U1). El menú principal (escritorio y mobile) no incluye "Trabajá con nosotros": está en el pie y al final de Sobre Vortex. El mismo día, LinkedIn mostraba una búsqueda activa que no figura en el sitio |
| Severidad | 1: talento es un público secundario |
| Recomendación | Sumar el acceso al menú, listar o enlazar las búsquedas abiertas y, en una etapa posterior, ampliar con cultura, proyectos y proceso, según lo que decida Vortex sobre la importancia del reclutamiento |
| Tipo | Contenido |

### H12 · EN: el bloque "Platforms" aparece dos veces en el texto de la home — A verificar (no cuenta como hallazgo)

> Revisión del 2026-10-27: no se confirmó en pantalla, así que deja de contarse como hallazgo y queda como **duda a verificar** (mejora M5).

| Campo | Contenido |
|---|---|
| Ubicación | Inicio en inglés |
| Observación | El texto extraído de la home en inglés repite el encabezado "Platforms / Solutions built by Vortex for specific industries" antes de la segunda mitad de las tarjetas. En español aparece una sola vez. Puede ser una división de carrusel o un error de maquetación |
| Criterio | Nielsen 4 (consistencia) |
| Interpretación | Sin confirmar visualmente, no se puede afirmar que sea un problema |
| Evidencia | Texto de `/en/` |
| Severidad | Sin asignar hasta verificar (antes 1, provisoria) |
| Recomendación | Revisar la versión en inglés en pantalla |
| Tipo | Contenido / maquetación |

## 5. Cobertura por público

Lectura del autor sobre qué encuentra cada público hoy. Es un juicio, no un resultado de usuarios.

| Público | Qué encuentra | Qué le falta | Cobertura |
|---|---|---|---|
| **Quien decide** | Mensaje estratégico, método, cifras, logos, cierre dirigido a decisión | Qué hace y para quién en el primer vistazo (H1); casos con resultados (H2) | Parcial |
| **Quien evalúa lo técnico** | Qué hace cada servicio, direcciones técnicas con su especialidad, partners | Casos técnicos, seguridad y cumplimiento, tecnologías concretas por servicio (H2) | Parcial |
| **Quien impulsa la iniciativa** | Servicios explicados desde el problema (F1), método | Ejemplos de su área o sector (H2, C1) | Parcial |
| **Compras, legales y seguridad** | Contacto, aviso de datos en formularios | Datos formales, privacidad y seguridad (H9) | Débil |
| **Clientes actuales** | Blog, plataformas | Ningún espacio específico. No es necesariamente un problema para el sitio institucional | No evaluado |
| **Partners y quienes recomiendan** | Logos de partners y membresías | Qué ofrece Vortex a un partner, casos conjuntos | Débil |
| **Talento** | Formulario y mensaje breve (H11) | Cultura, vacantes, proceso | Parcial |
| **Ecosistema** | Contacto general | Un camino explícito | Débil |
| **Buscadores y asistentes de IA** | Títulos, descripciones y `hreflang` correctos | Metadatos sociales, datos estructurados, sitemap (H7); coherencia sectorial (C1) | Parcial |

## 6. Recomendaciones agrupadas

| Prioridad | Qué | Hallazgos | Esfuerzo estimado | Se valida con |
|---|---|---|---|---|
| 1 | Reformular la primera pantalla y probarla | H1, C1 (sector) y H10 (a verificar) | Bajo | Test de primera impresión (paso 6) |
| 2 | Definir y publicar casos de clientes | H2 | Medio: depende de permisos de los clientes | Entrevistas a clientes y prospectos (paso 6) |
| 3 | Alinear los botones con su destino | H4, H5 | Bajo | Revisión del equipo |
| 4 | Completar lo técnico: metadatos, `h1`, sitemap, robots, datos estructurados | H7, H8 | Bajo | Verificación técnica |
| 5 | Decidir el rol del blog y de las plataformas en el mensaje | H5, H6 | Medio | Paso 1 (entrevistas internas) |
| 6 | Publicar datos formales y de privacidad | H9 | Bajo | Confirmar qué existe |
| 7 | Talento: acceso en el menú, vacantes y más información | H11 | Medio | Cuando Vortex lo priorice |

El esfuerzo es una estimación del autor, no un dato del equipo de Vortex.

## 7. Contradicciones y preguntas abiertas

| Tema | Detalle | Cómo se resuelve |
|---|---|---|
| Foco sectorial | La descripción para buscadores dice banca, retail y fintech; el texto visible no nombra industrias (C1, antes H3) | Paso 1: confirmar el foco comercial |
| Rol de las plataformas | ¿Complementan la consultoría o se venden como productos aparte? (H5) | Paso 1 |
| Autoría del blog | ¿Es una estrategia de voz personal o institucional? (H6) | Paso 1 |
| Casos que se pueden mostrar | ¿Hay permisos de clientes? (H2) | Paso 1 |
| Datos formales | ¿Existen documentos de privacidad y legales? (H9) | Paso 1 |

## 8. Material de apoyo

Observaciones iniciales del primer relevamiento (O1 a O10) en [encuadre v1](archivo/encuadre-v1.md). Los públicos y los criterios de confianza vienen del [modelo de públicos y confianza](modelo-de-publicos.md).
