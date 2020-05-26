import BeeLine_logo from "../assets/images/Bee-Line-logo.png"
import Mts_logo from "../assets/images/Mts-logo.png"
import MegaFon_logo from "../assets/images/Megafon-logo.png"
import {rerenderEntireTree} from "../index";

let store = {
    _state: {
        operatorsInfo: [
            {
                id: 1,
                name: "BEELINE",
                image: BeeLine_logo,
                alt: "BEELINE",
                isPayed: false
            },
            {
                id: 2,
                name: "MTS",
                image: Mts_logo,
                alt: "MTS",
                isPayed: false
            }
            ,
            {
                id: 3,
                name: "MEGAFON",
                image: MegaFon_logo,
                alt: "MEGAFON",
                isPayed: false
            }
        ]
    },
    getState() {
        return this._state;
    },
    ChangePayedStatus() {
        this._state.operatorsInfo[0].isPayed = true
        rerenderEntireTree()
    },
    SubmitData() {
        store._state.operatorsInfo[0].isPayed = false
    },
    RejectData() {
        store._state.operatorsInfo[0].isPayed = true
    }
}

export default store;