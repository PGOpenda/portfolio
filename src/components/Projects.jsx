import '../styles/Projects.css'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <div className="project-section" id='projects'>
            <h2>
                <span>02. </span> Projects 
                <hr />
            </h2>

            <div className="project-grid">
                <ProjectCard />       
                <ProjectCard />       
                <ProjectCard />       
                <ProjectCard />       
            </div>
        </div>
    )
}

export default Projects