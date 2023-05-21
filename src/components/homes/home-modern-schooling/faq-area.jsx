import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const accordion_items = [
    {
    id: 'collapseOne',
    show: true,
    title: 'איך אני יכול ליצור קשר ישירות עם בית ספר?',
    desc: 'לורם איפסום דולור סיט אמת קונסקטור אדיפיסינג אלית סד איאוס מוד אקס טמפור אינקידידונט לבורה דולורה מאגנה אליקו עד מינים איניאם.'
    },
    {
    id: 'collapseTwo',
    show: false,
    title: 'איך אני מוצא בית ספר במקום שאני רוצה ללמוד?',
    desc: 'לורם איפסום דולור סיט אמת קונסקטור אדיפיסינג אלית סד איאוס מוד אקס טמפור אינקידידונט לבורה דולורה מאגנה אליקו עד מינים איניאם.'
    },
    {
    id: 'collapseThree',
    show: false,
    title: 'איפה כדאי ללמוד בחו"ל?',
    desc: 'לורם איפסום דולור סיט אמת קונסקטור אדיפיסינג אלית סד איאוס מוד אקס טמפור אינקידידונט לבורה דולורה מאגנה אליקו עד מינים איניאם.'
    }
    ];


const FaqArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-faq-area faq-style-5 section-gap-equal">
            <div className="container">
                <div className="row g-5 row--45">
                    <div className="col-lg-6">
                        <div className="edu-faq-gallery">
                            <div className="faq-thumbnail thumbnail-1" data-sal-delay="50" data-sal="slide-right" data-sal-duration="800">
                                <img src="/assets/images/others/faq-5.jpg" alt="Faq Images" />
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-35.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/faq/shape-36.png" alt="Shape Images" />
                                </motion.li>
                                <li className="shape-3">
                                    <img src="/assets/images/faq/shape-34.png" alt="Shape Images" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800">
                        <div className="edu-faq-content">
                            <div className="section-title section-left">
                            <span className="pre-title">שאלות נפוצות</span>
                                <h2 className="title">שיעורים ברמה הגבוהה ביותר <span className="color-secondary">פיתוח <br /> החשיבה</span> התכנותית</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                            </div>
                            <div className="faq-accordion" id="faq-accordion">
                                <div className="accordion">
                                    {accordion_items.map((item, i) => {
                                        const { desc, id, show, title } = item;
                                        return (
                                            <div key={i} className="accordion-item">
                                                <h5 className="accordion-header">
                                                    <button className={`accordion-button ${show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded={show ? 'true' : 'false'}>
                                                        {title}
                                                    </button>
                                                </h5>
                                                <div id={id} className={`accordion-collapse collapse ${show ? 'show' : ''}`} data-bs-parent="#faq-accordion">
                                                    <div className="accordion-body">
                                                        <p>{desc}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(40).x,
                                        y: mouseReverse(40).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-02.png" alt="Shape Images" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <span></span>
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaqArea;