---
title: Gestión de VPN
sidebar_position: 4
---

:::info[Información]
Documento elaborado el **04 de abril de 2026** <br/>
Autor: Juande Sánchez <br/>
Correo: [soporte4@crececonvales.com](mailto://soporte4crececonvales.com) <br/>
**Versión: 0.1**
:::

## Consideraciones iniciales
Para continuar con este apartado, es indispensable contar con una VPN que nos permita alcanzar la red en la que se encuentra el servidor de VPN. Por favor revisar el apartado [Configuración de OpenVPN Connect](./rdp.md#configuración-de-openvpn-connect) para configurar la aplicación y terner acceso a la misma red en la que se encuentra el servidor de VPN.

Una vez que tengamos establecido una VPN en la que el servidor del VPN, será necesario contar con la aplicación WinBox. La cual podemos descargar en su ultima versión desde el [siguiente enlace](https://mikrotik.com/download/winbox).

## WinBox

### Descarga de WinBox
Una vez que hemos accedido a la página de descarga de WinBox:

1. Búscamos dentro del sitio la versión para Windows, desde este sitio se pueden conseguir versiones tanto para MacOS y Linux.

<img src={require('./img-vpn/vpn001.png').default} className="img-centrada" /><br />

2. Damos clic sobre el enlace **Windows (64 bits)** para comenzar la descarga, en nuestro navegador comenzará el proceso de descarga y solo tendremos que esperar hasta que termine de descargar.

<img src={require('./img-vpn/vpn002.png').default} className="img-centrada" /><br />

3. Cuando termine de realizar la descarga debe de verse como se muestra en la siguiente imagen.

<img src={require('./img-vpn/vpn003.png').default} className="img-centrada" /><br />

4. Da clic en el botón ![Botón abrir carpeta](./utils/boton-abrir-carpeta.png), nos mostrará la carpeta de `Descargas` del usuario. Tal como se muestra en la siguiente imagen:

<img src={require('./img-vpn/vpn005.png').default} className="img-centrada" /><br />

5. Da clic derecho sobre el archivo que hemos descargado con el nombre `WinBox_Windows.zip`. Nos muestra el menú contextual.

<img src={require('./img-vpn/vpn006.png').default} className="img-centrada" /><br />

6. Da clic en la opción `Extraer todo...` ahora se muestra la siguiente ventana con el titulo **Extraer carpetas compartidas (en zip)**.

<img src={require('./img-vpn/vpn007.png').default} className="img-centrada" /><br />

7. En esta ventana, revisa que tengas seleccionada la casilla de verificación `Mostrar los archivos al completar` y da clic sobre el botón ![Botón extraer](./utils/boton-extraer-comprimido.png).

8. Al finalizar de descomprimir, nos mostrará la ventana con los archivos comprimidos:

<img src={require('./img-vpn/vpn008.png').default} className="img-centrada" /><br />

9. Comprobamos que la aplicación funcione correctamente dando doble clic sobre icono de `WinBox.exe`. Nos muestra la ventana de la aplicación lista para iniciar una conexión con nuestro dispositivo Mikrotik.

<img src={require('./img-vpn/vpn009.png').default} className="img-centrada" /><br />

:::warning[Aviso]
Por defecto, la aplicación va a buscar en nuestra red local a *vecinos*, es decir dispositivos Mikrotik con el puerto de escucha por defecto **8291**.
:::

### Conexión a Mikrotik con WinBox
Antes de comenzar es necesario realizar una conexión con a la VPN para estar en el mismo segmento de red en la que se encuentra nuestro servidor VPN. Consultar [](rdp.md#configuración-e-inicio-de-sesión-en-la-aplicación)

Con la aplicación `WinBox` en ejecución, se