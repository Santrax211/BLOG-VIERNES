---
title: 4. Criterios de Prueba de Aceptación
slug: criterios-de-prueba-de-aceptacion
description: Desarrollando los criterios de prueba de aceptación
category:
  - xp
tags:
  - criterios
  - aceptacion
pubDate: 2024-09-17
cover: https://www.nimblework.com/wp-content/uploads/2022/12/software-testing.jpg
coverAlt: AstroVerse-Aliases
author: Alberto Mondragon
---

El criterio de prueba de aceptación establece las condiciones que debe cumplir una funcionalidad para ser considerada completada y aceptada por el cliente o el equipo de pruebas. Se basa en los requisitos del usuario y asegura que el software cumple con los objetivos establecidos. Estas pruebas validan que el sistema funciona según lo esperado antes de su implementación final.

### Registro de préstamo de un libro fuera de la institución

1. El sistema debe permitir al usuario registrar el préstamo de un libro fuera de la institución, asegurando que se registre correctamente la fecha de préstamo y la fecha de devolución esperada.
2. El préstamo solo se podrá registrar si el libro está disponible para préstamo fuera de la institución y si el usuario tiene permiso para realizar el préstamo.

### Solicitud de un libro para leerlo dentro de la institución

1. El sistema debe permitir al usuario realizar una solicitud de préstamo de un libro para leer dentro de la institución, generando un registro que incluya el nombre del libro y la fecha de solicitud.
2. El sistema debe verificar que el libro esté disponible y permitir al usuario recibir la confirmación de la solicitud.

### Solicitud de un libro para leerlo fuera de la institución

1. El sistema debe permitir al usuario solicitar un libro para leer fuera de la institución, especificando la fecha en que desea llevarlo.
2. El sistema debe verificar la disponibilidad del libro para préstamo fuera de la institución y confirmar la solicitud con el usuario.

### Búsqueda de libros con o sin filtros

1. El sistema debe permitir al usuario buscar libros utilizando filtros como título, autor o género, o realizar una búsqueda sin filtros.
2. Los resultados de búsqueda deben coincidir con los criterios seleccionados por el usuario, mostrando libros disponibles en la biblioteca.

### Solicitud de un libro para leerlo dentro o fuera de la institución

1. El sistema debe permitir al usuario seleccionar el tipo de préstamo (dentro o fuera de la institución) y generar una solicitud con la información correspondiente.
2. El sistema debe verificar la disponibilidad del libro y confirmar la solicitud de acuerdo con el tipo de préstamo seleccionado.

### Aprobación o rechazo de solicitud de préstamo fuera de la institución por parte del estudiante

1. El sistema debe permitir al estudiante aprobar o rechazar una solicitud de préstamo fuera de la institución.
2. El sistema debe generar una notificación al usuario sobre la aprobación o rechazo de la solicitud, y actualizar el estado del préstamo en el sistema.