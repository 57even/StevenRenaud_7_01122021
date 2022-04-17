-- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for osx10.17 (arm64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments89`
--

DROP TABLE IF EXISTS `comments89`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments89` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int DEFAULT NULL,
  `author` int DEFAULT NULL,
  `text` varchar(10000) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `comments89_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments89`
--

LOCK TABLES `comments89` WRITE;
/*!40000 ALTER TABLE `comments89` DISABLE KEYS */;
INSERT INTO `comments89` VALUES
(1,NULL,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu','Sun Mar 27 2022 09:30:12 GMT+0200 (Central European Summer Time)'),
(2,NULL,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu','Sun Mar 27 2022 09:30:14 GMT+0200 (Central European Summer Time)');
/*!40000 ALTER TABLE `comments89` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments94`
--

DROP TABLE IF EXISTS `comments94`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments94` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int DEFAULT NULL,
  `author` int DEFAULT NULL,
  `text` varchar(10000) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `comments94_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments94`
--

LOCK TABLES `comments94` WRITE;
/*!40000 ALTER TABLE `comments94` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments94` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments95`
--

DROP TABLE IF EXISTS `comments95`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments95` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int DEFAULT NULL,
  `author` int DEFAULT NULL,
  `text` varchar(10000) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `comments95_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments95`
--

LOCK TABLES `comments95` WRITE;
/*!40000 ALTER TABLE `comments95` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments95` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments99`
--

DROP TABLE IF EXISTS `comments99`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comments99` (
  `id` int NOT NULL AUTO_INCREMENT,
  `postId` int DEFAULT NULL,
  `author` int DEFAULT NULL,
  `text` varchar(10000) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  CONSTRAINT `comments99_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments99`
--

LOCK TABLES `comments99` WRITE;
/*!40000 ALTER TABLE `comments99` DISABLE KEYS */;
/*!40000 ALTER TABLE `comments99` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like79`
--

DROP TABLE IF EXISTS `like79`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like79` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like79_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like79`
--

LOCK TABLES `like79` WRITE;
/*!40000 ALTER TABLE `like79` DISABLE KEYS */;
/*!40000 ALTER TABLE `like79` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like80`
--

DROP TABLE IF EXISTS `like80`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like80` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like80_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like80`
--

LOCK TABLES `like80` WRITE;
/*!40000 ALTER TABLE `like80` DISABLE KEYS */;
/*!40000 ALTER TABLE `like80` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like81`
--

DROP TABLE IF EXISTS `like81`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like81` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like81_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like81`
--

LOCK TABLES `like81` WRITE;
/*!40000 ALTER TABLE `like81` DISABLE KEYS */;
/*!40000 ALTER TABLE `like81` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like85`
--

DROP TABLE IF EXISTS `like85`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like85` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like85_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like85`
--

LOCK TABLES `like85` WRITE;
/*!40000 ALTER TABLE `like85` DISABLE KEYS */;
/*!40000 ALTER TABLE `like85` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like87`
--

DROP TABLE IF EXISTS `like87`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like87` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like87_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like87`
--

LOCK TABLES `like87` WRITE;
/*!40000 ALTER TABLE `like87` DISABLE KEYS */;
/*!40000 ALTER TABLE `like87` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like88`
--

DROP TABLE IF EXISTS `like88`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like88` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like88_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like88`
--

LOCK TABLES `like88` WRITE;
/*!40000 ALTER TABLE `like88` DISABLE KEYS */;
INSERT INTO `like88` VALUES
(1,10,1);
/*!40000 ALTER TABLE `like88` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like89`
--

DROP TABLE IF EXISTS `like89`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like89` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like89_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like89`
--

LOCK TABLES `like89` WRITE;
/*!40000 ALTER TABLE `like89` DISABLE KEYS */;
INSERT INTO `like89` VALUES
(1,10,-1);
/*!40000 ALTER TABLE `like89` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like90`
--

DROP TABLE IF EXISTS `like90`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like90` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like90_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like90`
--

LOCK TABLES `like90` WRITE;
/*!40000 ALTER TABLE `like90` DISABLE KEYS */;
INSERT INTO `like90` VALUES
(1,10,1);
/*!40000 ALTER TABLE `like90` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like91`
--

DROP TABLE IF EXISTS `like91`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like91` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like91_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like91`
--

LOCK TABLES `like91` WRITE;
/*!40000 ALTER TABLE `like91` DISABLE KEYS */;
INSERT INTO `like91` VALUES
(1,10,-1);
/*!40000 ALTER TABLE `like91` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like92`
--

DROP TABLE IF EXISTS `like92`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like92` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like92_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like92`
--

LOCK TABLES `like92` WRITE;
/*!40000 ALTER TABLE `like92` DISABLE KEYS */;
/*!40000 ALTER TABLE `like92` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like93`
--

DROP TABLE IF EXISTS `like93`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like93` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like93_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like93`
--

LOCK TABLES `like93` WRITE;
/*!40000 ALTER TABLE `like93` DISABLE KEYS */;
/*!40000 ALTER TABLE `like93` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like94`
--

DROP TABLE IF EXISTS `like94`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `like94` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `likeValue` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `like94_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like94`
--

LOCK TABLES `like94` WRITE;
/*!40000 ALTER TABLE `like94` DISABLE KEYS */;
INSERT INTO `like94` VALUES
(1,13,1);
/*!40000 ALTER TABLE `like94` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` int DEFAULT NULL,
  `title` varchar(300) NOT NULL,
  `text` varchar(10000) DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `commentCount` int DEFAULT '0',
  `likeCount` int DEFAULT '0',
  `dislikeCount` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES
(88,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','undefined','Sat Mar 26 2022 12:00:01 GMT+0100 (Central European Standard Time)',0,2,0),
(89,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu','undefined','undefined','Sat Mar 26 2022 12:00:04 GMT+0100 (Central European Standard Time)',2,1,2),
(90,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu','','http://localhost:3000/images/16482924147461647850099965index.jpg','Sat Mar 26 2022 12:00:14 GMT+0100 (Central European Standard Time)',0,2,1),
(91,10,'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu','undefined','undefined','Sat Mar 26 2022 12:48:32 GMT+0100 (Central European Standard Time)',0,3,2);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `avatar` varchar(1000) DEFAULT 'http://localhost:3000/images/avatars/profile_pic.png',
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `pwd` varchar(100) DEFAULT NULL,
  `birthday` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `admin` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES
(10,'http://localhost:3000/images/avatars/1649511628532logo512.png','John','Doe','johndoe@email.com','$2b$10$eQB1uEqFOhJLlbEu9Bi4remRlv.ieY3r/4m0VX2bj/00feGz8Yb7q','1997-02-15','male',0),
(13,'http://localhost:3000/images/avatars/profile_pic.png','Jean','Paul','jeanpaul@emai.com','$2b$10$0HTQDBwrBm3RN0mJ3D8m1exGSYat4a9z.tKlN5vW1WfHj/NiG.38C','1993-03-08','male',0),
(15,'http://localhost:3000/images/avatars/profile_pic.png','admin','admin','admin@email.com','$2b$10$i1a4.Au5hAxQ.ttQUTMpAOWAOXCN57JMBq0aBBHYhD8W5ep995NLe','1996-04-12','male',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-17 17:10:49
