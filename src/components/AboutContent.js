import './AboutContent.css'
import { Link } from 'react-router-dom'

import Profile1 from '../assests/img 3.jpg'
import Profile2 from '../assests/mat2.jpg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='leftInfo'>
            <h1>Who Am I</h1>
            <p>Im a web3 full-stack developer. I create responsive secure website for my clients.</p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        

        <div className='rightInfo'>
                <div className='img-container'>
                    <div className='top'>
                        <img src={Profile1} className='img' alt='image'/>
                    </div>

                    <div className='bottom'>
                        <img src={Profile2} className='img' alt='image'/>
                    </div>
                </div>

                
        </div>
    </div>
  )
}

export default AboutContent