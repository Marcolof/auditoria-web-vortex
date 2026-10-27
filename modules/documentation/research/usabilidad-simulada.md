---
id: research.usabilidad-simulada
type: simulated-usability-test
status: draft
evidence: assumption
updated: 2026-10-26
depends_on: [research.modelo-de-publicos, research.auditoria-web]
feeds: [research/usabilidad, research/validacion]
sources: [vortex-it.com snapshot 2026-10-26, linkedin.com/company/vortex-it-ok 2026-10-26]
---

# Prueba de usabilidad simulada · vortex-it.com

> **Esto no es un test con usuarios.** Claude (modelo de IA) asumió el rol de cada perfil del [modelo de públicos](modelo-de-publicos.md), recibió una tarea y la intentó sobre el sitio publicado, siguiendo sólo lo que el sitio muestra. Los resultados indican **dónde es probable que una persona se trabe**, no cuántas lo harían ni cuánto tardarían. Las tareas quedan listas para repetirse con personas reales en el paso 6.

## 1. Método

| Aspecto | Detalle |
|---|---|
| Quién | Claude, en el rol de 8 perfiles del modelo de públicos |
| Sobre qué | vortex-it.com publicado, 2026-10-26. Escritorio emulado 1280 × 800 y mobile emulado 375 × 812 |
| Cómo | Para cada tarea: empezar en la home, seguir menús, enlaces y textos visibles, registrar el recorrido y dónde estaba (o no) la información. Además, se buscó cada dato clave en el texto visible de las ocho páginas en español |
| Formularios | Se llegó hasta ellos y se revisaron sus campos. **No se envió ninguno** |
| Resultado por tarea | **Éxito:** completa la tarea con lo que muestra el sitio. **Parcial:** la completa a medias o tiene que deducir. **Fallo:** el sitio no tiene la información o el camino |

### Sesgos y límites de la simulación

- **Conocimiento previo:** el mismo agente hizo la auditoría y ya conocía el sitio. Esto **sobreestima el éxito**: una persona nueva probablemente tarde más o no encuentre cosas que el agente sí.
- **Lee todo:** una IA no se cansa ni escanea como una persona. Lo que encuentra "al final de la página" puede pasarle inadvertido a alguien con poco tiempo.
- **Sin tiempos ni emociones:** no hay tiempo real de tarea, frustración ni confianza percibida.
- **Primera impresión:** la tarea de 5 segundos se simuló leyendo la primera pantalla. No equivale a la mirada rápida de una persona.

## 2. Resultados

| # | Perfil | Tarea | Resultado |
|---|---|---|---|
| T1 | Quien decide (banca) | Averiguar si Vortex trabajó con bancos y en qué | Parcial |
| T2 | Quien decide | Pedir una reunión por un proyecto de automatización | Éxito |
| T3 | Quien evalúa lo técnico | Saber qué tecnologías usa en IA y si tiene certificaciones | Parcial |
| T4 | Quien impulsa (RR. HH.) | Ver si Vortex tiene algo para revisar muchos CV | Éxito |
| T5 | Compras y legales | Encontrar la razón social y la política de privacidad | Fallo |
| T6 | Talento | Ver si hay una vacante de desarrollo de IA y postularse | Parcial |
| T7 | Partner | Proponer una alianza comercial | Parcial |
| T8 | Quien decide, en el celular | Entender qué hace Vortex y llegar al contacto | Éxito |
| T9 | Cualquiera | Primera impresión: decir qué hace Vortex y para quién | Parcial |

**Total:** 3 éxitos, 5 parciales y 1 fallo en 9 tareas. Como el agente ya conocía el sitio, es esperable que con personas reales el resultado sea igual o peor.

## 3. Detalle por tarea

### T1 · Quien decide (banca): ¿trabajó con bancos? — Parcial

- **Enunciado:** "Sos gerente de operaciones en un banco. Querés saber rápido si esta empresa ya trabajó con bancos y en qué tipo de proyecto."
- **Recorrido:** home, desplazarse hasta "Confían en nosotros", la quinta sección, a unos 4.400 px del inicio. Ahí aparecen los logos de Galicia y Naranja X en un carrusel, sin enlace. Soluciones no menciona sectores.
- **Dónde se trabó:** las palabras "banco", "banca", "financiero" o "fintech" no aparecen en el texto visible de ninguna de las ocho páginas en español. No hay ningún caso.
- **Relacionado con:** H2, C1, V1.

### T2 · Quien decide: pedir una reunión por automatización — Éxito

- **Recorrido:** "Hablemos" en el menú superior (1 clic), luego el formulario. La opción "Automatización con RPA e IA" existe.
- **Fricción:** seis campos obligatorios antes de enviar. Si en cambio sigue el botón final de la home, "Agendar una llamada", llega al mismo formulario y no a una agenda.
- **Positivo:** el campo de etapa es opcional e incluye "Explorando oportunidades".
- **Relacionado con:** H4.

### T3 · Quien evalúa lo técnico: tecnologías y certificaciones — Parcial

- **Recorrido:** Soluciones › IA e innovación ("IA generativa, agentes y asistentes", "arquitecturas de datos para IA"), sin tecnologías concretas. Logos de partners en la home, sin explicación. Las tecnologías aparecen sólo en las biografías de tres directores, en Sobre Vortex.
- **Dónde se trabó:** la palabra "certificación" no aparece en ninguna página. No hay información de seguridad de la empresa.
- **Hallazgo nuevo:** U3.

### T4 · Quien impulsa (RR. HH.): algo para revisar CV — Éxito

- **Recorrido:** "Plataformas" en el menú (1 clic), desplazarse hasta OmnIA Talents ("Análisis de CVs", "Screening de candidatos"), botón que abre omniatalents.com en otra pestaña.
- **Riesgo (hipótesis):** "CV" también aparece en "Trabajá con nosotros", que es para postularse. Una persona podría confundir los dos caminos.
- **Relacionado con:** H5.

### T5 · Compras y legales: razón social y privacidad — Fallo

- **Recorrido:** pie de página. Sólo hay contacto, redes y navegación.
- **Dónde se trabó:** "privacidad", "razón social", "CUIT" y "términos" no aparecen en ninguna de las ocho páginas. Los formularios sí traen un aviso breve sobre el uso de los datos.
- **Relacionado con:** H9.

### T6 · Talento: vacante de IA y postulación — Parcial

- **Recorrido:** "Trabajá con nosotros" **no está en el menú principal**, ni en escritorio ni en mobile. Está en el pie de página y al final de Sobre Vortex. La página tiene un formulario general, sin vacantes.
- **Dónde se trabó:** el mismo día, la página de LinkedIn de Vortex mostraba una búsqueda activa de "Desarrollador/a de Agentes de IA (Python)". Esa vacante no figura en el sitio.
- **Hallazgo nuevo:** U1 (fusionado después en H11).

### T7 · Partner: proponer una alianza — Parcial

- **Recorrido:** la home muestra logos de partners, sin explicación. En el formulario de Hablemos, las opciones son los cinco servicios y "Otro"; no hay una opción para alianzas.
- **Dónde se trabó:** no hay un camino específico. Se puede escribir por "Otro".
- **Hallazgo nuevo:** U2.

### T8 · Quien decide, en el celular: entender y contactar — Éxito

- **Recorrido:** el titular, la bajada y el botón se vieron al cargar. Menú (1 toque), siete opciones, "Hablemos" (2.º toque).
- **Fricción:** botón de menú de 32 × 23 px e ítems de 31 px de alto (V5). El menú se abre sobre el titular sin oscurecer el fondo (V6).
- **Nota:** en esta prueba no se reprodujo el retraso del hero registrado como H10.

### T9 · Primera impresión — Parcial

- **Lo que se ve:** logo, "La IA cambió las reglas", "Impulsamos la evolución de las organizaciones mediante estrategias de Transformación Digital AI-First" y "Conocé nuestra visión".
- **Respuesta simulada:** "Una empresa de transformación digital con IA, para organizaciones en general. No sé qué hace en concreto ni si trabaja con empresas como la mía."
- **Relacionado con:** H1.

## 4. Hallazgos nuevos

### U1 · Las vacantes no están en el sitio y "Trabajá con nosotros" no está en el menú — Fusionado en H11

> Fusionado en **H11** de la [auditoría web](auditoria-web.md) el 2026-10-27: es el mismo problema del público talento, visto en la tarea. No se cuenta aparte.

| Campo | Contenido |
|---|---|
| Observación | El menú principal (escritorio y mobile) no incluye "Trabajá con nosotros". La página no lista vacantes, aunque LinkedIn mostraba una búsqueda activa el mismo día |
| Criterio | Nielsen 6 (reconocer antes que recordar); coherencia entre canales |
| Severidad | 1: talento es un público secundario |
| Recomendación | Sumar el acceso al menú o al pie con más visibilidad, y listar o enlazar las búsquedas abiertas |

### U2 · No hay un camino para partners — Severidad 1

| Campo | Contenido |
|---|---|
| Observación | Los partners aparecen sólo como logos. El formulario no tiene una opción para alianzas |
| Criterio | Modelo de públicos: quienes recomiendan necesitan un canal propio |
| Severidad | 1 |
| Recomendación | Agregar "Alianzas" como opción del formulario y explicar qué se hace con cada partner |

### U3 · Quien evalúa lo técnico no encuentra tecnologías concretas ni certificaciones — Severidad 2

| Campo | Contenido |
|---|---|
| Observación | Las soluciones describen capacidades, no tecnologías. Las tecnologías sólo aparecen en biografías de directivos. "Certificación" no aparece en ninguna página |
| Criterio | Dimensión **capacidad** del modelo de confianza |
| Severidad | 2: es un público prioritario y no hay otro lugar del sitio que lo compense |
| Recomendación | Sumar tecnologías por servicio y, si existen, certificaciones y partners con su nivel |

## 5. Para repetir con personas reales (paso 6)

Las nueve tareas sirven tal cual como base del test real, con estos cambios:

- **Enunciados:** usar los de este documento, que evitan las palabras del sitio (por ejemplo, no decir "Hablemos" ni "Plataformas").
- **Participantes:** 5 a 8 personas de los perfiles prioritarios (quien decide, quien evalúa lo técnico, quien impulsa). Talento, compras y partners pueden quedar para una segunda ronda.
- **Formato:** remoto, moderado, 30 a 40 minutos, pensando en voz alta.
- **Qué medir:** éxito, tiempo, clics, errores, si pidió ayuda y una pregunta de confianza al final ("¿Contactarías a esta empresa? ¿Por qué?").
- **Primera impresión:** T9 se hace al principio, con la página real o con las opciones de mensaje A, B y C del [documento de contenido](web-que-mostrar.md).
- **Comparación:** contrastar los resultados con esta simulación, para ver qué tan bien la IA anticipó los problemas.
