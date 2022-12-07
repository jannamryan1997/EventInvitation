import { React } from 'react';

import { Carousel } from 'react-responsive-carousel';

import headerImage1 from '../../Assets/Images/inventionthree_1.jpg';

import invitationimg1 from '../../Assets/Images/invitation1.jpg';
import invitationimg2 from '../../Assets/Images/invitation2.jpg';
import invitationimg3 from '../../Assets/Images/invitation3.jpg';
import invitationimg4 from '../../Assets/Images/invitation4.jpg';
import invitationimg5 from '../../Assets/Images/invitation5.jpg';
import invitationimg6 from '../../Assets/Images/invitation6.jpg';

export function InvitationNumberThree() {
    return (
        <>
            <div className='invitation_type_three_main'>
                <img src={headerImage1} className='invitation_type_three_header_img' />
                <div className='invitation__type_three_carousel'>
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={false}
                        showThumbs={false}
                    >
                        <div>
                            <img src={invitationimg1} className='invitation__type_img_1' />
                        </div>
                        <div>
                            <img src={invitationimg3} className='invitation__type_img_1' />
                        </div>
                        <div>
                            <img src={invitationimg5} className='invitation__type_img_1' />
                        </div>
                        <div>
                            <img src={invitationimg2} className='invitation__type_img_1' />
                        </div>
                        <div>
                            <img src={invitationimg4} className='invitation__type_img_1' />
                        </div>
                        <div>
                            <img src={invitationimg6} className='invitation__type_img_1' />
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}