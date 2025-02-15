import receipe from '../assets/receipe.jpg'
import bulkmail from '../assets/bulkmail.jpg'
import trip from '../assets/tourism.jpg'

function Project()
{
    const projectname=[
        {
            img:receipe,
            name:"Receipe App",
            desc:`Developed a full-stack Recipe App using React.js ,HTML ,JavaScript, API, and CSS. 
                Implemented search and filter features to help users find recipes based on cuisine.
                Integrated YouTube video tutorials for step-by-stepcooking guidance. 
                Designed a responsive UI for seamles suser experience across devices.
                Utilized RESTful APIs to fetch and manage recipe data efficiently.`,
            URL:`https://recipe-app-three-eta.vercel.app/`,
            source:`https://github.com/sakthivel1610/recipe-app`
        },
        {
            img:bulkmail,
            name:"Bulk Mail",
            desc:`Developed a bulk mail web application using React.js, Node.js, Express.js, 
            and MongoDB for email management and sending functionality. Designed a responsive UI with
             Tailwind CSS and implemented RESTful APIs for user authentication and email processing. 
            Ensured efficient email delivery with features like rate limiting and real-time tracking.`,
            URL:``,
            source:'https://github.com/sakthivel1610/Bulkmail'
        },
        {
            img:trip,
            name:"Trip Advisor-Clone",
            desc:`Developed a TripAdvisor Clone using HTML & Tailwind CSS, 
            featuring a responsive and modern UI for travel enthusiasts.
             Implemented destination listings, user reviews, search & filter options,
              and a structured rating system. 
            Designed an engaging interface with seamless navigation for a smooth user experience. .`,
            URL:` https://sakthivel1610.github.io/tripadvisor-clone/`,
            source:'https://github.com/sakthivel1610/tripadvisor-clone/'

        }
    ]
    return(
        <>
        <div id="project">
        <div className='project__container' >
        <h1>Projects</h1>
        
            {
                projectname.map(function(items)
            {
                return (
                    <>
                   <div className='project__details'>
                        <div>
                            <img src={items.img} alt="" style={{width:"300px",borderRadius:"10px"}}/>
                        </div>
                        <div style={{lineHeight:"1.6"}}>
                            <h1>{items.name}</h1>
                            <p>{items.desc}</p>
                            {items.URL && <a href={items.URL} target='_blank' rel="noreferrer" >
                                <button className='project__button'>Demo</button>
                            </a>}
                            {items.source && <a href={items.source} target='_blank' rel="noreferrer" >
                                <button className='project__button'>Source</button>
                            </a>}
                        </div>
                        </div>
                    </>
                )
            })
            }
            <h3 style={{textAlign:"center"}}>For More Projectes :
                <a href='https://github.com/sakthivel1610/' style={{color:"white"}}> GitHub Link</a></h3>
        </div>
        </div>
        </>
    )
}
export default Project