/* eslint-disable jsx-a11y/alt-text */
import {React} from 'react';


import image1 from '../../Assets/Images/image1.jpg';
import invitationimg1 from '../../Assets/Images/invitation1.jpg';
import invitationimg2 from '../../Assets/Images/invitation2.jpg';

export function Invitation(){
    return(
        <>
        <div>
        <img src={image1}  className="animate__animated animate__fadeInDown invitation_header_img"/>
        <span className='animate__animated animate__zoomIn invitatin__title'>Ռադիկ և Ժաննա</span>
        <div className='invitation__img_content'>
            <div className='invitation__img_transition animate__animated animate__fadeInLeft'> 
            <div className='invitation__img_1_item'>
            <img className='invitation_img_1' src={invitationimg1}/>
            </div>
            </div>
            <div className='invitation__img_transition animate__animated animate__fadeInRight'> 
            <div className='invitation__img_2_item'>
            <img className='invitation_img_2 ' src={invitationimg2}/>
            </div>
            </div>
        </div>
        <span className='animate__animated animate__zoomIn invitatin__title'>Սիրով հրավիրում ենք ձեզ մասնակցելու Ռադիկի և Ժաննաի պսակադրության արարողությանը,որը տեղի կունենա  23․08․2022թ-ին ժամը 2։00-ին Սուրբ Գայանե եկեղեցում։</span>
        </div>
        </>
    )
}
