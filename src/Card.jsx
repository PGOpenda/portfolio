import './Card.css'
import img from './assets/pexels.jpg'

function Card() {
    return (
        <>
            <div className='card'>
                <a href="" className='card-a'>
                    <img src={img} alt="image" className='card-img'/>
                    <div className='card-info'>
                        <h3 className='card-h3'>
                            Terminal
                        </h3>
                        <p className='card-p'>
                            <span className='card-span'>JavaScript</span>
                            <span className='card-span'>CSS</span>
                            <span className='card-span'>Python</span>                        
                        </p>
                    </div>
                </a>
            </div>

            <div className='card'>
                <a href="" className='card-a'>
                    <img src={img} alt="image" className='card-img'/>
                    <div className='card-info'>
                        <h3 className='card-h3'>
                            Terminal
                        </h3>
                        <p className='card-p'>
                            <span className='card-span'>JavaScript</span>
                            <span className='card-span'>CSS</span>
                            <span className='card-span'>Python</span>                        
                        </p>
                    </div>
                </a>
            </div>

            <div className='card'>
                <a href="" className='card-a'>
                    <img src={img} alt="image" className='card-img'/>
                    <div className='card-info'>
                        <h3 className='card-h3'>
                            Terminal
                        </h3>
                        <p className='card-p'>
                            <span className='card-span'>JavaScript</span>
                            <span className='card-span'>CSS</span>
                            <span className='card-span'>Python</span>                        
                        </p>
                    </div>
                </a>
            </div>

        </>
    )
}

export default Card