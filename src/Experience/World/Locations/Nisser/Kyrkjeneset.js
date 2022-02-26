import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Kyrjeneset
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.kyrjenesetPoint()
    }

    kyrjenesetPoint()
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
        point.position.set(-0.18, -0.57, -2.92)
        point.rotation.set(0, 0.17, 0)
    }
}