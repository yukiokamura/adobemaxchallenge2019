export default class Controller {
  constructor(is_init = true) {
    if(is_init){
      this.__init();
      this.__setEvent();
    }else{
      this.__setEvent();
    }
    

  }


  __init(){
    this.init();
    this.setEvent();
  }


  __setEvent(){
    this.__setUpdate();
  }


  __setUpdate(){

    window.updates.push({
      id:this.name,
      cb:e=>{
        this.__update()
      }
    });
  }


  __update(){
    if(this.__is_update)this.update();

  }









}
