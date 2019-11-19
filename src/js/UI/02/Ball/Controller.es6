import Base from '../../Base/Controller.es6';
import getGeomery from './getGeometry.es6';
import vert from './Shader/vert.vert';
import frag from './Shader/frag.frag';
import Line from './Line/Controller.es6';
export default class Controller extends Base{
  constructor() {
    super();
  }


  init(){
    this.name = '01Controller';
    const geometry = new THREE.SphereGeometry( 10, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    this.ball = new THREE.Mesh( geometry, material );
    this.mesh = new THREE.Group();
    this.line = new Line(1500);
    this.mesh.add(this.line.mesh)
    this.mesh.add(this.ball);
    
    console.log(this.line.mesh,'line');
    
    this.moveR = 200;
    this.theta = 0;
    this.ball.position.set(0,0,window.camera.position.z)
    // console.log();
    // window.camera.position.x = 1000;
    // window.camera.position.y = 1000;
    
    window.camera.lookAt(this.ball.position);
    console.log(window.camera);

  }
  
  
  sprite(position){
    const geometry = getGeomery({
      num:100,
      posi:position
    });
    const v = new THREE.Vector2(0.0,0.0);
    console.log(v);
    const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
            time: { type: 'f', value: 0.0 },
            b:{type:'v2',value:v},
            num:{ type: 'f', value: 100 },
        },
        transparent: true,
        depthTest:true,
    });
    console.log(material.uniforms);
    this.sprite = new THREE.Mesh( geometry, material );
    this.mesh.add(this.sprite);
  }
  
  
  move(){
    console.log('move');
    const tl = gsap.timeline();
    const cz = window.camera.position.z;
    tl.to(this.ball.position,2.5,{
      z:-window.camera.far * .1,
      ease:'power4.out',
    })
    .to(window.camera.position,.5,{
      z:-window.camera.far * .1 + 15,
      ease:'power4.in',
    },2)
    .to(camera.rotation,.5,{
      z:Math.PI * .5,
      ease:'power4.in',
    },2)
    .add(e=>{
      this.line.show()
    },.2)
    .add(e=>{
      window.renderer.setClearColor(0xFFFFFF);
      window.camera.position.z = cz;
      window.camera.rotation.z = 0;
      this.ball.material.opacity = 0;
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
