-- script for project sig
DROP DATABASE IF EXISTS sig;
CREATE DATABASE IF NOT EXISTS sig;
use sig;
CREATE TABLE IF NOT EXISTS `user` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  name varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  active int(2) DEFAULT 0,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `soutenance` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  id_user int(11) NOT NULL,
  theme varchar(255) NOT NULL,
  id_salle int(255) NOT NULL,
  name_souteneur varchar(255) NOT NULL,
  president_jury varchar(255) NOT NULL,
  heure_debut varchar(255) NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status int(2) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `salle` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  position varchar(255) NOT NULL,
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status int(2) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `connexion` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  position varchar(255) NOT NULL, 
  created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status int(2) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
