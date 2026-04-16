---
title: Instalación y configuración de OpenVPN Connect 
sidebar_position: 2 
filename: openvpn.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::

## 1. Introducción

Para acceder al servidor de Microsip es necesario contar con una conexión VPN activa. La herramienta utilizada para esta tarea es **OpenVPN Connect**, por lo que es indispensable tenerla instalada y con un perfil configurado antes de intentar cualquier conexión al servidor.

Este manual cubre la instalación de la aplicación, la configuración de un perfil de conexión y el procedimiento para establecer la sesión de VPN.

### 1.1 Convenciones del documento

A lo largo del manual se utilizan las siguientes convenciones:

- **Texto en negrita** → nombre de un elemento de interfaz (botón, campo, menú).
- _Texto en cursiva_ → valor de ejemplo que debes sustituir por el dato real.
- Texto en `monospace` → comando, ruta o valor exacto que debes escribir o seleccionar.
- Bloque `> [!NOTE]` → información complementaria o aclaración.
- Bloque `> [!WARNING]` → acción irreversible o dato crítico.

---

## 2. Instalación de OpenVPN Connect

:::note[Nota] 
Para este tutorial se utiliza la versión `3.8.0` de OpenVPN Connect, que es la más reciente al momento de redactar este documento. La instalación se realiza mediante **WinGet**, el gestor de paquetes de Windows.
:::
1. Abre una terminal de **Windows PowerShell**.
2. Escribe el siguiente comando en el prompt:

```powershell
winget install OpenVPNTechnologies.OpenVPNConnect --silent
```

3. Presiona **Enter** para ejecutar el comando.
4. WinGet realizará la descarga y comenzará el desempaquetado del instalador de OpenVPN Connect.
5. Cuando el sistema solicite elevar permisos de administrador, da clic en el botón **Sí**.
6. Una vez finalizada la instalación, abre la aplicación **OpenVPN Connect** para verificar que se ejecuta correctamente. Deberás ver la siguiente ventana:

---

## 3. Configuración de VPN en OpenVPN Connect

:::warning[Advertencia] 
Por motivos de seguridad, este documento no contiene claves, certificados, perfiles de conexión OVPN ni datos críticos como usuarios, contraseñas en producción, direcciones IP, nombres de dominio o nombres de equipos. Tampoco se incluyen imágenes del proceso de configuración para evitar exponer información sensible. Todas las instrucciones hacen referencia a **OpenVPN Connect versión 3.8.0**.
:::

1. Abre la aplicación **OpenVPN Connect**.
2. En la ventana principal, da clic en el botón **Upload File** (Subir archivo).
3. En la ventana **Import Profile or Certificate** (Importar perfil o certificado), navega hasta el directorio donde se encuentra tu archivo de perfil. Los archivos de perfil tienen la extensión `.ovpn`.
4. Selecciona el archivo de perfil y da clic en el botón **Abrir**.
5. En la ventana **Confirm importing the profile from** (Confirma la importación del perfil desde), verifica que tanto la ruta como el nombre del archivo sean correctos y da clic en **Import** (Importar).
6. La aplicación mostrará la ventana principal con el estado **Ready to connect** (Listo para conectarse). Antes de iniciar la conexión, configura las credenciales del perfil siguiendo los pasos a continuación.
7. Da clic en el ícono de menú.
8. Da clic en la opción **My Profiles** (Mis perfiles).
9. Localiza el perfil que acabas de importar y da clic en el botón **Edit** (Editar).
10. Rellena los siguientes campos:

|Campo|Descripción|
|---|---|
|**Profile Name**|Nombre identificador del perfil. Escribe `Conexión a servidor Microsip`.|
|**Username**|Usuario de VPN. Campo obligatorio.|
|**Password**|Contraseña de VPN. Campo obligatorio.|
|**Private Key Password**|Frase de cifrado de la llave privada. En la mayoría de los casos es obligatorio indicarla.|

> [!NOTE] Si no cuentas con alguno de estos datos, solicítalos al personal responsable de infraestructura.

11. Da clic en el botón **Save Changes** (Guardar cambios) una vez que hayas completado todos los campos.
12. La aplicación regresará a la pantalla **My Profiles**. Da clic en el ícono de menú.
13. Verifica que tu perfil aparece con el nombre **Conexión a servidor Microsip** y que el estado muestra **Ready to connect**.

---

## 4. Establecer conexión de VPN con OpenVPN Connect

Una vez que tengas el perfil configurado, sigue los pasos a continuación para establecer la conexión al servidor de VPN.

1. Abre la aplicación **OpenVPN Connect**.
2. En la ventana **Ready to connect**, localiza el perfil **Conexión a servidor Microsip**.
3. Da clic en el botón **Connect**. La aplicación iniciará el proceso de conexión.
4. Cuando la conexión se establezca correctamente, el título de la ventana cambiará a **Securely Connected!** (¡Conectado de forma segura!), tal como se muestra a continuación:


---

## 5. Posibles problemas conocidos

### 5.1 Error: La conexión se encuentra ocupada por otro proceso

Este problema ocurre cuando **OpenVPN GUI** está en ejecución al mismo tiempo que **OpenVPN Connect**. Aunque son aplicaciones relacionadas, utilizan procesos y protocolos diferentes, lo que puede generar incompatibilidades en el adaptador de red compartido.

Para resolverlo:

1. Cierra la conexión activa en **OpenVPN GUI**.
2. Inicia la conexión en **OpenVPN Connect** y espera a que se establezca.
3. Una vez conectado en OpenVPN Connect, inicia la conexión en **OpenVPN GUI**.

> [!NOTE] Este problema se presenta cuando ambas aplicaciones intentan usar el adaptador `OpenVPN TAP-Windows` o `OpenVPN TAP` simultáneamente. Cambiar el orden de inicio de las conexiones es suficiente para resolverlo.

### 5.2 Error: Al dar clic en Connect no ocurre nada

Este problema se presenta de forma esporádica y suele deberse a una ejecución incorrecta de la aplicación.

Para resolverlo:

1. Presiona **Ctrl + Shift + Esc** para abrir el **Administrador de tareas**.
2. Localiza el proceso **OpenVPN Connect** en la lista.
3. Da clic derecho sobre el proceso y selecciona **Finalizar tarea**.
4. Vuelve a abrir la aplicación **OpenVPN Connect** e intenta conectarte nuevamente.

---

## 6. Tabla de referencia rápida

|Operación|Descripción|Apartado|
|---|---|---|
|**Instalación**|Instalación de OpenVPN Connect.|§2|
|**Configuración**|Configuración de la aplicación.|§3|
|**Conexión**|Conexión de VPN.|§4|
|**Problemas conocidos**|Soluciones a problemas conocidos.|§5|

---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_