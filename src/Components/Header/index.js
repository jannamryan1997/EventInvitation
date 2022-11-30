import { React } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.css';

export function Header() {
    return (
        <>
            <div className={style.header}>
                <div className={style.header_container}>
                    <div className={style.logo}></div>
                    <ul className={style.row}>
                        <li className={style.row_item}>
                            Գլխավոր
                        </li>
                        <li className={style.row_item}>Մեր մասին</li>
                        <li className={style.row_item}>Հրավիրատոմսեր</li>
                    </ul>
                </div>
            </div>
        </>
    )
}