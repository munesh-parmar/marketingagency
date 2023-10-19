import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <section className='about section-p bg-dark' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.about_main_img} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className = "text">Market Research: We conduct market research to gather data and insights about industry, competitors, and consumer behavior. This data helps in making informed decisions and crafting effective marketing campaigns.

Advertising and Creative Services: This includes designing and creating advertisements, promotional materials, and content for various platforms, such as print, digital, social media, and more.

Digital Marketing: Marketing agencies specialize in online marketing strategies, including search engine optimization, pay-per-click advertising, social media marketing, email marketing, and content marketing. </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About