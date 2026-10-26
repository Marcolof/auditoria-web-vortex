---
id: documentation.index
type: index
status: draft
updated: 2026-10-26
---

# Documentación · Vortex IT

Fuente detallada del proyecto. Acá vive todo el contexto, las hipótesis, los métodos, las decisiones y, más adelante, los datos y las especificaciones. Está pensada para el equipo y para que una IA pueda leerla y trabajar con ella.

El módulo **UX Research** del Hub es la versión sintética para clientes y ejecutivos. Cuando hay diferencias, manda esta documentación.

## Research

| Documento | Qué contiene | Estado |
|---|---|---|
| [Encuadre](research/encuadre.md) | Propósito, problema, objetivos, preguntas de investigación e hipótesis | Borrador |
| [Roadmap](research/roadmap.md) | Pasos 0–8 con actividades, método, insumos, salida y criterio de cierre | Borrador |
| [Modelo de públicos y confianza](research/modelo-de-publicos.md) | Universo de públicos, qué necesita cada uno para confiar, criterios de priorización | En revisión |
| [Encuadre v1](research/archivo/encuadre-v1.md) | Primera versión, basada en la web actual. Observaciones O1–O10 | Reemplazado |

## Proyecto

| Documento | Qué contiene | Estado |
|---|---|---|
| [Estilo del Hub](proyecto/estilo-hub.md) | Colores, tipografía y tokens del Hub, relevados de vortex-it.com. Sólo aplican al Hub | Borrador |

## Convenciones

Para que la documentación sea legible por personas y por IA:

- **Un tema por archivo**, en Markdown, dentro de la carpeta de su área (`research/`, `proyecto/`, y las que se sumen: `specs/`, `data/`).
- **Metadatos al inicio** de cada archivo, entre `---`:

| Campo | Qué indica |
|---|---|
| `id` | Identificador estable, `área.nombre` |
| `type` | Tipo de documento (`research-framing`, `audience-model`, `research-plan`…) |
| `status` | `draft`, `review`, `approved` o `superseded` |
| `evidence` | Qué lo respalda: `none`, `assumption`, `observed`, `validated` |
| `updated` | Última actualización (AAAA-MM-DD) |
| `depends_on` | `id` de los documentos de los que depende |
| `feeds` | Módulos de UX Research que resumen este documento |
| `sources` | Fuentes externas usadas |
| `supersedes` / `superseded_by` | Reemplazos entre versiones |

- **Hechos, hipótesis y decisiones separados.** Toda hipótesis se marca como tal; todo hecho remite a su fuente.
- **Sin datos personales.** Los participantes se identifican como P1, P2…
- **Los documentos reemplazados no se borran**: pasan a `archivo/` con `status: superseded`.
- **Datos estructurados** (resultados de encuestas, inventarios, hallazgos) irán en `data/` como YAML o CSV cuando existan, y los documentos los citarán.
