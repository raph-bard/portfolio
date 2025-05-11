"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); 

  return (
    <button
  onClick={toggleTheme}
  className={`${theme} flex align-center justify-center bg-gray-100 w-12 mx-8 aspect-square rounded-full`}
>
  <span
    className={`${theme === 'dark' ? 'bg-gray-100' : 'bg-gray-600'} block w-[calc(100%-3px)] aspect-square border-3 border-cblue rounded-full `}
  >
    {theme === 'dark' ? '☀️' : '🌙'}
  </span>
</button>

  );
};

export default ThemeToggle;
