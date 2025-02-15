import '../App.css'
import photo from '../assets/sakthi.png'

function Home()
{
    return(
        <>
        <div className='home__container' id="home">
            <div>     
                   <h1 className="home__name">Hey I'M SAKTHIVEL MURUGAN V</h1>
                   <h4>Tirunelveli <a href="mailto:sakthivel1610200@gmail.com" style={{color:"orange",textDecoration:"none"}}>sakthivel1610200@gmail.com</a></h4>
                   <p style={{lineHeight:"1.6",paddingTop:"20px",textAlign:"justify",paddingRight:"5%"}}>Motivated and detail-oriented Full Stack Developer fresher with
                    expertise in React.js, JavaScript, Node.js, Express.js, and
                    MongoDB. Skilled in developing responsive web applications
                    and efficient back-end systems. Eager to apply technical
                    knowledge and problem-solving skills to contribute to
                    innovative software solutions</p>
                    <button style={{color:"white",backgroundColor:"#4c5ea3",fontSize:"15px",margin:"10px 0",
                        padding:"10px 30px",borderRadius:"10px",border:"none",cursor:"pointer"}}>
                        Contact Me</button>
            </div>

        
        <div className='img__container'>
            <img src={photo} alt='img'/>
        </div>
        </div>
        </>
    )
}
export default Home