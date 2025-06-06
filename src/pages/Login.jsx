import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Bienvenido ${user.displayName}`);
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/';
    } catch (error) {
      console.error('❌ Error en el login:', error);
      alert('Error al iniciar sesión.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
    </div>
  );
};

export default Login;
