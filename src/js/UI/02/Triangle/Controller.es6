import Base from '../../Base/Controller.es6';
import getGeomery from './getGeometry.es6';
export default class Controller extends Base{
  constructor() {
    super();
  }


  init(){
    this.name = '01Controller';
    // console.log(getGeomery());
  }
  



  setEvent(){
    super.__is_update = false;
  }


  reset(){

  }


  update(){
    console.log('update');
  }








}
