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
    console.log(this.texture);
    const geometry = new THREE.PlaneBufferGeometry( this.w, this.h,1);
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0 },
            resolution:{type:'v2',value:new THREE.Vector2(window.innerWidth*window.devicePixelRatio,window.innerHeight * window.devicePixelRatio)},
            uTex:{type:'t',value:this.texture},
            imageResolution:{type:'v2',value:new THREE.Vector2(this.w,this.h)},
        },
        transparent: true,
        depthTest:true,
    });
    
    this.mesh = new THREE.Mesh(geometry,material);
    this.mesh.position.x = this.margins[this.index]
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