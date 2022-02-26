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
        this.bryggaPoint()
    }

    bryggaPoint()
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
            point.position.set(-1.76, -1.31, -2.01)
            point.rotation.set(5.82, 0.41, 0)
    }
}