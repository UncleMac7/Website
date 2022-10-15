import "./topbar.scss"
import {Person,Mail,Menu} from '@mui/icons-material'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}> 

      <div className="wrapper"> 

        <div className ="left" >
              <a href ='./intro'className="logo">Genius</a>
              <div className="itemContainer">
                <Person className="icon"/>
                <span>+27 79 668 6287</span>

              </div>
              <div className="itemContainer">
                <Mail className="icon"/>
                <span>Mduduzimachete@gmail.com</span>

              </div>
              
        </div>


        <div className="right">
         
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>

          <Menu className="span"/>
          <Menu className="span"/>
          <Menu className="span"/>
        
          </div>
          
        </div>

        </div>   
      </div>

  )
}
