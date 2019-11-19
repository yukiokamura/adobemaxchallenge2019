export default class Controller {
  constructor(num) {
    this.NUM = num * .5;
    this.LINE_WIDTH = 1;
    this.colors = [
      new THREE.Color(0x5ce0f1),
      new THREE.Color(0x8099FF),
      new THREE.Color(0xB3CCFF)
    ]
    this.MIN_LENGTH = 50;
    this.MAX_LENGTH = window.innerWidth * .5;
    this.mesh = new THREE.Group();
    this.setup();
  }

  setup(){
    for (var i = 0; i < this.NUM; i++) {
      const geometry = new THREE.Geometry();
      const posi = this.getPosi();
      posi.map(e=>{
        const v = new THREE.Vector3(e.x,e.y,e.z);
        geometry.vertices.push( v );
      })
      const line = new MeshLine();
      line.setGeometry( geometry,p=>{
        return this.LINE_WIDTH
      });
      const material = new MeshLineMaterial({
        color:this.colors[i%3],
        resolution:new THREE.Vector2(window.innerWidth,window.innerHeight),
        sizeAttenuation:true,
        opacity: .3,
        depthWrite: false,
        depthTest: false,
        dashArray:1,
        dashOffset: 0,
        transparent: true,
      });
      this.mesh.add(new THREE.Mesh( line.geometry, material ));
      // console.log('line');
    }
  }


  getPosi(){
    const r = Math.random() * 2 * Math.PI;
    const r2 = Math.random() + .5;
    const p0 = {
      x:this.MIN_LENGTH * Math.cos(r) * r2,
      y:this.MIN_LENGTH * Math.sin(r) * r2,
      z:0
    };
    const p1 = {
      x:this.MAX_LENGTH * Math.cos(r) * r2,
      y:this.MAX_LENGTH * Math.sin(r) * r2,
      z:this.MAX_LENGTH * Math.random()
    };
    const p = [p0,p1];
    return p;
  }


  show(){
    const tl = gsap.timeline();
    this.mesh.children.map((e,i)=>{
      tl.to(e.material.uniforms.dashOffset,1,{
        value:-2,
        ease:'power4.in',
        onComplete:()=>{
          e.material.opacity = 0
        }
      },i * 0.0018)
    })

    // .to
  }


}
