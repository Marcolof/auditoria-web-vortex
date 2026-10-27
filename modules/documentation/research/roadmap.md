---
id: research.roadmap
type: research-plan
status: draft
evidence: none
updated: 2026-10-26
depends_on: [research.encuadre]
feeds: [research/plan]
---

# Roadmap del research

> **Fecha:** 2026-10-26 · **Estado:** borrador para validar
> Encuadre: [Encuadre](encuadre.md)

## Vista general

```
 PASO 0          PASO 1          PASO 2          PASO 3 ─┐
 Modelo de  ──►  Conocimiento ─► Datos      ──►          ├─► PASO 5        ──► PASO 6       ──► PASO 7    ──► PASO 8
 públicos        interno         existentes      PASO 4 ─┘   Priorización      Validación       Síntesis      Recomendaciones
 (general)                                                   e ICP (hipótesis) externa
 └──────────── Entender ────────────┘  └─── Evaluar ───┘     └──────── Definir y validar ────────┘  └── Decidir ──┘
```

| Paso | Nombre | Pregunta que responde | Salida | Estado |
|---|---|---|---|---|
| 0 | Modelo de públicos | ¿Qué públicos atiende una web IT B2B y qué necesitan para confiar? | [Modelo de públicos y confianza](modelo-de-publicos.md) | **En revisión** |
| 1 | Conocimiento interno | ¿Qué sabe Vortex de sus clientes y a quién quiere captar? | Mapa de supuestos internos | Pendiente |
| 2 | Datos existentes | ¿Qué dicen los datos sobre cartera, leads y canales? | Segmentación con datos | Pendiente |
| 3 | Auditoría de presencia | ¿Cómo atienden hoy la web y las redes a cada público? | [Auditoría web](auditoria-web.md), [análisis visual](analisis-visual.md) y [análisis de comunicación](analisis-comunicacion.md) | Borrador; falta la prueba con asistentes de IA y las métricas internas |
| 4 | Benchmark | ¿Cómo se posicionan los competidores? | Mapa de posicionamiento | Pendiente |
| 5 | Priorización e ICP | ¿A quién le hablamos primero? | Públicos priorizados, ICP y proto-personas (hipótesis) | Pendiente; adelanto en [qué debería mostrar la web](web-que-mostrar.md) |
| 6 | Validación externa | ¿Lo que suponemos coincide con lo que dicen los públicos reales? | Evidencia de entrevistas y test | Pendiente; tareas preparadas y [simuladas con IA](usabilidad-simulada.md) |
| 7 | Síntesis | ¿Qué aprendimos con evidencia? | Personas, journeys, mapa público–confianza–canal | Pendiente |
| 8 | Recomendaciones | ¿Qué hacemos con esto? | Criterios y prioridades para la siguiente etapa | Borrador preliminar: [plan de mejoras](plan-de-mejoras-web.md) |

Los pasos 3 y 4 pueden correr en paralelo con el 1 y el 2. Los demás dependen del anterior.

---

## Paso 0 · Modelo general de públicos y confianza

**Objetivo.** Tener un mapa de públicos y de lo que cada uno necesita para confiar, construido **sin mirar la web actual de Vortex**, para no heredar sus sesgos.

**Actividades**
- Listar todos los públicos posibles de una web institucional IT B2B, incluidos los no prioritarios (talento) y los no humanos (buscadores y asistentes de IA).
- Para cada público: qué viene a hacer, qué pregunta de confianza trae, qué pruebas necesita, qué lo aleja y cuál es su siguiente paso.
- Describir el comité de compra B2B y cómo se reparte la decisión.
- Definir los criterios con los que se priorizarán los públicos en el paso 5.
- Revisar el modelo con el equipo de Vortex.

**Método.** Investigación de escritorio y modelos de confianza de referencia. Revisión con el equipo.
**Insumos.** Ninguno de Vortex (a propósito).
**Salida.** [Modelo de públicos y confianza](modelo-de-publicos.md)
**Listo cuando.** El equipo validó el universo de públicos y los criterios de priorización, y anotó qué falta o sobra.

---

## Paso 1 · Conocimiento interno

**Objetivo.** Recoger lo que Vortex ya sabe (y lo que supone) sobre a quién vende, cómo llegan los clientes y por qué ganan o pierden.

**Actividades**
- 4 a 6 entrevistas de 45 minutos con dirección, comercial, delivery, marketing y RR. HH.
- Preguntar por los públicos del paso 0: cuáles reconocen, cuáles priorizan y por qué.
- Relevar el objetivo comercial de los próximos 12–24 meses (industria, país, servicio o plataforma a empujar).
- Separar lo que saben con datos de lo que suponen.

**Método.** Entrevistas a stakeholders con guion semiestructurado.
**Insumos.** Acceso a las personas; modelo del paso 0.
**Salida.** Mapa de supuestos internos (qué se sabe, qué se supone, dónde no hay acuerdo).
**Listo cuando.** Hay una prioridad comercial explícita y una lista de supuestos a validar.

---

## Paso 2 · Datos existentes

**Objetivo.** Contrastar los supuestos internos con datos reales de cartera, captación y canales.

**Actividades**
- Segmentar las cuentas activas por industria, tamaño, país, servicio, antigüedad y valor.
- Analizar los contactos que llegan por el formulario: cargo, país, servicio, etapa de la iniciativa.
- Revisar la analítica web: de dónde llegan las visitas, qué páginas ven, dónde se van.
- Revisar métricas de LinkedIn, Instagram y YouTube: quién sigue y quién interactúa.
- Ver, si existe el registro, de dónde salieron los clientes ganados (recomendación, partner, búsqueda, evento, outbound).

**Método.** Análisis de datos secundarios.
**Insumos.** Exportaciones anonimizadas de CRM, formulario, analítica y redes.
**Salida.** Segmentación con datos y origen de los clientes.
**Listo cuando.** Cada segmento candidato tiene datos que lo respaldan, o se declara que no los hay.

---

## Paso 3 · Auditoría de presencia

**Objetivo.** Evaluar cómo la web y las redes atienden hoy a cada público del modelo.

**Actividades**
- Recorrer web (ES y EN), LinkedIn, Instagram y YouTube como cada público.
- Por público: ¿se identifica?, ¿encuentra las pruebas de confianza que necesita?, ¿tiene un siguiente paso claro?
- Revisar coherencia de mensaje entre canales y qué responden buscadores y asistentes de IA sobre Vortex.
- Reutilizar las observaciones O1–O10 del [encuadre anterior](archivo/encuadre-v1.md).

**Método.** Revisión experta por público (heurística de mensaje y contenido).
**Insumos.** Fuentes públicas; modelo del paso 0.
**Salida.** Matriz público × canal con fortalezas y faltantes.
**Listo cuando.** Cada público prioritario tiene un diagnóstico con evidencia ubicable.

---

## Paso 4 · Benchmark

**Objetivo.** Ver cómo se posicionan competidores y referentes, y qué espacio queda libre.

**Actividades**
- Elegir 5 a 8 referentes: competidores directos (consultoras IT de la región) y referentes de buena práctica.
- Comparar: a quién le hablan, cómo prueban confianza, qué llamadas a la acción usan, cómo tratan a talento y partners.
- Detectar patrones a adoptar, a evitar y diferenciales posibles.

**Método.** Benchmarking UX y de mensaje.
**Insumos.** Lista de competidores acordada con Vortex.
**Salida.** Tabla comparativa y mapa de posicionamiento.
**Listo cuando.** Hay al menos un diferencial posible identificado para Vortex.

---

## Paso 5 · Priorización e ICP (hipótesis)

**Objetivo.** Decidir a qué públicos se les habla primero y definir el perfil de cuenta ideal.

**Actividades**
- Puntuar los públicos con los criterios del paso 0, usando los insumos de los pasos 1 a 4.
- Definir el ICP prioritario y uno o dos secundarios.
- Armar proto-personas del comité de compra y de los públicos secundarios elegidos.
- Escribir los jobs to be done de cada uno.

**Método.** Matriz de priorización, proto-personas, JTBD.
**Insumos.** Salidas de los pasos 0 a 4.
**Salida.** Públicos priorizados, ICP y proto-personas, **marcados como hipótesis**.
**Listo cuando.** El equipo acuerda el orden de prioridad y sabe qué hay que validar afuera.

---

## Paso 6 · Validación externa

**Objetivo.** Contrastar las hipótesis con personas reales de los públicos prioritarios.

**Actividades**
- 6 a 10 entrevistas: clientes actuales, oportunidades perdidas y prospectos del ICP.
- 2 a 4 entrevistas a públicos secundarios elegidos (por ejemplo, un partner y un candidato).
- Test de primera impresión de la home (5 segundos) con perfiles del ICP: qué entienden que hace Vortex y para quién.
- Test de tareas con 5 a 8 personas de los perfiles prioritarios, con las tareas T1 a T9 ya probadas en la [usabilidad simulada](usabilidad-simulada.md).
- Consentimiento informado y anonimización.

**Método.** Entrevistas en profundidad, test de primera impresión y test de tareas.
**Insumos.** Proto-personas del paso 5; contactos y reclutamiento.
**Salida.** Notas y grabaciones anonimizadas, con su procedencia.
**Listo cuando.** Cada hipótesis prioritaria quedó confirmada, ajustada o descartada.

---

## Paso 7 · Síntesis

**Objetivo.** Consolidar lo aprendido en artefactos con evidencia.

**Actividades**
- Agrupar observaciones en patrones (affinity mapping).
- Pasar de proto-personas a personas con evidencia.
- Armar el journey de compra B2B y el de los públicos secundarios elegidos.
- Construir el mapa público → pruebas de confianza → canal → siguiente paso.

**Método.** Affinity mapping, personas, journey map.
**Insumos.** Salidas del paso 6.
**Salida.** Informe de síntesis con hallazgos, evidencia y limitaciones.
**Listo cuando.** Cada hallazgo remite a su fuente y las limitaciones están visibles.

---

## Paso 8 · Recomendaciones

**Objetivo.** Traducir los hallazgos en decisiones.

**Actividades**
- Criterios para la auditoría de imagen dirigida: qué debe probar la presencia de Vortex a cada público.
- Prioridades para web y canales: qué mostrar, a quién, dónde y con qué llamada a la acción.
- Definir el siguiente escenario: auditoría dirigida, rediseño de la web o estrategia de contenidos.

**Método.** Priorización por impacto y esfuerzo.
**Insumos.** Síntesis del paso 7.
**Salida.** Documento de recomendaciones y, si se pide, una presentación.
**Listo cuando.** El equipo eligió qué hacer primero.

---

## Decisiones pendientes que destraban el roadmap

| Decisión | Destraba | Responsable |
|---|---|---|
| Validar el modelo de públicos del paso 0 | Paso 1 | Equipo Vortex |
| Qué datos internos existen y se pueden compartir | Paso 2 | Vortex |
| Quiénes participan en las entrevistas internas | Paso 1 | Vortex |
| Lista de competidores de referencia | Paso 4 | Vortex + UX |
| Acceso a clientes y prospectos para entrevistar | Paso 6 | Comercial |

---

## Relación con el módulo UX Research

Esta documentación es la fuente detallada. El módulo **UX Research** del Hub muestra una versión sintética para clientes y ejecutivos, organizada por temas en vez de por pasos:

| Módulo de UX Research | Pasos que lo alimentan | Documentos fuente |
|---|---|---|
| Plan del research | 0–8 | [encuadre.md](encuadre.md), este roadmap |
| Públicos y confianza | 0, 5 | [modelo-de-publicos.md](modelo-de-publicos.md) |
| Negocio y clientes | 1, 2 | Pendiente |
| Auditoría web | 3 | [auditoria-web.md](auditoria-web.md) |
| Diseño visual y UI | 3 | [analisis-visual.md](analisis-visual.md), [auditoria-ui.md](auditoria-ui.md) |
| Usabilidad simulada | 3, 6 (simulado) | [usabilidad-simulada.md](usabilidad-simulada.md) |
| Análisis de comunicación | 3 | [analisis-comunicacion.md](analisis-comunicacion.md) |
| Qué mostrar en la web | 0, 3, 5, 8 | [web-que-mostrar.md](web-que-mostrar.md) (preliminar, a validar en el paso 6) |
| Benchmark | 4 | Pendiente |
| Validación con clientes | 6 | Pendiente |
| Hallazgos y recomendaciones | 7, 8 | [plan-de-mejoras-web.md](plan-de-mejoras-web.md) (preliminar; la versión final sale después del paso 6) |

Cuando un paso produce contenido nuevo, primero se documenta acá y después se resume en el módulo correspondiente de UX Research.
