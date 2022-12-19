import React from 'react'
import logo from '../../img/logo/logo.png'
import { Link } from 'react-router-dom'
import apple from '../../img/icons/apple.png'
import playStore from '../../img/icons/playStore.png'
import './Home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import headerSlider1 from '../../img/home/headerSlider1.png'
import headerSlider2 from '../../img/home/headerSlider2.png'
import headerSlider3 from '../../img/home/headerSlider3.png'
import headerBgVideo from '../../img/home/headerSliderBg.mp4'

const Header = () => {
    return (
        <>
            <header className='homeHeader'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-7 col-lg-7 co-md-6 col-12 col-12'>
                            <div className='homeHeaderBg'>
                                <nav className='homeNavigation'>
                                    <ul>
                                        <li>
                                            <div className='homeLogo'>
                                                <Link to="/">
                                                    <img src={logo} alt="logo" className='img-fluid' />
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Features</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Help Center</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className='homeHeaderContent'>
                                    <h1>The Business Solution
                                        for everyone</h1>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s,</p>
                                    <div className='homeHeaderBtn'>
                                        <a href="#">
                                            <div className='homeHeaderStorBtn'>
                                                <div className='storeImg'>
                                                    <img src={apple} alt="apple" className='img-fluid' />
                                                </div>
                                                <div className='storeName'>
                                                    <span>Download on the</span>
                                                    <p>App Store</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className='homeHeaderStorBtn'>
                                                <div className='storeImg'>
                                                    <img src={playStore} alt="playStore" className='img-fluid' />
                                                </div>
                                                <div className='storeName'>
                                                    <span>GET IT ON</span>
                                                    <p>Google Play</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-lg-5 co-md-6 col-12 col-12'>
                            <div className='homeHeaderSliderBg'>
                                <div className='homeHeaderSliderBgVideo'>
                                    <video Autoplay="autoplay" muted loop>
                                        <source src={headerBgVideo} type="video/mp4" />
                                    </video>
                                </div>
                                <div className='headerSliderBox'>
                                    <Swiper
                                        slidesPerView={"auto"}
                                        centeredSlides={true}
                                        spaceBetween={20}
                                        autoplay={{
                                            delay: 2500,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Autoplay, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className='headerSliderImg'>
                                                <img src={headerSlider1} alt="headerSlider 1" className='img-fluid' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='headerSliderImg'>
                                                <img src={headerSlider2} alt="headerSlider 1" className='img-fluid' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='headerSliderImg'>
                                                <img src={headerSlider3} alt="headerSlider 1" className='img-fluid' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='headerSliderImg'>
                                                <img src={headerSlider1} alt="headerSlider 1" className='img-fluid' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='headerSliderImg'>
                                                <img src={headerSlider2} alt="headerSlider 1" className='img-fluid' />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className='headerSliderImg'>
                                                <img src={headerSlider3} alt="headerSlider 1" className='img-fluid' />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='headerCopyright'>
                                <ul>
                                    <li>© BizsApp From Digrowfa</li>
                                    <li>
                                        <Link to='/'>Privacy</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Terms</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header