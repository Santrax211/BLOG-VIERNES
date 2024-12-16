---
title: 16. Demostrar y validar el Sprint
slug: demostrar-y-validar-el-sprint-2
description: Demostrar y validar el Sprint 2
category:
  - sprint2
tags:
  - validar
  - backlog
pubDate: 2024-10-12
cover: https://softwarecolegio.home.blog/wp-content/uploads/2019/04/cropped-ing_sistemas.jpg
coverAlt: AstroVerse-Add an RSS feed
author: Alberto Mondragon
---

# Entradas

## Equipo principal de Scrum

| Rol | Nombre |
|-----|---------|
| Scrum Master | Gerson Daniel Sahuma Jurado |
| Product Owner | Samuel Elías Talledo Vega |
| Developers | Alberto Ismael Mondragón Parodi<br>Brian Omar Inca Huamaní<br>Jhon Antony Urbisagastegui Huamaní |

## Entregables del Sprint

| Historia de Usuario                                                                 | Tarea                                                        | Asignado a                              |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | Tarea 1: Diseñar y desarrollar una API para gestionar ejemplares | Inca Huamani Brian Omar                 |
|                                                                                      | Tarea 2: Crear endpoints para actualizar datos en la base de datos | Inca Huamani Brian Omar                 |
|                                                                                      | Tarea 3: Diseñar una interfaz para la gestión de ejemplares | Mondragon Parodi Alberto Ismael         |
|                                                                                      | Tarea 4: Configurar los modelos de datos en la base de datos | Urbisagastegui Huamani Jhon Antony      |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | Tarea 5: Diseñar la interfaz para el registro de préstamos  | Mondragon Parodi Alberto Ismael         |
|                                                                                      | Tarea 6: Crear la API para registrar y consultar préstamos | Inca Huamani Brian Omar                 |
|                                                                                      | Tarea 7: Configurar el almacenamiento de datos para nuevos registros | Urbisagastegui Huamani Jhon Antony      |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | Tarea 8: Diseñar una interfaz para devoluciones              | Mondragon Parodi Alberto Ismael         |
|                                                                                      | Tarea 9: Implementar una API para procesar devoluciones      | Inca Huamani Brian Omar                 |
|                                                                                      | Tarea 10: Actualizar datos del estado de libros en la base de datos | Urbisagastegui Huamani Jhon Antony      |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros | Tarea 11: Diseñar la interfaz de búsqueda con filtros        | Mondragon Parodi Alberto Ismael         |
|                                                                                      | Tarea 12: Crear endpoints de búsqueda con funcionalidades avanzadas | Brian Omar Inca Huamaní                |
|                                                                                      | Tarea 13: Asegurarse de que los datos se actualicen en tiempo real | Urbisagastegui Huamani Jhon Antony      |

## Sprint Backlog

| Historia de Usuario                                                                 | Tarea                                                        | Asignado a                              | Esfuerzo | Prioridad |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------|-----------------------------------------|----------|-----------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | Tarea 1: Diseñar y desarrollar una API para gestionar ejemplares | Inca Huamani Brian Omar                 | 8        | Alto      |
|                                                                                      | Tarea 2: Crear endpoints para actualizar datos en la base de datos | Inca Huamani Brian Omar                 | 8        | Alto      |
|                                                                                      | Tarea 3: Diseñar una interfaz para la gestión de ejemplares | Mondragon Parodi Alberto Ismael         | 5        | Medio     |
|                                                                                      | Tarea 4: Configurar los modelos de datos en la base de datos | Urbisagastegui Huamani Jhon Antony      | 7        | Alto      |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | Tarea 5: Diseñar la interfaz para el registro de préstamos  | Mondragon Parodi Alberto Ismael         | 6        | Medio     |
|                                                                                      | Tarea 6: Crear la API para registrar y consultar préstamos | Inca Huamani Brian Omar                 | 8        | Alto      |
|                                                                                      | Tarea 7: Configurar el almacenamiento de datos para nuevos registros | Urbisagastegui Huamani Jhon Antony      | 7        | Alto      |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | Tarea 8: Diseñar una interfaz para devoluciones              | Mondragon Parodi Alberto Ismael         | 5        | Medio     |
|                                                                                      | Tarea 9: Implementar una API para procesar devoluciones      | Inca Huamani Brian Omar                 | 7        | Alto      |
|                                                                                      | Tarea 10: Actualizar datos del estado de libros en la base de datos | Urbisagastegui Huamani Jhon Antony      | 8        | Alto      |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros | Tarea 11: Diseñar la interfaz de búsqueda con filtros        | Mondragon Parodi Alberto Ismael         | 6        | Medio     |
|                                                                                      | Tarea 12: Crear endpoints de búsqueda con funcionalidades avanzadas | Brian Omar Inca Huamaní                | 8        | Alto      |
|                                                                                      | Tarea 13: Asegurarse de que los datos se actualicen en tiempo real | Urbisagastegui Huamani Jhon Antony      | 8        | Alto      |

## Criterios de terminado

1. Gestión de Ejemplares: La API y los endpoints para gestionar ejemplares funcionan correctamente, actualizando la disponibilidad de los libros en tiempo real. La interfaz y los modelos de datos están validados y configurados.

2. Registro de Préstamos: La interfaz y la API para registrar y consultar préstamos están operativas, con el almacenamiento de datos correctamente configurado.

3. Registro de Devoluciones: La interfaz para devoluciones y la API para procesarlas actualizan el estado de los libros a "disponible" correctamente.

4. Búsqueda de Libros: La interfaz de búsqueda y los endpoints avanzados permiten encontrar libros de forma eficiente, con actualizaciones en tiempo real sobre su estado.

5. Pruebas de Calidad (QA): Todas las funcionalidades superan pruebas de calidad, incluyendo pruebas funcionales, de rendimiento, compatibilidad y seguridad.

6. Aprobación de los Interesados del Negocio: Los interesados validan y aprueban que todas las funcionalidades cumplen con los requisitos y expectativas del proyecto.

## Criterios de aceptación de las historias del usuario

| Historia de Usuario | Descripción |
|----------------------|-------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | El sistema debe actualizar automáticamente el número de ejemplares disponibles tras registrar un préstamo o devolución. La funcionalidad debe reflejarse en la base de datos y en todas las interfaces del sistema en tiempo real. La API debe garantizar la sincronización de los datos en todos los módulos relacionados para mantener consistencia. |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | El sistema debe permitir registrar un préstamo, incluyendo el libro, el estudiante, la fecha de préstamo y la fecha de devolución esperada. Antes de registrar el préstamo, el sistema debe verificar que el libro esté disponible. La información del préstamo debe almacenarse correctamente en la base de datos y reflejarse en el historial. |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | El sistema debe permitir registrar la devolución de un libro, especificando el libro y la fecha de devolución. Tras completar el registro, el estado del libro debe actualizarse automáticamente a "disponible". La información de la devolución debe reflejarse correctamente en la base de datos y en el historial de préstamos. |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros | El sistema debe permitir búsquedas de libros por filtros como título, autor, categoría o etiquetas, y también búsquedas generales sin filtros. Los resultados de búsqueda deben mostrarse en tiempo real con detalles como título, autor y disponibilidad. La API debe manejar solicitudes de búsqueda de manera eficiente, incluso con grandes volúmenes de datos, y mostrar resultados relevantes en la interfaz. |

# Herramientas

## Reuniones de revisión del Sprint

📸 Captura de <a href="https://drive.google.com/file/d/1gJjNpmbGSiHka17TvD2eTAez1IEg6I8w/view?usp=sharing" target="_blank">Reunión de revisión del Backlog Priorizado del Producto</a>

# Salidas

## Entregables aceptados

| Historia de Usuario | Criterios de Aceptación |
|----------------------|-------------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | El sistema debe actualizar automáticamente el número de ejemplares disponibles tras registrar un préstamo o devolución. <br> La funcionalidad debe reflejarse en la base de datos y en todas las interfaces del sistema en tiempo real. <br> La API debe garantizar la sincronización de los datos en todos los módulos relacionados para mantener consistencia. |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | El sistema debe permitir registrar un préstamo, incluyendo el libro, el estudiante, la fecha de préstamo y la fecha de devolución esperada. <br> Antes de registrar el préstamo, el sistema debe verificar que el libro esté disponible. <br> La información del préstamo debe almacenarse correctamente en la base de datos y reflejarse en el historial. |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | El sistema debe permitir registrar la devolución de un libro, especificando el libro y la fecha de devolución. <br> Tras completar el registro, el estado del libro debe actualizarse automáticamente a "disponible". <br> La información de la devolución debe reflejarse correctamente en la base de datos y en el historial de préstamos. |
| **Historia de usuario #8:** Como bibliotecaria, quiero ver un historial de préstamos y devoluciones para dar seguimiento a los libros prestados y devueltos | El sistema debe permitir búsquedas de libros por filtros como título, autor, categoría o etiquetas, y también búsquedas generales sin filtros. <br> Los resultados de búsqueda deben mostrarse en tiempo real con detalles como título, autor y disponibilidad. <br> La API debe manejar solicitudes de búsqueda de manera eficiente, incluso con grandes volúmenes de datos, y mostrar resultados relevantes en la interfaz. |
