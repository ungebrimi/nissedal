import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class FerjesundetCafe
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setFerjesundetCafePoint()
    }

    setFerjesundetCafePoint()
    {
        this.ferjesundetCafePoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.ferjesundetCafePoint.position.set(-2.036, -0.171, -2.16)
            this.ferjesundetCafePoint.rotation.set(5.82, 0.41, 0)
    }
}