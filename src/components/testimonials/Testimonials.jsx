import './testimonials.scss'

export default function Testimonials() {

const data =[

{
  id:"1",
  name: "Titiana Harold",
  title: "Content Creator",
  img:
  "https://images.unsplash.com/photo-1524253860834-0e02422248bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  icon:"assets/youtube.png",
  desc: "Lorem ipsum dj isjnx ikanxklnls iste e oncolmola kjknknlst magni!",

},
{
  id:"2",
  name: "Kyle Kretschmer",
  title: "Software Developer",
  img:
  "assets/IMG_5978.jpg",
  icon:"assets/Linkedin.png",
  desc: "Best Mate",
  featured: true,

},
{
  id:"2",
  name: "Nicole Botha",
  title: "Photographer",
  img:
  "https://images.unsplash.com/photo-1458681708599-e0be9ce54707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  icon:"assets/youtube.png",
  desc: "Lorem ipsum dj isjnx ikanxklnls iste e oncolmola kjknknlst magni!",

},



];

  return (
    <div className='testimonials' id="testimonials"> 
    <h1>Testimonials</h1>
      <div className="container">
        {data.map(d =>(
            <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src ="assets/curved-arrow.png" className='left' alt=""/>
              <img className="user "src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
  
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name} </h3>
              <h4>{d.title}</h4>
            </div>
  
          </div>
           ))}
        </div>

       
      
    </div>
  )
}
