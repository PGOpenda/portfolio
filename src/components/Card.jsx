import '../styles/Card.css'

function Card(props) {
    
    return (
        
        <a href={props.link} className='card-a' target='_blank'>
            <img src={`/assets/${props.image}`} alt={props.img_alt} className='card-img'/>
            <div className='card-info'>
                <h3 className='card-h3'>
                    {props.title}
                </h3>
                <p className='card-p'>
                    
                    <span className='card-span'>{props.description[0]}</span>
                    <span className='card-span'>{props.description[1]}</span>
                    <span className='card-span'>{props.description[2]}</span>                        
                </p>
            </div>
        </a>

    )
}

export default Card