---
id: research.plan-de-mejoras-web
type: improvement-plan
status: draft
evidence: observed
updated: 2026-10-27
depends_on: [research.auditoria-web, research.analisis-comunicacion, research.web-que-mostrar, research.analisis-visual, research.usabilidad-simulada, research.auditoria-ui]
feeds: [research/conclusiones]
sources: [vortex-it.com snapshot 2026-10-26, linkedin.com/company/vortex-it-ok 2026-10-26, youtube.com/@vortexit 2026-10-26, instagram.com/vortex.it 2026-10-26]
---

# Plan de mejoras de la web y su presencia

> **Versión preliminar.** Reúne los 39 hallazgos de la [auditoría web](auditoria-web.md) (H1 a H12), el [análisis de comunicación](analisis-comunicacion.md) (C1 a C5), el [análisis visual](analisis-visual.md) (V1 a V9, incluida la valoración subjetiva), la [prueba de usabilidad simulada](usabilidad-simulada.md) (U1 a U3) y la [auditoría UI](auditoria-ui.md) (UI1 a UI10) en mejoras ordenadas. **Los hallazgos son observaciones del sitio y de los canales al 2026-10-26 (la auditoría UI, al 2026-10-27). La prioridad, el impacto y el esfuerzo son juicio de quien audita**, no resultados de usuarios ni estimaciones del equipo de Vortex. La versión final se ajusta después de la validación con clientes (paso 6).

## 1. Resumen

De los 39 hallazgos, **3 son de severidad mayor, 22 menores y 14 cosméticos**. Ninguno es crítico: el sitio funciona y tiene una base sólida (método claro, servicios explicados desde el problema del cliente, sitio bilingüe, equipo visible). Lo que le falta es lo que hace confiar a quien contrata:

1. **Decir con claridad qué hace Vortex y para quién**, de la misma forma en todos los canales (H1, H3, C1).
2. **Mostrar resultados reales**: casos de clientes (H2).
3. **Que cada botón haga lo que promete** y cada canal lleve al siguiente paso (H4, H5, C3).

Las mejoras se agrupan en **tres etapas**. La primera es barata y casi toda depende de decisiones de Vortex, no de desarrollo.

## 2. Cómo se ordenó

| Criterio | Qué significa |
|---|---|
| **Impacto** | Alto: afecta a los públicos prioritarios o a todas las visitas. Medio: afecta a un público importante o a un paso. Bajo: afecta a un público secundario o es cosmético |
| **Esfuerzo** | Bajo: ajustes de texto, de enlaces o de configuración. Medio: producir contenido nuevo o coordinar con terceros. Alto: reestructura grande |
| **Depende de** | Qué hace falta de Vortex antes de empezar |
| **Momento** | **Ya:** se puede hacer sin esperar validación. **Después de validar:** conviene probarlo antes con personas reales |

## 3. Las mejoras

### Etapa 1 · Base

| ID | Mejora | Hallazgos | Impacto | Esfuerzo | Depende de | Momento |
|---|---|---|---|---|---|---|
| **M1** | **Ficha oficial de Vortex** y alinear todos los canales: descripción corta y larga, líneas de servicio (cuatro o cinco), cifras con fecha, sectores y sedes | C1, H3 | Alto | Bajo | Decisiones de la dirección | Ya |
| **M2** | **Reformular la primera pantalla** para que diga qué se resuelve y para quién. Probar las opciones A, B y C del [documento de contenido](web-que-mostrar.md) | H1 | Alto | Bajo | M1 (y confirmar el foco sectorial para la opción B) | Elegir ahora; confirmar tras el test (paso 6) |
| **M3** | **Alinear los botones con su destino:** "Agendar una llamada" lleva a un formulario, y las cuatro plataformas llevan a destinos distintos | H4, H5 | Medio | Bajo | Decisión de qué prometer | Ya |
| **M4** | **Arreglos técnicos:** `h1` en la home y en Sobre Vortex; niveles de encabezado según el contenido; metadatos sociales; `canonical`; sitemap y robots; datos estructurados de organización | H7, H8, UI7 | Medio | Bajo | Equipo técnico del sitio | Ya |
| **M5** | **Verificar dos dudas:** el hero en mobile con dispositivos reales (no se reprodujo en una segunda prueba) y el bloque "Platforms" repetido en inglés | H10, H12 | Bajo | Bajo | Un dispositivo real y la versión en pantalla | Ya |
| **M15** | **Legibilidad, accesibilidad y pulido visual:** contraste del pie, escala tipográfica más corta con mínimo de 14 px para lectura, áreas táctiles de 44 × 44 px, botón flotante que no tape contenido, estado del menú, logos con tamaño visual parejo, foco visible con teclado en enlaces, botones y campos | V2, V3, V5, V6, V9, UI3, UI6 | Medio | Bajo | Equipo técnico del sitio | Ya |
| **M17** | **Optimizar imágenes:** exportar a unas 2 veces el tamaño mostrado, versiones por pantalla y carga diferida de lo que está más abajo | V7 | Medio | Bajo | Equipo técnico del sitio | Ya |

### Etapa 2 · Pruebas de confianza

| ID | Mejora | Hallazgos | Impacto | Esfuerzo | Depende de | Momento |
|---|---|---|---|---|---|---|
| **M6** | **Casos de clientes:** dos o tres con problema, qué se hizo y resultado verificable. Plantilla en el [documento de contenido](web-que-mostrar.md), sección 7 | H2 | Alto | Medio | Proyectos y permisos de los clientes | Ya (producir); medir impacto en el paso 6 |
| **M7** | **Datos formales, privacidad y seguridad** visibles en el pie y, si hay qué mostrar, una página de seguridad con certificaciones y tecnologías por servicio | H9, U3 | Medio | Bajo a medio | Qué documentos y certificaciones existen | Ya |
| **M8** | **Ampliar Sobre Vortex:** cifras con fecha y fuente, sedes y partners con su alcance, y una opción de "Alianzas" en el contacto | C1, H2, U2 | Medio | Bajo | M1 | Ya |
| **M9** | **Reordenar la home:** prueba rápida y problemas del cliente por delante, casos antes de las plataformas | H1, H2 | Alto | Medio | M2 y M6 | Después de validar |
| **M16** | **Revisar el recorrido y el peso visual de la home:** largo de la página, desplazamiento con imán entre secciones, tramos vacíos, contenido que sólo aparece al tocar íconos y más protagonismo del contenido que de la decoración | V1, V4, V8 | Medio | Medio | Probar con personas | Después de validar |

### Etapa 3 · Coherencia y alcance

| ID | Mejora | Hallazgos | Impacto | Esfuerzo | Depende de | Momento |
|---|---|---|---|---|---|---|
| **M10** | **Decidir el rol de las plataformas** frente al mensaje principal de consultoría | H5 | Medio | Bajo (decisión) | Dirección | Después del paso 1 |
| **M11** | **El blog en el sitio:** publicar los artículos en vortex-it.com, o llevar cada uno a un siguiente paso | H6 | Medio | Medio | Quién escribe y gestiona | Después del paso 1 |
| **M12** | **LinkedIn, Instagram y YouTube:** definir el papel de cada canal y para quién es; actualizar la descripción de YouTube; llevar el enlace de Instagram al sitio | C2, C3, C4 | Medio | Bajo a medio | M1 y las métricas de cada canal | Descripciones: ya. Línea editorial: después del paso 2 |
| **M13** | **Presencia externa:** hacer la prueba con asistentes de IA y actualizar fichas y notas de prensa que describen a la Vortex de hace años | C5 | Medio | Medio | M1 | La prueba, ya |
| **M14** | **Talento:** sumar el acceso al menú, listar las búsquedas abiertas y ampliar con cultura y proceso | H11, U1 | Bajo | Medio | Prioridad de reclutamiento | Cuando Vortex lo decida |
| **M18** | **Sistema visual base:** tokens de color por rol, escala tipográfica, radios, espaciado, duraciones y cortes de diseño comunes; botones, títulos, tarjetas y formularios en una sola hoja de estilos, con variantes explícitas. Conserva la identidad actual (ver [auditoría UI](auditoria-ui.md), sección 6) | UI1, UI2, UI3, UI4, UI5, UI8, UI9, UI10 | Medio | Medio | Equipo técnico del sitio | Antes del rediseño o junto con él |

## 4. Trazabilidad: cada hallazgo y su mejora

| Hallazgo | Severidad | Mejora |
|---|---|---|
| H1 · La primera pantalla no dice qué hace Vortex ni para quién | 3 | M2, M9 |
| H2 · No hay pruebas de resultados | 3 | M6, M8, M9 |
| C1 · Los canales no cuentan lo mismo | 3 | M1, M8 |
| H3 · Sectores en metadatos y logos, no en el contenido | 2 | M1 |
| H4 · "Agendar una llamada" lleva a un formulario | 2 | M3 |
| H5 · Plataformas con mensajes y destinos incoherentes | 2 | M3, M10 |
| H6 · Todo el blog vive en LinkedIn | 2 | M11 |
| H7 · Información incompleta para buscadores y asistentes de IA | 2 | M4 |
| H8 · Estructura de encabezados | 2 | M4 |
| H9 · Datos formales no visibles | 2 | M7 |
| H10 · Hero mobile con entrada animada | 2 | M5 |
| C2 · LinkedIn mezcla públicos | 2 | M12 |
| C3 · Instagram con otra voz y enlace a Linktree | 2 | M12 |
| C4 · YouTube desactualizado | 2 | M12 |
| C5 · La presencia externa describe a la Vortex de hace años | 2 | M13 |
| H11 · Talento con poco contexto | 1 | M14 |
| H12 · Bloque repetido en inglés | 1 | M5 |
| V1 · Home muy larga y scroll con imán | 2 | M16 |
| V2 · Demasiados tamaños de letra y textos chicos | 2 | M15 |
| V3 · Contraste insuficiente en el pie y sobre el globo | 2 | M15 |
| V4 · Contenido que sólo aparece al tocar íconos | 2 | M16 |
| V5 · Elementos táctiles chicos en mobile | 2 | M15 |
| V6 · Detalles del menú mobile | 1 | M15 |
| V7 · Imágenes sobredimensionadas y cargadas de entrada | 2 | M17 |
| V8 · Peso visual en la decoración | 2 | M16 |
| V9 · Logos con tamaños visuales desparejos | 1 | M15 |
| U1 · Vacantes fuera del sitio y del menú | 1 | M14 |
| U2 · Sin camino para partners | 1 | M8 |
| U3 · Sin tecnologías concretas ni certificaciones | 2 | M7 |
| UI1 · Sin variables de diseño | 1 | M18 |
| UI2 · Cada página reescribe sus componentes | 1 | M18 |
| UI3 · Escala tipográfica sin sistema entre páginas | 2 | M15, M18 |
| UI4 · Botones sin regla de tamaño y forma | 1 | M18 |
| UI5 · Diez radios de esquina | 1 | M18 |
| UI6 · Casi sin estados de foco ni de error | 2 | M15 |
| UI7 · Jerarquía visual distinta de la del contenido | 1 | M4 |
| UI8 · Formularios con lenguaje propio | 1 | M18 |
| UI9 · Cortes de diseño dispersos | 1 | M18 |
| UI10 · Movimiento sin regla común | 1 | M18 |

## 5. Decisiones que se piden a Vortex

| # | Decisión | Destraba |
|---|---|---|
| 1 | ¿Cuál es el foco comercial de los próximos 12 a 24 meses (sectores, países, servicios)? | M1, M2, M10 |
| 2 | ¿Cuántas personas y cuántas líneas de servicio, con qué fecha? | M1, M8 |
| 3 | ¿Qué casos se pueden mostrar y con qué permiso? | M6 |
| 4 | ¿Qué documentos formales y certificaciones existen? | M7 |
| 5 | ¿Qué rol tienen las plataformas y el blog frente a la consultoría? | M10, M11 |
| 6 | ¿Quién gestiona el sitio y cada canal, y qué métricas hay? | M4, M12 |

## 6. Qué no resuelve este plan

- **No dice cuánto aporta cada mejora** a las consultas ni a las ventas: no hay datos de analítica ni de origen de clientes (paso 2).
- **No reemplaza la validación con personas.** El orden de prioridad es una hipótesis hasta el paso 6.
- **No cubre los sitios de las plataformas**, el posicionamiento en buscadores ni la accesibilidad probada con teclado y lectores de pantalla.
- **No es un diseño.** Define qué cambiar y por qué, no cómo se ve.

## 7. Cómo se mide el avance

Indicadores propuestos. Hoy **no hay línea de base**: se miden al empezar.

| Mejora | Indicador | Cómo |
|---|---|---|
| M2 | Porcentaje de personas que, a los cinco segundos, dice correctamente qué hace Vortex y para quién | Test de primera impresión |
| M3 | Porcentaje de personas que anticipa correctamente qué pasa al tocar el botón | Test breve |
| M4 | Controles técnicos cumplidos (h1, metadatos, sitemap, datos estructurados) | Verificación técnica |
| M15 | Textos con contraste de al menos 4,5 a 1, áreas táctiles de al menos 24 × 24 px y foco visible en todo elemento interactivo | Verificación técnica |
| M18 | Valores distintos frente a la línea de base de la [auditoría UI](auditoria-ui.md): 51 tamaños de letra, 10 radios, 0 variables de diseño, 6 nombres para el botón principal | Lectura de los estilos del sitio |
| M17 | Peso total de imágenes de la home y tiempo de carga en un celular de gama media | Herramienta de rendimiento |
| M16, M9 | Éxito y tiempo en las tareas del test (T1 a T9) | Test con personas (paso 6), comparado con la [simulación](usabilidad-simulada.md) |
| M6 | Si quienes lo ven consideran que el caso los ayudó a confiar | Entrevistas (paso 6) |
| M1, M13 | Coincidencia de las respuestas de los asistentes de IA con la ficha oficial | Prueba manual repetida |
| M12 | Consultas y postulaciones por canal | Datos internos (paso 2) |
