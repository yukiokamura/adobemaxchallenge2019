import Base from '../../Base/Controller.es6';

import glitch from './Shader/glitch.frag';
export default class Controller extends Base{
  constructor() {
    super(false);
    this.init();
    this.setEvent();
  }


  init(){
    this.name = '01Controller';
    const pp1 = {
      fragmentShader:glitch,
      uniforms:{
        time:{
          value:0,
          type:'f'
        },
        resolution:{
          value:new THREE.Vector2(window.innerWidth,window.innerHeight),
          type:'v2'
        },
        blockSize:{
          type:'f',
          value:100
        },
        threshold:{
          type:'f',
          value:.8
        },
        slideWidth:{
          type:'f',
          value:.01
        },
      }
    };
    this.pp_params = [pp1];
  }
  



  setEvent(){
    super.__is_update = false;
  }
  
  
  timeline(){
    
  }


  reset(){

  }


  update(){
    console.log('update');
  }








}
