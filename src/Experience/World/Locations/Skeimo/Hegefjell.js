import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Hegefjell
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.setHegefjellPoint()
    }

    setHegefjellPoint()
    {
        this.hegefjellPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.hegefjellPoint.position.set(0.65, 0.206, -2.895)
            this.hegefjellPoint.rotation.set(0.083, -0.113, 0)
        }
}