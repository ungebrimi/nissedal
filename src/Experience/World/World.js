import Menu from '../DOM/Menu.js'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import ImageSphere from './ImageSphere'

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
    }

    update()
    {
    }
}