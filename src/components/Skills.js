import front from '../assets/img/front.png'
import back from '../assets/img/back.png'
import mobile from '../assets/img/mobile.png'
import ui from '../assets/img/ui.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from '../assets/img/arrow1.svg'
import arrow2 from '../assets/img/arrow2.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }

  return (
    <section className='skill' id='skills'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='skill-bx wow zoomIn'>
              <h2>Skills</h2>
              <p> I really believe that everyone has a talent, ability, or skill
                <br /> that he can mine to support himself and to succeed in life.
              </p>
              <Carousel responsive={responsive} infinite className='owl-carousel owl-theme skill-slider'>
                <div className='item'>
                  <img src={front} alt='Image' />
                  <h5>Front-end Development</h5>
                </div>
                <div className='item'>
                  <img src={back} alt='Image' />
                  <h5>Back-end Development</h5>
                </div>
                <div className='item'>
                  <img src={mobile} alt='Image' />
                  <h5>Mobile Development</h5>
                </div>
                <div className='item'>
                  <img src={ui} alt='Image' />
                  <h5>UI/UX Designer</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}
