import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__left">
                    <div className="about__cover">
                        <img src="https://i.ibb.co/JBx7mc8/turag.jpg" alt="" />
                    </div>
                    <h1 data-aos="fade-right" data-aos-duration="1000">Shahriar Turag</h1>
                    <span data-aos="fade-right" data-aos-duration="1500">Jr. Web Developer</span>
                </div>

                <div className="about__right">
                    <p>
                        Hey there, i am <span>Shahriar</span>. Right now i am a junior developer. My goal is to be a senior web developer working for a multinational company. Or i might open my own company some day. Wish me luck. Thanks.
                        <br /><br />
                        To achieve my <span>goal</span> i'm learning new things everyday. Practice 8 to 10 hours everyday sometimes more. And push myself farther everyday. Also developing my social skills as its an essential part for my goal. Thanks to Jhankar Mahbub for motivate me in this journey.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;