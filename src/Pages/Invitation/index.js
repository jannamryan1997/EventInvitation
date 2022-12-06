/* eslint-disable jsx-a11y/alt-text */
import { React,useCallback,useState } from 'react';

import invitationimg1 from '../../Assets/Images/invitation1.jpg';
import invitationimg2 from '../../Assets/Images/invitation2.jpg';
import cake from '../../Assets/Images/cake.png';
import pigeons from '../../Assets/Images/pigeons.png';
import flower from '../../Assets/Images/flower.png';


import { GoogleMap,Marker } from '@react-google-maps/api';


export function Invitation() {


    const center = {
        lat: 40.7998738714596,
        lng: 43.857421875,
    };

    const containerStyle = {
       
    };

    return (
        <>
            <div className="invitation__main">
                <div className='invitation__main__content'>
                    <span className='animate__animated animate__zoomIn invitatin__title'>Radik & Zhanna</span>
                    <div className='invitation__img_content'>
                        <div className='invitation__img_transition animate__animated animate__fadeInLeft'>
                            <div className='invitation__img_1_item'>
                                <img className='invitation_img_1' src={invitationimg1} />
                            </div>
                        </div>
                        <div className='invitation__img_transition animate__animated animate__fadeInRight'>
                            <div className='invitation__img_2_item'>
                                <img className='invitation_img_2 ' src={invitationimg2} />
                            </div>
                        </div>
                    </div>
                    <div className='description_content animate__animated animate__zoomIn'>
                        <span className='invitatin__description'>Սիրով հրավիրում ենք ձեզ մասնակցելու <br />Ռադիկի և Ժաննաի
                            <br />պսակադրության արարողությանը, <br />որը տեղի կունենա  23․08․2022թ-ին ժամը 2։00-ին <br />Սուրբ Գայանե եկեղեցում։
                            <br />Հարսանյաց հանդեսը տեղի կունենա<br /> Իմպերիալ ռեստորանային համալիրում ժամը 5։00-ին։
                        </span>
                    </div>
                </div>
                <div className='google__container'>
                    <GoogleMap
                        center={center}
                        zoom={15}
                        mapContainerClassName='containerStyle__google__map'
                    >
                        <></>
                        <Marker position={center} />
                    </GoogleMap>
                    <img src={flower} className="flower__item_img" />
                    <div className='infotmation_content_item animate__animated animate__fadeInLeft'>
                    <img src={pigeons} className="infotmation_content_item_img"/>
                    <span className='invitatin__description information__title'>2։00 Սուրբ Գայանե եկեղեցի</span>
                    </div>
                    <div className='infotmation_content_item animate__animated animate__fadeInLeft'>
                    <img src={cake} className="infotmation_content_item_img"/>
                    <span className='invitatin__description information__title'>5։00 Իմպերիալ ռեստորանում</span>
                    </div>
                </div>
                <div className='invitation__footer'>
                <span className='invitatin__description information__title'>Հարգանքներով՝ Ռադիկ և Ժաննա</span>
           
                </div>
                <div className='invitation__footer'>
                <img src={flower} className="footer_img"/>
                </div>
            </div>
        </>
    )
}