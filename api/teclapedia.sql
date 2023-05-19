-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-05-2023 a las 15:52:43
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `teclapedia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tamistades`
--

CREATE TABLE `tamistades` (
  `id_usuario` int(4) NOT NULL,
  `id_amigo` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tamistades`
--

INSERT INTO `tamistades` (`id_usuario`, `id_amigo`) VALUES
(1, 2),
(1, 3),
(2, 1),
(3, 1),
(2, 4),
(4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tconsultas`
--

CREATE TABLE `tconsultas` (
  `id_consulta` int(11) NOT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `texto` varchar(400) DEFAULT NULL,
  `categoria` varchar(20) DEFAULT NULL,
  `estado` varchar(10) DEFAULT 'pendiente',
  `id_usuario` int(11) DEFAULT NULL,
  `respuesta` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tconsultas`
--

INSERT INTO `tconsultas` (`id_consulta`, `titulo`, `texto`, `categoria`, `estado`, `id_usuario`, `respuesta`) VALUES
(3, 'Ayuda', 'Necesito ayuda', 'personal_data', 'pendiente', 1, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `testudios`
--

CREATE TABLE `testudios` (
  `id_estudio` int(4) NOT NULL,
  `titulo` varchar(40) NOT NULL,
  `centro` varchar(40) NOT NULL,
  `f_inicio` date NOT NULL,
  `f_fin` date DEFAULT NULL,
  `actualidad` tinyint(1) NOT NULL,
  `id_usuario` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `testudios`
--

INSERT INTO `testudios` (`id_estudio`, `titulo`, `centro`, `f_inicio`, `f_fin`, `actualidad`, `id_usuario`) VALUES
(1, 'Ingeniería informática', 'Universidad de Oviedo', '2013-09-01', '2018-06-01', 0, 1),
(2, 'Bachillerato tecnologico', 'IES Calderón', '2011-09-01', '2013-06-01', 0, 1),
(3, 'Grado en ingeniería informática', 'Universidad de Oviedo', '2016-09-01', '2020-06-01', 0, 2),
(4, 'Titulo de bachiller', 'IES Ramón y Cajal', '2014-09-01', '2016-06-01', 0, 2),
(5, 'Grado en empresa y tecnologías', 'Universidad de Oviedo', '2015-09-01', '2019-06-01', 0, 3),
(6, 'Especialista en web design', 'Udemy', '2023-02-15', NULL, 1, 3),
(7, 'Grado en ingeniería informática', 'Universidad Complutense', '2021-09-01', NULL, 1, 4),
(8, 'Bachillerato tecnológico', 'IES Villaverde', '2015-09-01', '2017-06-01', 0, 4),
(9, 'Maestría en diseño de nuevos medios', 'University of Europe for Applied Science', '2021-06-01', '2022-06-03', 0, 5),
(10, 'Licenciatura en Ciencias (B.Sc.) en Estu', 'Ludwig-Maximilians-Universität', '2014-06-01', '2019-05-01', 0, 5),
(11, 'Ingénierie des systèmes', 'École Polytechnique', '2014-06-01', '2019-05-01', 0, 6),
(12, 'Licenciatura en informática', 'Universidad de Palermo', '2011-09-01', '2016-06-01', 0, 7),
(13, 'Grado en ciencias tecnológicas', 'Universidad de Barcelona', '2012-09-01', '2016-06-01', 0, 8),
(14, 'sdasd', 'sadasd', '2023-04-04', '0000-00-00', 0, 13),
(16, '', '', '0000-00-00', '0000-00-00', 0, 16),
(17, '', '', '0000-00-00', '0000-00-00', 0, 16),
(18, 'bbb', 'bbbb', '0000-00-00', '0000-00-00', 0, 16),
(19, '', '', '0000-00-00', '0000-00-00', 0, 16),
(20, '', '', '0000-00-00', '0000-00-00', 0, 16),
(21, '', '', '0000-00-00', '0000-00-00', 0, 16),
(22, '', '', '0000-00-00', '0000-00-00', 0, 16),
(23, '', '', '0000-00-00', '0000-00-00', 0, 16),
(24, '', '', '0000-00-00', '0000-00-00', 0, 16),
(25, '', '', '0000-00-00', '0000-00-00', 0, 16),
(26, '', '', '0000-00-00', '0000-00-00', 0, 16),
(27, '', '', '0000-00-00', '0000-00-00', 0, 16),
(28, '', '', '0000-00-00', '0000-00-00', 0, 18),
(29, '', '', '0000-00-00', '0000-00-00', 0, 19),
(30, '', '', '0000-00-00', '0000-00-00', 1, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `totros_datos`
--

CREATE TABLE `totros_datos` (
  `id_datos` int(4) NOT NULL,
  `id_usuario` int(4) DEFAULT NULL,
  `licencia` varchar(6) DEFAULT NULL,
  `disponibilidad` tinyint(1) DEFAULT NULL,
  `preferencia` varchar(35) DEFAULT NULL,
  `hobbies` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `totros_datos`
--

INSERT INTO `totros_datos` (`id_datos`, `id_usuario`, `licencia`, `disponibilidad`, `preferencia`, `hobbies`) VALUES
(1, 1, 'B', 0, 'Jornada Continua', 'Lectura, escalada'),
(2, 3, NULL, 0, 'Jornada Completa', 'Música, programación'),
(3, 4, 'B', 0, 'Jornada Parcial', 'Cocina, montañismo'),
(4, 5, 'B', 0, 'Jornada Flexible', 'Automoción, música'),
(5, 6, '', 0, 'Jornada Flexible', 'Moda, cine'),
(6, 7, 'B', 0, 'Jornada Completa', 'Naturaleza, arte'),
(7, 8, 'B', 0, 'Jornada Parcial', 'Pintura, música'),
(8, 13, 'No', 1, 'Turno Partido', 'adasdas'),
(12, 16, 'No', 1, 'Mañanas', 'bbbb'),
(13, 16, 'No', 1, 'Mañanas', ''),
(14, 16, 'No', 1, 'Mañanas', ''),
(15, 16, 'No', 1, 'Mañanas', ''),
(16, 16, 'No', 1, 'Mañanas', ''),
(17, 16, 'No', 1, 'Mañanas', ''),
(18, 16, 'No', 1, 'Mañanas', ''),
(19, 16, 'No', 1, 'Mañanas', ''),
(20, 16, 'No', 1, 'Mañanas', ''),
(21, 16, 'No', 1, 'Mañanas', ''),
(22, 18, 'B', 1, 'Mañanas', 'Me gusta la bachata'),
(23, 19, 'No', 1, 'Mañanas', ''),
(24, 20, 'No', 1, 'Mañanas', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tpublicaciones`
--

CREATE TABLE `tpublicaciones` (
  `id_publicacion` int(4) NOT NULL,
  `id_usuario` int(4) DEFAULT NULL,
  `fecha_publicacion` timestamp NULL DEFAULT NULL,
  `imagen_publicacion` varchar(250) DEFAULT NULL,
  `texto_publicacion` varchar(700) DEFAULT NULL,
  `likes` int(4) DEFAULT NULL,
  `share` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tpublicaciones`
--

INSERT INTO `tpublicaciones` (`id_publicacion`, `id_usuario`, `fecha_publicacion`, `imagen_publicacion`, `texto_publicacion`, `likes`, `share`) VALUES
(1, 1, '2023-04-20 09:45:03', 'https://www.blindabeep.com/wp-content/uploads/2017/12/congreso-tecnologia-seguridad-min.jpg', 'Today, we received a delegation from the prestigious Fore School of Management. The visit allowed the delegates to explore our innovative ecosystem, facilities, and collaborative projects developed within the park. The delegation engaged with our partners, who showcased their projects and shared their experiences driving innovation and progress across various sectors. The visit also highlighted SRTI Park s commitment to fostering a thriving ecosystem that supports innovation, research, and knowledge exchange.Our collaboration aims to connect academia and industry leaders, fostering a vibrant environment for growth and advancement.', 26, 0),
(2, 1, '2023-04-02 11:43:28', 'https://previews.123rf.com/images/kchung/kchung1506/kchung150600761/41195140-concepto-de-pagos-m%C3%B3viles-a-los-procesos-de-compras-en-el-estilo-de-l%C3%ADnea.jpg', 'According to research conducted in 2007 by Tim N. Höffler and Detlev Leutner, 𝐚𝐧𝐢𝐦𝐚𝐭𝐢𝐨𝐧𝐬 𝐚𝐫𝐞 𝟕𝟏% 𝐛𝐞𝐭𝐭𝐞𝐫 than content conveyed by static images or writing. That is why 𝐞𝐱𝐩𝐥𝐚𝐧𝐚𝐭𝐨𝐫𝐲 𝐚𝐧𝐢𝐦𝐚𝐭𝐢𝐨𝐧𝐬 are more and more often used as an irreplaceable tool for conveying important content, training knowledge or even strategies. It is much easier to visualize a message when it is given in an animated form, moving, talking to us, than through charts, pictures, lectures.', 57, 7),
(3, 1, '2023-04-26 11:42:18', 'https://previews.123rf.com/images/kitzcorner/kitzcorner1503/kitzcorner150300060/37219596-ordenador-port%C3%A1til-y-una-taza-de-caf%C3%A9-con-la-flor-en-el-escritorio-el-estilo-de-vinatge.jpg', 'Work work work!', 63, 2),
(4, 1, '2023-04-09 11:49:16', 'https://tas.co.in/wp-content/uploads/2019/11/web-Design.jpg', '4 Free Sites para Designer\r\n-\r\n1 • Fontshare\r\n2 • Dopely Colors\r\n3 • Adobe Stock\r\n4 • Google Fonts', 84, 12),
(5, 2, '2023-04-26 12:09:07', 'https://i.ytimg.com/vi/pF6TPacfaIM/maxresdefault.jpg', 'Aotearoa New Zealand’s biggest tech and innovation festival that will transform business, educators and our community in the digital year ahead. We look forward to welcoming everyone to Techweek 2023 featuring Tomorrow Expo and Tech23, as well as showcasing our expert speakers, and the latest in tech innovation. ', 125, 23),
(7, 2, '2023-04-17 12:23:16', 'https://dlegaonline.es/wp-content/uploads/escribir-una-buena-conclusion-800x450-1.jpg', '.NET Architecture Guides by @microsoft, useful for different app types and scenarios\r\n\r\nhttps://dotnet.microsoft.com/en-us/learn/dotnet/architecture-guides', 123, 27),
(8, 2, '2023-03-13 13:23:45', 'https://www.boredpanda.com/blog/wp-content/uploads/2017/07/funny-office-life-250-596defe09d1b1__700.jpg', 'A \"normal\" day in the office...', 94, 15),
(9, 7, '2023-04-02 12:37:37', 'https://www.hispanidad.com/uploads/s1/86/14/89/ciberseguridad.jpeg', 'HACKEO ÉTICO --- Sonará raro para muchos el hecho de que un \"hackeo\" te pueda ayudar para la seguridad de tu empresa, pero créeme que servirá de mucho y así estarás pendiente a las vulnerabilidades que puedas tener. 🖥️\r\n\r\n¡Contáctanos!', 94, 15),
(10, 7, '2023-04-20 09:37:50', 'https://www.osi.es/sites/default/files/images/blog/c1_img_blog_banner_sabias_que.jpg', 'De acuerdo con el informe “The Global Risks Report 2022”, elaborado por el Foro Económico Mundial (WEF, por sus siglas en inglés), el 95% de los problemas de ciberseguridad tienen su origen en un error humano....¿Y tu, lo sabías?', 126, 30),
(11, 7, '2023-03-12 09:38:12', 'https://www.clarin.com/img/2019/02/05/la-mayoria-recurre-a-palabras___3QXqYNhNX_1256x620__1.jpg', 'Cómo usar contraseñas seguras y jamás olvidarlas: 3 técnicas efectivas --> https://www.clarin.com/servicios/tecnicas-efectivas-usar-contrasenas-seguras-jamas-olvidarlas_0_q9OMGhid9.html', 112, 20),
(12, 7, '2023-04-25 12:41:27', 'https://eventos.una.ac.cr/_files/_event/_98186/_header_img/_137056.png', 'Allí nos vemos!', 96, 35),
(13, 2, '2023-04-10 07:54:14', 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png', 'Un poco de humor para empezar la semana!', 115, 37),
(14, 2, '2023-03-02 16:58:29', 'https://cdn.tutsplus.com/net/uploads/legacy/1069_api/preview.jpg', 'The Increasing Importance of APIs in Web Development: https://code.tutsplus.com/articles/the-increasing-importance-of-apis-in-web-development--net-22368', 100, 12),
(49, 16, '2023-04-28 01:11:51', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682676573/teclapedia/4.jpg', 'foton', NULL, NULL),
(50, 17, '2023-04-28 01:14:13', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682680517/teclapedia/5.jpg', 'fotasa', NULL, NULL),
(56, 2, '2023-04-28 14:31:18', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682685144/teclapedia/7.jpg', 'Foton', NULL, NULL),
(57, 2, '2023-04-28 14:32:15', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682677149/teclapedia/friend_1.jpg', 'Genial!', NULL, NULL),
(58, 2, '2023-04-28 14:33:07', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682685253/teclapedia/9.jpg', 'Maaaaal', NULL, NULL),
(92, 18, '2023-04-28 17:18:18', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682695149/teclapedia/react-meme1_.png', 'Próxima parada...', NULL, NULL),
(93, 20, '2023-04-28 19:32:15', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682695149/teclapedia/react-meme1_.png', 'memes por favor', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tsolicitudes`
--

CREATE TABLE `tsolicitudes` (
  `id_solicitud` int(4) NOT NULL,
  `id_solicitante` int(4) NOT NULL,
  `id_solicitado` int(4) NOT NULL,
  `estado` varchar(10) DEFAULT 'pendiente',
  `fecha_solicitud` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tsolicitudes`
--

INSERT INTO `tsolicitudes` (`id_solicitud`, `id_solicitante`, `id_solicitado`, `estado`, `fecha_solicitud`) VALUES
(1, 1, 5, 'aceptada', '2023-05-15 18:38:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ttrabajos`
--

CREATE TABLE `ttrabajos` (
  `id_trabajo` int(4) NOT NULL,
  `id_usuario` int(4) NOT NULL,
  `puesto` varchar(50) NOT NULL,
  `empresa` varchar(50) NOT NULL,
  `funciones` varchar(700) NOT NULL,
  `f_inicio` date NOT NULL,
  `f_fin` date DEFAULT NULL,
  `actualidad` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ttrabajos`
--

INSERT INTO `ttrabajos` (`id_trabajo`, `id_usuario`, `puesto`, `empresa`, `funciones`, `f_inicio`, `f_fin`, `actualidad`) VALUES
(4, 1, 'Arquitecto cloud', 'Tech Marketing', 'Supervisión de la estrategia de computación en la nube de la empresa, así comodespliegue, gestión y respaldo de las aplicaciones cloud. ', '2020-06-01', NULL, 1),
(5, 1, 'Arquitecto cloud junior', 'Materia Gris', 'Supervisión de la estrategia de computación en la nube de la empresa, así comodespliegue, gestión y respaldo de las aplicaciones cloud. ', '2018-12-05', '2020-05-01', 0),
(6, 2, 'Desarrolladora web', 'WindShare', 'Diseño, desarrollo, instalación, prueba y mantenimiento de sistemas de software.', '2021-11-03', NULL, 1),
(7, 3, 'Web Designer', 'WindShare', 'Diseñar páginas web personalizadas con especial referencia al planteamiento estratégico de las interfaces.', '2018-06-04', NULL, 1),
(8, 3, 'Frontend developer', 'Tatto', 'Supervisar la estructura y el diseño de páginas web y hacerlas lo más sencillas posible. Desarrollar aplicaciones orientadas al usuario y supervisar su eficacia.', '2017-06-01', '2018-06-04', 0),
(9, 4, 'Technical Support', 'Microsoft', 'Brindar asistencia o soporte a la empresa o a los empleados acerca de cuestiones relacionadas con el mantenimiento de hardware, redes y sistemas. Pueden hacerlo personalmente o de manera remota, por teléfono o a través de correo electrónico.', '2017-06-01', '2018-06-04', 0),
(10, 4, 'Technical Support', 'Siemens', 'Instalar y configurar la tecnología a ser empleada en la empresa, es decir, los equipos, sistemas operativos, programas y aplicaciones; Realizar el mantenimiento periódico de sistemas;\r\nBrindar asistencia a los empleados o clientes acerca de tecnología; Detectar las averías en los sistemas y aplicaciones; Realizar diagnósticos del mal funcionamiento del hardware y el software;\r\nEncontrar solucione', '2018-08-17', NULL, 1),
(11, 5, 'Fullstack development', 'CrocodileTech', 'Desarrollar la arquitectura del sitio web.\r\nDiseñar interfaces de usuario y otros componentes Front End.\r\nDesarrollar aplicaciones Back End.\r\nCrear bases de datos y servidores.\r\nSupervisar la velocidad y escalabilidad del software.\r\nGestionar proyectos complejos.\r\nAsesorar a otros departamentos.', '2020-08-17', NULL, 1),
(12, 5, 'Frontend developer', 'Circhen Group', 'Traducir el diseño de un sitio a código HTML y CSS\r\nEstructurar el contenido semánticamente. Asegurar la accesibilidad. Controlar tipografías, plantillas, formas del diseño y la interactividad.Programar, cambiar y mantener un sitio web.Adaptar el diseño de una web a diversos dispositivos y navegadores.Crear herramientas que mejoren la interacción entre usuario y web\r\nUsar APIs para conectar la web', '2019-03-04', '2020-02-01', 0),
(13, 6, 'Systems Engineer', 'ThyssenGroup', 'Integridad del software.Instalación y configuración del sistema. \r\nActualización constante para que funcione correctamente. Administración de los usuarios y permisos. Mantenimiento del software con estrategias de backup de datos. Administración de alertas. ', '2019-03-04', NULL, 1),
(14, 6, 'Junior Systems Engineer', 'ThyssenGroup', 'Gérer les systèmes d exploitation, mettre à jour les fonctionnalités si nécessaire. Il est en charge de la maintenance du système ; traite les incidents des utilisateurs et résout les problèmes qui surviennent. Résoudre les incidents matériels et logiciels. Surveiller les différents systèmes.', '2018-03-15', '2019-03-04', 0),
(15, 7, 'Chief Information Security Officer', 'SoundTrack', 'Anticipar nuevas amenazas y trabajar activamente para evitar que ocurran. El CISO debe trabajar con otros ejecutivos de diferentes departamentos para garantizar que los sistemas de seguridad funcionen sin problemas para reducir los riesgos operativos de la organización ante un ataque de seguridad. Garantizar que la privacidad de los datos de la empresa sea segura, administrar el Equipo de Respuest', '2019-03-04', NULL, 1),
(16, 7, 'Técnico en ciberseguridad', 'Yuri Microsistems', 'Recabar información de manera pasiva en fuentes públicas, infraestructuras y redes sociales.Realizar ataques a diferentes estructuras y definir su modelo y estrategia de penetración.Exploración y evaluación de las posibles configuraciones inseguras, vulnerabilidades identificadasy posibles vectores de ataque.Atacar a redes Wireless.\r\nExplotación y post explotación aprovechando las vulnerabilidades en un sistema.\r\nElevar privilegios para controlar sistemas e información.Mantener protegidos los equipos de seguridad.', '2016-02-04', '2019-03-01', 0),
(17, 8, 'Web Designer', 'Google', 'Identificar las necesidades de la marca.\r\nEstudiar el comportamiento de los usuarios.\r\nDefinir cuáles son los requisitos técnicos que demanda la creación del sitio web.\r\nCrear una estrategia detallada de los factores a tener en cuenta en el diseño.\r\nRealizar la maquetación de la estructura del sitio web.\r\nCrear contenido para cada página.\r\nDiseñar logotipos e íconos.\r\nUtilizar tipografías y paletas de colores.\r\nCrear toda la imagen de la marca.\r\nEncargarse de la usabilidad y la adaptación de las páginas web.\r\nGestionar el posicionamiento del sitio en buscadores.', '2016-02-04', '2019-03-01', 0),
(18, 8, 'Web Designer', 'MachineRadio', 'Diseñar páginas web personalizadas con especial referencia al planteamiento estratégico de las interfaces.', '2019-05-01', NULL, 1),
(32, 16, '', '', '', '0000-00-00', '0000-00-00', 1),
(33, 18, 'Teleoperado', 'Telefonica', 'Teleoperador', '2023-04-20', '2023-04-25', 1),
(34, 19, '', 'Telefonica', '', '0000-00-00', '0000-00-00', 1),
(35, 20, '', '', '', '0000-00-00', '0000-00-00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tusuario`
--

CREATE TABLE `tusuario` (
  `id_usuario` int(4) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(60) NOT NULL,
  `phone` int(9) DEFAULT NULL,
  `email` varchar(30) NOT NULL,
  `city` varchar(20) NOT NULL,
  `country` varchar(20) NOT NULL,
  `linkedin` varchar(60) NOT NULL,
  `photo` varchar(250) NOT NULL DEFAULT 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682499176/teclapedia/avatar_vh25bz.jpg',
  `nivel_estudios` varchar(30) NOT NULL,
  `perfil` varchar(10) NOT NULL DEFAULT 'usuario'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tusuario`
--

INSERT INTO `tusuario` (`id_usuario`, `fullname`, `username`, `password`, `phone`, `email`, `city`, `country`, `linkedin`, `photo`, `nivel_estudios`, `perfil`) VALUES
(1, 'María García', '@mgarcia', '$2b$08$8QrAFmp6RpVL.21PLJdek.vKVaNohP2GWTrEv3M8FckD61s9Gd4fu', 666759324, 'mgarcia@email.com', 'Gijón', 'España', 'https://www.linkedin.com/in/maria', 'https://res.cloudinary.com/dfxw85ptb/image/upload/v1682496741/cld-sample.jpg', 'Licenciatura', 'usuario'),
(2, 'Lucía Sánchez', '@lsanchez', '$2b$08$uV9IJNwB.1LG1JEYXh6oGeb22RrPqDSEAhJuflAM3NgMa.p5uQS6C', 659412378, 'lsanchez@email.com', 'Gijón', 'España', 'lucia-sanchez', 'https://res.cloudinary.com/dfxw85ptb/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1682496724/samples/bike.jpg', 'Grado', 'usuario'),
(3, 'Roberto Gómez', '@rgomez', '$2b$08$CVJ1hTm09gZ7NlmfwX6THunKlOdTxYyLp55apLhc6Yudj3jjMMmyK', 641287621, 'rgomez@email.com', 'Oviedo', 'España', 'roberto-gomez', 'https://res.cloudinary.com/dfxw85ptb/image/upload/v1682496723/samples/people/smiling-man.jpg', 'Grado', 'usuario'),
(4, 'Natalia Alonso', '@nalonso', '$2b$08$t2IescpEOxiaCmOjQXsUCOeeo0aLcPz7jzc6pZHoV4xfOf82BFUM.', 675842196, 'nalonso@email.com', 'Madrid', 'España', 'natalia-alonso', 'https://res.cloudinary.com/dfxw85ptb/image/upload/v1682500030/pexels-andrea-piacquadio-3763188_whi3ce.jpg', 'Bachiller', 'usuario'),
(5, 'Tom White', '@twhite', '$2b$08$22xU6vbuZathmbQQPeoTguAHVGCn4iltTLbkPH//fB4zov63edqMS', 641288746, 'twhite@email.com', 'Berlin', 'Alemania', 'tom-white', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682676820/teclapedia/friend_2.jpg', 'Master', 'usuario'),
(6, 'Margaret Dubois', '@mdubois', '$2b$08$X329fVQwZCGlnCdtxWqasO8.dMBn85rr3z/SSPTUvJFPm7PLTWkMS', 641288746, 'mdubois@email.com', 'París', 'Francia', 'margaret-dubois', 'https://res.cloudinary.com/dfxw85ptb/image/upload/v1682500482/pexels-pixabay-415829_kmxawj.jpg', 'Diplôme National de Licence', 'usuario'),
(7, 'Carlos Rodríguez', '@crodriguez', '$2b$08$Arb2EbOnkq4gy2eImRzvm.ZYzvfQe2pPZb6pmDGIKG6sarIe.iZ4S', 623544571, 'crodriguez@email.com', 'Buenos Aires', 'Argentina', 'carlos-rodriguez', 'https://www.shutterstock.com/image-photo/side-view-attractive-hispanic-developer-260nw-1523847986.jpg', 'Licenciatura', 'usuario'),
(8, 'Mike Wills', '@mwills', '$2b$08$fnoRhVzOn7NcQELA/F9pAuElIKDliCzjxLKKb2IsF7Oea8zUPcEwK', 665325874, 'mwills@email.com', 'Barcelona', 'España', 'mike-wills', 'https://wallpapers.com/images/featured/87h46gcobjl5e4xu.jpg', 'Grado', 'usuario'),
(13, 'Pepe', 'soniaG', '[object Promise', 744650409, 'mgarcia@emaill.com', 'Gijón', 'España', 'https://www.linkedin.com/in/maxi-jayme/', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682499176/teclapedia/avatar_vh25bz.jpg', 'Graduado escolar', 'usuario'),
(16, 'Maximiliano Ruben Jayme Dahlquist', 'maxijaymed', '[object Promise', 0, 'maxijayme@gmail.com', '', '', '', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682676573/teclapedia/4.jpg', 'Nivel de estudios', 'usuario'),
(17, 'pepe', 'pepepepe', '[object Promise', NULL, 'pepe@gmail.com', '', '', '', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682499176/teclapedia/avatar_vh25bz.jpg', '', 'usuario'),
(18, 'Maximiliano Ruben Jayme Dahlquist', 'maxijayme', '[object Promise', 744650409, 'maxijayme@gmail.com', 'Gijón', 'España', '@maxi-jayme', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682694866/teclapedia/perfil_maxi.jpg', 'Sin estudios finalizados', 'usuario'),
(19, 'Maximiliano Jayme Dahlquist', 'maxijayme2', '[object Promise', 744650409, 'maxjaga2@hotmail.com', 'Gijón', 'España', '@maxi-jayme', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682694866/teclapedia/perfil_maxi.jpg', 'Nivel de estudios', 'usuario'),
(20, 'maxi jayme', 'maxijj', '[object Promise', 784564, 'maxijayme2@gmail.com', 'sdsd', 'dsd', '@maxi-jayme', 'https://res.cloudinary.com/deirkmhyd/image/upload/v1682694866/teclapedia/perfil_maxi.jpg', 'Nivel de estudios', 'usuario');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tamistades`
--
ALTER TABLE `tamistades`
  ADD KEY `id_usuario` (`id_usuario`),
  ADD KEY `id_amigo` (`id_amigo`);

--
-- Indices de la tabla `tconsultas`
--
ALTER TABLE `tconsultas`
  ADD PRIMARY KEY (`id_consulta`),
  ADD KEY `fk_id_usuario` (`id_usuario`);

--
-- Indices de la tabla `testudios`
--
ALTER TABLE `testudios`
  ADD PRIMARY KEY (`id_estudio`),
  ADD KEY `FOREING KEY` (`id_usuario`) USING BTREE;

--
-- Indices de la tabla `totros_datos`
--
ALTER TABLE `totros_datos`
  ADD PRIMARY KEY (`id_datos`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tpublicaciones`
--
ALTER TABLE `tpublicaciones`
  ADD PRIMARY KEY (`id_publicacion`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `tsolicitudes`
--
ALTER TABLE `tsolicitudes`
  ADD PRIMARY KEY (`id_solicitud`),
  ADD KEY `id_solicitante` (`id_solicitante`),
  ADD KEY `id_solicitado` (`id_solicitado`);

--
-- Indices de la tabla `ttrabajos`
--
ALTER TABLE `ttrabajos`
  ADD PRIMARY KEY (`id_trabajo`),
  ADD KEY `FOREING KEY` (`id_usuario`);

--
-- Indices de la tabla `tusuario`
--
ALTER TABLE `tusuario`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tconsultas`
--
ALTER TABLE `tconsultas`
  MODIFY `id_consulta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `testudios`
--
ALTER TABLE `testudios`
  MODIFY `id_estudio` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `totros_datos`
--
ALTER TABLE `totros_datos`
  MODIFY `id_datos` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `tpublicaciones`
--
ALTER TABLE `tpublicaciones`
  MODIFY `id_publicacion` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT de la tabla `tsolicitudes`
--
ALTER TABLE `tsolicitudes`
  MODIFY `id_solicitud` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `ttrabajos`
--
ALTER TABLE `ttrabajos`
  MODIFY `id_trabajo` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `tusuario`
--
ALTER TABLE `tusuario`
  MODIFY `id_usuario` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tamistades`
--
ALTER TABLE `tamistades`
  ADD CONSTRAINT `id_amigo` FOREIGN KEY (`id_amigo`) REFERENCES `tusuario` (`id_usuario`),
  ADD CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `tusuario` (`id_usuario`);

--
-- Filtros para la tabla `tconsultas`
--
ALTER TABLE `tconsultas`
  ADD CONSTRAINT `fk_id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `tusuario` (`id_usuario`);

--
-- Filtros para la tabla `testudios`
--
ALTER TABLE `testudios`
  ADD CONSTRAINT `test` FOREIGN KEY (`id_usuario`) REFERENCES `tusuario` (`id_usuario`);

--
-- Filtros para la tabla `totros_datos`
--
ALTER TABLE `totros_datos`
  ADD CONSTRAINT `totros_datos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tusuario` (`id_usuario`);

--
-- Filtros para la tabla `tpublicaciones`
--
ALTER TABLE `tpublicaciones`
  ADD CONSTRAINT `tpublicaciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `tusuario` (`id_usuario`);

--
-- Filtros para la tabla `tsolicitudes`
--
ALTER TABLE `tsolicitudes`
  ADD CONSTRAINT `tsolicitudes_ibfk_1` FOREIGN KEY (`id_solicitante`) REFERENCES `tusuario` (`id_usuario`),
  ADD CONSTRAINT `tsolicitudes_ibfk_2` FOREIGN KEY (`id_solicitado`) REFERENCES `tusuario` (`id_usuario`);

--
-- Filtros para la tabla `ttrabajos`
--
ALTER TABLE `ttrabajos`
  ADD CONSTRAINT `FOREING KEY` FOREIGN KEY (`id_usuario`) REFERENCES `tusuario` (`id_usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
