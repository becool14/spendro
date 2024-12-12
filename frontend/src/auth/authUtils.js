// src/auth/authUtils.js
export const isTokenExpired = (token) => {
  if (!token) return true; 

  try {
    const [, payload] = token.split('.'); 
    const decodedPayload = JSON.parse(atob(payload)); 
    const currentTime = Math.floor(Date.now() / 1000);

    return decodedPayload.exp < currentTime; 
  } catch (error) {
    console.error('Failed to decode token:', error);
    return true; 
  }
};
