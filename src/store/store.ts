import BeeLine_logo from '../assets/images/Bee-Line-logo.png';
import Mts_logo from '../assets/images/Mts-logo.png';
import MegaFon_logo from '../assets/images/Megafon-logo.png';
type OperatorsInfoType = {
  name: string
  image: string
  alt: string
}
type payableStatusType = {
  isPayed:boolean
}

const store = {
  state: {
    operatorsInfo: [
      {
        name: 'BEELINE',
        image: BeeLine_logo,
        alt: 'BEELINE',
      },
      {
        name: 'MTS',
        image: Mts_logo,
        alt: 'MTS',
      },
      {
        name: 'MEGAFON',
        image: MegaFon_logo,
        alt: 'MEGAFON',
      },
    ] as Array<OperatorsInfoType>,
    payableStatus: {
      isPayed: false,
    } as payableStatusType,
  },
  SubmitData():void {
     store.state.payableStatus.isPayed = true;
  },
  RejectData():void {
     store.state.payableStatus.isPayed = false;
  },
};

export default store;
