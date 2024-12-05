// src/auth/authUtils.js
export const isTokenExpired = (token) => {
  if (!token) return true; // Якщо токена немає, вважаємо його недійсним

  try {
    const [, payload] = token.split('.'); // Другий сегмент — це payload
    const decodedPayload = JSON.parse(atob(payload)); // Розшифровуємо payload
    const currentTime = Math.floor(Date.now() / 1000); // Поточний час у секундах

    return decodedPayload.exp < currentTime; // true, якщо токен прострочений
  } catch (error) {
    console.error('Failed to decode token:', error);
    return true; // Якщо токен неможливо розшифрувати, вважаємо його недійсним
  }
};
