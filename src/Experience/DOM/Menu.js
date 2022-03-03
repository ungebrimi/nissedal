import * as THREE from 'three'
import Experience from '../Experience.js'
import ImageSphere from '../World/ImageSphere.js'

import '../../style.css'
import '../../index.html'

const openMenu = document.querySelector(".places__btn")
const closeMenu = document.querySelector("#exit")
const menu = document.querySelector(".places")
const infoExit = document.querySelector('#info-exit')
const locations = document.querySelectorAll('.information-box')
// textures

export default class Menu
{
    constructor()
    {
        this.experience = new Experience()
        this.imageSphere = new ImageSphere()
        this.locationMenu()
        this.openMenu()
        this.closeMenu()
    }

    locationMenu()
    {

    }

    openMenu()
    {
        openMenu.addEventListener("click", () =>
        {
           menu.style.display = "block"
        })
    }

    closeMenu()
    {
        closeMenu.addEventListener("click", () =>
        {
            menu.style.display = "none"
        }) 
    }
}