---
title: Instalación y configuración de OpenVPN Connect
sidebar_position: 2
---

Para el acceso a nuestro servidor de Microsip es necesario el uso de una aplicación de VPN, la herramienta utilizada para esta tarea es **OpenVPN Connect**, por lo cual es imprescindible el contar con ella y tener un perfil cargado para llevar a cabo la conexión hacía nuestro servidor de Microsip. En este tutorial vamos a ver como realizar a cabo la instalación de la aplicación y como se configura un perfil para la conexión a una red privada virtual (VPN).

### Instalación de OpenVPN Connect
Antes de continuar con el proceso de conexión al escritorio remoto, es necesario tener instalada la aplicación OpenVPN Connect, en caso de no contar con la aplicación, se puede descargar la última versión: `3.8.0` (al momento de escribir esta documentación) desde `WinGet`.

1. Abrimos una terminal de Windows PowerShell o PowerShell.
2. Escribimos el siguiente comando en el prompt:
```powershell
winget install OpenVPNTechnologies.OpenVPNConnect --silent
```
3. Presionamos la tecla enter para ejecutar el comando.
4. `Winget` realizará la descarga y comenzará con el desempaquetado del instalador de OpenVPN Connect.
5. Una vez finalizado el desempaquetado nos solicitara elevar permisos de Administrador del sistema, damos clic en el botón `Sí` cuando nos lo pregunte.
6. Una vez que se tiene instalada la aplicación, es necesario verificar que se ejecute correctamente. Para ello abrimos la aplicación OpenVPN Connect y nos mostrará la siguiente ventana:

<img src={require('./img-rdp/rdp001.png').default} className="img-centrada" /> 

### Configuración de VPN en OpenVPN Connect

:::danger[AVISO]
Por motivos de seguridad, en este sitio no se tendrán alojadas ninguna clave, certificado, perfil de conexión OVPN o se expondra algún dato crítico como; usuarios y contraseñas en producción, direcciones IP, nombres de dominio, nombres de equipos de cómputo o dispositivos de red (hostname). Tampoco serán mostradas imagenes del proceso para evitar exponer algun dato sensible. Cada una de las instrucciones aquí mostradas hacen referencia la aplicación **OpenVPN Connect versión 3.8.0**
:::

1. Abrir la aplicación OpenVPN Connect.
2. En la ventana principal, clic en el botón `Upload File` (Subir archivo).
3. Nos mostrará una ventana con el título `Import Profile or Certificate` (Importar perfil o certificado), nos dirigmos al directorio en donde tenemos el archivo con el perfil, estos archivos tienen la extensión `ovpn`.
4. Seleccionamos el archivo con el perfil, y damos clic en el botón `Abrir`.
5. Nos mostrará la ventana `Confirm importing the profile from` (Confirma la importaci´ñon del perfil desde), en el cual válidamos que tanto la ruta como el archivo sean el indicado. Si esta información es correcta, damos clic en el botón `Import` (Importar).
6. La aplicación nos mostrará la ventana principal, indicará que esta listo para iniciar una conexión `Ready to connect` (Listo para conectase), pero antes de iniciar la conexión debemos configurar nuestro usuario, contraseña y **frase** para desencriptar el certificado que se configuro al momento de importar nuestro archivo de perfil.
7. Da clic en el menú (poner icono aquí)
8. Da clic en la opción `My Profiles` (Mis perfiles).
9. Nos muestra el perfil o los perfiles que tengamos configurados en la aplicación. Da clic en el botón (poner iconno de editar) `Edit` (Editar)
10. Ahora muestra los campos que podemos editar, para nuestra configuración.
    - `Profile Name`: Nombre de perfil, en este campo podemos cambiar el nombre de nuestro perfil para que sea más sencillo de identificar, útil sobre todo si contamos con múltiples perfiles configurados. Para nuestro caso, lo nombraremos "`Conexión a servidor Microsip`"
    - `Username`: Usuario de VPN, este campo es obligatorio.
    - `Password`: Contraseña de VPN, este campo es obligatorio.
    - `Private Key Password`: Contraseña de llave privada, ingresamos nuestra contraseña. Cabe menciona que ésta, normalmente es una frase de cifrado que se especifica cuando se esta creando el certificado de nuestra llave privada. En algunos casos en opcional y no es necesario especificarla, pero en nuestro caso es necesario indicarla.

:::warning
Esta información puede ser solicitada con el personal responsable de infraestructura.
:::

11. Da clic en el botón `Save Changes` (Guardar cambios) una vez que hayas completado el llenado de los 4 campos anteriormente descritos.
12. Nos debe de mostrar nuevamente la pantalla `My Profiles`, da clic en el botón menú (poner icono aquí).
13. Nos muestra la ventana `Ready to connect`.
14. Ahora nos debe de mostrar nuestro perfil con el nombre `Conexión a servidor Microsip`.
15. Da clic en el botón `Connect` (Conectar).
16. Una vez realizada la conexión, nos mostrará la ventana `Securely Connected!` (¡Conectado con seguridad!), similar o parecida a la siguiente imagen:

<img src={require('./img-rdp/rdp002.png').default} className="img-centrada" style={{width: '45%'}} />

17. Con esto comprobamos que nuestra configuración de VPN esta correctamente configurada.

### Estableceer conexión de VPN con OpenVPN Connect
Una vez que tengamos configurado OpenVPN Connect con un perfil de VPN, podremos establecer una conexión al servidor de VPN. Para ello seguimos los siguientes pasos:

1. Abre la aplicación **OpenVPN Connect**.
2. En la ventana con el titulo **Ready to connect**, nos mostrará nuestro perfil que configuramos [anteriormente](rdp.md#configuración-de-vpn-en-openvpn-connect).
3. Da clic en el botón <img src={require('./utils/boton-connect-ovpn.png').default} style={{width: '120px'}}/>. Al conectarse nos mostrará la ventana de conexión y en el título tendrá el mensaje **Securely Connected!** (*¡Conectado de forma segura!*), tal como se muestra la siguiente ventana:

<img src={require('./img-vpn/vpn010.png').default} className="img-centrada" style={{width: '45%'}} />

### Posibles problemas conocidos
Voy a enumerar los posibles problemas que hasta el momento me he encontrado al momento de iniciar una conexión con OpenVPN Connect.

#### Problemas
1. Al momento de iniciar la conexión nos indica el mensaje de error: `La conexión ya se encuentra ocupada por otro proceso`.
    - En estos casos, el problema suele ser causado porque se tiene en ejecución la aplicación OpenVPN GUI, aunque son aplicaciones hermanas, manejan diferentes procesos y protocolos de conexión, por lo cual algunos servicios de VPN pueden llegar a ser incompatibles. Por lo cual, debemos de cerrar la conexión que tengamos con OpenVPN GUI. Luego inicilizamos nuestra conexión de OpenVPN Connect, una vez conectados, podemos iniciar la conexión con OpenVPN GUI, de esta manera podemos tener ambas IP en funcionamiento sin ningún problema, este problema no siempre se suele presentar, pero cuando lo hace se debe a que la conexión se realiza a través del adaptador de red `OpenVPN TAP-Windows` o `OpenVPN TAP`, por lo cual al ya estar iniciada la conexión con OpenVPN GUI, no nos permite hacer la conexión en OpenVPN Connect. Cabe mencionar que este problema, no se suele presentar en todoos los casos y viene a ser más una curiosidad que un problema en sí. El cual se puede solucionar con solo cambiar el orden en la que iniciamos conexiones VPN.
2. Al momento de dar clic en el botón `Connnect` no hace nada.
    - Este problema ha ocurrido muy pocas veces, pero puede deberse a un problema de una mala ejecución de la aplicación. Para solucionarlo rápido basta con finalizar el proceso de la aplicación, se puede hacer desde el **Administrador de tareas** (`Control` + `Shift` + `Escape`) y buscar la aplicación OpenVPN Connect para finalizarla (Clic derecho sobre  el nombre de la aplicación OpenVPN Connect y clic en la opción `Finalizar tarea`).
