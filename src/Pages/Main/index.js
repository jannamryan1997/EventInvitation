import { React } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Footer } from '../../Components';

import { AboutUs, Home } from '../index';

import style from './Main.module.css';

export function Main() {
  return (
    <>
      <Header />
      <div className={style.router}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default Main;