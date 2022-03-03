import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Brygga
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setBryggaPoint()
    }

    setBryggaPoint()
    {
        this.bryggaPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.bryggaPoint.position.set(-1.4, -1.32, -2.24)
            this.bryggaPoint.rotation.set(5.82, 0.41, 0)
    }
}