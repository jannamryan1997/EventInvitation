import { React } from 'react';

import { Carousel } from 'react-responsive-carousel';


import weeding1 from '../../Assets/Images/weeding1.jpg';
import weeding2 from '../../Assets/Images/weeding2.png';
import weeding3 from '../../Assets/Images/weeding3.jpg';
import weeding4 from '../../Assets/Images/weeding4.jpg';

import homebackground from '../../Assets/Images/home_background.png';

export function Home() {

    return (
        <>
            <div className='home__main'>
                <div className='home__container'>
                    <img src={homebackground} className="home__background" />
                    <div className='carousel__content'>
                    <Carousel
                        autoPlay={true}
                        infiniteLoop={true}
                        showArrows={true}
                        showThumbs={false}
                    >
                        <div>
                            <img src={weeding1} className='wedding_img' />
                        </div>
                        <div>
                            <img src={weeding2} className='wedding_img' />
                        </div>
                        <div>
                            <img src={weeding3} className='wedding_img' />
                        </div>
                        <div>
                            <img src={weeding4} className='wedding_img' />
                        </div>
                    </Carousel>
                    </div>
                </div>

            </div>
        </>
    )
}


{/* <span className='home__main__description'>Վիրտուալ հրավիրատոմսեր <br/> ցանկացած առիթի համար</span> */ }


