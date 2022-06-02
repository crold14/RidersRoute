CREATE DATABASE  IF NOT EXISTS `rutas_motos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `rutas_motos`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rutas_motos
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `comentario` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idEvent` int NOT NULL,
  `idUser` int NOT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,'Me gusta la propuesta, un amigo y yo podriamos pero tendria que ser cualquier finde de Junio',3,5,'2022-04-25 10:02:43'),(2,'Me animo¡¡¡',3,7,'2022-04-25 10:05:21'),(3,'Yo tambien me animo, no soy experto pero me gustaria ir ',3,4,'2022-04-25 10:05:21'),(4,'No hay ningun problema, aquí se acepta a todo el mundo',3,6,'2022-04-25 10:05:21');
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `evento_usuario`
--

DROP TABLE IF EXISTS `evento_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evento_usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idUser` int NOT NULL,
  `idEvent` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evento_usuario`
--

LOCK TABLES `evento_usuario` WRITE;
/*!40000 ALTER TABLE `evento_usuario` DISABLE KEYS */;
INSERT INTO `evento_usuario` VALUES (1,4,3),(2,5,3),(3,6,3),(4,7,3);
/*!40000 ALTER TABLE `evento_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUser` int NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (1,'Ruta por la Sierra de Cazorla','Estoy empezando en esto de las motos y me gustaria relizar una ruta por la sierra de cazorla. ¿Alguien se anima?',4,'2022-04-25 08:58:53'),(2,'Ruta por la playa','Ruta rapida por las arenas de Oliva',3,'2022-04-25 08:58:53'),(3,'Quedada sabado 28 de mayo ','Estoy organizando una quedada para juntarnos un grupillo y poder ir de ruta. Se aceptan proposiciones. Animense!!',6,'2022-04-25 09:55:09'),(4,'Fin de semana motero','Quedada de dos dias, cualquier fin de semana de Julio, ruta por la mañana y tapeo por las tardes',7,'2022-04-25 09:58:40');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mapas`
--

DROP TABLE IF EXISTS `mapas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mapas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `descr` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dist` decimal(10,0) NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `dif` enum('facil','dificil','media') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `latini` float NOT NULL,
  `longini` float NOT NULL,
  `latfin` float NOT NULL,
  `longfin` float NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mapas`
--

LOCK TABLES `mapas` WRITE;
/*!40000 ALTER TABLE `mapas` DISABLE KEYS */;
INSERT INTO `mapas` VALUES (1,'Cebreros','Salida de quijorna, pasando cruz verde, terminando en cebreros.',68,'https://upload.wikimedia.org/wikipedia/commons/e/e3/Cebreros%2C_vista_parcial_%2843665523784%29.jpg','dificil',40.4398,-4.05659,40.468,-4.46652,NULL),(4,'Atazar','Salida de San Agustín de Guadalix, pasando Torrelaguna, terminando en Atazar.',46,'https://www.sierranortemadrid.org/wp-content/uploads/2016/03/pueblo-el-atazar-01.jpg','media',40.6933,-3.61616,40.9433,-3.47128,NULL),(5,'Guadarrama','Salida en Soto del real, pasando por cercedilla y terminando en guadarrama',40,'https://img3.idealista.com/blur/WEB_LISTING-M/0/id.pro.es.image.master/87/88/13/872014405.jpg','media',40.7585,-3.78385,40.6784,-4.08769,NULL),(7,'Arenas de San Pedro','Salida en San Martín de Valdeiglesias, pasando por Burgohondo y terminando en Arenas de San pedro',103,'http://4.bp.blogspot.com/-L2dgk9sysxA/UlVIlo8asII/AAAAAAAAFbg/qjJ72LfTEsA/s1600/Arenas02.jpg','facil',40.3731,-4.40228,40.2186,-5.08481,NULL),(9,'Chorreras de cabriel','Salida desde Cuenca, pasando por Carboneras y terminando en las chorreras de Cabriel.',78,'https://www.chorrerasdelcabriel.es/assets/img/inicio/fondo-portada.jpg','dificil',40.0834,-2.14052,39.7169,-1.61554,NULL),(10,'Hoces del Duratón','Salida desde Segovia, pasando por Pedraza y terminando en las Hoces del río Duratón.',72,'https://img.bekiaviajes.com/articulos/portada/89000/89547-h.jpg','facil',40.9596,-4.11161,41.3422,-3.86992,NULL),(11,'Guadalupe','Salida desde Toledo, pasando por la nava de Ricomalillo y terminando en Guadalupe.',173,'https://www.hola.com/imagenes/viajes/20211011197537/caceres-guadalupe-pueblo-monasterio-extremadura/1-5-597/guadalupe-caceres-t.jpg','dificil',39.8725,-4.0277,39.4541,-5.32702,NULL),(24,'Picos de Europa','Ruta desde gijon, pasando por ribadesella y terminando en torrelavega.',181,'https://aunclicdelaaventura.com/wp-content/uploads/2021/05/Rutas-por-los-Picos-de-Europa.jpg','media',43.5283,-5.66181,43.3548,-4.06055,5),(25,'Pais vasco','Ruta desde bilbao, pasando por zarautz y terminando en san sebastian.',125,'https://www.rusticae.com/images/landing_featured/1/650x432_08c87ccd2d23d7fd5954febcda2a962d.webp','dificil',43.2616,-2.93646,43.3196,-1.97927,6),(26,'Santiago','Ruta empezando en la frontera de portugal, pasando por pontevedra y terminando en santiago.',109,'https://img2.rtve.es/imagenes/ciudades-para-siglo-xxi-santiago-compostela-ciudad-pesa/1561717379638.jpg','facil',42.047,-8.65707,42.8949,-8.54019,7),(27,'Valencia','Ruta empezando en valencia, pasando por sierra del maigmo y terminando en murcia.',230,'https://okrentacar.es/img/oficinas/valencia-back.jpg','facil',39.4754,-0.379949,38.0016,-1.13251,8),(28,'Portugal','Ruta portuguesa entre lisboa y oporto, las dos capitales.',323,'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/oporto-1565762924.jpg','dificil',38.7366,-9.14397,41.1577,-8.6331,9);
/*!40000 ALTER TABLE `mapas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reseñas`
--

DROP TABLE IF EXISTS `reseñas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reseñas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `coment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idUser` int NOT NULL,
  `val` enum('1','2','3','4','5') CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `idRoute` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reseñas`
--

LOCK TABLES `reseñas` WRITE;
/*!40000 ALTER TABLE `reseñas` DISABLE KEYS */;
INSERT INTO `reseñas` VALUES (1,'Divertida y bonita','Una ruta cerca de Madrid, con buenas curvas para aprender y disfrutar y rodeado de paisajes de la cercana sierra de gredos.',3,'4','1','2022-04-25 08:59:30'),(15,'Paisajes increíbles','Ruta complicada, muchos puertos y curvas cerradas. Lo mejor, los paisajes contínuos de inicio a fin.',5,'5','24','2022-04-25 08:59:30'),(16,'Magia','Buenas carreteras, mezcladas con paisajes y buenos restaurantes. La pega, la constante e intermitente lluvia.',6,'4','25','2022-04-25 08:59:30'),(17,'Camino a dos ruedas','Preciosa ruta similar a la del camino pero por carretera, fantastica y hospitalaria gente en la zona.',7,'3','26','2022-04-25 08:59:30'),(18,'Iniciación','Ruta sencilla con carretera de iniciación y con sorpresa final, terminando en murcia que resulta que existe de verdad.',8,'2','27','2022-04-25 08:59:30'),(19,'Novedad','Una ruta recomendable para mejorar, explorar y conocer nuevos lugares, culturas y costumbres como la forma de conducción intensa portuguesa.',9,'1','28','2022-04-25 08:59:30');
/*!40000 ALTER TABLE `reseñas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nickname` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(90) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int NOT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nickname_UNIQUE` (`nickname`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'Carlos Roldán','rol14','Madrid','$2a$12$HfQ/IMYIoOyAXEl73DWO0.6DJA//Vl1IpsLsdo12rVd7X0lhRK2IO','Creador de la página y motero solo para ir a trabajar','carlos_roldan92@hotmail.com',30,'e6d0fe911ba03b645f611d11082c4c58.jpeg'),(4,'Rubén Tomé','rtome14','Alcorcón','$2a$12$uk.pwYsHJqg43WUvZ66dqOVffBXrTHdLhgPr79SlrnnisOm907a.y','Rider profesional aunque estoy mas tiempo en el suelo','r.tome14@hotmail.com',27,'c9b1b0914417589bef45dad8c9731079.jpeg'),(5,'Julian Macias','jmacias','Madrid','$2a$12$uv0crtyzjCNsCCtyqIyDXe0BT9.Hev7kd3sNtz4vzf1dHMDexhmIq','Profesional de los deportes extremos.','jmacias@gmail.com',30,'8b37608e8169ed19384290785ff2aba3.jpeg'),(6,'Mario Girón','mgiron','Madrid','$2a$12$V.QAfEiPJJSkmGX82PKBoODzbD7s0aZn9a/87TmqDQZWltEk.BNIe','Developer profesional, youtuber y dj en mis ratos libres.','mgiron@gmail.com',44,'ac2ff36402f7daf33ec3af930048fbf6.png'),(7,'Juan Antonio Perez','juanan','Madrid','$2a$12$krziJySAvc.MVC3oeP/5.e9wWLTG/9mzhdpoMMcchcBwTzOVdtDIq','Developer profesional y poli malo en clase como hobby.','juanan@gmail.com',40,'340479cb6f32425eb6989a8b2376a7b4.png'),(8,'Celia Ruiz','cruiz','Sanblas','$2a$12$CWPpyrUXoJQM6cR96mNtmeaDQFUmMHewNuajmPv9PtXPHH0PLyrAm','Developer jr que no pierde el tiempo en echar cvs.','cruiz@gmail.com',27,'9068596d5644b1d3d418118f4d59b243.jpeg'),(9,'Alvaro tome','atome','Alcorcon','$2a$12$M8FxS9MiaGeVBKDkj32Ue.rBo7p5jmjV4gjiz2CMT53jG48o/wM0W','rider de dos ruedas sin motor.','atome@gmail.com',18,'7a05588ede4859eaf61cfbad462a3775.png'),(11,'Lucia García','LaLuci','Castelldefels','$2a$12$I3q7droNdmo3ArhcEZDHR.IAMG7f.5jFyjR5xd4MzBZFitoBQu/aK','Amante de las motos ','laluci@gmail.com',32,'df7dc6ec6111648b961b4a1a7ddb8cba.png'),(26,'Isabel Castilla','LaIsaH ResHhulonNa','Debajo de Playmouth','$2a$12$qUOojRoIJyJHS2m7qaCK4OiZJr0peR/K.fCoKfantozk.2FdM3Dqq','Soy una otaku de las motos','isa@gmail.com',29,'97120e9b1bdab91de0135973c6322852.jpeg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-25 16:04:28
