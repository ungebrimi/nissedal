import * as THREE from 'three'
import Debug from '../../../Utils/Debug.js'
import Experience from '../../../Experience.js'

export default class Kirke
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.debug = new Debug()
        this.kirkePoint()
    }

    kirkePoint()
    {
        this.kirkePoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
        this.kirkePoint.position.set(-1.985, -0.873, -1.594)
        this.kirkePoint.rotation.set(0, 0.778, 0.934)


        // this.debug.ui.add(this.kirkePoint.position, 'x').min(-5).max(5).step(0.001).name('positionX')
        // this.debug.ui.add(this.kirkePoint.position, 'x').min(-5).max(5).step(0.001).name('positionX')
        // this.debug.ui.add(this.kirkePoint.position, 'y').min(-5).max(5).step(0.001).name('positionY')
        // this.debug.ui.add(this.kirkePoint.position, 'z').min(-5).max(5).step(0.001).name('positionZ')
        // this.debug.ui.add(this.kirkePoint.rotation, 'x').min(-5).max(5).step(0.001).name('rotationX')
        // this.debug.ui.add(this.kirkePoint.rotation, 'y').min(-5).max(5).step(0.001).name('rotationY')
        // this.debug.ui.add(this.kirkePoint.rotation, 'z').min(-5).max(5).step(0.001).name('rotationZ')

    }
}