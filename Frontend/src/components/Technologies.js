import html from '../assets/img/html.png'
import css from '../assets/img/css.png'
import js from '../assets/img/js.png'
import bootstrap from '../assets/img/bootstrap.jpg'
import react from '../assets/img/react.png'
import node from '../assets/img/node.png'
import figma from '../assets/img/figma.png'
import ps from '../assets/img/ps.png'
import express from '../assets/img/express.png'
import mongodb from '../assets/img/mongodb.png'
import redux from '../assets/img/redux.png'
import git from '../assets/img/git.png'
import ai from '../assets/img/ai.png'
import xd from '../assets/img/xd.png'
import wordpress from '../assets/img/wordpress.png'
import indesign from '../assets/img/indesign.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import arrow1 from '../assets/img/arrow1.svg'
import arrow2 from '../assets/img/arrow2.svg'
import colorSharp from '../assets/img/color-sharp.png'

export const Technologies = () => {
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
            <div className=''>
              <div id='tech'>
                <h2 style={{ textAlign: 'center' }}>Technologies</h2>
                <div responsive={responsive} className='grid'>
                  <div className='item'>
                    <img src={html} alt='img' width='20' height='15' />
                    <h5>HTML</h5>
                  </div>
                  <div className='item'>
                    <img src={css} alt='img' width='20' height='15' />
                    <h5>CSS</h5>
                  </div>
                  <div className='item'>
                    <img src={js} alt='img' width='20' height='15' />
                    <h5>Javascript</h5>
                  </div>
                  <div className='item'>
                    <img src={bootstrap} alt='img' width='20' height='15' />
                    <h5>Bootstrap</h5>
                  </div>
                  <div className='item'>
                    <img src={react} alt='img' width='20' height='15' />
                    <h5>React</h5>
                  </div>
                  <div className='item'>
                    <img src={redux} alt='img' width='20' height='15' />
                    <h5>Redux</h5>
                  </div>
                  <div className='item'>
                    <img src={node} alt='img' width='20' height='15' />
                    <h5>Node.js</h5>
                  </div>
                  <div className='item'>
                    <img src={express} alt='img' width='20' height='15' />
                    <h5>Express.js</h5>
                  </div>
                  <div className='item'>
                    <img src={mongodb} alt='img' width='20' height='15' />
                    <h5>Mongodb</h5>
                  </div>
                  <div className='item'>
                    <img src={git} alt='img' width='20' height='15' />
                    <h5>Git</h5>
                  </div>
                  <div className='item'>
                    <img src={wordpress} alt='img' width='20' height='15' />
                    <h5>Wordpress</h5>
                  </div>
                  <div className='item'>
                    <img src={figma} alt='img' width='20' height='15' />
                    <h5>Figma</h5>
                  </div>
                  <div className='item'>
                    <img src={xd} alt='img' width='20' height='15' />
                    <h5>Adobe Xd</h5>
                  </div>
                  <div className='item'>
                    <img src={ai} alt='img' width='20' height='15' />
                    <h5>Illustrator</h5>
                  </div>
                  <div className='item'>
                    <img src={ps} alt='img' width='20' height='15' />
                    <h5>Photoshop</h5>
                  </div>
                  <div className='item'>
                    <img src={indesign} alt='img' width='20' height='15' />
                    <h5>Indesign</h5>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className='background-image-left' src={colorSharp} alt='Image' />
    </section>
  )
}
