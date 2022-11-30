import { React } from 'react';

import style from './Footer.module.css';

import facebookLogo from '../../Assets/Icons/fb.svg';
import instagramLogo from '../../Assets/Icons/insta.svg';
import telegramLogo from '../../Assets/Icons/telegram.svg';

export function Footer() {
    return (
        <>
            <div className={style.footer}>
                <span className={style.footer_title}>COPYRIGHT © 2022. eventInvitation.am</span>
                <ul className={style.social_content}>
                    <li className={style.social_item}>
                        <img src={instagramLogo}  className={style.social_item_logo}/>
                    </li>
                    <li className={style.social_item}>
                        <img src={facebookLogo}  className={style.social_item_logo}/>
                    </li>
                    <li className={style.social_item}>
                        <img src={telegramLogo}  className={style.social_item_logo}/>
                    </li>
                </ul>
            </div>
        </>
    )
}