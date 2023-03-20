import {React,useEffect} from 'react';

import flowers from '../../Assets/Images/engage_flower.png';
import flowers2 from '../../Assets/Images/engage_flower2.png'
import ring from '../../Assets/Icons/ring_2.svg';

export function InvitationNumberFour(){

    const elements = [
        {
            class: 'animate__fadeInRight',
            id: 'invitation__four__header_img'
        },
        {
            class: 'animate__fadeInRight',
            id: 'invitation__description__content'
        },
        {
            class:'animate__fadeInLeft',
            id:'invitatin__title'
        },
        {
            class:'animate__fadeInLeft',
            id:'invitation__four__header_img_two'
        }
      
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
        <div className='invitation__four__main'>
        <img src={flowers} className='invitation__four__header_img animate__animated  animate__fadeInRight' id='invitation__four__header_img'/>
        <div className='invitation__description__content animate__animated  animate__fadeInRight' id='invitation__description__content'>
        <span className='invitatin__header__title'>PLEASE JOIN US FOR AN</span>
        <span className='invitatin__title'>Engagement <br/>Party</span>
        <span className='invitatin__title animate__animated  animate__fadeInLeft' id='invitatin__title'>Anna & Aram</span>
        <div className='data__content'>
                    <div className='card__item_1'>
                        <span className='invitatin__date__title after__content'>
                            08 March 2023
                        </span>
                    </div>
                    <div className='card__item_2'>
                        <span className='invitatin__date__title'> Wednesday 4:00  PM </span>
                    </div>
                    <div className='card__item_2'>
                    <span className='invitatin__date__title'>Tigran Mets Restaurant Complex</span>
                    </div>
                </div>
                <img src={ring} className='invitation__four__ring_img' />
        </div>
        <img src={flowers2} className='invitation__four__header_img animate__animated  animate__fadeInLeft' id='invitation__four__header_img_two'/>
        </div>
        </>
    )
}