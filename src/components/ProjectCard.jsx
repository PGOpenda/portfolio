import '../styles/Projects.css'
import folder from '/assets/folder.svg'
import github from '/assets/github.svg'

function Project() {
    return (
        <div className="project-card">
            <div className="imgs">
                <img src={folder} alt="folder" />
                <a href="">
                    <img src={github} alt="" />
                </a>
            </div>
            <div className="info">
                <h2>
                    Project No.1 with some description
                </h2>
                <p>
                    Here is also some accompaning text that will also go wiht it
                </p>
            </div>  
            <div className="tech">
                <p>
                Next js NN    
                </p>    
            </div>        
        </div>
        
    )
}

export default Project