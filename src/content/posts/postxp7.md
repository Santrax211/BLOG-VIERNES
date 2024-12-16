---
title: 7. Tarjetas CRC
slug: tarjetas-crc
description: Tarjetas CRC
category:
  - xp
tags:
  - tarjetas
  - crc
pubDate: 2024-09-20
cover: https://slideplayer.es/slide/13181570/79/images/6/Usar+Tarjetas+CRC+Clase%2FResponsabilidad%2FColaboradores.jpg
coverAlt: AstroVerse-Aliases
author: Gerson Sahuma
---

## Primera clase: Usuario

Representa a las personas que utilizan el sistema para realizar acciones como solicitar préstamos, devolver libros y consultar el estado de sus ejemplares prestados.

| **Nombre de la clase** | **Usuario**            |
|-------------------------|------------------------|
| **Colaboradores**       | **Responsabilidades** |
|                         | Iniciar sesión en el sistema |
| **Préstamo**            | Consultar el estado de sus préstamos |
| **Ejemplar**            | Solicitar préstamos de ejemplares |

## Segunda Clase: Bibliotecaria

Es el rol encargado de administrar el sistema de la biblioteca, supervisando los préstamos, devoluciones, registros de libros y gestionando sanciones en caso de retrasos.


| **Nombre de la clase** | **Bibliotecaria**            |
|-------------------|--------------------------------------------------|
| **Colaboradores** | **Responsabilidades**                            |
| Préstamo          | Gestionar préstamos de ejemplares                |
| Ejemplar          | Supervisar la disponibilidad de ejemplares       |
|                   | Registrar nuevos libros y ejemplares en el sistema |
| Usuario           | Monitorear los retrasos y sancionar usuarios     |
| Libro             | Actualizar información de los libros             |

## Tercera Clase: Libro

Representa la información general sobre los títulos disponibles en la biblioteca, como el nombre, editorial, año de publicación y cantidad de ejemplares.

| **Nombre de la clase** | **Libro**                              |
|-------------------------|----------------------------------------|
| **Colaboradores**       | **Responsabilidades**                 |
|                         | Almacenar información sobre el título del libro |
| **Ejemplar**            | Relacionarse con ejemplares físicos disponibles |
| **Bibliotecaria**       | Supervisar la disponibilidad de ejemplares |

## Cuarta Clase: Ejemplar

Representa una copia física específica de un libro, indicando su estado actual (disponible, prestado, etc.) y su ubicación en la biblioteca.

| **Nombre de la clase** | **Ejemplar**                             |
|-------------------------|------------------------------------------|
| **Colaboradores**       | **Responsabilidades**                   |
|                         | Registrar el estado del ejemplar (disponible, prestado, etc.) |
| **Libro**               | Almacenar la ubicación física del libro o ejemplar. |
| **Préstamo**            | Asociarse a un libro y a un préstamo específico. |

## Quinta Clase: Préstamo

Gestiona la información relacionada con los préstamos de libros, incluyendo las fechas de préstamo y devolución, así como el estado del préstamo (activo, devuelto o retrasado)

| **Nombre de la clase** | **Préstamo**                             |
|-------------------------|------------------------------------------|
| **Colaboradores**       | **Responsabilidades**                   |
| **Usuario**             | Solicitar el préstamo de un ejemplar.   |
| **Ejemplar**            | Controlar el estado de los préstamos de los ejemplares (activo, devuelto, retrasado). |
| **Bibliotecaria**       | Registrar la fecha de inicio y devolución de un préstamo. |
|                         | Asociar préstamos a usuarios y ejemplares específicos. |