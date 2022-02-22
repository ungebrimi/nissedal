import { gsap } from 'gsap'
import Experience from '../Experience.js'

export default class Gsap
{
    constructor()
    {
        this.experience = new Experience()
        this.gsap = gsap
        this.menuAnimations()
    }

    menuAnimations()
    {
        const closeMenu = document.querySelector("#exit")
        closeMenu.addEventListener('mouseenter', () =>
        {
            gsap.to(closeMenu, {rotateZ: 20, duration: 1, ease: 'ease-in-out'})
        })
        closeMenu.addEventListener('mouseleave', () =>
        {
            gsap.to(closeMenu, {rotateZ: 0, duration: 1, ease: 'ease-in-out'})
        })

        const locations = document.querySelectorAll(".places__ul-li")
        for (let location of locations) 
        {
            location.addEventListener('mouseenter', () => 
            {
                gsap.to(location, { scale: 1.1, ease: 'slow', duration: 0.5, })
            })
            location.addEventListener('mouseleave', () => 
            {
                gsap.to(location, { scale: 1, ease: 'slow', duration: 0.5, })
            })
        }   
    }
}