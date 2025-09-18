import React from 'react';
import logo from '../assets/logo.png';

const Loader = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #fce7f3, #f3e8ff, #fdf2f8)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999
    }}>
      <div style={{
        animation: 'pulse 2s ease-in-out infinite',
        marginBottom: '2rem'
      }}>
        <img 
          src={logo} 
          alt="Ndapewa Events" 
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            filter: 'drop-shadow(0 10px 20px rgba(236, 72, 153, 0.3))'
          }}
        />
      </div>
      
      <h2 style={{
        background: 'linear-gradient(to right, #ec4899, #f43f5e)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        Ndapewa Events
      </h2>
      
      <div style={{
        width: '60px',
        height: '60px',
        border: '4px solid #f3f4f6',
        borderTop: '4px solid #ec4899',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
      
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Loader;