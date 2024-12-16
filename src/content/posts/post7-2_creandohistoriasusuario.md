---
title: 7. Creando historias de usuario
slug: creando-historias-usuario-2
description: Creación de las historias de usuario.
category:
  - sprint2
tags:
  - planificacion
  - estimacion
  - historia
  - usuario
pubDate: 2024-09-23
cover: https://images.squarespace-cdn.com/content/v1/5a5977a7f43b55eff1588911/1588113479588-VBWNMRWOW4PLW0AKF7M0/Las-historias-de-usuario-son-parte-de-un-enfoque-%C3%A1gil-que-ayuda-a-cambiar-el-enfoque-de-escribir-sobre-los-requisitos-a-hablar-sobre-ellos.Todas-las-historias-de-usuarios-%C3%A1giles-incluyen-una-o-dos-oraciones-escritas-y-lo-que-es-mas-importante-una-serie-de-conversaciones-sobre-la-funcionalidad-deseada
coverAlt: AstroVerse-Add an RSS feed
author: Gerson Sahuma
---

# Entradas

## Equipo principal de Scrum

| Rol | Nombre |
|-----|---------|
| Scrum Master | Gerson Daniel Sahuma Jurado |
| Product Owner | Samuel Elías Talledo Vega |
| Developers | Alberto Ismael Mondragón Parodi<br>Brian Omar Inca Huamaní<br>Jhon Antony Urbisagastegui Huamaní |

## Backlog Priorizado del Producto

Historias priorizadas identificadas para este Sprint, enfocadas en:

1. Actualización de ejemplares en tiempo real.
2. Registro y gestión de préstamos y devoluciones.
3. Implementación de búsquedas avanzadas con filtros

📂 Elaboración de la <a href="https://docs.google.com/spreadsheets/d/1nM6kGYreJMlUnf2LgV6Bp9W0OP8F46cS2ElRmb3ycsM/edit?gid=28771996#gid=28771996" target="_blank">Backlog Priorizado del Producto</a>

## Criterios de terminado

Los criterios de terminado son las condiciones mínimas que cada historia de usuario debe cumplir para considerarse completada y lista para su entrega. Estos criterios garantizan la calidad, funcionalidad y alineación con los objetivos del proyecto.

| Historia de Usuario                                                                 | Descripción                                                                                                                                               |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | El número de ejemplares disponibles se actualiza en tiempo real tras cada operación (préstamo o devolución).<br>La API debe manejar múltiples solicitudes concurrentes sin errores.<br>Las pruebas unitarias y de integración están implementadas con un mínimo de 90% de cobertura. |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | El registro de préstamos incluye campos obligatorios: usuario, libro, fecha y hora del préstamo.<br>Se valida que el libro esté disponible antes de realizar el registro.<br>La interfaz muestra un mensaje de confirmación o error tras la operación. |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | La interfaz muestra un mensaje de confirmación o error tras la operación.<br>Se generan logs que registran las operaciones de devolución para auditorías futuras.<br>El cambio en la disponibilidad es visible inmediatamente en la interfaz. |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros | Los filtros de búsqueda permiten combinar criterios como título, autor y género.<br>La respuesta a las búsquedas es óptima (menos de 2 segundos para conjuntos de datos comunes).<br>Los resultados muestran información clave del libro (título, autor, disponibilidad). |
| **Historia de usuario #9:** Como estudiante, quiero ver la disponibilidad de los ejemplares de un libro | Los estudiantes pueden visualizar los ejemplares disponibles de un libro seleccionado.<br>Los datos mostrados en la interfaz deben ser consistentes con la base de datos.<br>El sistema muestra mensajes claros en caso de error en la consulta (ej., libro no encontrado). |

## Prototipos

Los prototipos son representaciones visuales de las interfaces y funcionalidades que se desarrollarán, permitiendo al equipo y stakeholders alinear expectativas sobre el diseño y la usabilidad antes de la implementación. Estos pueden ser wireframes, mockups o prototipos interactivos.

| Historia de Usuario                                                                 | Descripción                                                                                                                                               |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | Wireframe de la interfaz de administración de ejemplares con opciones para actualizar la disponibilidad en tiempo real.<br>Mockup del mensaje de confirmación tras la operación (disponible/no disponible). |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | Mockup de la pantalla de registro de préstamos con campos requeridos (ID del libro, ID del usuario, fecha y hora).<br>Prototipo interactivo que simula el flujo de registro de un préstamo con validaciones dinámicas. |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | Wireframe de la interfaz de devoluciones con una tabla de libros prestados y opción para marcar como devueltos.<br>Mockup de la notificación de éxito tras completar la devolución. |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros | Prototipo de la página de búsqueda con filtros dinámicos (título, autor, género).<br>Mockup de los resultados de búsqueda, mostrando detalles clave como disponibilidad, autor y ubicación del libro. |
| **Historia de usuario #9:** Como estudiante, quiero ver la disponibilidad de los ejemplares de un libro | Wireframe de la pantalla de visualización de ejemplares disponibles, incluyendo un botón para reservar o solicitar información.<br>Mockup del mensaje de error en caso de que no haya ejemplares disponibles. |

# Herramientas

## Experiencia en la redacción de historias de usuario

📸 Reunión para ver la <a href="https://drive.google.com/file/d/1a1vT5rLvMKRHNkQlwJqmnkNS5B6kkitx/view?usp=sharing" target="_blank">Experiencia en la redacción de historias de usuario</a>

# Salidas

## Historias de usuario

| Historia de Usuario                                                                 |
|--------------------------------------------------------------------------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros |
| **Historia de usuario #9:** Como estudiante, quiero ver la disponibilidad de los ejemplares de un libro |

## Criterios de aceptación de historias del usuario

| Historia de Usuario                                                                 | Descripción                                                                                                                                               |
|--------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | El sistema debe actualizar automáticamente el número de ejemplares disponibles tras registrar un préstamo o devolución.<br>La funcionalidad debe reflejarse en la base de datos y en todas las interfaces del sistema en tiempo real.<br>La API debe garantizar la sincronización de los datos en todos los módulos relacionados para mantener consistencia. |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | El sistema debe permitir registrar un préstamo, incluyendo el libro, el estudiante, la fecha de préstamo y la fecha de devolución esperada.<br>Antes de registrar el préstamo, el sistema debe verificar que el libro esté disponible.<br>La información del préstamo debe almacenarse correctamente en la base de datos y reflejarse en el historial. |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | El sistema debe permitir registrar la devolución de un libro, especificando el libro y la fecha de devolución.<br>Tras completar el registro, el estado del libro debe actualizarse automáticamente a "disponible".<br>La información de la devolución debe reflejarse correctamente en la base de datos y en el historial de préstamos. |
| **Historia de usuario #8:** Como bibliotecaria, quiero buscar libros con o sin filtros | El sistema debe permitir búsquedas de libros por filtros como título, autor, categoría o etiquetas, y también búsquedas generales sin filtros.<br>Los resultados de búsqueda deben mostrarse en tiempo real con detalles como título, autor y disponibilidad.<br>La API debe manejar solicitudes de búsqueda de manera eficiente, incluso con grandes volúmenes de datos, y mostrar resultados relevantes en la interfaz. |