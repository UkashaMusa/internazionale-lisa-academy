import './Testimonial.css';
import Nexticon from '../../assets/nexticon.png';
import Backicon from '../../assets/backicon.png';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import user4 from '../../assets/user4.png';
import { useRef } from 'react';

const Testimonial = () => {
    const slider = useRef();
    let tx = 0;


    const next = () => {
        if (tx > -50) {
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`

    }

    const back = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


    return (
        <div className='testimonials'>
            <img src={Nexticon} alt="" className='next-btn' onClick={next} />
            <img src={Backicon} alt="" className='back-btn' onClick={back} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="userinfo">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Testimonial