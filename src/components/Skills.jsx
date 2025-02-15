import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/science.png'
import node from '../assets/nodejs.png'
import api from '../assets/apiv.png'
import mongodb from '../assets/mongo.webp'
import js from '../assets/javascript.png'
import php from '../assets/folder.png'
import developer from '../assets/developer.png'

function Skills()
{
    const skill=[
        {
            img:html,
            name:"HTML"
        },
        {
            img:css,
            name:"CSS"
        },
        {
            img:react,
            name:"REACT JS"
        },
        {
            img:node,
            name:"NODE JS"
        },
        {
            img:api,
            name:"API"
        },
        {
            img:mongodb,
            name:"MongoDB"
        },
        {
            img:js,
            name:"JAVASCRIPT"
        },
       

        {
            img:php,
            name:"PHP"
        },


    ]
    return(
        <>
        <div className='skill' id="skills">
        <h1>Skills</h1>
        <div className='skill__developer'>
        <div className='skill__container'>
        {
            skill.map(function(items)
        {
            return (
                <>
                <div className='skill__img__container'>
                    <div style={{borderRadius:"50%"}} className='skill__img__back'>
                <img src={items.img} alt='img' className='skills__img'/>
                </div>
                <p style={{marginTop:"7%"}}>{items.name}</p>
                </div>
                </>
            )
        })
        }
        </div>
        <div>
            <img src={developer} alt='' style={{width:"250px"}}></img>
            <h3 style={{marginLeft:"30px"}}>Full Stack Developer</h3>
        </div>
        </div>
        </div>
        </>
    )
}
export default Skills