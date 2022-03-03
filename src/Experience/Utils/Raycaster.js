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
        // nisser
        this.aktivitetsplass = this.locations.nisser.aktivitetsplass
        this.brygga = this.locations.nisser.brygga
        this.kyrkjeneset = this.locations.nisser.kyrjeneset
        this.torgrimsfjell = this.locations.nisser.torgrimsfjell
        this.lauvdalsfjell = this.locations.nisser.lauvdalsfjell
        // kirka
        this.arnfinnBrygga = this.locations.kirka.arnfinnBrygga
        this.gjestiveri = this.locations.kirka.gjestiveri
        this.kirke = this.locations.kirka.kirke
        // ferjesundet
        this.ferja = this.locations.ferjesundet.ferja
        this.ferjesundetCafe = this.locations.ferjesundet.ferjesundetCafe
        this.vikingGrav = this.locations.ferjesundet.vikingGrav
        this.vikodden = this.locations.ferjesundet.vikodden
        this.vikCamping = this.locations.ferjesundet.vikCamping
        // skeimo
        this.hegefjell = this.locations.skeimo.hegefjell
        this.rindefjell = this.locations.skeimo.rindefjell
        
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
        // ferjesundet
        const ferja = document.querySelector('.locations__ferjesundet-ferja')
        const ferjesundetCafe = document.querySelector('.locations__ferjesundet-ferjesundetcafe')
        const vikingGrav = document.querySelector('.locations__ferjesundet-vikinggrav')
        const vikodden = document.querySelector('.locations__ferjesundet-vikodden')
        const vikCamping = document.querySelector('.locations__ferjesundet-vikcamping')
        // skeimo
        const hegefjell = document.querySelector('.locations__skeimo-hegefjell')
        const rindefjell = document.querySelector('.locations__skeimo-rindefjell')

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
                
                    // kirka
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

                    // Ferjesundet
                case this.ferja.ferjaPoint:
                    ferja.classList.remove("hidden")
                    ferjesundetCafe.classList.add("hidden")
                    vikingGrav.classList.add("hidden")
                    vikodden.classList.add("hidden")
                    vikCamping.classList.add("hidden")
                    break
                
                case this.ferjesundetCafe.ferjesundetCafePoint:
                    ferjesundetCafe.classList.remove("hidden")
                    ferja.classList.add("hidden")
                    vikingGrav.classList.add("hidden")
                    vikodden.classList.add("hidden")
                    vikCamping.classList.add("hidden")
                    break

                case this.vikingGrav.vikingGravPoint:
                    vikingGrav.classList.remove("hidden")
                    ferjesundetCafe.classList.add("hidden")
                    ferja.classList.add("hidden")
                    vikodden.classList.add("hidden")
                    vikCamping.classList.add("hidden")
                    break

                case this.vikodden.vikoddenPoint:
                    vikodden.classList.remove("hidden")
                    vikingGrav.classList.add("hidden")
                    ferjesundetCafe.classList.add("hidden")
                    ferja.classList.add("hidden")
                    vikCamping.classList.add("hidden")
                    break

                case this.vikCamping.vikCampingPoint:
                    vikCamping.classList.remove("hidden")
                    vikodden.classList.add("hidden")
                    vikingGrav.classList.add("hidden")
                    ferjesundetCafe.classList.add("hidden")
                    ferja.classList.add("hidden")
                    break

                    //skeimo
                case this.hegefjell.hegefjellPoint:
                    hegefjell.classList.remove("hidden")
                    rindefjell.classList.add("hidden")
                    break

                case this.rindefjell.rindefjellPoint:
                    rindefjell.classList.remove("hidden")
                    hegefjell.classList.add("hidden")
                }
            }
        })
    }
    
    setRayCaster()
    {
        this.objectsToIntersect = 
        [
            //nisser
            this.aktivitetsplass.aktivitetsPoint,
            this.brygga.bryggaPoint, 
            this.kyrkjeneset.kyrkjenesetPoint, 
            this.torgrimsfjell.torgrimsfjellPoint,
            this.lauvdalsfjell.lauvdalsFjellPoint,
            //kirka
            this.arnfinnBrygga.arnfinnBryggaPoint,
            this.kirke.kirkePoint,
            this.gjestiveri.gjestiveriPoint,
            // ferjesundet
            this.ferja.ferjaPoint,
            this.ferjesundetCafe.ferjesundetCafePoint,
            this.vikingGrav.vikingGravPoint,
            this.vikodden.vikoddenPoint,
            this.vikCamping.vikCampingPoint,
            // skeimo
            this.rindefjell.rindefjellPoint,
            this.hegefjell.hegefjellPoint,
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