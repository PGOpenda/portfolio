import '../styles/About.css'
import svelte from '/assets/svelte.svg'
import git from '/assets/git.svg'
import javascript from '/assets/javascript.svg'
import mongodb from '/assets/mongodb.svg'
import nodejs from '/assets/nodejs.svg'
import reactjs from '/assets/reactjs.svg'
import typescript from '/assets/typescript.svg'
import wordpress from '/assets/wordpress.svg'
import mysql from '/assets/mysql.svg'

function About(){
    return (
        <div className="about" id='about'>
            <h2><span>01. </span> About Me </h2> <hr />

            <p>
                Hello! I'm PG, a versatile software developer with a passion for creating dynamic and user-friendly digital
                experiences. With expertise spanning both front-end and back-end development, I enjoy the challenge of building 
                cohesive, responsive applications that not only look great but perform seamlessly. 
                <br /> <br />
                My journey in tech has led me to explore various domains, including blockchain, where I love experimenting with decentralized technologies. Beyond 
                the code, I'm driven by a curiosity to learn, innovate, and bring fresh ideas to life. Whether it's collaborating 
                on a project or solving complex problems, I'm always eager to push the boundaries of what's possible in the digital 
                world. <br /> <br />
                Here are a few technologies I have worked with: <br /> <br />
            </p>

            <ul>
                    <li><img className = "svg-img" src={svelte} alt="" /></li>
                    <li><img className = "svg-img" src={git} alt="" /></li>
                    <li><img className = "svg-img" src={javascript} alt="" /></li>
                    <li><img className = "svg-img" src={mongodb} alt="" /></li>
                    <li><img className = "svg-img" src={nodejs} alt="" /></li>
                    <li><img className = "svg-img" src={reactjs} alt="" /></li>
                    <li><img className = "svg-img" src={typescript} alt="" /></li>
                    <li><img className = "svg-img" src={wordpress} alt="" /></li>
                    <li><img className = "svg-img" src={mysql} alt="" /></li>
            </ul>
        </div>
    )
}

export default About