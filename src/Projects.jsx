import './Projects.css'
import Card from './Card'
import data from './data.json'

function Projects() {

    const cards = data.map( card => {
        <Card 
            key={card.id}
            {...data}
        />
    } )

    return (
        <>
            <div className='projects'>
                <h1 className='projects-h1'>
                    Projects Showcase
                </h1>

                <div className='card-div'>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Projects