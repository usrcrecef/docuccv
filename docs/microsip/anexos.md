---
title: Anexos
sidebar_position: 7
filename: anexos.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::

## Llenado de bitácora
Es necesario mantener un control de cada usuario que hace uso del servicio. Para ello existe una bitácora centralizada en el siguiente archivo de [Google Sheets](https://docs.google.com/spreadsheets/d/1rrAYe6SO090usmsHtMhlKQJKknLI63-4gsZ-Lz5tEp8/edit?usp=sharing).

:::warning[Advertencia]
El acceso a este archivo está restringido. Solicita permiso de **Editor** al responsable del área antes de intentar realizar modificaciones.
:::

La bitácora se compone de una tabla con los campos que se describen a continuación. Completa todos los campos marcados como obligatorios en cada registro.

|Campo|Descripción|Obligatorio|
|---|---|---|
|`Nombre de empleado`|Nombre completo del empleado para fácil identificación.|Sí|
|`Número de empleado`|Número de empleado. Para colaboradores de CRECE se compone de 6 dígitos (por ejemplo: `002001`). Para empresas Silsa y PRAT, deja este campo vacío.|Opcional, depende de la empresa|
|`Empresa`|Empresa en la que trabaja el colaborador. Los valores actuales son: `CRECE`, `Silsa` o `PRAT`. Si necesitas registrar una empresa diferente, agrégala desde el botón **Editar** del menú desplegable de la celda correspondiente.|Sí|
|`Departamento`|Departamento al que pertenece el colaborador. El menú desplegable ya cuenta con varios departamentos cargados. Si necesitas agregar uno nuevo, da clic en el botón **Editar** del menú desplegable en la columna `Departamento`.|Opcional, depende de la empresa|
|`Fecha de creación`|Fecha en la que se crea el registro del colaborador. Usa el formato `DD/MM/AAAA`. También puedes seleccionar la fecha dando doble clic sobre la celda para usar el selector de calendario.|Sí|
|`Usuario RDP`|Usuario registrado en Windows Server, miembro de los grupos `Usuarios` y `Usuarios de escritorio remoto`.|Sí|
|`Contraseña RDP`|Contraseña del usuario de Windows Server.|Sí|
|`Usuario de VPN`|Nombre de usuario de VPN registrado en el servidor de VPN.|Sí|
|`Contraseña de VPN`|Contraseña de VPN registrada en el servidor de VPN.|Sí|
|`Usuario de MS`|Usuario de Microsip registrado en la instancia de la aplicación.|Sí|
|`Contraseña de MS`|Contraseña del usuario registrado en la instancia de Microsip.|Sí|
|`Notas`|Anotación u observación relevante sobre el registro. Por ejemplo: _Se creó este usuario para realizar una auditoría, se debe desactivar en un mes_ o _Se modificó la contraseña de Microsip del usuario por indicación del Gerente fiscal_.|Sí|
|`Fecha de modificación`|Fecha en la que se realiza una modificación al registro del colaborador. Siempre registra esta columna junto con la columna `Notas` al mismo tiempo. Usa el formato `DD/MM/AAAA` o selecciona la fecha dando doble clic sobre la celda para usar el selector de calendario.|Sí|

---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_
