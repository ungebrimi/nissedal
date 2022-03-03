import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class LauvdalsFjell
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setLauvdalsFjellPoint()
    }

    setLauvdalsFjellPoint()
    {
        this.lauvdalsFjellPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.lauvdalsFjellPoint.position.set(-2.898, 0.612, 0.04)
            this.lauvdalsFjellPoint.rotation.set(0, 1.4, 0.37)
    }
}