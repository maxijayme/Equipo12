# Objetivo del repositorio
### Desarrollo de una Red social para developers, propuesto por el bootcamp de Tecla. :construction:

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680429667/logo_yjxp2p.svg" width="600"/>

## Integrantes

- [Sonia Gonzalez](https://github.com/Sonia1)
- [Maxi Jayme](https://github.com/maxijayme)

## SPRINT 1 - Entrega parcial I

## Codigo Frontend
- Carpeta "client"

<img src="https://github.com/maxijayme/Equipo12/blob/development/img/teclapedia_logo.svg" width="800"/>

### Desarrollar una red social para los Teclers. La misma debe permitir:

- [x] Conectar con otros developers.
- [x] Requerir solicitud de amistad, hoja de vida y características del developer.
- [x] Permitir ver la maqueta de toda la aplicación realizada hasta el momento.
- [x] Permitir ver la hoja de vida de al menos un Tecler.

### Requerimientos técnicos:

- [x] Desarrollar la maqueta de la red social con HTML5, CSS3 y el framework Bootstrap.
- [x] Utilizar la herramienta de versionado Git.
- [x] El trabajo realizado se subirá a un repositorio.

### Secciones de la app:

- Login

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/login_sormju.jpg" width="400"/>

- Registro

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/register_b0nsyx.jpg" width="400"/>

- Formulario de registro

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/form_vboatk.jpg" width="400"/>

- Configuración de perfil

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/profile_tub6yr.jpg" width="400"/>

- Pantalla principal

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/main_urf7gq.jpg" width="400"/>

- Buscar amigos

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/friends_neomsx.jpg" width="400"/>

- Perfil de amigo

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680430208/friend_profile_hkzizy.jpg" width="400"/>

## SPRINT 1 - Entrega parcial II

### Objetivo General de esta entrega: 
Avanzar con el desarrollo de la red social según la propuesta de los ejercicios incrementales, hasta la fecha de entrega.

## Requerimientos técnicos:

- [x] Deberás mostrar tu código realizado hasta el momento en Javascript usando funciones, en los lugares que corresponda, como buena práctica. 
- [x] Deberás demostrar el uso correcto de API’s.
- [x] Serán evaluadas las acciones realizadas en el DOM. 

## Funcionalidades implementadas:

- Consulta a API externa - [JSON PLACEHOLDER](https://jsonplaceholder.typicode.com/)
- Formulario de login con validación.
- Posibilidad de agregar o quitar "Like" a una publicación.
- Al visitar perfil de un tercero ("Roberto Sanchez") se hace la consulta a la API por id de usuario y se generan los posteos que hizo.
- Eliminar cuenta:
  - Se implemento archivo "initialState" con un array de usuarios precargados. Al abrir página de login se carga lista de usuarios en localStorage.
  - Al presionar botón eliminar cuenta se solicita una nueva confirmación por parte del usuario. Al aceptar se elimina los datos del usuario del listado en localStorage.
  - Si intenta volver a logearse no validará ya que no existe.
  - :warning: Para volver a probarlo es necesario ejecutar por consola localStorage.clean y reiniciar la app. 	:warning:


## SPRINT 2 - Entrega Final

## SPRINT 1 - Entrega parcial I

## Codigo Frontend
- Carpeta "client2"

### Objetivo General de esta entrega: 
Desarrollar una red social completa para los Teclers. La misma debe: 

+  Permitir ver la maqueta de toda la aplicación.
+  Permitir conectar con otros Developers. 
+  Requerir solicitud de amistad. 
+  Mostrar la hoja de vida y características del desarrollador/a. 

Objetivo Adicional (Ticket):

Se debe agregar un usuario administrador a la plataforma, éste usuario al loguearse además de ser un usuario de la plataforma debe tener un link en la barra de navegación donde al ingresar vea el listado de usuarios registrados en la plataforma de manera paginada. 
El listado debe tener un botón de “imprimir listado”, el mismo debe generar un archivo excel con todos los datos personales de cada usuario de la plataforma.

A tener en cuenta:
Se debe ingresar al menos 20 usuarios en la base de datos de usuarios.
Se debe poder observar los datos personales de todos los usuarios.
Los usuarios comunes no deben poder acceder a estas secciones.

## Requerimientos técnicos:

- [x] Backend: Deberás desarrollar una API en ​Node.js​ junto a Express, en su versión estable:

Tecnología a Utilizar: 

- Express

- Frontend: Deberás desarrollar una maqueta realizada totalmente con React.

- Tecnología a Utilizar: 

- [x] React
- [x] Bootstrap

## Funcionalidades:

- Login con validación
- Usuario de prueba: @mgarcia Password: mgarcia1

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593502/teclapedia/login_l2l3gu.jpg" width="400"/>

- Registro con validación

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593503/teclapedia/registro_cwqyyd.jpg" width="400"/>

- Formulario de registro con validación

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593503/teclapedia/form_nbkd5t.jpg" width="400"/>

- Feed

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593503/teclapedia/feed_kplyqu.jpg" width="400"/>

- Se puede acceder al perfil del propio usuario desde 2 elementos. 1) Pinchando en la foto de la columna izquierda. 2) Desde el menú desplegable de la navbar, en la opci+on "perfil".
- Se puede acceder al perfil de terceros de 2 formas. 1) Desde la barra de búsqueda en la navbar, escribiendo el nombre de la persona. 2) Pinchando sobre la foto del usuario tanto en los posts como en la solicitudes de amistad.
- Creación de una nueva publiación, incluyendo texto e imagen. Esta se mostrará junto al resto de los posteos de los amigos del usuario.
- En la columna derecha se visualizaran las solicitudes de amistad pendientes y podemos acceder al listado completo de usuarios de la red desde el botón "Buscar teclers".
- Se puede regresar a esta pantalla desde cualquier punto de la aplicación, pulsando en el logo de la navbar.

- Amigos

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593503/teclapedia/friends_br9hao.jpg" width="400"/>

- Visualizaremos en la parte superior las solicitudes de  amistad pendientes y en la inferior el listado completo de usuarios de la red, donde cada card de usuario tendrá un botón con el estad de amistad, y permitirá cambiarlo.

-  Perfil propio

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593503/teclapedia/perfil_xvrbxf.jpg" width="400"/>

- En la columna de izquierda veremos nuestra información personal y un icono de edición que abrirá un modal.
- También encontraremos las recomendaciones recibidas por otros usuarios de la red.
- En la columna central están lso posts propios.
- En la columna derecha veremos la información relacionada a la experiencia laboral y la educación.

- Modal edición de datos

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593502/teclapedia/modal_datos_rzxxok.jpg" width="400"/>

- Perfil de terceros

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593503/teclapedia/perfil_terceros_pxtdyv.jpg" width="400"/>

- Incluye la misma información que la vista de perfil propio, con la diferencia que no podremos editar los datos personales, pero sí podremos solicitar amistad y dejar una recomendación.

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686595927/teclapedia/modal_recomendacion_lc9axe.jpg" width="400"/>

- Consultas

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593502/teclapedia/ayuda_xang5m.jpg" width="400"/>

- Se puede acceder a esta vista en la opción "ayuda" del menú desplegable de la navbar.
- Desde ella los usuarios podrán enviar consultas al administrador de la red.

- Opciones perfil de administrador

Usuario de prueba: @maxxijayme Password: maxijayme21


<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686596319/teclapedia/admin_ozbmnt.jpg" width="400"/>
<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686596319/teclapedia/admin2_apkjna.jpg" width="400"/>

- Como usuario administrador podemos acceder, desde el menú despegable de la navbar, a la opción administrar.
- En esta vista contamos con una barra lateral con 2 opciones. En función de las cuales cambiará el contenido de la sección derecha de la vista.
- Opción "Consultas". Esta opción mostrará todas aquellas consultas enviadas por los Teclers que estén pendientes de respuesta. Como administrador se podrá responder a ellas y desapareceran de las listas.
- Opción "Administrar usuarios". Muestra la lista de usuarios de la red, en forma paginada, incluyendo un botón para eliminar el usuario. Además contará con un botón para descargar la lista en formato CSV.

- Erro 404

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1686593502/teclapedia/404_htbiod.jpg" width="400"/>

- Esta vista se verá al ingresar a una URL que no sea válida.

