import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <h1 className='contact-h1'>
                Got a project to discuss or just feeling lonely? Don't be shy, reach out!
            </h1>
            <div className='btn-div'>
                <a href="mailto:piusopenda@gmail.com" target='_blank'>
                    <i class="bi bi-envelope"> Email Me</i>
                </a>
                <a href="https://www.linkedin.com/in/piusopenda/" target='_blank'>
                    <i class="bi bi-linkedin"> LinkedIn</i>
                </a>
                <a href="https://github.com/PGOpenda" target='_blank'>
                    <i class="bi bi-github"> Github</i>
                </a>
                <a href="https://drive.google.com/file/d/1TmEx8DDzZIsnYVtv8F-uEj4mVsSLa4nX/view?usp=sharing" target='_blank'>
                    <i class="bi bi-file-earmark-fill"> My Resume</i>
                </a>
            </div>
        </div>
    )
}

export default Contact