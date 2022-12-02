import { React } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../../Components';


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