# Spendro MERN Application

Цей проєкт — MERN-стек застосунок, який складається з `frontend` (React), `backend` (Node.js + Express) і `MongoDB` (база даних). Застосунок контейнеризований за допомогою Docker для спрощення розгортання.

## Вимоги

Для запуску цього проєкту вам потрібно встановити:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/) (вже вбудований у Docker Desktop)

> **Примітка:** Переконайтеся, що Docker працює в режимі **Linux Containers** (якщо ви на Windows).

## Структура проєкту

```plaintext
spendro/
├── backend/             # Бекенд Node.js/Express
│   ├── controllers/     # Контролери бекенду
│   ├── db/              # Налаштування бази даних
│   ├── models/          # Моделі бази даних
│   ├── routes/          # Маршрути бекенду
│   └── server.js        # Основний файл сервера
├── frontend/            # Фронтенд React
│   ├── public/          # Публічні файли React
│   └── src/             # Вихідні файли React
├── docker-compose.yml   # Файл для Docker Compose
└── README.md            # Цей файл



Створіть .env файли

Переконайтеся, що у папках backend і frontend є файли .env. Ви можете використати файли .env.example як шаблон і створити відповідні .env файли.

Для backend/.env:

MONGO_URI=mongodb://mongo:27017/spendrodb
PORT=5000


Для frontend/.env:

REACT_APP_API_URL=http://localhost:5000


Запустіть Docker Compose, щоб зібрати та запустити контейнери:


docker-compose up --build

Це збере образи для backend, frontend, та mongo і запустить їх у контейнерах.

Відкрийте браузер і перевірте застосунок:

Фронтенд (React) буде доступний за адресою: http://localhost:3000
Бекенд (Node.js/Express) буде працювати на порту 5000, але його можна викликати через фронтенд.
Зупинка контейнерів

Для зупинки контейнерів натисніть Ctrl + C у терміналі, де працює Docker Compose, або скористайтеся командою:


docker-compose down

Якщо ви додали нові залежності або внесли зміни у Dockerfile, перезапустіть з --build:


docker-compose up --build

Основні команди Docker
Запуск контейнерів: docker-compose up
Запуск контейнерів з перезбіркою: docker-compose up --build
Зупинка контейнерів: docker-compose down
Перегляд працюючих контейнерів: docker ps
Перевірка логів: docker-compose logs -f <service_name>
Наприклад: docker-compose logs -f backend для перегляду логів бекенду.

Troubleshooting
Помилка "address already in use"

Якщо ви бачите помилку на кшталт EADDRINUSE, це означає, що порт вже зайнятий. Переконайтеся, що інші сервіси не використовують порти 5000 або 3000.
Помилка при підключенні до MongoDB

Переконайтеся, що змінна середовища MONGO_URI вказує на правильний хост (у нашому випадку це mongo, оскільки так називається сервіс у docker-compose.yml).
Зміни не застосовуються після редагування коду

Якщо ви вносите зміни у код, вони мають бути автоматично помічені завдяки volumes. Якщо зміни не застосовуються, перевірте налаштування docker-compose.yml.
Додаткова інформація
Документацію по Docker та Docker Compose можна знайти тут:

Docker Documentation
Docker Compose Documentation
markdown


### Пояснення до `README.md`

1. **Опис**: Документація пояснює, що це за проєкт і які технології він використовує.
2. **Вимоги**: Користувач повинен мати Docker і Docker Compose, які вже включені в Docker Desktop.
3. **Налаштування і запуск**: Детально розписані всі кроки для запуску, від клонування репозиторію до запуску `docker-compose`.
4. **Команди Docker**: Корисні команди для зупинки, запуску та перевірки контейнерів.
5. **Troubleshooting**: Часті помилки та способи їх виправлення, щоб співробітник міг самостійно розв'язати проблеми, якщо вони виникнуть.

Це допоможе вашому колезі швидко налаштувати проєкт і вирішити більшість потенційних проблем без зайвих питань.





