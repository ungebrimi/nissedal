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
    }

    setNisserPoints()
    {
        // DOM
        const kirkaBtn = document.querySelector('#kirka')
        const nisserBtn = document.querySelector('#nisser')
        const ferjesundetBtn = document.querySelector('#ferjesundet')
        const skeimoBtn = document.querySelector('#skeimo')

        const nisserLocations = document.querySelector('.locations__nisser')
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
            for(const nisserPoint of this.nisserPoints)
            {
                this.scene.add(nisserPoint)
                nisserLocations.classList.remove("hidden")
            }
        })

        kirkaBtn.addEventListener('click', () => 
        {
            for(const nisserPoint of this.nisserPoints)
            {
                this.scene.remove(nisserPoint)
                nisserLocations.classList.add("hidden")                   
            }
        })

        ferjesundetBtn.addEventListener('click', () =>
        {
            for(const nisserPoint of this.nisserPoints)
            {
                this.scene.remove(nisserPoint)
                nisserLocations.classList.add("hidden")
            }
        })

        skeimoBtn.addEventListener('click', () =>
        {
            for(const nisserPoint of this.nisserPoints)
            {
                this.scene.remove(nisserPoint)
                nisserLocations.classList.add("hidden")
            }
        })
    }
}