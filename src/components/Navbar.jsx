import '../styles/Navbar.css'

function Navbar() {

    const handleClick = (event, sectionId) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className='navbar'>
            <img src="" alt="The logo will go here" />
            
            <ul className='links'>
                <li><a href="#about" className='link' onClick={(e) => handleClick(e, 'about')}><span>01.</span> About</a></li>
                <li><a href="#projects" className='link' onClick={(e) => handleClick(e, 'projects')}><span>02.</span> Projects</a></li>
                <li><a href="#contact" className='link' onClick={(e) => handleClick(e, 'contact')}><span>03.</span> Contact</a></li>
                <li><a href="" className='link' id='resume'>Resume</a></li>
            </ul>
        </nav>
    )
}


export default Navbar