import './Projects.css'
import Card from './Card'
import data from './data.json'

function Projects() {

    const cards = data.map( card => {
        return (
            <Card 
                key={card.id}
                {...card}
            />
        )
    } )

    return (
        <>
            <div className='projects'>
                <h1 className='projects-h1'>
                    Projects Showcase
                </h1>

                <div className='card-div'>
                    {cards}
                </div>
            </div>
        </>
    )
}

export default Projects