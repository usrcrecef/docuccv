---
title: Gestión de usuarios de Microsip
sidebar_position: 4
filename: usuarios-microsip.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::

## 1. Introducción

Este manual describe los procedimientos técnicos para administrar cuentas de usuario en el sistema ERP **Microsip**. Cubre el ciclo de vida completo de un usuario: alta, modificación, desactivación y eliminación.

Las operaciones descritas se realizan desde el módulo **Administración del sistema** (AdminSys), accesible desde la barra principal de Microsip. Para ejecutarlas necesitas iniciar sesión con la cuenta `SYSDBA` o con una cuenta de usuario que tenga habilitada la opción **Autorizar acciones a otros usuarios**.

:::note[Aviso]
Confirma que puedas establecer una [conexión de VPN](./openvpn.md#4-establecer-conexión-de-vpn-con-openvpn-connect) y realizar una [conexión de escritorio remoto](./rdp.md#3-configuración-e-inicio-de-sesión) al servidor de Microsip.
:::

:::warning[Advertencia]
Por política de seguridad, las credenciales de la cuenta `SYSDBA` no deben compartirse con usuarios finales. Toda gestión de usuarios debe realizarla exclusivamente el personal del área de sistemas.
:::

### 1.1 Convenciones del documento

A lo largo del manual se utilizan las siguientes convenciones:

- **Texto en negrita** → nombre de un elemento de interfaz (botón, campo, menú, pestaña).
- _Texto en cursiva_ → valor de ejemplo que debes sustituir por el dato real.
- Texto en `monospace` → valor exacto que debes escribir o seleccionar.
- Bloque `> [!NOTE]` → información complementaria o aclaración.
- Bloque `> [!WARNING]` → acción irreversible o dato crítico.

### 1.2 Acceso al módulo de administración

Todas las operaciones de este manual parten desde el módulo **Administración del sistema**. Sigue los pasos a continuación para acceder a él:

1. Inicia sesión en Microsip con la cuenta `SYSDBA` o con una cuenta con permisos de administración.
2. En la barra principal de Microsip, da clic en el ícono marcado con la letra **A** (Administrador del sistema).
3. En el menú lateral izquierdo del módulo, da clic en **Catálogos**.
4. Dentro de Catálogos, da clic en **Usuarios**. Se mostrará el visor de usuarios con todos los registros existentes.

---

## 2. Convenciones de nomenclatura

### 2.1 Nombre de usuario

El nombre de usuario en Microsip sigue la misma convención que los usuarios de Windows Server y de VPN: se construye con las **iniciales del nombre** del colaborador seguidas de su **primer apellido**, todo en minúsculas, sin espacios ni caracteres especiales.

**Regla:** `[iniciales del nombre]` + `[primer apellido]`

|Nombre completo del colaborador|Nombre de usuario resultante|
|---|---|
|Juan Antonio López Cabrera|`jalopez`|
|María González Ruiz|`mgonzalez`|
|Carlos Enrique Soto Méndez|`cesoto`|

### 2.2 Resolución de duplicados

Cuando el nombre de usuario generado ya existe en el sistema, añade un número consecutivo al final, comenzando en `1`. Verifica la disponibilidad en el visor de usuarios antes de crear la cuenta.

|Situación|Nombre de usuario asignado|
|---|---|
|Primer usuario con ese patrón|`jalopez`|
|`jalopez` ya existe|`jalopez1`|
|`jalopez` y `jalopez1` ya existen|`jalopez2`|

### 2.3 Campos del perfil de usuario

Al crear o modificar un usuario, rellena los campos conforme a la siguiente tabla:

|Campo|Valor a introducir|Ejemplo|
|---|---|---|
|**Tipo de elemento**|`Usuario`|—|
|**Nombre**|Iniciales del nombre + primer apellido (minúsculas)|_jalopez_|
|**Contraseña**|Contraseña generada conforme a la política del [apartado 3](./usuarios-microsip.md#3-política-de-contraseñas).|—|
|**Confirmación de contraseña**|Repetir la misma contraseña|—|
|**Rol**|Perfil de permisos asignado al colaborador (por ejemplo: `Contabilidad`)|_Contabilidad_|
|**Empresas autorizadas**|`Todas` o selección de una lista según corresponda|—|

---

## 3. Política de contraseñas

:::warning[Advertencia]
Microsip impone un límite técnico de **8 caracteres** para las contraseñas de usuario. Esto constituye una excepción a la política general de 18 caracteres establecida para los usuarios de Windows Server y VPN. Dentro de ese límite, aplica los siguientes requisitos:

1. Longitud de exactamente **8 caracteres** (el sistema ignora cualquier carácter adicional).
2. Combinación de **letras mayúsculas y minúsculas**.
3. Al menos un **dígito numérico** (0–9).
4. Al menos un **carácter especial** (por ejemplo: `!`, `@`, `#`, `$`, `%`, `&`, `*`).
:::

### 3.1 Herramientas recomendadas para generar contraseñas

Para garantizar aleatoriedad y cumplimiento de la política, utiliza una de las siguientes herramientas al momento de generar la contraseña. Recuerda configurar la longitud en **8 caracteres**:

|Herramienta|Tipo|Referencia|
|---|---|---|
|**KeePass**|Aplicación de escritorio (sin conexión)|keepass.info|
|**Avast Random Password Generator**|Generador en línea|avast.com/random-password-generator|

:::warning[Advertencia]
Registra la contraseña generada en el gestor de contraseñas corporativo o entrega la credencial al colaborador de forma segura (sobre cerrado o canal cifrado). Nunca la envíes por correo electrónico en texto plano.
:::

---

## 4. Alta de usuario

### 4.1 Prerrequisitos

Antes de crear un usuario, confirma que se han completado los siguientes puntos:

- [ ] Existe un rol (perfil de permisos) creado para el puesto del colaborador. Si no existe, créalo antes de continuar.
- [ ] Cuentas con el nombre de usuario generado conforme a la convención del [apartado 2](./usuarios-microsip.md#2-convenciones-de-nomenclatura).
- [ ] Cuentas con la contraseña generada conforme a la política del [apartado 3](./usuarios-microsip.md#3-política-de-contraseñas).

:::note[Nota]
Microsip recomienda crear primero los roles (perfiles de permisos) antes de registrar usuarios. Los roles típicos son: `Caja`, `Supervisor`, `Administrador`, `Contabilidad`, entre otros. Si el rol requerido no existe, coordínate con el responsable del sistema para crearlo.
:::

### 4.2 Creación del usuario

1. Accede al visor de usuarios conforme al [apartado 1.2](./usuarios-microsip.md#12-acceso-al-módulo-de-administración).
2. En la barra de herramientas, da clic en el botón **Nuevo**.
3. En la ventana que se abre, selecciona `Usuario` en el campo **Tipo de elemento**.
4. En el campo **Nombre**, escribe el nombre de usuario generado conforme a la convención del [apartado 2.1](./usuarios-microsip.md#21-nombre-de-usuario) (por ejemplo: _jalopez_).
5. En el campo **Contraseña**, escribe la contraseña generada conforme a la política del [apartado 3](./usuarios-microsip.md#3-política-de-contraseñas).
6. En el campo **Confirmación de contraseña**, vuelve a escribir la misma contraseña.
7. En el campo **Rol**, selecciona el perfil de permisos correspondiente al puesto del colaborador.
8. En el campo **Empresas autorizadas**, selecciona `Todas` o elige `Una lista` para restringir el acceso a empresas o sucursales específicas.
9. Deja sin marcar la casilla **Autorizar acciones a otros usuarios**, salvo que el colaborador requiera explícitamente permisos de administración.
10. Da clic en **Guardar** para crear el usuario.
11. Verifica en el visor de usuarios que el nuevo registro aparece en la lista con el estado **Activo**.

:::note[Nota] 
El sistema establece automáticamente el estado **Activo** al crear un nuevo usuario. No es necesario habilitarlo de forma manual.
:::

---

## 5. Modificación de usuario

1. Accede al visor de usuarios conforme al [apartado 1.2](./usuarios-microsip.md#12-acceso-al-módulo-de-administración).
2. Localiza al usuario que vas a modificar en la lista.
3. Da doble clic sobre el registro del usuario para abrir su ficha.
4. Da clic en el ícono **Modificar** (lápiz) para habilitar la edición.
5. Realiza los cambios requeridos. Los campos modificables son:

|Campo|Descripción|
|---|---|
|**Contraseña**|Restablece la contraseña conforme a la política del [apartado 3](./usuarios-microsip.md#3-política-de-contraseñas).|
|**Rol**|Cambia el perfil de permisos asignado al colaborador.|
|**Empresas autorizadas**|Ajusta el acceso a empresas o sucursales.|
|**Autorizar acciones a otros**|Activa o desactiva el permiso de administración delegada.|
|**Derechos**|Define desde la pestaña **Derechos** las acciones específicas permitidas.|

6. Da clic en **Guardar** para aplicar los cambios.

:::warning[Advertencia]
Notifica al colaborador cualquier cambio en sus credenciales para que pueda iniciar sesión correctamente en su próximo acceso al sistema.
:::

---

## 6. Desactivación de usuario

Utiliza esta opción cuando un colaborador deba cesar el acceso de forma temporal. La desactivación conserva el registro en el sistema, lo que permite reactivarlo sin necesidad de volver a configurar sus permisos.

1. Accede al visor de usuarios conforme al [apartado 1.2](./usuarios-microsip.md#12-acceso-al-módulo-de-administración).
2. Localiza al usuario que vas a desactivar en la lista.
3. Da doble clic sobre el registro del usuario para abrir su ficha.
4. Da clic en el ícono **Modificar** (lápiz) para habilitar la edición.
5. En el campo **Estado**, cambia el valor de `Activo` a `Baja`.
6. Da clic en **Guardar** para aplicar el cambio.
7. Verifica en el visor de usuarios que el registro muestra el estado **Baja**.

### 6.1 Reactivación de un usuario

Si necesitas reactivar un usuario previamente desactivado, realiza los pasos siguientes:

1. Localiza al usuario con estado **Baja** en el visor de usuarios.
2. Da doble clic sobre el registro para abrir su ficha.
3. Da clic en el ícono **Modificar** (lápiz) para habilitar la edición.
4. En el campo **Estado**, cambia el valor de `Baja` a `Activo`.
5. Da clic en **Guardar**.
6. Verifica en el visor de usuarios que el registro muestra nuevamente el estado **Activo**.

:::note[Nota]
Tras reactivar un usuario, verifica que su contraseña sigue siendo válida. Si hay duda sobre si fue comprometida durante el periodo de baja, restablécela conforme al procedimiento del [apartado 5](./usuarios-microsip.md#5-modificación-de-usuario).
:::

---

## 7. Eliminación de usuario

:::warning[Advertencia]
Antes de eliminar un usuario, considera si la desactivación es suficiente (ver [apartado 6](./usuarios-microsip.md#6-desactivación-de-usuario)). La eliminación es permanente e irreversible; una vez eliminado el registro, no es posible recuperarlo.
:::

### 7.1 Lista de verificación previa a la eliminación

Antes de eliminar el usuario, confirma que se han completado los siguientes puntos:

- [ ] El usuario está en estado **Baja** (ver [apartado 6](./usuarios-microsip.md#6-desactivación-de-usuario)).
- [ ] Se cuenta con autorización formal (correo electrónico o ticket) del responsable del área.
- [ ] El colaborador ha sido notificado de la baja de su acceso al sistema.

### 7.2 Procedimiento de eliminación

1. Accede al visor de usuarios conforme al [apartado 1.2](./usuarios-microsip.md#12-acceso-al-módulo-de-administración).
2. Localiza al usuario que vas a eliminar en la lista.
3. Selecciona el registro haciendo clic sobre él.
4. En la barra de herramientas, da clic en el botón **Eliminar**.
5. Confirma la acción en el cuadro de diálogo que aparece.

### 7.3 Verificación posterior

1. En el visor de usuarios, confirma visualmente que el registro ya no aparece en la lista.
2. Si el usuario aún es visible, actualiza el visor y verifica nuevamente.

---

## 8. Tabla de referencia rápida

|Operación|Descripción|Apartado|
|---|---|---|
|**Alta**|Creación de un nuevo usuario en el sistema Microsip ERP.|§4|
|**Modificación**|Actualización de datos, contraseña, rol o permisos del usuario.|§5|
|**Desactivación**|Cambio de estado a Baja sin eliminar el registro del sistema.|§6|
|**Eliminación**|Borrado permanente e irreversible del registro de usuario.|§7|

---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_