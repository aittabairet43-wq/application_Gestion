"use client";

import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: '#004253',
          color: '#fff',
          fontFamily: 'Tajawal, sans-serif',
        },
        success: {
          iconTheme: {
            primary: '#98FFD9',
            secondary: '#004253',
          },
        },
      }}
    />
  );
};

export default ToastProvider;