import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class VikCamping
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setVikCampingPoint()
    }

    setVikCampingPoint()
    {
        this.vikCampingPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.vikCampingPoint.position.set(2.615, -0.04, 1.416)
            this.vikCampingPoint.rotation.set(-2.99, -1.146, 0)

    }
}