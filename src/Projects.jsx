import './Projects.css'
import Card from './Card'

function Projects() {
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