import '../styles/Projects.css'
import Project from './ProjectCard'

function Projects() {
    return (
        <div className="projects" id='projects'>
            <h2>
                <span>02. </span> Projects 
                <hr />
            </h2>

            <div className="project-grid">
                <Project />    
                <Project />    
                <Project />    
                <Project />    
                <Project />    
                <Project />    
            </div>
        </div>
    )
}

export default Projects