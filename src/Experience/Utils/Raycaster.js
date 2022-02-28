import * as THREE from 'three'
import Experience from '../Experience'
import Nisser from '../World/Locations/Nisser/Nisser'

export default class Raycaster
{
    constructor()
    {
        this.experience = new Experience()
        this.time = this.experience.time
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.nisser = new Nisser()
        this.aktivitetsplass = this.nisser.aktivitetsplass
        this.brygga = this.nisser.brygga
        this.kyrkjeneset = this.nisser.kyrjeneset
        this.torgrimsfjell = this.nisser.torgrimsfjell
        this.lauvdalsfjell = this.nisser.lauvdalsfjell

        // Time tick event
        this.time.on('tick', () =>
        {
            this.setRayCaster()
        })

        this.mouse = new THREE.Vector2()
    
        this.mouse.x = 0
        this.mouse.y = 0
    
        window.addEventListener('mousemove', (event) =>
        {
            this.mouse.x = event.clientX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1
        })

        this.raycaster = new THREE.Raycaster()
        this.currentIntersect = null
        
    }
    
    setRayCaster()
    {
        this.objectsToIntersect = 
        [
            this.aktivitetsplass.aktivitetsPoint,
            this.brygga.bryggaPoint, 
            this.kyrkjeneset.kyrkjenesetPoint, 
            this.torgrimsfjell.torgrimsfjellPoint,
            this.lauvdalsfjell.lauvdalsFjellPoint,
            this.brygga.testBox
        ]
        this.raycaster.setFromCamera(this.mouse, this.camera.instance)
        const intersects = this.raycaster.intersectObjects(this.objectsToIntersect)
        
        
        for(const intersect of intersects)
        {
            intersect.object.material.color.set('#0000ff')
        }
        for(const object of this.objectsToIntersect)
        {
            if(!intersects.find(intersect => intersect.object === object))
            {
                object.material.color.set('#ff0000')
            }
        }
    }
}