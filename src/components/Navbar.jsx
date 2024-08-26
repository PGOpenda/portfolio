import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <img src="" alt="The logo will go here" />
            
            <ul className='links'>
                <li><a href="" className='link'><span>01.</span> About</a></li>
                <li><a href="" className='link'><span>02.</span> Projects</a></li>
                <li><a href="" className='link'><span>03.</span> Contact</a></li>
                <li><a href="" className='link' id='resume'>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar