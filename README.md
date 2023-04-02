# Objetivo del repositorio
### Desarrollo de una Red social para developers, propuesto por el bootcamp de Tecla. :construction:

<img src="https://res.cloudinary.com/deirkmhyd/image/upload/v1680429667/logo_yjxp2p.svg" width="600"/>

## Deploy
GitHub Pages - [LINK](https://maxijayme.github.io/Equipo12/)

## Integrantes

- [Sonia Gonzalez](https://github.com/Sonia1)
- [Enedina Menéndez](https://github.com/Enedina1977)
- [David Gómez](https://github.com/Davidgm95)
- [Maxi Jayme](https://github.com/maxijayme)

## SPRINT 1 - Entrega parcial I

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




