import Experience from "../../../Experience.js";
import Kyrjeneset from "./Kyrkjeneset.js";
import Brygga from './Brygga.js'
import AktivitetsPlass from "./AktivitetsPlass.js";
import Torgrimsfjell from "./Torgrimsfjell";
import LauvdalsFjell from "./LauvdalsFjell.js";

export default class Nisser
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.kyrjeneset = new Kyrjeneset()
        this.aktivitetsplass = new AktivitetsPlass()
        this.brygga = new Brygga()
        this.torgrimsfjell = new Torgrimsfjell()
        this.lauvdalsfjell = new LauvdalsFjell()
        this.setNisserPoints()
        this.exitInfo()
    }

    setNisserPoints()
    {
        // DOM
        const kirkaBtn = document.querySelector('#kirka')
        const nisserBtn = document.querySelector('#nisser')
        const nisserLocations = document.querySelector('.locations__nisser')
        const kirkaLocations = document.querySelector('.locations__kirka')
        // points arrays
        this.nisserPoints = 
        [
            this.aktivitetsplass.aktivitetsPoint,
            this.brygga.bryggaPoint, 
            this.kyrjeneset.kyrkjenesetPoint, 
            this.torgrimsfjell.torgrimsfjellPoint,
            this.lauvdalsfjell.lauvdalsFjellPoint,
        ]

        for(const points of this.nisserPoints)
        {
          this.scene.add(points)
        }
        // event listeners
        nisserBtn.addEventListener('click', () => 
        {
            for(const points of this.nisserPoints)
            {
                kirkaLocations.classList.add("hidden")
                this.scene.add(points)
            }
        })

        kirkaBtn.addEventListener('click', () => 
        {
            for(const points of this.nisserPoints)
            {
                nisserLocations.classList.add("hidden")
                this.scene.remove(points)
            }
        })
    }
    
    exitInfo()
    {

        const exitBtn = document.querySelectorAll('#info-exit')
        const informationBoxes = document.querySelectorAll('.information-box')
        
        for(const btn of exitBtn)
        {
            btn.addEventListener('click', () =>  
            {
                for(const informationBox of informationBoxes)
                {
                    informationBox.classList.add("hidden")
                }
            })
        }
    }
}