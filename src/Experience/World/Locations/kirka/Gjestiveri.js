import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Gjestiveri
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = new Debug()
        this.setGjestiveriPoint()
    }

    setGjestiveriPoint()
    {
        this.gjestiveriPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.gjestiveriPoint.position.set(0.751, -1.761, 2.213)
            this.gjestiveriPoint.rotation.set(-2.376, -0.409, 0.0)
        }

}