import React from 'react'
import Slider from 'react-slick';
import './Slider.css'
function SliderType() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
       <div >
        <Slider {...settings}>
          <Testimonial 
          text='Had a great experience with Blockcreate team from the beginning.
           Understood the project thoroughly and did a commendable job with the project. 
           Very happy to have reached out to them and make my project a huge success.'
           name="John Doe" designation='Software Developer'/> 
           <Testimonial 
          text=' Had a swift experience with the team. My ERC-20 token was compatible with industry standards, with complete auditing done to ensure there are no backdoors in the contracts. The team even got it listed on coingecko.'
           name="Johny Sins" designation='BlockChain Developer'/> 
           <Testimonial 
          text='The team looked richly experienced in blockchain technology. They provided consultancy and had some great ideas for what all could be done with my project. Implemented some brilliant ideas of marketing and promoted my token in various social media channels and  communities.   '
           name="John Cena" designation='Backend Developer'/> 
           <Testimonial 
          text='Great working with Dmitrii on this project. Fast turnaround time and excellent communication throughout including support with any technical queries. Would highly recommend'
           name="Johny Bhaiy" designation='Frontend Developer'/> 
         
        </Slider>
      </div>
    )
}

export default SliderType


const Testimonial = ({text,name,designation}) =>{
  return(
<div className="testimonial">
          <div className="testimonial__box">
            <h1>Best Service Ever</h1>
            <p>{text}</p>
          </div>
            <span class="right-angle"></span>

          <div className="testimonail__details">
               <div className="testimonial__img">
                 <img src="/Images/testimonial.webp" alt="name"/>
                  <div className="testimonial__imgName">
                      <h2>{name}</h2>
                      <p>{designation}</p>
                  </div>
               </div>
                  <div className="testimonial__social">
                      <a href="">
                        <img src="/Images/facebook.svg" alt="facebook logo"/>
                      </a>
                      <a href="">
                        <img src="/Images/twitter.svg" alt="twitter logo"/>
                      </a>
                  </div>
          </div>
        </div>
  )
}