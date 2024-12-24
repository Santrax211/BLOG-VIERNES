---
title: 10. Integración continua
slug: integración-continua
description: Integración continúa
category:
  - xp
tags:
  - integración
  - continua
pubDate: 2024-09-23
cover: https://www.inesdi.com/sites/default/files/inline-images/integracio%CC%81n%20continua%20-%201.jpg
coverAlt: AstroVerse-Aliases
author: Samuel Talledo
---

La Integración Continua es una práctica de desarrollo de software que implica la automatización de la integración de código de múltiples desarrolladores en un único repositorio compartido. Cada cambio es validado automáticamente mediante pruebas y compilaciones, lo que asegura la calidad del software de manera continua.

![chuntels](/images/10-1.png)

### Objetivos:
- Reducir el tiempo de desarrollo
- Detectar y resolver problemas tempranamente 
- Incrementar la eficiencia
- Mantener un entorno de desarrollo estable

### Ventajas:
- Permite realizar ajustes y adaptaciones al proyecto de manera ágil, respondiendo a las necesidades cambiantes del proyecto
- Fomenta la comunicación y colaboración entre los programadores, lo que mejora la cohesión y el trabajo conjunto.
- Al integrar cambios frecuentemente, podemos identificar problemas en etapas tempranas, disminuyendo los riesgos de fallos significativos en el futuro.

Los módulos dentro del código se encuentra seccionados en dos partes:
- **Backend:** Consta de Node JS, MySQL
- **Frontend:** Consta de HTML, CSS, JavaScript, React

![chuntels](/images/10-2.png)

## Backend

El backend representa la lógica de negocio y la gestión de datos del sistema. Es el núcleo que conecta la interfaz con la base de datos, proporcionando funcionalidades esenciales.

### Funciones principales:
- Gestión de datos de usuarios, libros y préstamos.
- Validación de usuarios mediante autenticación segura.
- Comunicación fluida con la base de datos para consultas y actualizaciones.

![chuntels](/images/10-3.png)

## Frontend

El frontend es la interfaz gráfica que interactúa directamente con los usuarios. Su objetivo es garantizar una experiencia intuitiva y eficiente al momento de realizar acciones como préstamos o devoluciones.

### Funciones principales:
- Formularios para login y registro de usuarios.
- Panel de control que muestra información relevante sobre préstamos y libros disponibles.
- Validaciones en tiempo real para evitar errores en las acciones del usuario.

![chuntels](/images/10-4.png)