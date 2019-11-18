varying vec2 vUv;
uniform sampler2D uTex;
uniform float time;
uniform vec2 resolution;

void main(void){
  
  vec4 color = texture2D(uTex,vUv);
  vec4 white = vec4(1.0 - color.a);
  vec4 c = color + white;
  // c.a = step(1.0 - vUv.y,time);
  gl_FragColor = c;
}

