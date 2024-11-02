# Базове Node.js середовище
FROM node:18

# Встановлення робочої директорії
WORKDIR /app

# Копіюємо package.json і package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проект
COPY . .

# Відкриваємо порт для React
EXPOSE 3000

# Запускаємо сервер у режимі розробки
CMD ["npm", "start"]
