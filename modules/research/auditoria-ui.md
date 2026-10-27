# Auditoría UI

> **En una frase:** la web tiene una identidad clara pero no un sistema: se reconoce la marca, pero cada página se armó con sus propios tamaños, botones y esquinas, y casi no hay estados para quien usa el teclado.

**Estado:** para revisar con el equipo. Lo hizo Claude, un modelo de IA: leyó los estilos reales de las 8 páginas del sitio, en escritorio y en celular emulado, el 27 de octubre de 2026. **No participaron personas.** Los valores son medidos; la lectura de composición es juicio experto.

## Qué miramos

El sistema visual que el sitio usa **en la práctica**: colores, tipografía, espaciados, esquinas, botones, tarjetas, formularios, estados (pasar el mouse, foco con teclado, error) y cómo se adapta a distintas pantallas. No es una propuesta de diseño: es el punto de partida para hacerla.

## Lo que está bien y conviene conservar

- **Una paleta corta y reconocible:** negro, verde y blanco, con el violeta sólo en efectos.
- **Una sola tipografía** en todo el sitio.
- **Cabecera, menú y pie iguales en todas las páginas**, con la página actual marcada.
- **Un botón principal claro:** verde lleno con texto negro.
- **Formularios prolijos:** campos de buen tamaño y con etiquetas.
- **Respeta a quien prefiere menos movimiento** en pantalla.

## Dónde se rompe

| # | Qué pasa | Por qué importa |
|---|---|---|
| **1** | **No hay reglas de diseño en el código:** cada color, tamaño y esquina está escrito a mano, y cada página trae sus propios estilos | Cada cambio hay que repetirlo en muchos lugares, y aparecen diferencias que nadie decidió |
| **2** | **51 tamaños de letra** entre las 8 páginas. El título principal mide distinto según la página, y los títulos se achican en pantallas bajas | No hay un "así se ve un título" que la persona aprenda al recorrer el sitio |
| **3** | **El mismo botón cambia de tamaño y forma:** "Conocer [plataforma]" es más chico en la home que en Plataformas, y los secundarios tienen tres formas | Los botones no se leen como una familia |
| **4** | **Diez radios de esquina distintos** entre botones, tarjetas y campos | Suma una sensación de "casi igual" |
| **5** | **Casi no se ve el foco con teclado**, y el formulario quita el indicador | Quien usa el teclado puede perderse justo en el paso de contacto |
| **6** | **El tamaño de los títulos no sigue su importancia:** en Plataformas, "¿Qué permite?" es más importante en el código que el nombre del producto | Afecta a quien escanea, a lectores de pantalla y a buscadores |
| **7** | **Etiquetas del formulario en 11 px**, el texto más chico de la página | Es lo primero que se lee al completar el contacto |

También hay diferencias menores en los cortes para distintas pantallas y en la velocidad de las animaciones.

## En números

| | Hoy |
|---|---|
| Variables de diseño en el código | **0** |
| Tamaños de letra distintos | **51** |
| Radios de esquina distintos | **10** |
| Nombres distintos para el botón principal | **6** |
| Reglas propias de foco con teclado | **0** (sólo el formulario, que quita el indicador del navegador) |

Son la **línea de base** para medir la mejora.

## Qué hacer con esto

| | Qué |
|---|---|
| **Conservar** | Paleta, tipografía, botón principal, títulos de sección verdes, cabecera y pie |
| **Unificar** | Colores por función, escala de letra, familia de botones, esquinas, animaciones y cortes de pantalla |
| **Agregar** | Foco visible, estados de error y de botón presionado |
| **Rediseñar** | Jerarquía de títulos, etiquetas del formulario, logos y el peso visual de la home |

**Recomendación:** antes del rediseño, escribir la **base del sistema visual** (nueva mejora 18 del plan): las reglas de color, letra, botones y componentes que salen de lo que se conserva. La marca no cambia: se ordena. El foco con teclado se puede arreglar ya, como parte de la mejora de legibilidad y accesibilidad.

## Qué no se verificó

- El envío del formulario y sus mensajes de error: no se envían formularios del sitio de Vortex.
- La navegación completa con teclado y lector de pantalla.
- La versión en inglés y los anchos de pantalla intermedios.

Estos 10 hallazgos ya se sumaron al [plan de mejoras](?m=conclusiones).

---

Detalle con valores, inventario de componentes y estados en Documentación: [auditoría UI](../documentation/?doc=research/auditoria-ui.md).
