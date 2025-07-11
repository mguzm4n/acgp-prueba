### Documentación

1. Este proyecto está dividido en dos carpetas. La primera, "Parte 1 y 2", contiene los ejercicios de programación.

    - Estos están en el lenguaje TypeScript.
    - Para correr el código se debe realizar el comando `npx tsc main.ts && node main.js`, es decir, primero se transpila el archivo .ts y luego se ejecuta el resultado (.js).

2. El proyecto de creación de libros se realizó con un front mínimo de Reactjs (Tailwind y React Query), mientras que el backend fue realizado con Java Springboot (3.0; Java 17).

    - El frontend se levanta simplemente con el comando `npm run dev` para abrir el servidor local.
    - Se recomienza utilizar el IDE Intellij para ejecutar el proyecto backend de Java.
    - Se añadió una base de datos PostgreSQL, así que esta se debe crear antes de iniciar la aplicación (el esquema ya está incluido).

#### Doc. API /api/v1

- Recurso `Book`
    - id: number
    - authorName: String
    - title: String
    - description: String
    - createdAt: Date
    - updatedAt: Date

    `POST /api/v1/books`

    Body: `JSON`
    - authorName: String
    - title: String
    - description: String

    Returns `Book`

    `GET /api/v1/books`

    Returns: List of `Book`