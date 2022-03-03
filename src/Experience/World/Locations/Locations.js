import Experience from "../../Experience"
import Nisser from "./Nisser/Nisser"
import Kirka from './kirka/Kirka'

export default class Locations
{
    constructor()
    {
        this.experience = new Experience()
        this.kirka = new Kirka()
        this.nisser = new Nisser()
        this.kirkaArray()
        this.nisserArray()
        this.exitInfo()

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

    kirkaArray()
    {
        this.kirkaArray = []
        for(const kirkePoint of this.kirka.kirkePoints)
        [
            this.kirkaArray.push(kirkePoint)
        ]
    }

    nisserArray()
    {
        this.nisserArray = []
        for(const nisserPoint of this.nisser.nisserPoints)
        {
            this.nisserArray.push(nisserPoint)
        }
    }
}