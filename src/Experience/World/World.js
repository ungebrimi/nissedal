import Menu from '../DOM/Menu.js'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import ImageSphere from './ImageSphere'
import Kirka from './Locations/kirka/Kirka.js'
import Locations from './Locations/Locations.js'
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
       // this.nisser = new Nisser()
        this.locations = new Locations()
       // this.pointsHandler()
    }

    update()
    {
    }

    /*
    pointsHandler()
    {
        // global
        const none = null
        const strandaBtn = document.querySelector('#stranda')
        const framnesBtn = document.querySelector('#framnes')
        const skeimoBtn = document.querySelector('#skeimo')
        const ferjesundetBtn = document.querySelector('#ferjesundet')
    }
    */
}