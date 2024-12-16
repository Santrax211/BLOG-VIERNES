---
title: 17. Retrospectiva del Sprint
slug: retrospectiva-del-sprint-2
description: Retrospectiva del Sprint 2
category:
  - sprint2
tags:
  - retrospectiva
pubDate: 2024-10-13
cover: https://wac-cdn.atlassian.com/dam/jcr:c9299768-79f9-44e7-99db-b2b2e6925d3e/retrospective_hero_2x.png?cdnVersion=2453
coverAlt: AstroVerse-Add an RSS feed
author: Jhon Urbisagastegui
---

# Entradas

## Scrum Master

Gerson Daniel Sahuma Jurado, es el Scrum Master en base a su experiencia en la gestión de proyectos ágiles, su capacidad para coordinar equipos multidisciplinarios, y habilidades en resolución de conflictos y comunicación efectiva con stakeholders clave, como la dirección del colegio

## Equipo principal de Scrum

| Rol | Nombre |
|-----|---------|
| Scrum Master | Gerson Daniel Sahuma Jurado |
| Product Owner | Samuel Elías Talledo Vega |
| Developers | Alberto Ismael Mondragón Parodi<br>Brian Omar Inca Huamaní<br>Jhon Antony Urbisagastegui Huamaní |

## Salidas de Demostrar y validar el Sprint

| Historia de Usuario | Descripción | Aprobado / Rechazado |
|----------------------|-------------|----------------------|
| **Historia de usuario #4:** Como bibliotecaria, quiero actualizar el número de ejemplares disponibles en tiempo real | El sistema debe actualizar automáticamente el número de ejemplares disponibles tras registrar un préstamo o devolución. | Aprobado |
|  | La funcionalidad debe reflejarse en la base de datos y en todas las interfaces del sistema en tiempo real. | Aprobado |
|  | La API debe garantizar la sincronización de los datos en todos los módulos relacionados para mantener consistencia. | Aprobado |
| **Historia de usuario #5:** Como bibliotecaria, quiero registrar el préstamo de un libro dentro de la institución | El sistema debe permitir registrar un préstamo, incluyendo el libro, el estudiante, la fecha de préstamo y la fecha de devolución esperada. | Aprobado |
|  | Antes de registrar el préstamo, el sistema debe verificar que el libro esté disponible. | Aprobado |
| **Historia de usuario #7:** Como bibliotecaria, quiero registrar la devolución de un libro | La información del préstamo debe almacenarse correctamente en la base de datos y reflejarse en el historial. | Aprobado |
|  | El sistema debe permitir registrar la devolución de un libro, especificando el libro y la fecha de devolución. | Aprobado |
|  | Tras completar el registro, el estado del libro debe actualizarse automáticamente a "disponible". | Aprobado |
| **Historia de usuario #8:** Como bibliotecaria, quiero ver un historial de préstamos y devoluciones para dar seguimiento a los libros prestados y devueltos | La información de la devolución debe reflejarse correctamente en la base de datos y en el historial de préstamos. | Aprobado |
|  | El sistema debe permitir búsquedas de libros por filtros como título, autor, categoría o etiquetas, y también búsquedas generales sin filtros. | Aprobado |
|  | Los resultados de búsqueda deben mostrarse en tiempo real con detalles como título, autor y disponibilidad. | Aprobado |

# Herramientas

## Reunión de retrospectiva del Sprint

En esta sesión, el equipo realizó una revisión profunda del sprint reciente, evaluando tanto los logros alcanzados como los desafíos que enfrentaron. Durante la retrospectiva, se discutieron los puntos fuertes y las áreas de mejora, con el objetivo de optimizar nuestros procesos y seguir avanzando en el desarrollo del producto. La retroalimentación de cada miembro fue clave para identificar oportunidades de mejora, y se definieron acciones concretas para el próximo sprint, con el fin de asegurar una ejecución más eficiente y alineada con los objetivos del proyecto.

📸 Captura de <a href="https://drive.google.com/file/d/1u13If2kk1kkuIM4k4mIfLJWofRBKL43U/view?usp=sharing" target="_blank">Reunión de retrospectiva del Sprint</a>

# Salidas

## Agreed Actionable Improvements

| **Categoría**    | **Acción**                                                                 | **Responsable**                           |
|------------------|---------------------------------------------------------------------------|-------------------------------------------|
| **Seguir haciendo**  | Mantener la optimización de la interfaz de usuario para mejorar la experiencia de los bibliotecarios | Inca Huamaní, Brian Omar                 |
| **Seguir haciendo**  | Continuar validando la disponibilidad de los libros antes de un préstamo | Inca Huamaní, Brian Omar                 |
| **Seguir haciendo**  | Mantener las pruebas regulares de carga y compatibilidad para asegurar un buen rendimiento en todos los dispositivos | Mondragón Parodi, Alberto Ismael         |
| **Seguir haciendo**  | Implementar un sistema de notificaciones para informar a los usuarios sobre la disponibilidad de los libros | Todo el equipo                           |
| **Empezar a hacer**  | Mejorar la seguridad de la base de datos                                  | Urbisagastegui Huamaní, Jhon Antony      |
| **Empezar a hacer**  | Evaluar la escalabilidad del sistema                                      | Inca Huamaní, Brian Omar                 |
| **Dejar de hacer**   | Evitar la implementación de nuevas funcionalidades sin un análisis de impacto en el rendimiento general del sistema | Todo el equipo                           |