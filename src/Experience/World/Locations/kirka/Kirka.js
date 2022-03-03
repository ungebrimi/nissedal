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
        const nisserLocations = document.querySelector('.locations__nisser')
        const kirkaLocations = document.querySelector('.locations__kirka')
        const kirkaBtn = document.querySelector('#kirka')
        const nisserBtn = document.querySelector('#nisser')

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
                nisserLocations.classList.add("hidden")
                kirkaLocations.classList.remove("hidden")         
            }
        })

        nisserBtn.addEventListener('click', () => 
        {
            for(const points of this.kirkePoints)
            {
              this.scene.remove(points)
              nisserLocations.classList.remove("hidden")
            }
        })
    }
}