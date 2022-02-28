import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class AktivitetsPlass
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = new Debug()
        this.aktivitetsPlassPoint()
    }

    aktivitetsPlassPoint()
    {
        this.aktivitetsPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
        this.aktivitetsPoint.position.set(-2.73, -0.82, -0.32)
        this.aktivitetsPoint.rotation.set(0, 1.2, 0.37)
    }

}