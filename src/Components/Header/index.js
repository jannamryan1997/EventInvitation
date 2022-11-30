import { React } from 'react';

import { Link } from 'react-router-dom';

import style from './Header.module.css';

export function Header() {
    return (
        <>
            <div className={style.header}>
                <div className={style.header_container}>
                    <div className={style.logo}></div>
                    <ul className={style.row}>
                        <li className={style.row_li}>
                            <Link className={style.row_item} to='/'> Գլխավոր</Link>
                           
                        </li>
                        <li className={style.row_li}> 
                        <Link className={style.row_item} to='/about-us'>Մեր մասին</Link></li>
                        <li className={style.row_li}>
                            <Link className={style.row_item} to='/'>Հրավիրատոմսեր</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}