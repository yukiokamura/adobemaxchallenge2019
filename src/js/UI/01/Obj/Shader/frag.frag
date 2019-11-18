varying vec2 vUv;
uniform sampler2D uTex;
void main(void){
  vec4 color = texture2D(uTex,vUv);
  vec4 white = vec4(1.0 - color.a);
  gl_FragColor = color + white;
}

