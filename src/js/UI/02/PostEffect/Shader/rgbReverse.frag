uniform vec2 resolution;
uniform float time;
uniform sampler2D backbuffer;
varying vec2 vUv;


void main(void){
  

  vec4 c = texture2D(backbuffer, vUv);
  vec4 white = 1.0 - c;
  
  gl_FragColor = vec4(white.rgba);
}

