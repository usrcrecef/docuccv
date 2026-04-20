# Website

Este sitio web está construido con [Docusaurus](https://docusaurus.io/), un generador de sitios web estáticos moderno.

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run start
```

Este comando genera contenido estático en el directorio `build`, el cual puede ser servido utilizando cualquier servicio de alojamiento de contenido estático.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Despliegue

Usando SSH:

```bash
USE_SSH=true npm run deploy
```

Sin usar SSH:

```bash
GIT_USER=<Tu usuario de GitHub> npm run deploy
```

Si estás utilizando GitHub Pages para el alojamiento, este comando es conveniente para construir y subir a la rama `gh-pages`.
