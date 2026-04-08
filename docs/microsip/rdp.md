---
title: Conexión a escritorio remoto (RPD)
sidebar_position: 3
---

:::tip[Información]
Documento elaborado el **28 de febrero de 2026** <br/>
Autor: Juande Sánchez <br/>
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com) <br/>
**Versión: 0.1**
:::

## Consideraciones iniciales
El siguiente procedimiento parte de que **tú**, cuentas con un usuario de usuario en Windows Server, tienes privilegios de `Administrador` y cuentas con un usuario de VPN. A su vez, partimos que eres un usuario de Windows 10 u 11, por lo cual solo se hara consideración del uso de la aplicación `Conexión a escritorio remoto`, la cual es una de la herramientas de los sistemas operativos Windows.

## Conexión a escritorio remoto

:::info
La aplicación **Conexión de a escritorio remoto** esta disponible en su última versión estable en Windows 10, Windows 11, Windows Server 2016, Windows Server 2019, Windows Server 2022 y Windows Server 2025.
:::

:::warning
Desde Windows 11 versión 23H2, la aplicación puede ser desinstalada. En caso de estar en esta situación y no contar con la aplicación **Conexión a escritorio remoto**, se puede descargar desde los siguiente enlaces:

- [Windows de 64 bits](https://res.cdn.office.net/remote-desktop-windows-client/mstsc_amd64_e0d8d14b-3645-4f73-99dd-470ab4fdd998/setup.exe)<br />
- [Windows de 32 bits](https://res.cdn.office.net/remote-desktop-windows-client/mstsc_x86_ba02bce8-7a92-4b12-b891-631748bedae8/setup.exe)<br />
- [Windows ARM64](https://res.cdn.office.net/remote-desktop-windows-client/mstsc_arm64_f8009d54-f3e5-4477-ae46-340dff8b491d/setup.exe)

El proceso de reinstalación se describe de manera sencilla en [Microsoft Learn](https://learn.microsoft.com/es-es/windows-server/remote/remote-desktop-services/remotepc/uninstall-remote-desktop-connection?tabs=gui#reinstall-the-remote-desktop-connection-app), ya sea que se realice en la GUI o desde el [simbolo del sistema](https://learn.microsoft.com/es-es/windows-server/remote/remote-desktop-services/remotepc/uninstall-remote-desktop-connection?tabs=command-prompt#tabpanel_2_command-prompt).
:::

### Configuración e inicio de sesión en la aplicación
1. Abrir la aplicación `Conexión a escritorio remoto`.
2. Se mostrará la siguiente ventana:<br />

<img src={require('./img-rdp/rdp003.png').default} className="img-centrada" />

3. En el campo indicado como **Equipo** se debe de indicar la dirección del equipo, se puede indicar el nombre del equipo o bien, la dirección IP, por ejemplo: `192.168.1.10`.
4. Una vez que hemos escrito la dirección del **Equipo**, se debe dar clic en el botón `Conectar`.
5. Ahora la aplicación nos debe de solicitar las credenciales para entrar en nuestra cuenta. Llenamos los campos de usuario y contraseña, adicional, vamos a marcar la casilla `Recordar`, para que almacene nuestras credenciales en el `Admministrador de credenciales` de Windows.<br />

<img src={require('./img-rdp/rdp004.png').default} className="img-centrada" />

:::warning[AVISO]
Solo se deben de guardar las credenciales para usuarios finales. En el caso de los administradores no se debe de almacenar la cuenta, por temas de seguridad.
:::

6. Una vez que se validen nuestras credenciales nos mostrará una ventana con nuestro inicio de sesión en el escritorio remoto. <br />

<img src={require('./img-rdp/rdp005.png').default} className="img-centrada" /> 

7. Una vez que terminemos de usar el escritorio remoto, podemos finalizarlo dando clic en el ![Botón cerrar de la ventana Conexión a escritorio remoto mientras esta conectado.](./utils/boton-cerrar.png) botón cerrar de la ventana.

:::danger[AVISO]
Por política, una vez que se cierra la ventana el estado de la sesión será como **Desconectado**, el usuario tiene 30 minutos antes de que la cuenta sea finalizada por completo, **en caso de no haber guardado ningún documento o movimiento en sistema, puede provocar perdida de información. Por lo cual, el usuario tiene que ser informado de esta política**.
:::
