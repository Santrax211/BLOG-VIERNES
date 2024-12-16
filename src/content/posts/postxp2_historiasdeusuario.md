---
title: 2. Historias de usuario
slug: historias-de-usuario-en-xp
description: Desarrollando historias de usuario en xp
category:
  - xp
tags:
  - historias
pubDate: 2024-09-15
cover: https://www.iebschool.com/blog/wp-content/uploads/2021/11/Scrum-board-pana-1024x1024.png
coverAlt: AstroVerse-Aliases
author: Gerson Sahuma
---

Las historias de usuario en el marco de trabajo XP (Extreme Programming) son una de las herramientas clave para gestionar los requisitos de un sistema de manera ágil y flexible. En XP, las historias de usuario son descripciones breves, concisas y fáciles de entender de lo que un usuario final espera del sistema. Estas historias se centran en las necesidades y expectativas de los usuarios, y se redactan de tal manera que faciliten el desarrollo incremental y las mejoras continuas.

La principal ventaja de las historias de usuario en XP es que promueven la colaboración estrecha entre el cliente y el equipo de desarrollo, asegurando que el producto final se alinee con las expectativas del usuario. A través de la interacción constante, las historias de usuario permiten adaptarse a cambios rápidamente y son una forma efectiva de gestionar el trabajo durante las iteraciones.

Cada historia de usuario en XP debe cumplir con ciertos criterios para ser efectiva, como ser pequeña y sencilla, contener la información suficiente para que el equipo de desarrollo pueda comenzar a trabajar, y tener una validación clara que garantice que se han cumplido los requisitos del usuario. Además, estas historias deben ser priorizadas para asegurar que el equipo se enfoque en lo más importante para el negocio o el cliente, siempre siguiendo el principio de entregar valor en cada iteración.

Al implementar historias de usuario dentro de un proyecto de desarrollo en XP, se favorece la adaptabilidad, la comunicación constante y el enfoque centrado en el usuario, lo cual es fundamental para crear productos de software exitosos y de alta calidad.

## Historias de usuario
---

| Historia de Usuario | Número | 6 |
|----------------------|--------|---|
| Usuario              | Bibliotecaria |
| Nombre Historia      | Registro de préstamo de un libro fuera de la institución |
| Prioridad en Negocio | Media |
| Riesgo en Desarrollo | Bajo |
| Puntos Estimados     | 5 |
| Iteración Asignada   | 3 |
| Programador Responsable | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción          | Como bibliotecaria, quiero registrar el préstamo de un libro fuera de la institución para estudiantes o docentes |
| Observaciones        | Esta funcionalidad debe integrarse con la base de datos y validar la disponibilidad del ejemplar solicitado. |

---

| Historia de Usuario | Número | 10 |
|----------------------|--------|----|
| Usuario              | Estudiante |
| Nombre Historia      | Solicitud de un libro para leerlo dentro de la institución |
| Prioridad en Negocio | Alta |
| Riesgo en Desarrollo | Medio |
| Puntos Estimados     | 3 |
| Iteración Asignada   | 3 |
| Programador Responsable | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní |
| Descripción          | Como estudiante, quiero solicitar un libro para leerlo dentro de la institución |
| Observaciones        | La solicitud debe incluir detalles como la fecha y el horario de uso. |

---

| Historia de Usuario | Número | 11 |
|----------------------|--------|----|
| Usuario              | Estudiante |
| Nombre Historia      | Solicitud de un libro para leerlo fuera de la institución |
| Prioridad en Negocio | Alta |
| Riesgo en Desarrollo | Alto |
| Puntos Estimados     | 8 |
| Iteración Asignada   | 3 |
| Programador Responsable | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní |
| Descripción          | Como estudiante, quiero solicitar un libro para leerlo fuera de la institución |
| Observaciones        | Requiere aprobación previa de la bibliotecaria. |

---

| Historia de Usuario | Número | 12 |
|----------------------|--------|----|
| Usuario              | Docente |
| Nombre Historia      | Búsqueda de libros con o sin filtros |
| Prioridad en Negocio | Media |
| Riesgo en Desarrollo | Bajo |
| Puntos Estimados     | 5 |
| Iteración Asignada   | 3 |
| Programador Responsable | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní |
| Descripción          | Como docente, quiero buscar libros con o sin filtros |
| Observaciones        | Los resultados deben mostrar la disponibilidad de los libros en tiempo real. |

---

| Historia de Usuario | Número | 13 |
|----------------------|--------|----|
| Usuario              | Docente |
| Nombre Historia      | Solicitud de un libro para leerlo dentro o fuera de la institución |
| Prioridad en Negocio | Alta |
| Riesgo en Desarrollo | Medio |
| Puntos Estimados     | 6 |
| Iteración Asignada   | 3 |
| Programador Responsable | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní |
| Descripción          | Como docente, quiero solicitar un libro para leerlo dentro o fuera de la institución |
| Observaciones        | N/A |

---

| Historia de Usuario | Número | 14 |
|----------------------|--------|----|
| Usuario              | Docente |
| Nombre Historia      | Aprobación o rechazo de solicitud de préstamo fuera de la institución por parte del estudiante |
| Prioridad en Negocio | Alta |
| Riesgo en Desarrollo | Alto |
| Puntos Estimados     | 8 |
| Iteración Asignada   | 3 |
| Programador Responsable | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción          | Como docente, quiero aprobar o rechazar la solicitud de préstamos fuera de la institución por parte del estudiante |
| Observaciones        | N/A |

---

## Tareas de Ingeniería

| Número de Tarea | 1 |
|------------------------|-----------------|
| Número de Historia     | 6               |
| Nombre de Tarea        | Verificación de la disponibilidad del libro |
| Tipo de Tarea          | Mejora          |
| Puntos Estimados       | 5               |
| Fecha de Inicio        | 4/11/2024       |
| Fecha Fin              | 6/11/2024       |
| Programador disponible | Alberto Ismael Mondragon Parodi, Brian Omar Inca Huamaní |
| Descripción            | Verificar si el libro está disponible en el sistema y no está actualmente prestado |

---

| Número de Tarea | 2 |
|------------------------|-----------------|
| Número de Historia     | 6               |
| Nombre de Tarea        | Ingreso de datos del estudiante para el préstamo |
| Tipo de Tarea          | Mejora          |
| Puntos Estimados       | 3               |
| Fecha de Inicio        | 7/11/2024       |
| Fecha Fin              | 9/11/2024       |
| Programador disponible | Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción            | Ingresar los datos del estudiante que solicita el préstamo (nombre, DNI, fecha de préstamo) |

---

| Número de Tarea | 3 |
|-----------------|---|
| Número de Historia | 6 |
| Nombre de Tarea | Actualización del estado del libro después del préstamo |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 4 |
| Fecha de Inicio | 10/11/2024 |
| Fecha Fin | 12/11/2024 |
| Programador disponible | Brian Omar Inca Huamaní |
| Descripción | Actualizar el estado del libro en el sistema como “prestado fuera de la institución” con la fecha de devolución estimada |

---

| Número de Tarea | 9 |
|-----------------|---|
| Número de Historia | 11 |
| Nombre de Tarea | Registro de solicitud para préstamo fuera de la institución |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 6 |
| Fecha de Inicio | 24/11/2024 |
| Fecha Fin | 26/11/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi, Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción | Registrar la solicitud en el sistema y generar un comprobante para el estudiante con los términos de préstamo |

---

| Número de Tarea | 4 |
|-----------------|---|
| Número de Historia | 10 |
| Nombre de Tarea | Actualización de estado del libro |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 3 |
| Fecha de Inicio | 13/11/2024 |
| Fecha Fin | 14/11/2024 |
| Programador disponible | Brian Omar Inca Huamaní |
| Descripción | Verificar si el libro está disponible en el sistema y no está actualmente |

---

| Número de Tarea | 5 |
|-----------------|---|
| Número de Historia | 10 |
| Nombre de Tarea | Registro de solicitud de préstamo del estudiante |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 2 |
| Fecha de Inicio | 15/11/2024 |
| Fecha Fin | 16/11/2024 |
| Programador disponible | Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción | Registrar la solicitud de préstamo en el sistema, asociando el libro y los datos del estudiante. |

---

| Número de Tarea | 6 |
|-----------------|---|
| Número de Historia | 10 |
| Nombre de Tarea | Confirmación de préstamo |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 3 |
| Fecha de Inicio | 17/11/2024 |
| Fecha Fin | 18/11/2024 |
| Programador disponible | Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción | Confirmar el préstamo en el sistema y notificar al estudiante sobre la disponibilidad del libro. |

---

| Número de Tarea | 7 |
|-----------------|---|
| Número de Historia | 11 |
| Nombre de Tarea | Validación de disponibilidad del libro |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 5 |
| Fecha de Inicio | 19/11/2024 |
| Fecha Fin | 21/11/2024 |
| Programador disponible | Brian Omar Inca Huamaní |
| Descripción | Validar la disponibilidad del libro para préstamo fuera de la institución |

---

| Número de Tarea | 8 |
|-----------------|---|
| Número de Historia | 11 |
| Nombre de Tarea | Solicitud de datos del estudiante para el préstamo |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 3 |
| Fecha de Inicio | 22/11/2024 |
| Fecha Fin | 23/11/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi, Brian Omar Inca Huamaní |
| Descripción | Solicitar al estudiante los detalles para el préstamo fuera de la institución (fecha préstamo, fecha devolución) |

---

| Número de Tarea | 9 |
|-----------------|---|
| Número de Historia | 11 |
| Nombre de Tarea | Registro de solicitud para préstamo fuera de la institución |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 6 |
| Fecha de Inicio | 24/11/2024 |
| Fecha Fin | 26/11/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi, Brian Omar Inca Huamaní, Jhon Antony Urbisagastegui Huamani |
| Descripción | Registrar la solicitud en el sistema y generar un comprobante para el estudiante con los términos de préstamo |

---

| Número de Tarea | 10 |
|-----------------|---|
| Número de Historia | 12 |
| Nombre de Tarea | Implementación de filtros de búsqueda |
| Tipo de Tarea | Desarrollo |
| Puntos Estimados | 5 |
| Fecha de Inicio | 27/11/2024 |
| Fecha Fin | 28/11/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi, Brian Omar Inca Huamaní |
| Descripción | Implementar un sistema de búsqueda que permite filtrar por autor, género, disponibilidad y otros criterios |

---

| Número de Tarea | 11 |
|-----------------|---|
| Número de Historia | 12 |
| Nombre de Tarea | Visualización de resultados de búsquedas |
| Tipo de Tarea | Desarrollo |
| Puntos Estimados | 5 |
| Fecha de Inicio | 29/11/2024 |
| Fecha Fin | 30/12/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi |
| Descripción | Mostrar resultados de búsqueda de manera ordenada (según los filtros aplicados) |

---

| Número de Tarea | 12 |
|-----------------|---|
| Número de Historia | 12 |
| Nombre de Tarea | Visualización de la descripción del libro |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 5 |
| Fecha de Inicio | 01/12/2024 |
| Fecha Fin | 03/12/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi, Brian Omar Inca Huamaní |
| Descripción | Permitir que el usuario vea la descripción completa del libro seleccionado, incluyendo su disponibilidad |

---

| Número de Tarea | 13 |
|-----------------|---|
| Número de Historia | 13 |
| Nombre de Tarea | Implementación de filtros de búsqueda |
| Tipo de Tarea | Desarrollo |
| Puntos Estimados | 4 |
| Fecha de Inicio | 04/12/2024 |
| Fecha Fin | 06/12/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi |
| Descripción | Implementar un sistema de búsqueda avanzado que permite filtrar por autor, género, disponibilidad y otros criterios. |

---

| Número de Tarea | 14 |
|-----------------|---|
| Número de Historia | 13 |
| Nombre de Tarea | Verificación de resultados de búsqueda |
| Tipo de Tarea | Desarrollo |
| Puntos Estimados | 5 |
| Fecha de Inicio | 07/12/2024 |
| Fecha Fin | 09/12/2024 |
| Programador disponible | Alberto Ismael Mondragón Parodi, Brian Omar Inca Huamaní |
| Descripción | Mostrar resultados de búsqueda de manera ordenada y eficiente, según los filtros aplicados. |

---

| Número de Tarea | 15 |
|-----------------|---|
| Número de Historia | 14 |
| Nombre de Tarea | Revisión de la solicitud de préstamo |
| Tipo de Tarea | Mejora |
| Puntos Estimados | 4 |
| Fecha de Inicio | 10/12/2024 |
| Fecha Fin | 11/12/2024 |
| Programador disponible | Alberto Mondragón, Brian Inca |
| Descripción | Revisar las solicitudes de préstamo para determinar su aprobación o rechazo. |

---

| Número de Tarea | 16 |
|-----------------|---|
| Número de Historia | 14 |
| Nombre de Tarea | Notificación de aprobación o rechazo |
| Tipo de Tarea | Desarrollo |
| Puntos Estimados | 5 |
| Fecha de Inicio | 11/12/2024 |
| Fecha Fin | 12/12/2024 |
| Programador disponible | Alberto Mondragón, Brian Inca, Jhon Antony Urbisagastegui Huamani |
| Descripción | Notificar al usuario la decisión sobre la solicitud y actualizar el estado del préstamo en el sistema. |


