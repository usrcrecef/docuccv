---
title: Introducción
sidebar_position: 1
filename: introduccion.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::

## Acerca de esta documentación

Esta documentación cubre las principales tareas administrativas que se llevan a cabo en el servidor de Microsip. Estas tareas se dividen en tres áreas:

1. Gestión de usuarios de escritorio remoto.
2. Gestión de usuarios de VPN.
3. Gestión de usuarios de Microsip.

Las tres tareas pueden efectuarse en cualquier orden; sin embargo, para mantener un registro ordenado, sigue la secuencia en la que están indicadas aquí.

Esta documentación también incluye dos tareas que debe realizar el usuario final, quien será cliente de los tres servicios. Por este motivo, primero se describe cómo llevar a cabo esas dos tareas del lado del cliente y al final se aborda la administración de los tres tipos de usuarios (RDP, VPN y Microsip).

---

## Consideraciones técnicas

Para llevar a cabo las tareas administrativas en el servidor de Microsip, necesitas contar con lo siguiente:

- Acceso a la VPN donde se encuentra el servidor.
- Cuenta de usuario con permisos de `Administrador` y membresía en el grupo `Usuarios de escritorio remoto`.
- Las aplicaciones **OpenVPN Connect** y **Conexión a escritorio remoto** instaladas y configuradas en tu equipo local.

> [!WARNING] Por motivos de seguridad, la cuenta de Administrador de Windows Server debe permanecer **desactivada** en todo momento. Solo se habilitará de forma temporal cuando alguna tarea específica lo requiera y debe volver a deshabilitarse inmediatamente después.


---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_