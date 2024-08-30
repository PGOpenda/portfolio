import '../styles/Projects.css'
import ProjectCard from './ProjectCard'
import data from '../data/data.json'

function Projects() {
    return (
        <div className="project-section" id='projects'>
            <h2>
                <span>02. </span> Projects 
                <hr />
            </h2>

            <div className="project-grid">
                {data.map(project =>(
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        technologies={project.technologies}
                    />              
                ))}
            </div>
        </div>
    )
}

export default Projects