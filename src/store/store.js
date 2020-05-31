import BeeLine_logo from "../assets/images/Bee-Line-logo.png"
import Mts_logo from "../assets/images/Mts-logo.png"
import MegaFon_logo from "../assets/images/Megafon-logo.png"

let store = {

    _state: {
        operatorsInfo: [
            {
                name: "BEELINE",
                image: BeeLine_logo,
                alt: "BEELINE",
            },
            {
                name: "MTS",
                image: Mts_logo,
                alt: "MTS",
            }
            ,
            {
                name: "MEGAFON",
                image: MegaFon_logo,
                alt: "MEGAFON",
            }
        ],
        payableStatus: {
            isPayed: false
        }
    },
    getState() {
        return this._state;
    },
    SubmitData() {
        this.getState().payableStatus.isPayed = true
    },
    RejectData() {
        this.getState().payableStatus.isPayed = false
    },

}
export default store;