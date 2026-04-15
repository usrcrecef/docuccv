---
title: Gestión de usuarios de escritorio remoto
sidebar_position: 5
filename: usuarios-rdp.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::


---

## 1. Introducción

Este manual describe los procedimientos técnicos para administrar cuentas de usuario en un servidor con Windows Server 2019 Standard. Cubre el ciclo de vida completo de un usuario: alta, modificación, desactivación y eliminación.

Las operaciones descritas se realizan desde la consola **Administración de equipos**, en la sección **Usuarios y grupos locales**, disponible directamente en el servidor.

:::note[Nota]
Para ejecutar las operaciones descritas en este manual necesitas iniciar sesión con una cuenta que tenga privilegios de **Administrador local** en el servidor.
:::

### 1.1 Convenciones del documento

A lo largo del manual se utilizan las siguientes convenciones:

- **Texto en negrita** → nombre de un elemento de interfaz (botón, campo, menú).
- _Texto en cursiva_ → valor de ejemplo que debes sustituir por el dato real.
- Bloque `> [!NOTE]` → información complementaria o aclaración.
- Bloque `> [!WARNING]` → acción irreversible o dato crítico.

---

## 2. Convenciones de nomenclatura

### 2.1 Nombre de usuario (logon name)

El nombre de usuario se construye con las **iniciales del nombre** del empleado seguidas de su **primer apellido**, todo en minúsculas, sin espacios ni caracteres especiales.

**Regla:** `[iniciales del nombre]` + `[primer apellido]`

|Nombre completo del empleado|Nombre de usuario resultante|
|---|---|
|Juan Antonio López Cabrera|`jalopez`|
|María González Ruiz|`mgonzalez`|
|Carlos Enrique Soto Méndez|`cesoto`|

### 2.2 Resolución de duplicados

Cuando el nombre de usuario generado ya existe en el servidor, añade un número consecutivo al final, comenzando en `1`. Verifica la disponibilidad en la lista de usuarios antes de crear la cuenta.

|Situación|Nombre de usuario asignado|
|---|---|
|Primer usuario con ese patrón|`jalopez`|
|`jalopez` ya existe|`jalopez1`|
|`jalopez` y `jalopez1` ya existen|`jalopez2`|

### 2.3 Campos del perfil de usuario

Al crear o modificar un usuario, rellena los campos conforme a la siguiente tabla:

|Campo|Valor a introducir|Ejemplo|
|---|---|---|
|**Nombre completo**|Nombre completo del empleado|_Juan Antonio López Cabrera_|
|**Nombre de inicio de sesión**|Iniciales del nombre + primer apellido (minúsculas)|_jalopez_|
|**Descripción**|Puesto del colaborador - Nombre de la empresa|_Contador general - Contoso_|

---

## 3. Política de contraseñas

Toda cuenta de usuario creada en el servidor debe tener asignada una contraseña que cumpla con los siguientes requisitos obligatorios:

1. Longitud mínima de **18 caracteres**.
2. Combinación de **letras mayúsculas y minúsculas**.
3. Al menos un **dígito numérico** (0–9).
4. Al menos un **carácter especial** (por ejemplo: `!`, `@`, `#`, `$`, `%`, `&`, `*`).

### 3.1 Herramientas recomendadas para generar contraseñas

Para garantizar aleatoriedad y cumplimiento de la política, utiliza una de las siguientes herramientas al momento de generar la contraseña:

|Herramienta|Tipo|Referencia|
|---|---|---|
|**KeePass**|Aplicación de escritorio (sin conexión)|keepass.info|
|**Avast Random Password Generator**|Generador en línea|avast.com/random-password-generator|

:::note[Nota]
Configura la herramienta generadora con longitud de **18 caracteres**, mayúsculas, minúsculas, números y caracteres especiales activados, para asegurarte de que la contraseña cumple con todos los requisitos en un solo paso.
:::

:::warning[Advertencia]
Registra la contraseña generada en el gestor de contraseñas corporativo o entrega al colaborador la credencial de forma segura (sobre cerrado o canal cifrado). Nunca la envíes por correo electrónico en texto plano.
:::

---

## 4. Alta de usuario

Sigue los pasos a continuación para crear una nueva cuenta de usuario en el servidor.

### 4.1 Acceso a la consola de administración

1. Inicia sesión en el servidor con una cuenta que tenga privilegios de **Administrador local**.
2. Presiona la combinación de teclas **Windows + R** para abrir el cuadro **Ejecutar**.
3. Escribe `compmgmt.msc` y da clic en **Aceptar**. Se abrirá la consola **Administración de equipos**.
4. En el panel izquierdo, expande **Usuarios y grupos locales** y da clic en la carpeta **Usuarios**.

### 4.2 Creación de la cuenta

1. En el panel central, da clic derecho sobre un área vacía y selecciona **Usuario nuevo**.
2. En el campo **Nombre de usuario**, escribe el nombre de usuario generado conforme a la convención de nomenclatura del [[#2. Convenciones de nomenclatura|apartado 2]] (por ejemplo: _jalopez_).
3. En el campo **Nombre completo**, escribe el nombre completo del empleado (por ejemplo: _Juan Antonio López Cabrera_).
4. Deja en blanco el campo **Descripción** por ahora; se completará en el [[#4.3 Agregar el campo Descripción|apartado 4.3]].
5. En el campo **Contraseña**, escribe la contraseña generada conforme a la política del [[#3. Política de contraseñas|apartado 3]].
6. En el campo **Confirmar contraseña**, vuelve a escribir la misma contraseña.
7. Configura las opciones de la cuenta conforme a la siguiente tabla:

| Opción                                                                 | Estado requerido              |
| ---------------------------------------------------------------------- | ----------------------------- |
| El usuario debe cambiar la contraseña en el siguiente inicio de sesión | ☐ Desactivada                 |
| **El usuario no puede cambiar la contraseña**                          | ☑ **Activada**                |
| **La contraseña nunca expira**                                         | ☑ **Activada**                |
| Cuenta deshabilitada                                                   | ☐ Desactivada (cuenta activa) |

8. Da clic en **Crear** para crear la cuenta y luego en **Cerrar** para cerrar el cuadro de diálogo.

### 4.3 Agregar el campo Descripción

1. Localiza el usuario recién creado en la carpeta **Usuarios** de la consola.
2. Da doble clic sobre el usuario para abrir sus **Propiedades**.
3. Selecciona la pestaña **General** y localiza el campo **Descripción**.
4. Escribe el puesto del colaborador seguido de un guion medio y el nombre de la empresa (por ejemplo: _Contador general - Contoso_).
5. Da clic en **Aplicar** y luego en **Aceptar**.

### 4.4 Agregar el usuario a los grupos requeridos

El usuario debe ser miembro de los grupos **Usuarios** y **Usuarios de escritorio remoto**. En la consola **Administración de equipos**, la membresía se gestiona desde la carpeta **Grupos**, no desde las propiedades del usuario.

#### Grupo: Usuarios

1. En el panel izquierdo, da clic en la carpeta **Grupos** dentro de **Usuarios y grupos locales**.
2. En el panel central, localiza el grupo **Usuarios** y da doble clic para abrir sus propiedades.
3. Da clic en **Agregar**.
4. En el cuadro de texto, escribe el nombre de usuario (por ejemplo: _jalopez_) y da clic en **Comprobar nombres** para validarlo.
5. Da clic en **Aceptar** para añadir el usuario al grupo.
6. Da clic en **Aplicar** y luego en **Aceptar**.

#### Grupo: Usuarios de escritorio remoto

1. En la carpeta **Grupos**, localiza el grupo **Usuarios de escritorio remoto** y da doble clic para abrir sus propiedades.
2. Da clic en **Agregar**.
3. Escribe el nombre de usuario (por ejemplo: _jalopez_) y da clic en **Comprobar nombres** para validarlo.
4. Da clic en **Aceptar**.
5. Da clic en **Aplicar** y luego en **Aceptar**.

:::note[Nota]
Para verificar la membresía, regresa a la carpeta **Usuarios**, da doble clic sobre el usuario y selecciona la pestaña **Miembro de**. Confirma que aparecen ambos grupos antes de cerrar la ventana.
:::

---

## 5. Modificación de usuario

Sigue el procedimiento a continuación cuando necesites actualizar los datos de un usuario existente.

### 5.1 Acceso al usuario

1. Abre la consola **Administración de equipos** (`compmgmt.msc`).
2. Expande **Usuarios y grupos locales** y da clic en la carpeta **Usuarios**.
3. Da doble clic sobre el usuario para abrir sus **Propiedades**.

### 5.2 Campos modificables

Realiza únicamente los cambios solicitados. Los campos más comunes a actualizar son:

- **Nombre completo** → pestaña **General**, campo **Nombre completo**.
- **Descripción** → pestaña **General**, campo **Descripción** (formato: _Puesto - Empresa_).
- **Membresía de grupos** → carpeta **Grupos** de la consola (ver [[#4.4 Agregar el usuario a los grupos requeridos|apartado 4.4]]).

### 5.3 Restablecer la contraseña

1. En la consola **Administración de equipos**, da clic derecho sobre el usuario.
2. Selecciona **Restablecer contraseña**.
3. Escribe la nueva contraseña conforme a la política del [[#3. Política de contraseñas|apartado 3]].
4. Confirma la contraseña en el campo correspondiente.
5. Deja sin marcar la casilla **El usuario debe cambiar la contraseña en el siguiente inicio de sesión**.
6. Da clic en **Aceptar**.
7. Verifica que en las **Propiedades** del usuario, pestaña **General**, la casilla **El usuario no puede cambiar la contraseña** continúa marcada.

:::note[Nota]
Notifica al colaborador la nueva contraseña mediante un canal seguro (presencial, sobre cerrado o mensaje cifrado). Nunca la compartas por correo electrónico sin cifrado.
:::
---

## 6. Desactivación de usuario

Desactiva la cuenta cuando un colaborador se ausente temporalmente, cause baja provisional o mientras se espera confirmación de baja definitiva. La desactivación preserva el objeto en el directorio sin permitir el inicio de sesión.

### 6.1 Procedimiento de desactivación

1. Abre la consola **Administración de equipos** (`compmgmt.msc`).
2. Expande **Usuarios y grupos locales** y da clic en la carpeta **Usuarios**.
3. Da clic derecho sobre la cuenta del usuario.
4. Selecciona **Propiedades**.
5. En la pestaña **General**, marca la casilla **La cuenta está deshabilitada**.
6. Da clic en **Aplicar** y luego en **Aceptar**.

:::note[Nota]
Cuando la cuenta está deshabilitada, el ícono del usuario en la consola muestra una **flecha hacia abajo** como indicador visual de su estado inactivo.
:::

### 6.2 Verificación del estado

1. Da doble clic sobre el usuario para abrir sus **Propiedades**.
2. En la pestaña **General**, confirma que la casilla **La cuenta está deshabilitada** está marcada.

### 6.3 Reactivación de la cuenta

Si necesitas reactivar una cuenta previamente deshabilitada, realiza los pasos siguientes:

1. Da clic derecho sobre el usuario en la consola y selecciona **Propiedades**.
2. En la pestaña **General**, desmarca la casilla **La cuenta está deshabilitada**.
3. Da clic en **Aplicar** y luego en **Aceptar**.

:::warning[Advertencia]
Tras reactivar la cuenta, restablece la contraseña conforme al procedimiento del [[#5.3 Restablecer la contraseña|apartado 5.3]] antes de notificar al colaborador, ya que la contraseña original puede haber sido comprometida.
:::

---

## 7. Eliminación de usuario

Elimina la cuenta únicamente cuando exista confirmación definitiva de la baja del colaborador y se haya realizado la transferencia o respaldo de sus datos y recursos.

:::warning[Advertencia]
La eliminación de una cuenta de usuario local es **irreversible**. Una vez eliminada, no es posible recuperarla aunque se cree una cuenta nueva con el mismo nombre de usuario, ya que el identificador de seguridad (SID) original se destruye de forma permanente.
:::

### 7.1 Lista de verificación previa a la eliminación

Antes de eliminar la cuenta, confirma que se han completado los siguientes puntos:

- [ ] La cuenta está deshabilitada (ver [[#6. Desactivación de usuario|apartado 6]]).
- [ ] Se ha realizado respaldo o transferencia del perfil del usuario.
- [ ] Se ha transferido la propiedad de sus archivos compartidos y buzón de correo.
- [ ] Se cuenta con autorización formal (por escrito o por ticket) del responsable del área.

### 7.2 Procedimiento de eliminación

1. Abre la consola **Administración de equipos** (`compmgmt.msc`).
2. Expande **Usuarios y grupos locales** y da clic en la carpeta **Usuarios**.
3. Da clic derecho sobre la cuenta del usuario.
4. Selecciona **Eliminar**.
5. Lee detenidamente el mensaje de confirmación y da clic en **Sí** para confirmar la eliminación.

### 7.3 Verificación posterior

1. En la carpeta **Usuarios** de la consola, confirma visualmente que la cuenta ya no aparece en la lista.
2. Si el usuario aún es visible, actualiza la vista presionando **F5** y verifica nuevamente.

---

## 8. Tabla de referencia rápida

| Operación         | Descripción                                               | Apartado |
| ----------------- | --------------------------------------------------------- | -------- |
| **Alta**          | Creación de una nueva cuenta de usuario en el servidor.   | §4       |
| **Modificación**  | Actualización de datos, contraseña o membresía de grupos. | §5       |
| **Desactivación** | Bloqueo temporal del acceso sin eliminar el objeto.       | §6       |
| **Eliminación**   | Borrado permanente e irreversible del objeto de usuario.  | §7       |

---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_