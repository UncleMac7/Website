import { useState } from 'react';
import './works.scss'

export default function Works() {
    const [currentSlider,setCurrentSlider] = useState(0);
    const data = [
    {
      id: "1",
      icon: "./assets/smartphone.png",
      title: "Web design",
      desc: "Designed various kinds of websites using different tools like figma.",
      img:
      " https://thumbs.dreamstime.com/z/web-design-development-flat-line-icons-set-website-user-interface-page-coding-programming-mobile-apps-branding-data-41383852.jpg",

    },

    {
      id: "2",
      icon: "./assets/Globe.png",
      title: "Mobile Application",
      desc: " See my work on GitHub.",
      img:
      "https://thumbs.dreamstime.com/z/website-construction-line-style-illustration-thin-flat-design-under-web-page-building-process-site-form-layout-menu-buttons-56067268.jpg",

    },

    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc: "Design custom brands for users to get a unique a look.",
      img:
      "https://thumbs.dreamstime.com/z/marketing-students-create-corporate-identity-personal-branding-course-strategic-self-marketing-education-personal-branding-online-151374258.jpg",

    },

    ];

    const handleClick = (way) => {
      way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1 : 2)
      : setCurrentSlider(currentSlider < data.length - 1 ? currentSlider + 1 :0);
    };


  return (
    <div className='works' id="works">
          <div className="slider" style={{transform: `translateX(-${currentSlider * 100}vw)`}}>
            {data.map((d) => (
              <div className="container">
              <div className="item">
  
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>
                      {d.desc}
                    </p>
                    <a href = "https://github.com/UncleMac7">
                    <span >Projects</span>
                    </a>
                      
                  </div>
  
                </div>
                <div className="right">
                    <
                      img src={d.img} alt=""
                    />
  
                </div>
  
              </div>
             
            </div>))},
                      
         </div>
         <img src="assets/right-arrow.png" className='arrow left' alt=""  onClick={()=>handleClick("left")}/>
         <img src="assets/right-arrow.png" className='arrow right' alt="" onClick={()=>handleClick("right")}/>
    
     </div>
  );
}
