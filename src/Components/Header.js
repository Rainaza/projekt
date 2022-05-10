
import photo from "../assets/shinobu-scaled.webp"
import "./Header.css"
import MainPageContent from "./MainPageContent"

const Header = ()=>{

 
   

    return(
        <div  >
            <div style={{backgroundImage: `url(${photo})`}} className="imageStyle">
               <div className="imageDivStyle">
                <div className="fullSize">
                    <div className="fullSize menu fontWeight">
                        <ul >
                            <li>Main page</li>
                            <li>News</li>
                            <li>Your anime list</li>
                            <li>Top titles</li>
                            <li>Recent top titles</li>
                            <li>Register</li>
                            <li>Login</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
                <div>
                <MainPageContent/>
               
                </div>
          
               </div>
            </div>
        </div>
    )
}
export default Header;