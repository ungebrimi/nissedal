import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Torgrimsfjell
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setTorgrimsfjellPoint()
    }

    setTorgrimsfjellPoint()
    {
        this.torgrimsfjellPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.1, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.torgrimsfjellPoint.position.set(-2.71, 0.32, -0.9)
            this.torgrimsfjellPoint.rotation.set(0, 1.2, 0.37)
        }
}