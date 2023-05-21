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
import Login from './login/index';
import Data from './data/data';
import Home from './land/land';
import Layout from './layout/layout';
import Info from './info/info';


import { SupabaseProvider } from './SupabaseContext';
import Activities from './activities/activities';
import Sermon from './sermon/sermon';


export default function App() {



  return (
    <Router>
      <SupabaseProvider>
        <Routes>
        <Route index path="/" element={<Login />} />
        <Route path='/cdeck' element={<Layout/>}>

          <Route path="/cdeck/search" element={<Search  />} />
          <Route path="/cdeck/churchinfo" element={<Info  />} />

          <Route path="/cdeck/dashboard" element={<Data />} />
          <Route path="/cdeck/home" element={<Home />} />
          <Route path="/cdeck/activities" element={<Activities />} />
          <Route path="/cdeck/sermon" element={<Sermon />} />
        </Route>
        </Routes>
      </SupabaseProvider>
    </Router>
  );
}
