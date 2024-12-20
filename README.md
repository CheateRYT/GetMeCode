# Упрощённый интерфейс редактора кода

## Описание задачи

Это приложение представляет собой упрощённый интерфейс редактора кода, где пользователь может писать код на одном из двух языков: **Python** и **JavaScript**. Пользователь может отправлять написанный код на выполнение на сервере Node.js и получать результаты выполнения.

## Установка и запуск

npm install
npm run dev - для фронта

В другом терминале запустите бэкенд npm run server

# Фронт запустится на http://localhost:5173.

# Бэкенд запустится на http://localhost:5000.

### Мок сервер

- Если выбран язык **JavaScript**:

  1. Если ваш написанный код содержит `console.log`, то будет выведено `Hello world`.
  2. Если ваш написанный код не содержит `console.log`, то будет выведено `SyntaxError: Unexpected token`.

- Если выбран язык **Python**:
  1. Если ваш написанный код содержит `print`, то будет выведено `Hello world`.
  2. Если ваш написанный код не содержит `print`, то будет выведено `SyntaxError: Unexpected token`.

## Варианты расширения приложения

1. **Поддержка дополнительных языков программирования**:

   - Увеличить количество языков программирования

2. **Интерфейс для работы с файлами**:

   - Реализуйте возможность загрузки и сохранения файлов с кодом, чтобы пользователи могли работать с большими проектами.

3. **Автодополнение**:
   - Улучшите редактор кода, добавив функцию автодополнения для более удобного написания кода.
