import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Ferja
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setFerjaPoint()
    }

    setFerjaPoint()
    {
        this.ferjaPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.ferjaPoint.position.set(-1.269, -1.392, -2.253)
            this.ferjaPoint.rotation.set(5.82, 0.41, 0)

        }
}