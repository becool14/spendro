# Базове Node.js середовище
FROM node:18-slim

# Встановлення робочої директорії
WORKDIR /app

# Копіюємо лише файли package.json і package-lock.json для кешування залежностей
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь проект
COPY . .

# Відкриваємо порт для сервера
EXPOSE 5000

# Запускаємо сервер у режимі розробки з nodemon для hot-reloading
CMD ["npm", "run", "dev"]
