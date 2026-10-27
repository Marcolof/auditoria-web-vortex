# Diseño visual y UI

> **En una frase:** la web tiene una identidad fuerte y se ve moderna, pero prioriza la atmósfera sobre la información y no tiene un sistema detrás: cada página se armó con sus propios tamaños, botones y esquinas.

**Estado:** para revisar con el equipo. Lo hizo Claude, un modelo de IA, en dos pasadas: una revisión de cómo se ve el sitio (26 de octubre de 2026) y una lectura de los estilos reales de las 8 páginas, en escritorio y en celular emulado (27 de octubre). **No participaron personas.** Lo medido es exacto; lo estético y la composición son juicio experto.

## Qué miramos

| Mirada | Pregunta |
|---|---|
| **Cómo se ve** | ¿Es atractiva? ¿Se lee bien? ¿Dónde se pone el peso visual? ¿Cómo se recorre? |
| **El sistema detrás** | ¿Qué colores, tamaños, botones y estados usa en la práctica? ¿Es consistente entre páginas? |

## Qué tan bien ve una IA lo visual

| Bien | Con límites |
|---|---|
| Medir tamaños, colores y contraste desde el código, con exactitud | Detalles finos de pocos píxeles |
| Leer jerarquía, composición y consistencia en capturas | Animaciones: las ve como fotos, no si son fluidas |
| Recorrer el sitio en escritorio y mobile emulado | Rendimiento y teléfonos reales |
| | Cómo lo siente emocionalmente el público |

## Lo que funciona y conviene conservar

- **Identidad fuerte y coherente:** negro, verde y blanco en todo el sitio, con el violeta sólo en efectos.
- **Una sola tipografía** en todas las páginas.
- **El texto principal se lee muy bien:** contraste muy por encima del mínimo.
- **Un botón principal claro:** verde lleno con texto negro, distinto del secundario.
- **Cabecera, menú y pie iguales en todas las páginas**, con la página actual marcada.
- **Las plataformas se muestran con pantallas reales** del producto.
- **Formularios prolijos**, y respeta a quien prefiere menos movimiento en pantalla.

## Qué tan atractiva es (opinión)

Puntaje de 1 a 5 de quien revisó. Es un juicio, no un dato: el público de Vortex podría verlo distinto.

| Dimensión | Puntaje |
|---|---|
| Primera impresión | 4 |
| Identidad y coherencia | 4 |
| Color | 4 |
| Imágenes y recursos | 3 |
| Tipografía | 3 |
| Scroll y movimiento | 3 |
| Legibilidad | 3 |
| Distribución del peso visual | 2 |
| Ritmo y uso del espacio | 2 |

**Promedio: 3,1 de 5.** La web **impacta y se ve moderna**, pero **prioriza la atmósfera sobre la información**. Lo mejor: la sección de Visión y las pantallas de las plataformas. Lo más débil: Soluciones y Cómo trabajamos, donde la decoración tapa el contenido.

## Lo que hay que mejorar

### Recorrido y peso visual

| Qué pasa | Por qué importa |
|---|---|
| **La home es muy larga** (unas 11 pantallas) y salta entre secciones con un efecto de imán, con tramos vacíos | Quien tiene poco tiempo tarda mucho en llegar a clientes, cifras y contacto |
| **El peso visual está en la decoración:** tarjetas chicas en secciones enormes, íconos grandes con etiquetas mínimas | El ojo no encuentra rápido dónde detenerse |
| **Contenido que sólo aparece al tocar íconos** | Quien escanea no lo ve |

### Legibilidad y accesibilidad

| Qué pasa | Por qué importa |
|---|---|
| **Textos chicos y livianos:** menú y pie en 12–13 px, etiquetas del formulario en 11 px | Cuesta leer, sobre todo en el celular |
| **Textos del pie con poco contraste** y texto sobre el globo animado | No cumple el mínimo de accesibilidad |
| **Casi no se ve el foco con teclado**, y el formulario quita el indicador | Quien usa el teclado puede perderse justo en el paso de contacto |
| **En el celular, botones e íconos chicos** y un botón flotante que tapa texto | Es fácil tocar el equivocado |

### Sistema y consistencia

| Qué pasa | Por qué importa |
|---|---|
| **No hay reglas de diseño en el código:** cada color, tamaño y esquina está escrito a mano, y cada página trae sus propios estilos | Cada cambio hay que repetirlo en muchos lugares, y aparecen diferencias que nadie decidió |
| **51 tamaños de letra** entre las 8 páginas; el título principal mide distinto según la página | No hay un "así se ve un título" que la persona aprenda al recorrer el sitio |
| **El mismo botón cambia de tamaño y forma** entre páginas, y los secundarios tienen tres formas | Los botones no se leen como una familia |
| **Diez radios de esquina distintos** | Suma una sensación de "casi igual" |
| **El tamaño de los títulos no sigue su importancia** | Afecta a quien escanea, a lectores de pantalla y a buscadores |

### Imágenes

| Qué pasa | Por qué importa |
|---|---|
| **Imágenes hasta 7 veces más grandes de lo que se muestran**, todas cargadas de entrada (unos 2 MB en la home) | En el celular, la página tarda y consume más de lo necesario |
| **Logos de clientes con tamaños y tratamientos desparejos** | Unos clientes parecen más importantes que otros |

## En números

Línea de base para medir la mejora.

| | Hoy |
|---|---|
| Atractivo (opinión) | **3,1 de 5** |
| Alto de la home | **unas 11 pantallas** |
| Peso de imágenes en la home | **unos 2 MB** |
| Tamaños de letra distintos (8 páginas) | **51** |
| Radios de esquina distintos | **10** |
| Variables de diseño en el código | **0** |
| Reglas propias de foco con teclado | **0** |

## Qué hacer con esto

| | Qué |
|---|---|
| **Conservar** | Paleta, tipografía, botón principal, títulos de sección verdes, cabecera, pie y pantallas de las plataformas |
| **Unificar** | Colores por función, escala de letra, familia de botones, esquinas, animaciones y cortes de pantalla |
| **Agregar** | Foco visible, estados de error y de botón presionado |
| **Rediseñar** | Recorrido y peso visual de la home, contenido oculto tras íconos, jerarquía de títulos, etiquetas del formulario y logos |

**Recomendación:** arreglar ya lo que es barato (contraste, tamaños mínimos, foco visible, imágenes) y, antes del rediseño, escribir la **base del sistema visual**: las reglas de color, letra, botones y componentes que salen de lo que se conserva. La marca no cambia: se ordena. El recorrido de la home conviene probarlo con personas antes de rehacerlo.

## Qué no se verificó

- El scroll y las animaciones en un teléfono de gama media.
- El envío del formulario y sus mensajes de error: no se envían formularios del sitio de Vortex.
- La navegación completa con teclado y lector de pantalla.
- La versión en inglés y los anchos de pantalla intermedios.

Cómo se traban las personas al usar el sitio está en [Usabilidad simulada](?m=usabilidad). Todos estos puntos ya están en el [plan de mejoras](?m=conclusiones).

---

Detalle en Documentación: [análisis visual](../documentation/?doc=research/analisis-visual.md) (cómo se ve, atractivo, imágenes y scroll) y [auditoría UI](../documentation/?doc=research/auditoria-ui.md) (sistema de hecho, componentes y estados).
