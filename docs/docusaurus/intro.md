---
title: Introducción
slug: intro
author: Juande Sánchez
sidebar_position: 1
---



## Instalación de Docusaurus en Ubuntu 24.04 LTS

### Requisitos previos

- Ubuntu Linux 24.04 LTS
- Acceso a terminal con permisos sudo

### Paso 1: Instalar nvm

Sigue la [guía oficial de NodeJS](https://nodejs.org/en/download/package-manager/#nvm) para instalar nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

Recarga tu perfil de shell:

```bash
source ~/.bashrc
```

Verifica la instalación:

```bash
nvm --version
```

### Paso 2: Instalar NodeJS

Instala la versión LTS más reciente de NodeJS:

```bash
nvm install --lts
nvm use --lts
```

Verifica las versiones instaladas:

```bash
node --version
npm --version
```

### Paso 3: Instalar Docusaurus

Crea un nuevo proyecto Docusaurus usando la plantilla clásica:

```bash
npx create-docusaurus@latest mi-sitio classic
cd mi-sitio
```

### Paso 4: Iniciar el servidor de desarrollo

```bash
npm start
```

Docusaurus se ejecutará en `http://localhost:3000`.

### Paso 5: Compilar para producción

```bash
npm run build
```

Los archivos estáticos se generarán en la carpeta `build/`.
