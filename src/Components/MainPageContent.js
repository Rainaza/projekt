

import photo1 from "../assets/896999-artwork-ArtStation-4-k-landscape-purple-background.jpg"
import photo from "../assets/7890224.3.jpg"
import "./MainPageContent.css"
import MainPageFlipCard from "./MainPageFlipCard"
const MainPageContent =()=>{

    return(
        <div > 
            <div style={{backgroundImage: `url(${photo1})`}}  className="ImageSize" >
                <div className="padding">
                <h1 className="header-85">Best titles from Spring!</h1>
                <div  className="columnBarDisplay">
                    <div  className="newTitlesPadding"><button className="paddingParagraf button-85">Spring</button></div>
                    <div  className="newTitlesPadding"><button className="paddingParagraf button-85">Winter</button></div>
                    <div  className="newTitlesPadding"><button className="paddingParagraf button-85">Fall</button></div>
                    <div  className="newTitlesPadding"><button className="paddingParagraf button-85 ">Summer</button></div>
                    </div>
                </div>
                <div className="imageDisplayRow">
                   
                 
                       <MainPageFlipCard/>
                </div>
            </div>

        </div>
    )
}
export default MainPageContent