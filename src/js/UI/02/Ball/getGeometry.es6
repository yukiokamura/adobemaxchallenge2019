export default function(param) {
  const b_geomary = new THREE.CircleBufferGeometry( 5, 32 );
  const geometry = new THREE.InstancedBufferGeometry();
  
  const vertices = b_geomary.attributes.position.clone();
  geometry.setAttribute('position', vertices);
  
  const uvs = b_geomary.attributes.uv.clone();
  geometry.setAttribute('uv', uvs);
  
  const indices = b_geomary.index.clone();
  geometry.setIndex(indices);
  
  const offsetPos = new THREE.InstancedBufferAttribute(new Float32Array(param.num * 3), 3, false, 1);
  const _id = new THREE.InstancedBufferAttribute(new Float32Array(param.num * 1), 1, false, 1);
  const _scale = new THREE.InstancedBufferAttribute(new Float32Array(param.num * 1), 1, false, 1);
  
  for (let i = 0; i < param.num; i++) {
    let x = param.posi.x;
    let y = param.posi.y;
    let z = param.posi.z;
    offsetPos.setXYZ(i,x,y,z);
    _id.setX(i,i);
    const s = i%2==0 ? 0.5 : 0.75;
    _scale.setX(i,s);
    
  }
  
  
  geometry.setAttribute('offsetPos', offsetPos);
  geometry.setAttribute('scale', _scale);
  geometry.setAttribute('id', _id);
  
  return geometry;
}