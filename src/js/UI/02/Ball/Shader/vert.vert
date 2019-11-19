
#define PI 3.14159265359
#define R 1.0
attribute vec3 offsetPos;
attribute float id;
attribute float scale;


uniform float time;
uniform float num;


vec2 rotation(){
  float _id = (id+1.0) / num;
  float angle = time * 4.0 * PI - _id * 10.0;
  mat2 _r = mat2(cos(angle),-sin(angle),sin(angle),cos(angle)) * (R - time);
  return offsetPos.xy * _r;
}


void main() {
  vec3 p = vec3(rotation(),.0);
  vec4 projected = projectionMatrix * modelViewMatrix * vec4(position + p, 1.0);

  gl_Position = projected;
}
