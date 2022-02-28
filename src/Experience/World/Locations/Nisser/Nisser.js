import Experience from "../../../Experience.js";
import Kyrjeneset from "./Kyrkjeneset.js";
import Brygga from './Brygga.js'
import AktivitetsPlass from "./AktivitetsPlass.js";
import Torgrimsfjell from "./Torgrimsfjell";
import LauvdalsFjell from "./LauvdalsFjell.js";
// import Raycaster from "../../../Utils/Raycaster.js";


export default class Nisser
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.kyrjeneset = new Kyrjeneset()
        this.aktivitetsplass = new AktivitetsPlass()
        this.brygga = new Brygga()
        this.torgrimsfjell = new Torgrimsfjell()
        this.lauvdalsfjell = new LauvdalsFjell()
        // this.Raycaster = new Raycaster()
    }
}