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
        this.setRindefjellPoint()
    }

    setRindefjellPoint()
    {
        this.rindefjellPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.rindefjellPoint.position.set(2.574, 0.272, -1.457)
            this.rindefjellPoint.rotation.set(0.206, -1.023, 0)
        }
}