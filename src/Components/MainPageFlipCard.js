
import "./MainPageFlipCard.scss"
import KaguyaSamaLoveIsWar from "../assets/7890224.3.jpg"
import DeamonSlayer from "../assets/imagesForFlipCards/08.jpg"
import AttackOnTtitan from "../assets/imagesForFlipCards/Plakat-Anime-Manga-Attack-on-Titan-aot_003-A2.webp"
import ShieldHero from "../assets/imagesForFlipCards/wiad_15_logo.jpg"
import MushokuTensei from "../assets/imagesForFlipCards/plakat.jpg"
import MushokuTensei2 from "../assets/imagesForFlipCards/mushoku-tensei-jobless-reincarnation-light-novel-vol-2-b-iext67140989.jpg"
import AttackOnTitan2 from "../assets/imagesForFlipCards/wiad_33_logo.jpg"
import DeamonSlayer2 from "../assets/imagesForFlipCards/image-w1280.webp"
import KaguyaSamaLoveIsWar2 from "../assets/imagesForFlipCards/Kaguya-sama-Love-Is-War-Vol-19.webp"
import ShieldHero2 from "../assets/imagesForFlipCards/74dc98daf4362012ff758c7f4a13b2381649904825_main.jpg"
const MainPageFlipCard =()=>{
    return(
        <div className="scene">
        <div className="card">
          <div className="card__face card__face--front">
            <img src={KaguyaSamaLoveIsWar} />
          </div>
          <div className="card__face card__face--back">
            <img src={KaguyaSamaLoveIsWar2} className="imagePosition"/>
            <div className="position"><p className="position gradeFont"><span className="spanUp">8</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={DeamonSlayer} />
          </div>
          <div className="card__face card__face--back">
            <img src={DeamonSlayer2} className="imagePosition" />
            <div className="position"><p className="position gradeFont"><span className="spanUp">9</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>

        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={AttackOnTtitan} />
          </div>
          <div className="card__face card__face--back">
            <img src={AttackOnTitan2} className="imagePosition"/>
            <div className="position"><p className="position gradeFont"><span className="spanUp">9</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={ShieldHero} />
          </div>
          <div className="card__face card__face--back">
            <img src={ShieldHero2} className="imagePosition" />
            <div className="position"><p className="position gradeFont"><span className="spanUp">8</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={MushokuTensei} />
          </div>
          <div className="card__face card__face--back">
            <img src={MushokuTensei2} className="imagePosition" />
            <div className="position"><p className="position gradeFont"><span className="spanUp">10</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={MushokuTensei} />
          </div>
          <div className="card__face card__face--back">
            <img src={MushokuTensei2} className="imagePosition" />
            <div className="position"><p className="position gradeFont"><span className="spanUp">10</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={MushokuTensei} />
          </div>
          <div className="card__face card__face--back">
            <img src={MushokuTensei2} className="imagePosition" />
            <div className="position"><p className="position gradeFont"><span className="spanUp">10</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
        <div className="card">
          <div className="card__face card__face--front">
            <img src={MushokuTensei} />
          </div>
          <div className="card__face card__face--back">
            <img src={MushokuTensei2} className="imagePosition" />
            <div className="position"><p className="position gradeFont"><span className="spanUp">10</span><span>/</span><span className="spanDown">10</span></p></div>
          </div>
        </div>
    
        
        
        
      </div>
      
    )
}

export default MainPageFlipCard