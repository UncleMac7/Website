import { useEffect, useState } from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import './portfolio.scss';
import{ featuredPortfolio,
  MobilePortfolio,
  WebPortfolio,
  DesignPortfolio,
  ContentPortfolio} from "../Data";



export default function Portfolio() {

  const [selected,setSelected] = useState("featured");
  const [Data,setData] = useState([]);

  const list = [
    {
      id: "featured",
      title: "Featured",

    },
    {
      id: "web",
      title: "Web App",

    },

    {
      id: "mobile",
      title: "Mobile App",

    },
    {
      id: "design",
      title: "Design",

    },

    {
      id: "content",
      title: "Content"

    },

  ];

  useEffect(()=>{
      switch(selected)
      {
        case "featured":
          setData(featuredPortfolio);
          break;
          case "web":
          setData(WebPortfolio);
          break;
          case "mobile":
          setData(MobilePortfolio);
          break;
          case "design":
          setData(DesignPortfolio);
          break;
          case "content":
          setData(ContentPortfolio);
          break;
          default:
            setData(featuredPortfolio)
      }

  },[selected]);

  return (
    <div className='portfolio' id='portfolio'>
    
    <h1>Portfolio</h1>
    
      <ul>
        {
          list.map((item) => (
            <PortfolioList title={item.title} active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              />
          ))}
      </ul>

      <div className="container">
        {Data.map((d) => (
        <div className='item'>
          <img src={d.img} alt=''/>
          {/* <h3>{d.title}</h3> */}
          <a href={d.link} target="_blank" rel="noreferrer">{d.title}</a>
            
        </div>
        ))}
      </div>
    
    </div>
  )
}




