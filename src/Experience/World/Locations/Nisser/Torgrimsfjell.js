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
        this.torgrimsfjellPoint()
    }

    torgrimsfjellPoint()
    {
        const point = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#ffefff",
                }
            )
            )
            this.scene.add(point)
            point.position.set(-2.71, 0.32, -0.9)
            point.rotation.set(0, 1.2, 0.37)
        }
}