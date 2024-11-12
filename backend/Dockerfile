# Используем официальный Node.js образ
FROM node:18-slim

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

RUN apt-get update
# Устанавливаем зависимости
RUN npm install

RUN npm install -g nodemon
# Копируем остальные файлы проекта
COPY . /app
#-or-
# Экспонируем порт
EXPOSE 5001

# Устанавливаем команду для запуска сервера
CMD ["npm", "start"]
