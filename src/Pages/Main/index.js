import { React } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { Header, Footer } from '../../Components';

import { AboutUs, Home } from '../index';

import style from './Main.module.css';

export function Main() {
  return (
    <>
      <Header />
      <div className={style.router}>
        <Outlet/>
      </div>
      <Footer />
    </>
  );
}

export default Main;