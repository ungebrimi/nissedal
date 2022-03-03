import Experience from "../../../Experience";
import Hegefjell from "./Hegefjell"
import Rindefjell from './Rindefjell'

export default class Ferjesundet 
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.hegefjell = new Hegefjell()
        this.rindefjell = new Rindefjell()
        this.setSkeimoPoints()
    }

    setSkeimoPoints()
    {
        // DOM
        const skeimoBtn = document.querySelector('#skeimo')
        const ferjesundetBtn = document.querySelector('#ferjesundet')
        const kirkaBtn = document.querySelector('#kirka')
        const nisserBtn = document.querySelector('#nisser')

        const skeimoLocations = document.querySelector('.locations__skeimo')

        this.skeimoPoints = 
        [
            this.hegefjell.hegefjellPoint,
            this.rindefjell.rindefjellPoint
        ]
        
        skeimoBtn.addEventListener('click', () =>
        {
            for(const skeimoPoint of this.skeimoPoints)
            {
                this.scene.add(skeimoPoint)
                skeimoLocations.classList.remove("hidden")
            }
        })

        nisserBtn.addEventListener('click', () =>
        {
            for(const skeimoPoint of this.skeimoPoints)
            {
                this.scene.remove(skeimoPoint)
                skeimoLocations.classList.add("hidden")
            }
        })

        kirkaBtn.addEventListener('click', () =>
        {
            for(const skeimoPoint of this.skeimoPoints)
            {
                this.scene.remove(skeimoPoint)
                skeimoLocations.classList.add("hidden")
            }
        })

        ferjesundetBtn.addEventListener('click', () =>
        {
            for(const skeimoPoint of this.skeimoPoints)
            {
                this.scene.remove(skeimoPoint)
                skeimoLocations.classList.add("hidden")
            }
        })
    }
}