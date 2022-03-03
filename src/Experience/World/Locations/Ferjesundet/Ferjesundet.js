import Experience from "../../../Experience";
import FerjesundetCafe from "./FerjesundetCafe";
import Ferja from "./Ferja";
import VikCamping from "./VikCamping";
import VikingGrav from "./VikingGrav";
import Vikodden from "./Vikodden"


export default class Ferjesundet 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ferja = new Ferja()
        this.ferjesundetCafe = new FerjesundetCafe()
        this.vikCamping = new VikCamping()
        this.vikingGrav = new VikingGrav()
        this.vikodden = new Vikodden()
        this.setFerjesundetPoints()
    }

    setFerjesundetPoints()
    {
        // DOM
        const ferjesundetBtn = document.querySelector('#ferjesundet')
        const kirkaBtn = document.querySelector('#kirka')
        const nisserBtn = document.querySelector('#nisser')

        const ferjesundetLocations = document.querySelector('.locations__ferjesundet')
        const nisserLocations = document.querySelector('.locations__nisser')
        const kirkaLocations = document.querySelector('.locations__kirka')

        this.ferjesundetPoints = 
        [
            this.ferjesundetCafe.ferjesundetCafePoint,
            this.ferja.ferjaPoint,
            this.vikCamping.vikCampingPoint,
            this.vikingGrav.vikingGravPoint,
            this.vikodden.vikoddenPoint,
        ]
        
        ferjesundetBtn.addEventListener('click', () =>
        {
            for(const ferjesundetPoint of this.ferjesundetPoints)
            {
                this.scene.add(ferjesundetPoint)
                ferjesundetLocations.classList.remove("hidden")
            }
        })

        nisserBtn.addEventListener('click', () =>
        {
            for(const ferjesundetPoint of this.ferjesundetPoints)
            {
                this.scene.remove(ferjesundetPoint)
                ferjesundetLocations.classList.add("hidden")
            }
        })

        kirkaBtn.addEventListener('click', () =>
        {
            for(const ferjesundetPoint of this.ferjesundetPoints)
            {
                this.scene.remove(ferjesundetPoint)
                ferjesundetLocations.classList.add("hidden")
            }
        })
    }
}