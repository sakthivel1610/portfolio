import web from '../assets/web.jpg'

function About() {
    return (
        <>
            <div style={{margin:"9%",backgroundColor:"#061a38",padding:"3%",borderRadius:"10px"}} id="about">
                <h1>About</h1>
                <div className="about__container">
                    <div>
                    <img src={web} alt="img" style={{width:"250px",borderRadius:"10%"}}/>
                    </div>
                    <div className="about__roles">
                        <div className="about__developer">
                            <h2>Mern Stack Developer</h2>
                            <p>Passionate MERN stack developer skilled in MongoDB, Express.js, React, and Node.js,
                                dedicated to building dynamic and scalable web applications.</p>
                        </div>
                        <div className="about__developer" >
                            <h2>Frontend Developer</h2>
                            <p>Enthusiastic front-end developer with a strong foundation
                                in HTML, CSS, JavaScript, and React.js,
                                eager to build dynamic and user-friendly web experiences.</p>
                        </div>
                        <div className="about__developer">
                            <h2>Backend Developer</h2>
                            <p>Enthusiastic backend developer with a strong foundation in
                                Node.js, MongoDB, server-side programming, and API development,
                                eager to build scalable and efficient applications.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About