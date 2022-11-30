/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';

import style from './Invitation.module.css';

import image1 from '../../Assets/Images/image1.jpg';

export function Invitation(){
    return(
        <>
        <div className={style.Invitation}></div>
        <img src={image1} className={style.header_img}/>
        </>
    )
}