/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState,useMemo } from 'react';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

import './App.css';
import Search from './search/search';
import Login from './login/index'
import { SupabaseProvider } from './SupabaseContext';


export default function App() {



  return (
    <Router>
      <SupabaseProvider>
        <Routes>
          <Route path="/search" element={<Search  />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </SupabaseProvider>
    </Router>
  );
}
