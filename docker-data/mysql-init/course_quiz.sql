-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Хост: mysqldb:3306
-- Время создания: Июл 07 2025 г., 05:12
-- Версия сервера: 9.0.1
-- Версия PHP: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `course_quiz`
--

-- --------------------------------------------------------

--
-- Структура таблицы `survey_answers`
--

CREATE TABLE `survey_answers` (
  `id` int NOT NULL,
  `result_id` int NOT NULL,
  `question_id` int NOT NULL,
  `value_int` int DEFAULT NULL,
  `value_str` varchar(200) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `survey_questions`
--

CREATE TABLE `survey_questions` (
  `id` int NOT NULL,
  `template_id` int NOT NULL,
  `name` varchar(200) NOT NULL,
  `type_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `survey_questions`
--

INSERT INTO `survey_questions` (`id`, `template_id`, `name`, `type_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'Question 1', 1, '2025-07-07 00:34:26', NULL),
(2, 1, 'Question 2', 2, '2025-07-07 00:34:50', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `survey_results`
--

CREATE TABLE `survey_results` (
  `id` int NOT NULL,
  `template_id` int NOT NULL,
  `user_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `survey_templates`
--

CREATE TABLE `survey_templates` (
  `id` int NOT NULL,
  `visibility` smallint NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `survey_templates`
--

INSERT INTO `survey_templates` (`id`, `visibility`, `name`, `description`, `created_at`, `updated_at`) VALUES
(1, 2, 'Public survey', 'Public survey description', '2025-07-07 00:32:11', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `test`
--

CREATE TABLE `test` (
  `id` int NOT NULL,
  `value` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `test`
--

INSERT INTO `test` (`id`, `value`) VALUES
(1, 'A 1'),
(2, 'A 2'),
(3, 'new'),
(4, 'new');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(320) COLLATE utf8mb4_general_ci NOT NULL,
  `salt` varchar(32) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(64) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `active` tinyint(1) DEFAULT NULL,
  `role` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `salt`, `password`, `active`, `role`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin@example.com', 'b3261a632c6db5a957d34d937630fffa', 'c29b5ec857cbc80d001793f51cfb695e870cbeb23abb6c3c8e24d2b79c3201c0', 1, 'admin', '2025-06-02 11:28:25', '2025-06-05 00:01:50');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `survey_answers`
--
ALTER TABLE `survey_answers`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `survey_questions`
--
ALTER TABLE `survey_questions`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `survey_results`
--
ALTER TABLE `survey_results`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `survey_templates`
--
ALTER TABLE `survey_templates`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `survey_answers`
--
ALTER TABLE `survey_answers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `survey_questions`
--
ALTER TABLE `survey_questions`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `survey_results`
--
ALTER TABLE `survey_results`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `survey_templates`
--
ALTER TABLE `survey_templates`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `test`
--
ALTER TABLE `test`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
