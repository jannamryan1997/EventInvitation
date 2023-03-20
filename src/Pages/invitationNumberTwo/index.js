import { React, useEffect } from 'react';

import { GoogleMap, Marker } from '@react-google-maps/api';

import headerImage from '../../Assets/Images/invitation_2_2.jpg';
import footerImage from '../../Assets/Images/invitation_2_2_2.jpg';
import descriptionImage_1 from '../../Assets/Images/invitation_4.jpg';
import descriptionImage_2 from '../../Assets/Images/invitation_5.jpg';
import cake from '../../Assets/Icons/cake.svg';
import church from '../../Assets/Icons/church.svg';
import heart from '../../Assets/Icons/heart.svg';
import car from '../../Assets/Icons/car.svg';

export function InvitationNumberTwo() {

    const center = {
        lat: 40.7998738714596,
        lng: 43.857421875,
    };

    const elements = [
        {
            class: 'animate__fadeInRight',
            id: 'ivitation_two_header'
        },
        {
            class:'animate__zoomIn',
            id:'description_content'
        },
        {
            class:'animate__fadeInLeft',
            id:'line__content'
        },
        {
            class:'animate__fadeInLeft',
             id:'line__content_two'
        },
        {
            class:'animate__fadeInDown',
            id:'description_img_1'
        },
        {
            class:'animate__fadeInLeft',
            id:'invitatin_two__description'
        },
        {
            class:'animate__fadeInUp', 
            id:'description_img_2'
        },
        {
            class:'animate__fadeInLeft' ,
            id:'infotmation_content_item_two',

        },
        {
            class:'animate__fadeInLeft' ,
            id:'infotmation_content_item_one',
            
        },
        {
            class:'animate__fadeInLeft',
             id:'line__content_one'
        },
        {
            class:'animate__fadeInLeft',
              id:'hurt__title',
        },
        {
            class: 'animate__fadeInLeft', 
            id:'line__content_three'
        },
        {
            class: 'animate__fadeInLeft', 
            id:'header__title_one'
        },
        {
            class: 'animate__fadeInDown', 
            id:'header__title_two'
        },
        {
            class: 'animate__fadeInRight', 
            id:'header__title_three' 
        }
    ];

    useEffect(() => {
        for (let item of elements) {
            const element = document.getElementById(item.id);
            const observer = new IntersectionObserver(entries => {
                element.classList.toggle(item.class, entries[0].isIntersecting);
            });
            observer.observe(element);
        }

    }, []);

    return (
        <>
            <div className='ivitation_two_main'>
                <div className='ivitation_two_header animate__animated  animate__fadeInRight' id='ivitation_two_header'>
                    <img className='header_img_1' src={headerImage} />
                    <div className='title__container'>
                        <span className="header__title animate__animated animate__fadeInLeft" id='header__title_one'>A</span>
                        <span className="header__title animate__animated animate__fadeInDown" id='header__title_two'> &</span>
                        <span className="header__title animate__animated animate__fadeInRight" id='header__title_three'>G</span>
                    </div>
                    <img className='header_img_1' src={footerImage} />

                </div>
                <div className='description_content animate__animated animate__zoomIn' id='description_content'>
                <div className='line__content animate__animated animate__fadeInLeft' id='line__content'>
                        <img src={car} className="hurt__img"/>
                    </div>
                    <span className='invitatin_two__description'>Սիրով հրավիրում ենք ձեզ մասնակցելու <br />Արամի և Գոհարի
                        <br />պսակադրության արարողությանը, <br />որը տեղի կունենա  23․09․2022թ-ին ժամը 2։00-ին <br />Յոթ Վերք եկեղեցում։
                    </span>
                    <div className='line__content animate__animated animate__fadeInLeft' id='line__content_two'>
                        <img src={car} className="hurt__img"/>
                    </div>
                    
                </div>
                <div className='map_container'>
                    <GoogleMap
                        center={center}
                        zoom={15}
                        mapContainerClassName='containerStyle__google__map'
                    >
                        <></>
                        <Marker position={center} />
                    </GoogleMap>
                    <div className='invittation_footer_description'>
                        <img className='description_img_1 animate__animated animate__fadeInDown' id='description_img_1' src={descriptionImage_1} />
                        <span className='invitatin__description_title invitatin_two__description animate__animated animate__fadeInLeft' id='invitatin_two__description'>
                            <br />Հարսանյաց հանդեսը տեղի կունենա<br /> Իմպերիալ ռեստորանային համալիրում ժամը 5։00-ին։
                        </span>
                        <img className='description_img_1 animate__animated animate__fadeInUp' id='description_img_2' src={descriptionImage_2} />
                    </div>
                    <div className='event__time'>
                        <div className='infotmation_content_item animate__animated animate__fadeInLeft' id='infotmation_content_item_one'>
                            <img src={church} className="infotmation_content_item_img" />
                            <span className='invitatin__description information__title'>2։00 Յոթ Վերք  եկեղեցի</span>
                        </div>
                        <div className='infotmation_content_item animate__animated animate__fadeInLeft' id='infotmation_content_item_two'>
                            <img src={cake} className="infotmation_content_item_img secont__image" style={{margin:'50px 0 0 50px'}}/>
                            <span className='invitatin__description information__title'>5։00 Իմպերիալ ռեստորան</span>
                        </div>
                    </div>
                    <div className='line__content animate__animated animate__fadeInLeft' id='line__content_one'>
                        <img src={heart} className="hurt__img"/>
                    </div>
                    <span className='hurt__title animate__animated animate__fadeInLeft'  id='hurt__title'>Aram & Gohar</span>
                    <div className='line__content animate__animated animate__fadeInLeft' id='line__content_three'>
                        <img src={heart} className="hurt__img"/>
                    </div>
                </div>

            </div>
        </>
    )
}