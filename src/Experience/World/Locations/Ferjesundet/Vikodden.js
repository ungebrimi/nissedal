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
        this.setVikoddenPoint()
    }

    setVikoddenPoint()
    {
        this.vikoddenPoint = new THREE.Mesh(
            new THREE.CircleGeometry(0.02, 17),
            new THREE.MeshBasicMaterial(
                {
                    color: "#e71d36",
                }
            )
            )
            this.vikoddenPoint.position.set(2.917, -0.021, -0.532)
            this.vikoddenPoint.rotation.set(-1.269, -1.761, 0)

        //    this.debug.ui.add(this.vikoddenPoint.position, 'x').min(-5).max(5).step(0.001).name('x')
        //    this.debug.ui.add(this.vikoddenPoint.position, 'y').min(-5).max(5).step(0.001).name('y')
        //    this.debug.ui.add(this.vikoddenPoint.position, 'z').min(-5).max(5).step(0.001).name('z')
        //    this.debug.ui.add(this.vikoddenPoint.rotation, 'x').min(-5).max(5).step(0.001).name('rx')
        //    this.debug.ui.add(this.vikoddenPoint.rotation, 'y').min(-5).max(5).step(0.001).name('ry')
        //    this.debug.ui.add(this.vikoddenPoint.rotation, 'z').min(-5).max(5).step(0.001).name('rz')
    }
}