---
title: Configuración a conexión a escritorio remoto (RDP)
sidebar_position: 3
filename: rdp.md
---

:::info[Información]
Documento publicado el **14 de abril de 2026**<br />
Autor: Juande Sánchez<br />
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com)<br />
**Versión: 0.1**
:::
## 1. Introducción

Este manual describe el procedimiento para establecer una conexión a escritorio remoto con el servidor mediante la aplicación **Conexión a escritorio remoto**, disponible de forma nativa en Windows.

### 1.1 Requisitos previos

Antes de continuar, confirma que cumples con los siguientes requisitos:

- [ ] Cuentas con un usuario de Windows Server con privilegios de `Administrador`.
- [ ] Cuentas con un usuario de VPN activo y una sesión de VPN establecida. Consulta [establecer conexión de VPN con OpenVPN Connect](./openvpn.md#4-establecer-conexión-de-vpn-con-openvpn-connect) si aún no has realizado este paso.
- [ ] Utilizas Windows 10 o Windows 11 como sistema operativo.

### 1.2 Convenciones del documento

A lo largo del manual se utilizan las siguientes convenciones:

- **Texto en negrita** → nombre de un elemento de interfaz (botón, campo, menú).
- _Texto en cursiva_ → valor de ejemplo que debes sustituir por el dato real.
- Texto en `monospace` → valor exacto que debes escribir o seleccionar.
- Bloque `> [!NOTE]` → información complementaria o aclaración.
- Bloque `> [!WARNING]` → acción irreversible o dato crítico.

---

## 2. Disponibilidad de la aplicación

:::note[Nota]
La aplicación **Conexión a escritorio remoto** está disponible en su última versión estable en Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022 y Windows Server 2025.
:::

:::warning[Advertencia]
Desde Windows 11 versión 23H2, la aplicación puede ser desinstalada. Si no cuentas con ella, descárgala desde uno de los siguientes enlaces según la arquitectura de tu equipo:
 
 - [Windows de 64 bits](https://res.cdn.office.net/remote-desktop-windows-client/mstsc_amd64_e0d8d14b-3645-4f73-99dd-470ab4fdd998/setup.exe)
 - [Windows de 32 bits](https://res.cdn.office.net/remote-desktop-windows-client/mstsc_x86_ba02bce8-7a92-4b12-b891-631748bedae8/setup.exe)
 - [Windows ARM64](https://res.cdn.office.net/remote-desktop-windows-client/mstsc_arm64_f8009d54-f3e5-4477-ae46-340dff8b491d/setup.exe)
 
 El proceso de reinstalación está documentado en [Microsoft Learn](https://learn.microsoft.com/es-es/windows-server/remote/remote-desktop-services/remotepc/uninstall-remote-desktop-connection?tabs=gui#reinstall-the-remote-desktop-connection-app), tanto para la interfaz gráfica como para el [símbolo del sistema](https://learn.microsoft.com/es-es/windows-server/remote/remote-desktop-services/remotepc/uninstall-remote-desktop-connection?tabs=command-prompt#tabpanel_2_command-prompt).
:::

---

## 3. Configuración e inicio de sesión

1. Abre la aplicación **Conexión a escritorio remoto**.
2. Se mostrará la siguiente ventana:

<img src={require('./img-rdp/rdp003.png').default} className="img-centrada" />

3. En el campo **Equipo**, escribe la dirección IP del servidor o el nombre del equipo (por ejemplo: `192.168.1.10`).
4. Da clic en el botón **Conectar**.
5. La aplicación solicitará tus credenciales de acceso. Escribe tu usuario y contraseña y marca la casilla **Recordar** para almacenar las credenciales en el **Administrador de credenciales** de Windows.

<img src={require('./img-rdp/rdp004.png').default} className="img-centrada" />

> [!WARNING] Guarda las credenciales únicamente para usuarios finales. Las cuentas de administrador no deben almacenarse en el Administrador de credenciales por motivos de seguridad.

6. Una vez validadas tus credenciales, se abrirá la sesión en el escritorio remoto.

<img src={require('./img-rdp/rdp005.png').default} className="img-centrada" />

---

## 4. Cierre de sesión

Cuando termines de usar el escritorio remoto, da clic en el botón cerrar de la ventana para desconectarte.

:::warning[Advertencia]
Por política, al cerrar la ventana la sesión queda en estado **Desconectado**. El usuario dispone de **30 minutos** antes de que la sesión sea finalizada por completo. Si en ese tiempo no se han guardado documentos o movimientos en el sistema, se puede producir **pérdida de información**. Informa de esta política a cada usuario antes de que utilice el escritorio remoto por primera vez.
:::

---

_Manual Técnico — Gestión para servidor Microsip ERP en Crece con Vales · Versión 0.1 Borrador_