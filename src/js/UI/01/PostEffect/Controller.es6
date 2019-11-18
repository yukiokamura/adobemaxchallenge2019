import Base from '../../Base/Controller.es6';

import glitch from './Shader/glitch.frag';
import rgbReverse from './Shader/rgbReverse.frag';
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
          value:.5
        },
        slideWidth:{
          type:'f',
          value:0.1
        },
      }
    };
    const pp2 = {
      fragmentShader:rgbReverse,
      uniforms:{
        time:{
          value:0,
          type:'f'
        },
        resolution:{
          value:new THREE.Vector2(window.innerWidth,window.innerHeight),
          type:'v2'
        },
      }
    };

    this.pp_params = [pp2,pp1];
    this.timeline();
  }
  



  setEvent(){
    super.__is_update = false;
  }
  
  
  timeline(){
    const tl = gsap.timeline();
    const t = this.pp_params[1].uniforms
    tl.to(t.time,{
      value:10,
      duration: 5,
      ease: "none"
    })
    .to(t.slideWidth,{
      value:0,
      duration: 5,
      ease: "expo.out"
    },0)
    .to(t.blockSize,{
      value:10,
      duration: 5,
      ease: "expo.inout"
    },0)
    .to(t.threshold,{
      value:.2,
      duration: 1,
      ease: "expo.inout"
    },2)
    // .to(t.threshold,1,{
    //   value:0
    // },0)
    // .to(t.threshold,1,{
    //   value:.1
    // },3)
    // .to(t.threshold,1,{
    //   value:0
    // },4)
  }



  reset(){

  }


  update(){
    console.log('update');
  }








}
