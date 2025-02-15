import linkedin from '../assets/linkedin.png'
import git from '../assets/github.png'

import mail from '../assets/gmail.png'
function Contact()
{
    const contact=[
        {
            social:"Email Id",
            img:mail,
            url:`mailto:sakthivel1610200@gmail.com`,
            name:"Sakthivel1610200@gmail.com"
        },
        {
            social:"LinkedIn",
            img:linkedin,
            url:"https://www.linkedin.com/in/Sakthivel-Murugan-V/",
            name:"Sakthive Murugan v"
        },
        {
            social:"Github",
            img:git,
            url:`https://github.com/sakthivel1610`,
            name:"Git Hub Link"
        }
    ]
    return(
        <>
        <div className="contact__container" id="contact">
        <h1>Contact</h1>
        
        {
            contact.map(function(items)
        {
            return(
                <>
                <div style={{display:"flex",justifySelf:"center",marginTop:"10px",alignItems:"center",gap:"10px"}}>
              <img src={items.img} alt='' style={{width:"30px",marginTop:"1%"}}/>
              <h4>{items.social} : <a href={items.url} target='_blank' rel="noreferrer" style={{color:"orange"}}>
              {items.name} </a></h4></div>
                </>
            )
        })
        }
        
              </div>
              
        </>
    )
}
export default Contact