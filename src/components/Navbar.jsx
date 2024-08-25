import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <img src="" alt="The logo will go here" />
            
            <ul>
                <li><a href=""><span>01.</span> About</a></li>
                <li><a href=""><span>02.</span> Projects</a></li>
                <li><a href=""><span>03.</span> Contact</a></li>
                <li><a href="" id='resume'>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar