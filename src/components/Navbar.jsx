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
                <li><a href="https://drive.google.com/file/d/196njNz5eWYg_PQs8Nuy0nUUm71Vd7Lvw/view?usp=sharing" className='link' id='resume' target='_blank'>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar