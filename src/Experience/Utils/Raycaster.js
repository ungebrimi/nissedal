import * as THREE from 'three'
import Experience from '../Experience'
import Nisser from '../World/Locations/Nisser/Nisser'
import Locations from '../World/Locations/Locations'

export default class Raycaster
{
    constructor()
    {
        this.experience = new Experience()
        this.renderer = this.experience.renderer
        this.time = this.experience.time
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.locations = new Locations()
        this.aktivitetsplass = this.locations.nisser.aktivitetsplass
        this.brygga = this.locations.nisser.brygga
        this.kyrkjeneset = this.locations.nisser.kyrjeneset
        this.torgrimsfjell = this.locations.nisser.torgrimsfjell
        this.lauvdalsfjell = this.locations.nisser.lauvdalsfjell
        this.arnfinnBrygga = this.locations.kirka.arnfinnBrygga
        this.gjestiveri = this.locations.kirka.gjestiveri
        this.kirke = this.locations.kirka.kirke
        
        // HTML INFORMATION BOXES
        // nisser
        const aktivitetsplass = document.querySelector('.locations__nisser-aktivitesplassen')
        const brygga = document.querySelector('.locations__nisser-brygga')
        const kyrkjeneset = document.querySelector('.locations__nisser-kyrkjeneset')
        const torgrimsfjell = document.querySelector('.locations__nisser-torgrimsfjell')
        const lauvdalsfjell = document.querySelector('.locations__nisser-lauvdalsfjell')
        // kirka
        const kirke = document.querySelector('.locations__kirka-kirke')
        const arnfinnBrygga = document.querySelector('.locations__kirka-arnfinnbrygga')
        const gjestiveriet = document.querySelector('.locations__kirka-gjestiveriet')

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
            this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
        })
        
        
        this.raycaster = new THREE.Raycaster()
        this.currentIntersect = null

       
        window.addEventListener('click', () =>
        {
            if(this.currentIntersect)
            {
                switch(this.currentIntersect.object)
                {
                case this.aktivitetsplass.aktivitetsPoint:
                    aktivitetsplass.classList.remove("hidden")
                    torgrimsfjell.classList.add("hidden")
                    brygga.classList.add("hidden")
                    kyrkjeneset.classList.add("hidden")
                    lauvdalsfjell.classList.add("hidden")
                    break
    
                case this.torgrimsfjell.torgrimsfjellPoint:
                    torgrimsfjell.classList.remove("hidden")
                    aktivitetsplass.classList.add("hidden")
                    brygga.classList.add("hidden")
                    kyrkjeneset.classList.add("hidden")
                    lauvdalsfjell.classList.add("hidden")
                    break
    
                case this.brygga.bryggaPoint:
                    brygga.classList.remove("hidden")
                    torgrimsfjell.classList.add("hidden")
                    aktivitetsplass.classList.add("hidden")
                    kyrkjeneset.classList.add("hidden")
                    lauvdalsfjell.classList.add("hidden")
                    break
                
                case this.kyrkjeneset.kyrkjenesetPoint:
                    kyrkjeneset.classList.remove("hidden")
                    torgrimsfjell.classList.add("hidden")
                    aktivitetsplass.classList.add("hidden")
                    brygga.classList.add("hidden")
                    lauvdalsfjell.classList.add("hidden")
                    break

                case this.lauvdalsfjell.lauvdalsFjellPoint:
                    lauvdalsfjell.classList.remove("hidden")
                    torgrimsfjell.classList.add("hidden")
                    aktivitetsplass.classList.add("hidden")
                    brygga.classList.add("hidden")
                    kyrkjeneset.classList.add("hidden")
                    break
                
                case this.arnfinnBrygga.arnfinnBryggaPoint:
                    arnfinnBrygga.classList.remove("hidden")
                    kirke.classList.add("hidden")
                    gjestiveriet.classList.add("hidden")
                    break
                
                case this.kirke.kirkePoint:
                    kirke.classList.remove("hidden")
                    arnfinnBrygga.classList.add("hidden")
                    gjestiveriet.classList.add("hidden")
                    break

                case this.gjestiveri.gjestiveriPoint:
                    gjestiveriet.classList.remove("hidden")
                    kirke.classList.add("hidden")
                    arnfinnBrygga.classList.add("hidden")
                }
            }
        })
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
            this.arnfinnBrygga.arnfinnBryggaPoint,
            this.kirke.kirkePoint,
            this.gjestiveri.gjestiveriPoint
        ]
        
        this.raycaster.setFromCamera(this.mouse, this.camera.instance)
        const intersects = this.raycaster.intersectObjects(this.objectsToIntersect)

        if(intersects.length)
        {
            if(!this.currentIntersect)
            {
            }

            this.currentIntersect = intersects[0]
        }
        else
        {
            if(this.currentIntersect)
            {
            }
            this.currentIntersect = null
        }     
    }
}