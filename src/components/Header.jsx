import '../styles/Header.css'
import Logo from '/assets/logo.png'

function Header() {

    return (
        <>
            <div className='header'>
                <a href=''>
                    <img className='logo' src={Logo}  />
                </a>    
                <h1 className='name'>PG OPENDA</h1>
                <div className='title-div'>
                    <h3 className='title'>Software Engineer. </h3> 
                </div>
            </div>
        </>
    )
}

export default Header