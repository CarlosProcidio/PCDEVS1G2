-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 16/05/2021 às 00:14
-- Versão do servidor: 8.0.25-0ubuntu0.20.04.1
-- Versão do PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `PCDEVS1G2`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `estabelecimento`
--

CREATE TABLE `estabelecimento` (
  `id_estab` bigint NOT NULL,
  `cnpj` varchar(255) NOT NULL,
  `data_criacao` datetime(6) DEFAULT NULL,
  `descr_negocio` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `bairro` varchar(255) DEFAULT NULL,
  `cep` varchar(255) DEFAULT NULL,
  `cidade` varchar(255) DEFAULT NULL,
  `complemento` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `mapa` varchar(255) DEFAULT NULL,
  `numero` varchar(255) DEFAULT NULL,
  `referencia` varchar(255) DEFAULT NULL,
  `foto_logomarca` varchar(255) DEFAULT NULL,
  `horario_func` varchar(255) NOT NULL,
  `nome_fantasia` varchar(255) NOT NULL,
  `razao_social` varchar(255) NOT NULL,
  `site` varchar(255) DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `telefone_cel` varchar(255) DEFAULT NULL,
  `telefone_fixo` varchar(255) DEFAULT NULL,
  `responsavel` bigint NOT NULL,
  `id_subcat` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `estabelecimento`
--

INSERT INTO `estabelecimento` (`id_estab`, `cnpj`, `data_criacao`, `email`, `bairro`, `cep`, `cidade`, `complemento`, `estado`, `logradouro`, `mapa`, `numero`, `referencia`, `foto_logomarca`, `horario_func`, `descr_negocio`, `nome_fantasia`, `razao_social`, `site`, `status`, `telefone_cel`, `telefone_fixo`, `id_user`, `id_subcat`) VALUES ('1', '69.802.375/0001-20', NULL, 'dono@rainhadapraia.com.br', 'Indaiá', '15290-000', 'Bertioga', NULL, 'SP', 'Avenida Beira Mar', NULL, '2978', 'em frente ao Forum', 'https://buritama.sp.gov.br/site2/', 'Segunda a Sexta: das 08hs até 17hs', 'comércio de felicidade engarrafada', 'Hotel Rainha da Praia', 'Hospedagem Rainha da Praia', 'https://hotelrainhadapraia.com.br/', b'1', '(13) 98765-4321', '(13) 4321-7654', 1, 8),
(2, '69.802.375/0001-20', NULL, 'contato@pousadasj.com.br', 'Indaiá', '15290-000', 'Bertioga', NULL, 'SP', 'Avenida João Ramalho', NULL, '3374', 'em frente ao Museu', 'https://buritama.sp.gov.br/site2/', 'Segunda a Sexta: das 08hs até 17hs', 'Um lugar gostoso e charmoso para você descansar e curtir a natureza. Apartamentos com ar-condicionado, TV e cozinha para sua comodidade.', 'Pousada SJ', 'Pousada e Restaurante  São Judas Ltda.', 'https://pousadasj.com.br', b'0', '(13) 95764-4411', '(13) 7865-4123', 3, 11),
(3, '00.120.098/0001-12', NULL, 'contato@hotel29.com.br', 'Vila da Maré', NULL, 'Bertioga', NULL, 'SP', 'Avenida Beira Mar', NULL, NULL, 'Próximo ao centro', NULL, '', 'O mais tradicional hotel da cidade. Apartamentos com total infraestrutura de acomodação e lazer para você e sua família.', 'Hotel 29', 'Hotel e Serviços de Hospedagem 29 Ltda.', 'http://www.hotel29.com.br', b'0', '(13) 99132-2345', '(13) 4321-9876', 2, 8),
(4, '09.098.776/0001-87', NULL, 'contato@litoranea.com.br', 'Centro', '11250-438', 'Bertioga', NULL, 'SP', 'Rua Elias Nehme', NULL, '1000', 'Próximo ao centro de Bertioga', NULL, '', 'Apartamentos amplos e serviços completos para lazer e convenções. Parque aquático e total infraestrutura para eventos corporativos.', 'Litorânea Pousada', 'Serviços de Hospedagem Litorânea ME', 'http://www.litoraneahotel.com.br', b'1', '(13) 98765-6543', '(11) 4321-9871', 3, 11);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `estabelecimento`
--
ALTER TABLE `estabelecimento`
  ADD PRIMARY KEY (`id_estab`),
  ADD KEY `FKqt3k46wvyrda85wsysbh2ybcu` (`responsavel`),
  ADD KEY `FKb48pd9dxetxr3h6jdtej30ej4` (`id_subcat`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `estabelecimento`
--
ALTER TABLE `estabelecimento`
  MODIFY `id_estab` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `estabelecimento`
--
ALTER TABLE `estabelecimento`
  ADD CONSTRAINT `FKb48pd9dxetxr3h6jdtej30ej4` FOREIGN KEY (`id_subcat`) REFERENCES `subcategoria` (`id_subcat`),
  ADD CONSTRAINT `FKqt3k46wvyrda85wsysbh2ybcu` FOREIGN KEY (`responsavel`) REFERENCES `user` (`id_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
