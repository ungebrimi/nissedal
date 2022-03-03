import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class VikingGrav
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setVikingGravPoint()
    }

    setVikingGravPoint()
    {
        this.vikingGravPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.vikingGravPoint.position.set(-2.971, -0.174, -0.04)
            this.vikingGravPoint.rotation.set(0.943, 1.558, 0)
    }
}