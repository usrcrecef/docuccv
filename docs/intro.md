---
sidebar_position: 1
---

# Docosaurus - Crece con Vales

Se ha hecho uso del framewor **Docosaurus** para tener un sitio documental sobre las *herramientas*, *procedimientos* y *procesos* del área de sistemas de la empresa Crece con Vales.

Así que vamos a descubir como funciona **Docusaurus en menos de 5 minutos**.

## Comenzando...

Empezamos por la **Creación de un nuevo sitio**.

### ¿Qué es lo que vas a necesitar?

- [Node.js](https://nodejs.org/en/download/) versión 20.0 o superior.

## Genera un nuevo sitio

Generar un nuevo sitio con Docosaurus usando la **plantilla clásica**. La plantilla clásica se agregará automáticamente a tu proyecto después de ejecutar el comando:

```bash
npm init docusaurus@latest ccv-docs classic
```

Puedes teclear este comando en la linea de comandos, PoweShell, Terminal o cualquier otro interprete de terminal en tu editor de código. El comando también installa todas las dependencias necesarías para ejecutar Docusaurus.

## Inicia el sitio

Para ejecutar un servidor de desarrollo:

```bash
cd ccv-docs
npm run start
```

El comando `cd` cambia la ruta en la que estás trabajando. Para trabajar en el nuevo sitio de Docusaurus, necesitarás navegar hasta este directorio desde la terminal.

El comando `npm run start` construye localmente el sitio web y ejecuta un servidor web de desarrollo, listo para ser mostrado en http://localhost:3000/.

Abre el documento `docs/intro.md` (ésta página) y edita algunas líneas: el sitio **se actualizará automáticamente** y mostrará los cambios en pantalla.
