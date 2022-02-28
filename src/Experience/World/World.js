import Menu from '../DOM/Menu.js'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import ImageSphere from './ImageSphere'
import Nisser from './Locations/Nisser/Nisser.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        // Setup
        this.imageSphere = new ImageSphere()
        this.environment = new Environment()
        this.menu = new Menu()
        // locations
        this.nisser = new Nisser()
        this.pointsHandler()
    }

    update()
    {
    }

    pointsHandler()
    {
        // global
        const none = null
        const kirkaBtn = document.querySelector('#kirka')
        const strandaBtn = document.querySelector('#stranda')
        const framnesBtn = document.querySelector('#framnes')
        const skeimoBtn = document.querySelector('#skeimo')
        const ferjesundetBtn = document.querySelector('#ferjesundet')
        const nisserBtn = document.querySelector('#nisser')

        // points arrays
        const nisserPoints = 
        [
            this.nisser.aktivitetsplass.aktivitetsPoint,
            this.nisser.brygga.bryggaPoint, 
            this.nisser.kyrjeneset.kyrkjenesetPoint, 
            this.nisser.torgrimsfjell.torgrimsfjellPoint,
            this.nisser.lauvdalsfjell.lauvdalsFjellPoint,
        ]
        
        for(const points of nisserPoints)
        {
          this.scene.add(points)
        }

        // event listeners
        nisserBtn.addEventListener('click', () =>
        {
            for(const nisserPoint of nisserPoints)
            {
              this.scene.add(nisserPoint)
            }
        })

        kirkaBtn.addEventListener('click', () => 
        {
            for(const nisserPoint of nisserPoints)
            {
                this.scene.remove(nisserPoint)
            }
        })
        
    }
}