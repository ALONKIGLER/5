import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

const testimonials = [
{
img: '/assets/images/testimonial/testimonial-05.png',
desc: 'המלצה על השיעורים: השיעורים מדהימים! אני מאוד מרוצה מהתוכן והשיטה ההורקטיבית שלהם. המורים מקצועיים ואדיבים. ממליץ בחום!',
ratings: [1, 2, 3, 4, 5],
name: 'ריי סאנצ׳ז',
title: ' תלמיד כיתה ו'
},
{
img: '/assets/images/testimonial/testimonial-06.png',
desc: ' נהניתי מאוד להשתתף בשיעורים. התוכן מעניין ומועיל, והמדריכים מקצועיים ואדיבים. מומלץ בחום!',
ratings: [1, 2, 3, 4, 5],
name: 'תומס לופז',
title: 'תלמיד כיתה ג'
},
{
img: '/assets/images/testimonial/testimonial-07.png',
desc: ' מערכת מדהימה! השיעורים מציעים ידע מקצועי ושיטות לימוד מותאמות אישית. אני מרגישה שהתקדמתי הרבה מאוד בתחום שבחרתי. מומלץ מאוד!',
ratings: [1, 2, 3, 4, 5],
name: 'עמבר פייג',
title: ' תלמיד כיתה ו'
},
{
img: '/assets/images/testimonial/testimonial-06.png',
desc: ' השיעורים מציעים תוכן מגוון ומעניין. המדריכים מקצועיים וידידותיים. אני נהנה ללמוד וממליץ עליהם לכל מי שמחפש להתפתח בתחום.',
ratings: [1, 2, 3, 4, 5],
name: 'תומס לופז',
title: ' תלמיד כיתה ד'
}
];

const TestimonialArea = () => {
    const [loop, setLoop] = useState(false);
    useEffect(() => setLoop(true), [])
    return (
      <div className="testimonial-area-8 section-gap-equal">
            <div className="container edublink-animated-shape">
            <div className="row justify-content-center">
    <div className="col-lg-6">
        <div className="section-title section-center" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <span className="pre-title">המלצות</span>
            <h2 className="title">מה תלמידינו <br /> אומרים</h2>
            <span className="shape-line"><i className="icon-19"></i></span>
        </div>
    </div>
</div>
                <Swiper
                    className="testimonial-activation swiper"
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={loop}
                    modules={[Pagination,Autoplay]}
                    grabCursor={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }}
                >
                    {testimonials.map((item, i) => {
                        const {img,desc,name,ratings,title } = item;
                        return (
                            <SwiperSlide key={i}>
                                <div className="testimonial-slide">
                                    <div className="content">
                                        {/* <div className="author-info">
                                            <div className="thumb">
                                                <img src={img} alt="Testimonial" />
                                            </div>
                                        </div> */}
                                        <p>{desc}</p>
                                        <div className="rating-icon">
                                            {ratings.map(r => <i key={r} className="icon-23"></i>)}
                                        </div>
                                        <div className="info">
                                            <h5 className="title">{name}</h5>
                                            <span className="subtitle">{title}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            <ul className="shape-group">
                <li className="shape-3" data-sal-delay="200" data-sal="fade" data-sal-duration="1000">
                    <img className="d-block-shape-light" src="/assets/images/others/map-shape-3.png" alt="Shape" />
                    <img className="d-none-shape-dark" src="/assets/images/others/dark-map-2-shape-3.png" alt="Shape" />
                </li>
            </ul>
        </div>
    )
}

export default TestimonialArea;