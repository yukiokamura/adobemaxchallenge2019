import Base from '../../Base/Controller.es6';
import vert from './Shader/vert.vert';
import frag from './Shader/frag.frag';

export default class Controller extends Base{
  constructor(texture,index) {
    super(false);
    this.index = index;;
    this.texture = texture;
    this.w = this.texture.image.naturalWidth;
    this.h = this.texture.image.naturalHeight;
    this.margins = [
      - 402.95 - 18.1,0,402.95+14.5
    ]
    this.init();
    this.setEvent();
  }


  init(){
    this.name = 'Obj';
    const geometry = new THREE.PlaneBufferGeometry( this.w, this.h,1);
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0.0 },
            resolution:{type:'v2',value:new THREE.Vector2(this.w*window.devicePixelRatio,this.h * window.devicePixelRatio)},
            uTex:{type:'t',value:this.texture},
            imageResolution:{type:'v2',value:new THREE.Vector2(this.w,this.h)},
            opacity:{type:'f',value:0}
        },
        transparent: true,
        depthTest:true,
        opacity:0
    });
    
    this.mesh = new THREE.Mesh(geometry,material);
    this.mesh.position.x = this.margins[this.index]

  }
  
  
  show(){
    const tl = gsap.timeline();
    
    tl.set(this.mesh.material.uniforms.opacity,{
      value:1
    })
    .to(this.mesh.material.uniforms.time,2,{
      value:1.0,
      ease: "circ.inout"
    },0)
    // .to(this.mesh.position,.2,{
    //   z:0,
    //   ease: "circ.out",
    // },0 + this.index * .5)
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