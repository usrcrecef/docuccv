---
title: Gestión de VPN
sidebar_position: 6
filename: usuarios-vpn.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::


---

## 1. Introducción

Este manual describe los procedimientos técnicos para gestionar cuentas de usuario de VPN en un dispositivo MikroTik. Cubre el ciclo de vida completo de un usuario: alta, modificación, desactivación y eliminación.

Las operaciones descritas se realizan desde la aplicación **WinBox**, que establece una conexión directa con el dispositivo MikroTik y permite administrar el apartado **PPP** donde residen los usuarios de VPN.

:::warning[Advertencia]
Antes de continuar es indispensable contar con una conexión VPN activa que te permita alcanzar el mismo segmento de red en el que se encuentra el servidor MikroTik. Consulta el apartado [_Configuración de VPN en OpenVPN Connect_](./openvpn#3-configuración-de-vpn-en-openvpn-connect) para configurar el acceso antes de continuar.
:::

### 1.1 Convenciones del documento

A lo largo del manual se utilizan las siguientes convenciones:

- **Texto en negrita** → nombre de un elemento de interfaz (botón, campo, menú).
- _Texto en cursiva_ → valor de ejemplo que debes sustituir por el dato real.
- Texto en `monospace` → valor exacto que debes escribir o seleccionar en la interfaz.
- Bloque `> [!NOTE]` → información complementaria o aclaración.
- Bloque `> [!WARNING]` → acción irreversible o dato crítico.

### 1.2 Descarga e instalación de WinBox

Para gestionar los usuarios de VPN en MikroTik es necesario contar con la aplicación **WinBox**. Sigue los pasos a continuación para obtenerla.

:::note[Nota]
Para este tutorial se utiliza la última versión estable de WinBox (`v4.0.1` al momento de redactar este documento). Descárgala desde el sitio oficial: [MikroTik · Downloads](https://mikrotik.com/download/winbox).
:::

1. Accede al sitio web de [descargas de WinBox](https://mikrotik.com/download/winbox).
2. Localiza la versión para Windows. El sitio ofrece únicamente la versión de **64 bits**.
3. Da clic sobre el enlace **Windows (64 bits)** para iniciar la descarga.
4. Espera a que la descarga concluya. Una vez finalizada, verás el archivo en la barra de descargas de tu navegador.
5. Da clic en **Abrir carpeta** para acceder a la carpeta de _Descargas_ del usuario.
6. Da clic derecho sobre el archivo `WinBox_Windows.zip` y selecciona **Extraer todo…**
7. En la ventana **Extraer carpetas comprimidas (en zip)**, confirma que la casilla **Mostrar los archivos al completar** está marcada y da clic en **Extraer**.
8. Al finalizar la extracción, verifica que el archivo `WinBox.exe` se encuentra en la carpeta destino.
9. Da doble clic sobre `WinBox.exe` para confirmar que la aplicación abre correctamente.

:::note[Nota]
Por defecto, WinBox escanea la red local en busca de dispositivos MikroTik que escuchen en el puerto **8291**. Esto es el comportamiento esperado al abrir la aplicación.
:::

### 1.3 Conexión a WinBox antes de gestionar usuarios

Antes de realizar cualquier operación sobre los usuarios de VPN, establece la conexión con el dispositivo MikroTik. Para ello necesitas credenciales con permisos sobre el apartado **PPP**, ya que sin este nivel de acceso no podrás crear, modificar, desactivar ni eliminar usuarios.

:::warning[Advertencia]
Asegúrate de tener una sesión de VPN activa antes de intentar conectarte. Consulta [_Configuración de VPN en OpenVPN Connect_](./openvpn#3-configuración-de-vpn-en-openvpn-connect) si necesitas iniciar la conexión.
:::

Sigue los pasos a continuación para conectarte al dispositivo MikroTik desde WinBox:

1. Abre la aplicación **WinBox** (ubicada en la carpeta de _Descargas_ del usuario, o donde la hayas extraído).
2. En el campo **Connect to**, escribe la dirección IP del dispositivo MikroTik (por ejemplo: `172.16.0.1`).
3. En el campo **Login**, escribe tu nombre de usuario.
4. En el campo **Password**, escribe tu contraseña.
5. Da clic en el botón **Connect**.

:::note[Nota]
Una vez conectado, WinBox mostrará el panel de administración del dispositivo MikroTik con el menú lateral izquierdo habilitado.
:::

---

## 2. Convenciones de nomenclatura

### 2.1 Nombre de usuario (Name / Secret)

El nombre del Secret de VPN sigue la misma convención que el usuario de Windows: se construye con las **iniciales del nombre** del colaborador seguidas de su **primer apellido**, todo en minúsculas, sin espacios ni caracteres especiales.

**Regla:** `[iniciales del nombre]` + `[primer apellido]`

|Nombre completo del colaborador|Nombre de usuario resultante|
|---|---|
|Juan Antonio López Cabrera|`jalopez`|
|María González Ruiz|`mgonzalez`|
|Carlos Enrique Soto Méndez|`cesoto`|

### 2.2 Resolución de duplicados

Cuando el nombre de usuario generado ya existe en el dispositivo, añade un número consecutivo al final, comenzando en `1`. Verifica la disponibilidad en la lista de Secrets antes de crear la cuenta.

|Situación|Nombre de usuario asignado|
|---|---|
|Primer usuario con ese patrón|`jalopez`|
|`jalopez` ya existe|`jalopez1`|
|`jalopez` y `jalopez1` ya existen|`jalopez2`|

### 2.3 Campos del perfil de usuario (Secret)

Al crear o modificar un Secret, rellena los campos conforme a la siguiente tabla:

|Campo|Valor a introducir|Ejemplo|
|---|---|---|
|**Comment**|Nombre completo - Puesto - Empresa|_Juan Antonio López Cabrera - Contador - Crece_|
|**Name**|Iniciales del nombre + primer apellido (minúsculas)|_jalopez_|
|**Password**|Contraseña generada conforme a la política del [apartado 3](usuarios-vpn.md#3-política-de-contraseñas)|_lv5o~JtAPVyuBtiDmW_|
|**Service**|`ovpn`|—|
|**Profile**|`vpn`|—|

---

## 3. Política de contraseñas

Toda cuenta de usuario de VPN debe tener asignada una contraseña que cumpla con los siguientes requisitos obligatorios:

1. Longitud mínima de **18 caracteres**.
2. Combinación de **letras mayúsculas y minúsculas**.
3. Al menos un **dígito numérico** (0–9).
4. Al menos un **carácter especial** (por ejemplo: `!`, `@`, `#`, `$`, `%`, `&`, `*`, `~`).

### 3.1 Herramientas recomendadas para generar contraseñas

Para garantizar aleatoriedad y cumplimiento de la política, utiliza una de las siguientes herramientas al momento de generar la contraseña:

|Herramienta|Tipo|Referencia|
|---|---|---|
|**KeePass**|Aplicación de escritorio (sin conexión)| [keepass.info](https://keepass.info)|
|**Avast Random Password Generator**|Generador en línea|[avast.com/random-password-generator](https://avast.com/random-password-generator)|

:::note[Nota]
Configura la herramienta generadora con longitud de **18 caracteres**, mayúsculas, minúsculas, números y caracteres especiales activados para asegurarte de que la contraseña cumple con todos los requisitos en un solo paso.
:::

:::warning[Advertencia]
Registra la contraseña generada en el gestor de contraseñas corporativo o entrega la credencial al colaborador de forma segura (sobre cerrado o canal cifrado). Nunca la envíes por correo electrónico en texto plano.
:::

---

## 4. Alta de usuario de VPN

Un usuario de VPN está ligado a un **Secret PPP** en el dispositivo MikroTik. El acceso del colaborador depende tanto de las credenciales del Secret como del perfil asociado, por lo que es indispensable completar **todos los pasos** de este apartado.

:::note[Nota]
Antes de comenzar, asegúrate de tener una sesión de VPN activa y una conexión establecida con el dispositivo MikroTik desde WinBox. Consulta el [apartado 1.3](./usuarios-vpn.md#13-conexión-a-winbox-antes-de-gestionar-usuarios) si aún no has realizado este paso.
:::

### 4.1 Creación del Secret

1. En WinBox, da clic en la sección **PPP** del menú lateral izquierdo.
2. En la ventana que se abre, da clic sobre la pestaña **Secrets**.
3. Da clic en el botón **New** para abrir el formulario de creación.
4. Rellena los campos conforme a la tabla del [apartado 2.3](./usuarios-vpn.md#23-campos-del-perfil-de-usuario-secret): 
    - **Comment:** escribe el nombre completo del colaborador, su puesto y la empresa, separados por guiones medios (por ejemplo: _Juan Antonio López Cabrera - Contador - Crece_).
    - **Name:** escribe el nombre de usuario generado conforme a la convención del [apartado 2.1](./usuarios-vpn.md#21-nombre-de-usuario-name--secret) (por ejemplo: _jalopez_).
    - **Password:** da clic en el botón **+** para habilitar el campo de texto y escribe la contraseña generada conforme a la política del [apartado 3](./usuarios-vpn.md#3-política-de-contraseñas).
    - **Service:** selecciona `ovpn` de la lista desplegable.
    - **Profile:** selecciona `vpn` de la lista desplegable.
5. Da clic en el botón **OK** para guardar el Secret.
6. Verifica en la pestaña **Secrets** que el nuevo usuario aparece en la lista.

:::note[Nota]
Por seguridad, confirma que las contraseñas no se muestran en texto claro en la lista de Secrets. Si las contraseñas son visibles, da clic en el ícono de **engrane**, selecciona **Settings** y activa el deslizador **Hide password** para enmascararlas.
:::

---

## 5. Modificación de usuario de VPN

> [!WARNING] Para solicitar la modificación de un usuario de VPN es obligatorio enviar un correo electrónico con la solicitud y la autorización correspondiente al área de sistemas antes de realizar cualquier cambio.

1. En WinBox, da clic en la sección **PPP** del menú lateral izquierdo.
2. Da clic sobre la pestaña **Secrets**.
3. Localiza el Secret que vas a modificar. Si hay muchos registros, da clic en la barra de búsqueda en la parte superior derecha de la ventana o presiona **Ctrl + F** y escribe el nombre del usuario.
4. Da doble clic sobre el Secret para abrir sus propiedades.
5. Realiza los cambios requeridos. Los campos modificables son **Comment**, **Name** y **Password**.

:::warning[Advertencia]
No modifiques los campos **Service** ni **Profile**. Cambiar cualquiera de estos valores provocará que el colaborador pierda el acceso a la VPN de forma inmediata, independientemente de que sus credenciales sean correctas en el cliente.
:::

6. Da clic en el botón **OK** para guardar los cambios.

:::warning[Advertencia]
Notifica al colaborador los cambios realizados para que actualice sus credenciales en el cliente de VPN. Cualquier sesión activa que utilice este Secret será desconectada de forma inmediata al guardar los cambios.
:::

---

## 6. Desactivación de usuario de VPN

Utiliza esta opción cuando un colaborador deba cesar el acceso temporalmente. La desactivación preserva el Secret en el dispositivo, lo que permite rehabilitarlo en el futuro sin necesidad de recrearlo.

1. En WinBox, da clic en la sección **PPP** del menú lateral izquierdo.
2. Da clic sobre la pestaña **Secrets**.
3. Localiza el Secret que vas a desactivar. Si hay muchos registros, da clic en la barra de búsqueda o presiona **Ctrl + F** y escribe el nombre del usuario.
4. Selecciona el Secret haciendo clic sobre él.
5. Da clic en el botón **Disable**.
6. Verifica que el Secret aparece atenuado en la lista, lo que indica que está deshabilitado.

:::warning[Advertencia]
Cualquier sesión activa que utilice este Secret será desconectada de forma inmediata al deshabilitarlo.
:::

### 6.1 Reactivación de un Secret

Si necesitas rehabilitar un Secret previamente desactivado, realiza los pasos siguientes:

1. Localiza el Secret desactivado en la pestaña **Secrets** (aparecerá atenuado en la lista).
2. Selecciona el Secret haciendo clic sobre él.
3. Da clic en el botón **Enable**.
4. Verifica que el Secret ya no aparece atenuado en la lista.

---

## 7. Eliminación de usuario de VPN

:::warning[Advertencia]
Para solicitar la eliminación de un usuario de VPN es obligatorio enviar un correo electrónico con la solicitud y la autorización correspondiente al área de sistemas antes de realizar cualquier cambio.
:::

:::warning[Advertencia]
La eliminación de un Secret es **irreversible**. Una vez eliminado, no es posible recuperarlo. Si existe la posibilidad de que el acceso sea necesario en el futuro, considera desactivar el Secret en lugar de eliminarlo (ver [apartado 6](./usuarios-vpn.md#6-desactivación-de-usuario-de-vpn)).
:::

### 7.1 Lista de verificación previa a la eliminación

Antes de eliminar el Secret, confirma que se han completado los siguientes puntos:

- [ ] El Secret está desactivado (ver [apartado 6](./usuarios-vpn.md#6-desactivación-de-usuario-de-vpn)).
- [ ] Se cuenta con autorización formal (correo electrónico o ticket) del responsable del área.
- [ ] El colaborador ha sido notificado de la baja de su acceso.

### 7.2 Procedimiento de eliminación

1. En WinBox, da clic en la sección **PPP** del menú lateral izquierdo.
2. Da clic sobre la pestaña **Secrets**.
3. Localiza el Secret que vas a eliminar. Si hay muchos registros, da clic en la barra de búsqueda o presiona **Ctrl + F** y escribe el nombre del usuario.
4. Selecciona el Secret haciendo clic sobre él.
5. Da clic en el botón **Remove**.
6. Confirma la acción en el cuadro de diálogo que aparece.

:::warning[Advertencia]
Cualquier sesión activa que utilice este Secret será desconectada de forma inmediata al eliminarlo.
:::

### 7.3 Verificación posterior

1. En la pestaña **Secrets**, confirma visualmente que el usuario ya no aparece en la lista.
2. Si el Secret aún es visible, da clic en el botón **Refresh** de la barra de herramientas y verifica nuevamente.

---

## 8. Tabla de referencia rápida

|Operación|Descripción|Apartado|
|---|---|---|
|**Alta**|Creación de un nuevo Secret de VPN en el dispositivo MikroTik.|§4|
|**Modificación**|Actualización de datos o contraseña de un Secret existente.|§5|
|**Desactivación**|Bloqueo temporal del acceso sin eliminar el Secret.|§6|
|**Eliminación**|Borrado permanente e irreversible del Secret.|§7|

---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_