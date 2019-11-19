import Base from './Base/Controller.es6';
import Controller01 from './01/Controller.es6';
import Controller02 from './02/Controller.es6';
import Setup from './three_setup/Controller.es6';

export default class Controller extends Base{
  constructor() {
    super();
  }


  init(){
    this.name = 'UIController';
    this.setup = new Setup($('.canvas'),false);
    
    this.mv = null;
    window.camera = this.setup.base.camera;
    window.renderer = this.setup.base.renderer;
    if($('body').hasClass('01'))this.mv = new Controller01();
    if($('body').hasClass('02'))this.mv = new Controller02();
    if(this.mv){
      this.setup.base.scene.add(this.mv.mesh);
      this.tpp = new TPP(this.setup.base.renderer,this.mv.postEffect.pp_params);
      this.setup.base.tpp = this.tpp;
      
    }
    
  }
  


  setEvent(){
    super.__is_update = true;
  }


  reset(){

  }


  update(){
    
    
    this.setup.base.render(true);
  }








}
