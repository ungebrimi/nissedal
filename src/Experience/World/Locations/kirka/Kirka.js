import Experience from "../../../Experience"
import ArnfinnBrygga from "./ArnfinnBrygga"
import Kirke from "./Kirke"
import Gjestiveri from './Gjestiveri'

export default class Kirka
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.kirke = new Kirke()
        this.arnfinnBrygga = new ArnfinnBrygga()
        this.gjestiveri = new Gjestiveri()
        this.setKirkaPoints()
    }

    setKirkaPoints()
    {
        // DOM
        const kirkaBtn = document.querySelector('#kirka')
        const nisserBtn = document.querySelector('#nisser')
        const ferjesundetBtn = document.querySelector('#ferjesundet')
        const skeimoBtn = document.querySelector('#skeimo')

        const kirkaLocations = document.querySelector('.locations__kirka')


        this.kirkePoints = 
        [
            this.kirke.kirkePoint,
            this.arnfinnBrygga.arnfinnBryggaPoint,
            this.gjestiveri.gjestiveriPoint
        ]       

        kirkaBtn.addEventListener('click', () => 
        {
            for(const kirkePoint of this.kirkePoints)
            {
                this.scene.add(kirkePoint)
                kirkaLocations.classList.remove("hidden")          
            }
        })

        nisserBtn.addEventListener('click', () => 
        {
            for(const kirkepoint of this.kirkePoints)
            {
              this.scene.remove(kirkepoint)
              kirkaLocations.classList.add("hidden")              
            }
        })

        ferjesundetBtn.addEventListener('click', () =>
        {
            for(const kirkepoint of this.kirkePoints)
            {
                this.scene.remove(kirkepoint)
                kirkaLocations.classList.add("hidden")
            }
        })


        skeimoBtn.addEventListener('click', () =>
        {
            for(const kirkepoint of this.kirkePoints)
            {
                this.scene.remove(kirkepoint)
                kirkaLocations.classList.add("hidden")
            }
        })
    }
}