import {React} from 'react';

import flowers from '../../Assets/Images/engage_flower.png';
import flowers2 from '../../Assets/Images/engage_flower2.png'
import ring from '../../Assets/Icons/ring_2.svg';

export function InvitationNumberFour(){
    return (
        <>
        <div className='invitation__four__main'>
        <img src={flowers} className='invitation__four__header_img animate__animated  animate__bounceInLeft'/>
        <div className='invitation__description__content animate__animated  animate__bounceInRight'>
        <span className='invitatin__header__title'>PLEASE JOIN US FOR AN</span>
        <span className='invitatin__title'>Engagement <br/>Party</span>
        <span className='invitatin__title animate__animated  animate__bounceInLeft'>Anna & Aram</span>
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
        <img src={flowers2} className='invitation__four__header_img animate__animated  animate__bounceInLeft'/>
        </div>
        </>
    )
}