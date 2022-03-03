import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class ArnfinnBrygga
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = new Debug()
        this.setArnfinnBryggaPoint()
    }

    setArnfinnBryggaPoint()
    {
        this.arnfinnBryggaPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.arnfinnBryggaPoint.position.set(2.056, -1.311, 1.637)
            this.arnfinnBryggaPoint.rotation.set(-2.621, -0.989, 0.37)
        }

}