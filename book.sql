-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2020 at 09:26 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book`
--

-- --------------------------------------------------------

--
-- Table structure for table `book_record`
--

CREATE TABLE `book_record` (
  `name` text NOT NULL,
  `writer` text NOT NULL,
  `pages` int(20) NOT NULL,
  `price` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_record`
--

INSERT INTO `book_record` (`name`, `writer`, `pages`, `price`) VALUES
('Shyam chi Aai', 'sane guruji', 12, '30'),
('avenger', 'marvel', 45, '877'),
('India ', 'abc', 56, '100'),
('Hello Horror', 'horror favourite', 500, '5000');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `name` text NOT NULL,
  `email` text NOT NULL,
  `gender` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`name`, `email`, `gender`, `password`) VALUES
('sneha', 'sneha', 'hhj', 'sneha'),
('aaa', 'aaa', 'aaa', 'aaa'),
('abc', 'a', 'hgj', 'jhk'),
('abb', 'abb', 'female', 'qwe'),
('sneha', 'sneha@gmail.com', 'Female', 'sneha'),
('sneha', 'sneha@gmail.com', 'Female', 'sneha'),
('shruti', 'shg@gmail.com', 'Male', 'fghj'),
('hgfhj', 'hgj@jhbj', 'Male', 'nhnbm');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
