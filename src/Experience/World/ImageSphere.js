import * as THREE from 'three'
import { BackSide } from 'three';
import Experience from "../Experience";
import Time from '../Utils/Time';

// locations
const nissedal = document.querySelector("#nisser")
const stranda = document.querySelector("#stranda")
const framnes = document.querySelector("#framnes")
const skeimo = document.querySelector("#skeimo")
const kirka = document.querySelector("#kirka")
const ferjesundet = document.querySelector("#ferjesundet")

const textureLoader = new THREE.TextureLoader()

export default class imageSphere {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.time = new Time()
        this.setPlanet()
    }

    setPlanet() {
        // textures
        const textures = 
        {
            nissedalTexture: textureLoader.load('textures/nissedalFlipped.jpg'),
            ferjesundetTexture: textureLoader.load('textures/ferjesundetFlipped.jpg'),
            kirkaTexture: textureLoader.load('textures/kirkaFlipped.jpg'),
            strandaTexture: textureLoader.load('textures/strandaFlipped.jpg'),
            framnesTexture: textureLoader.load('textures/framnesFlipped.jpg'),
            skeimoTexture: textureLoader.load('textures/skeimoFlipped.jpg')
        }
        // Image sphere
        const imageSphere = new THREE.Mesh(
            new THREE.SphereGeometry(3),
            new THREE.MeshBasicMaterial(
                {
                    map: textures.nissedalTexture,
                    side: BackSide,
                }
            )
        )
        imageSphere.position.set(0, 0, 0)
        imageSphere.rotation.set(0, 2.5, 0)
        this.scene.add(imageSphere)

        // change the texture for wich location that is pressed
        nissedal.addEventListener("click", () =>
        {
            imageSphere.material.map = textures.nissedalTexture
        })

        stranda.addEventListener("click", () =>
        {
            imageSphere.material.map = textures.strandaTexture
        })

        framnes.addEventListener("click", () =>
        {
            imageSphere.material.map = textures.framnesTexture
        })

        skeimo.addEventListener("click", () =>
        {
            imageSphere.material.map = textures.skeimoTexture
        })

        kirka.addEventListener("click", () =>
        {
            imageSphere.material.map = textures.kirkaTexture
        })


        ferjesundet.addEventListener("click", () =>
        {
            imageSphere.material.map = textures.ferjesundetTexture
        })
    }
    
    update() {
        
    }
}