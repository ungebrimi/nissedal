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
        this.setKyrjenesetPoint()
    }

    setKyrjenesetPoint()
    {
        this.kyrkjenesetPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
        this.kyrkjenesetPoint.position.set(-0.18, -0.57, -2.92)
        this.kyrkjenesetPoint.rotation.set(0, 0.17, 0)
    }
}