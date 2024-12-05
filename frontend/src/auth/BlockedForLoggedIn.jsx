import { isTokenExpired } from './authUtils';
import { Navigate } from 'react-router-dom';

const BlockedForLoggedIn = ({ children }) => {
    const token = localStorage.getItem('token');
  
    if (token && !isTokenExpired(token)) {
      return <Navigate to="/main" />;
    }
  
    return children;
  };
  export default BlockedForLoggedIn;
  