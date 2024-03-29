import { React,useEffect } from 'react';

import boll from '../../Assets/Icons/balloons.svg';
import baby from '../../Assets/Images/baby1.jpg';
import cake from '../../Assets/Icons/birthday-cake.svg';

import gift from '../../Assets/Icons/gift.svg';



import hat from '../../Assets/Icons/hat.svg';
import teddy from '../../Assets/Icons/teddy.svg';
import candy1 from '../../Assets/Icons/candy1.svg';
import candy2 from '../../Assets/Icons/candy2.svg';
import candy3 from '../../Assets/Icons/candy3.svg';





export function InvitationFive() {
    const elements = [
        {
            class: 'animate__fadeInRight',
            id: 'txt__title'
        },
        {
            class: 'animate__fadeInLeft',
            id: 'txt__span'
        },
        {
            class: 'animate__fadeInRight',
            id: 'tubule__img__1'
        },
        {
            class: 'animate__fadeInRight',
            id: 'tubule__img__2'
        },
    ]
    
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
            <div className='invitation__five__main'>
                <div id="float">
                    <img src={gift} className="gift" />
                </div>
                <div className="invitation__five__header__content">
                    <div className="text__content"> 
                        <span className="txt__title animate__animated  animate__fadeInRight" id='txt__title' >Join us to celebrate</span>
                        <span className="txt__span animate__animated  animate__fadeInLeft" id='txt__span'>Tigran 's 1st <br /> Birthday</span>
                        <img src={boll} className="tubule__img__1 animate__animated  animate__fadeInRight"  id='tubule__img__1' />
                        <img src={baby} className="img" alt="a misty forest"></img>
                        <span className="txt__title">7 February,2023 | at 4:00 PM</span>
                        <img src={cake} className="tubule__img__1 animate__animated animate__fadeInLeft"  id='tubule__img__2' />
                        <span className="txt__title">Tigran Mets Restaurant Complex</span>
                        <div className="marquee">
                            <div className="track">
                                <div className="slider__content">
                                    <img src={teddy} className="slider__item" />
                                    <img src={candy1} className="slider__item" />
                                    <img src={hat} className="slider__item" />
                                    <img src={candy3} className="slider__item" />
                                    <img src={candy2} className="slider__item" />
                                    <img src={gift} className="slider__item" />
                                </div>
                            </div>
                        </div>
                        <div className='phone___content'>
                        <span className="txt__title">RSVP to Anna at  +374-94-59-82-59</span>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}



