import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class AktivitetsPlass
{
    constructor()
    {
        this.debug = new Debug()
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.aktivitetsPlassPoint()
    }

    aktivitetsPlassPoint()
    {
        const point = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#ffefff",
                }
            )
            )
            this.scene.add(point)
            point.position.set(-2.73, -0.82, -0.32)
            point.rotation.set(0, 1.2, 0.37)
            this.debug.ui.add(point.position, 'y').max(10).min(-10).step(0.01).name("pointY")
            this.debug.ui.add(point.position, 'x').max(10).min(-10).step(0.01).name("pointX")
            this.debug.ui.add(point.position, 'y').max(10).min(-10).step(0.01).name("pointY")
            this.debug.ui.add(point.position, 'z').max(10).min(-10).step(0.01).name("pointZ")
            this.debug.ui.add(point.rotation, 'x').max(10).min(-10).step(0.01).name("pointRX")
            this.debug.ui.add(point.rotation, 'y').max(10).min(-10).step(0.01).name("pointRX")
            this.debug.ui.add(point.rotation, 'z').max(10).min(-10).step(0.01).name("pointRX")

        }
}