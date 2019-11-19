import Base from '../Base/Controller.es6';
import Obj from './Obj/Controller.es6';
import PostEffect from './PostEffect/Controller.es6';
import Ball from './Ball/Controller.es6';
export default class Controller extends Base{
  constructor() {
    super();
    //賑やかたす
  }


  init(){
    this.name = '01Controller';
    this.paths = [
      '../assets/img/m.png',
      '../assets/img/a.png',
      '../assets/img/x.png',
    ];
    this.loader = new THREE.TextureLoader();
    const p = [];
    this.paths.map(path=>{
      const l = this.load(path)
      p.push(l);
    })
    this.objs = [];
    this.mesh = new THREE.Group();
    this.ball = new Ball();
    this.mesh.add(this.ball.mesh)
    this.postEffect = new PostEffect();
    Promise.all(p).then(textures=>{
      textures.map((t,i)=>{
        const obj = new Obj(t,i);
        this.objs.push(obj);
        this.mesh.add(obj.mesh);
      })
      this.timeline();
    })
    
  }
  
  
  timeline(){
    console.log('show2222');
    const tl = gsap.timeline();
    const d = {t:0}
    tl
    .to(d,1,{t:1})
    .add(e=>{
      this.ball.move()
    },0)
    .add(e=>{
      this.objs.map(obj=>{
        obj.show();
      })
    },2.68)
    .add(e=>{
      this.postEffect.timeline()
    })
  }
  
  
  
  
  load(path){
    return new Promise((r,reject)=>{
      this.loader.load(path,e=>{
        e.magFilter = THREE.LinearFilter;
        e.minFilter = THREE.LinearFilter;
        r(e);
      })
    })
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
