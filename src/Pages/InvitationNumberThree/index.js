import { React, useEffect } from 'react';

import { Carousel } from 'react-responsive-carousel';

import { GoogleMap, Marker } from '@react-google-maps/api';

import headerImage1 from '../../Assets/Images/inventionthree_1.jpg';
import headerImage2 from '../../Assets/Images/inventionthree_2.jpg';
import ring from '../../Assets/Icons/wedding_rings.svg';
import restaurant from '../../Assets/Icons/restaurant.svg';
import engagement from '../../Assets/Icons/engagement.svg';

import invitationimg1 from '../../Assets/Images/invitation1.jpg';
import invitationimg2 from '../../Assets/Images/invitation2.jpg';
import invitationimg3 from '../../Assets/Images/invitation3.jpg';
import invitationimg4 from '../../Assets/Images/invitation4.jpg';
import invitationimg5 from '../../Assets/Images/invitation5.jpg';
import invitationimg6 from '../../Assets/Images/invitation6.jpg';

export function InvitationNumberThree() {

    const center = {
        lat: 40.7853123,
        lng: 43.8498557
    };



    return (
        <>
            <div className='invitation_type_three_main'>
                <img src={headerImage1} className='invitation_type_three_header_img' />
                <div className='invitation__type_three_carousel'>
                    <Carousel
                        autoPlay={false}
                        infiniteLoop={true}
                        showArrows={false}
                        showThumbs={false}
                    >
                        <div className='invitation_type_three_img_content'>
                            <img src={invitationimg1} className='invitation__type_img_1' />
                            <span className='animate__animated animate__zoomIn invitatin__title invitation_type_three_img_content_title'>
                                Engagement Ceremony <br />of
                                <br />
                                Radik & Zhanna</span>
                        </div>
                        <div>
                            <img src={invitationimg3} className='invitation__type_img_1' />
                            <span className='animate__animated animate__zoomIn invitatin__title invitation_type_three_img_content_title'>
                                Engagement Ceremony <br />of
                                <br />
                                Radik & Zhanna</span>
                        </div>
                        <div>
                            <img src={invitationimg5} className='invitation__type_img_1' />
                            <span className='animate__animated animate__zoomIn invitatin__title invitation_type_three_img_content_title'>
                                Engagement Ceremony <br />of
                                <br />
                                Radik & Zhanna</span>
                        </div>
                        <div>
                            <img src={invitationimg2} className='invitation__type_img_1' />
                            <span className='animate__animated animate__zoomIn invitatin__title invitation_type_three_img_content_title'>
                                Engagement Ceremony <br />of
                                <br />
                                Radik & Zhanna</span>
                        </div>
                        <div>
                            <img src={invitationimg4} className='invitation__type_img_1' />
                            <span className='animate__animated animate__zoomIn invitatin__title invitation_type_three_img_content_title'>
                                Engagement Ceremony <br />of
                                <br />
                                Radik & Zhanna</span>
                        </div>
                        <div>
                            <img src={invitationimg6} className='invitation__type_img_1' />
                            <span className='animate__animated animate__zoomIn invitatin__title invitation_type_three_img_content_title'>
                                Engagement Ceremony <br />of
                                <br />
                                Radik & Zhanna</span>
                        </div>
                    </Carousel>
                </div>
                <img src={headerImage2} className='invitation_type_three_header_img img__two' />
                <div className='data__content animate__animated animate__backInLeft'>
                    <div className='card__item_1'>
                        <span className='invitatin__date__title after__content'>
                            08 March 2021
                        </span>
                    </div>
                    <div className='card__item_2'>
                        <span className='invitatin__date__title'> Monday 5:00  PM </span>

                    </div>
                </div>
                <img src={ring} className='invitation_type_three_wedding_ring_img animate__animated animate__backInLeft' />
                <div className='description_content animate__animated animate__zoomIn'>
                    <div className='line__content animate__animated animate__fadeInLeft' style={{ color: '#78AFB6' }}>
                        <img src={restaurant} className="hurt__img" />
                    </div>
                    <span className='invitatin_two__description' style={{ color: '#78AFB6' }}>Tigran Mets Restaurant Complex
                    </span>
                    <div className='line__content animate__animated animate__fadeInLeft' style={{ color: '#78AFB6' }}>
                        <img src={restaurant} className="hurt__img" />
                    </div>
                </div>
                <div className='three_map__content'>
                    <GoogleMap
                        center={center}
                        zoom={15}
                        mapContainerClassName='containerStyle__google__map'
                    >
                        <></>
                        <Marker position={center} />
                    </GoogleMap>
                    <div className='left__cotent'>
                        <img src={engagement} className='invitation_type_three_engagement' />
                        <span className='left__content_title'>I Said Yes...</span>
                    </div>
                </div>
            </div>
        </>
    )
}