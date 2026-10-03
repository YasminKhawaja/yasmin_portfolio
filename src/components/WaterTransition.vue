<script setup>
import { ref, onMounted, onBeforeUnmount, defineExpose } from "vue";
import * as THREE from "three";
import gsap from "gsap";

const container = ref(null);

let scene;
let camera;
let renderer;
let material;
let mesh;
let animationFrame;
let clock;

let progress = 0;

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;

  uniform float uTime;
  uniform float uFill;

  float random(vec2 st) {
    return fract(
      sin(dot(st.xy, vec2(12.9898, 78.233))) *
      43758.5453123
    );
  }

  float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x)
      + (c - a) * u.y * (1.0 - u.x)
      + (d - b) * u.x * u.y;
  }

  void main() {
    vec2 uv = vUv;

    /*
      Water zakt van boven naar beneden.
    */
    float edge = 1.0 - uFill;

    float edgeWave =
        sin(uv.x * 6.0 + uTime * 1.1) * 0.014
      + sin(uv.x * 13.0 - uTime * 1.6) * 0.007
      + sin(uv.x * 27.0 + uTime * 2.0) * 0.003;

    edge += edgeWave;

    /*
      Verticale stroming:
      lang, zacht en sluierachtig.
    */
    vec2 flowUv = uv;
    flowUv.y += uTime * 0.22;

    float broadNoise =
      noise(vec2(
        flowUv.x * 4.0,
        flowUv.y * 2.0
      ));

    float fineNoise =
      noise(vec2(
        flowUv.x * 11.0 + 2.4,
        flowUv.y * 6.0
      ));

    float softFlow =
      sin(
        uv.x * 16.0
        + broadNoise * 3.0
        + sin(flowUv.y * 3.0) * 0.7
      );

    float fineFlow =
      sin(
        uv.x * 34.0
        - uTime * 0.8
        + fineNoise * 2.0
      );

    /*
      Mist / melkachtige translucency.
    */
    float mist =
      noise(vec2(
        uv.x * 3.0 + uTime * 0.04,
        uv.y * 3.5 - uTime * 0.08
      ));

    /*
      Parelkleurige basis.
    */
    vec3 pearl = vec3(0.94, 0.95, 0.94);
    vec3 silver = vec3(0.76, 0.79, 0.79);
    vec3 softWhite = vec3(1.0, 0.99, 0.98);

    float verticalFade =
      smoothstep(0.0, 1.0, uv.y);

    vec3 color =
      mix(
        silver,
        pearl,
        verticalFade
      );

    /*
      Zachte waterbanen.
    */
    float softHighlight =
      smoothstep(
        0.45,
        1.0,
        softFlow
      );

    float fineHighlight =
      smoothstep(
        0.72,
        1.0,
        fineFlow
      );

    color =
      mix(
        color,
        softWhite,
        softHighlight * 0.22
      );

    color +=
      vec3(1.0) *
      fineHighlight *
      0.06;

    /*
      Mist maakt het minder digitaal/hard.
    */
    color =
      mix(
        color,
        vec3(0.92, 0.93, 0.92),
        mist * 0.16
      );

    /*
      Watermasker.
    */
    float waterMask =
      smoothstep(
        edge - 0.012,
        edge + 0.012,
        uv.y
      );

    /*
      Lichte schuimrand.
    */
    float distanceToEdge =
      abs(uv.y - edge);

    float foam =
      1.0 -
      smoothstep(
        0.0,
        0.035,
        distanceToEdge
      );

    foam *= waterMask;

    color =
      mix(
        color,
        vec3(1.0),
        foam * 0.45
      );

    /*
      Iets transparanter dan voorheen.
    */
    float alpha =
      waterMask * 0.93;

    gl_FragColor =
      vec4(
        color,
        alpha
      );
  }
`;

// const fragmentShader = `
//   varying vec2 vUv;

//   uniform float uTime;
//   uniform float uFill;

//   // simpele pseudo-random functie
//   float random(vec2 st) {
//     return fract(
//       sin(dot(st.xy, vec2(12.9898, 78.233))) *
//       43758.5453123
//     );
//   }

//   // zachte noise
//   float noise(vec2 st) {
//     vec2 i = floor(st);
//     vec2 f = fract(st);

//     float a = random(i);
//     float b = random(i + vec2(1.0, 0.0));
//     float c = random(i + vec2(0.0, 1.0));
//     float d = random(i + vec2(1.0, 1.0));

//     vec2 u = f * f * (3.0 - 2.0 * f);

//     return mix(
//       a,
//       b,
//       u.x
//     ) +
//     (c - a) * u.y * (1.0 - u.x) +
//     (d - b) * u.x * u.y;
//   }

//   void main() {
//     vec2 uv = vUv;

//     /*
//       Water begint BOVENAAN.
//       Terwijl uFill stijgt, zakt de onderrand
//       steeds verder naar beneden.
//     */
//     float edge = 1.0 - uFill;

//     /*
//       Maak de onderrand van het water
//       organisch in plaats van recht.
//     */
//     float edgeWave =
//         sin(uv.x * 7.0 + uTime * 1.8) * 0.018
//       + sin(uv.x * 15.0 - uTime * 2.4) * 0.009
//       + sin(uv.x * 31.0 + uTime * 3.5) * 0.004;

//     edge += edgeWave;

//     /*
//       Verticale stroming.
//     */
//     vec2 flowUv = uv;

//     flowUv.y += uTime * 0.38;

//     float turbulence =
//       noise(
//         vec2(
//           flowUv.x * 5.0,
//           flowUv.y * 3.0
//         )
//       );

//     float fineTurbulence =
//       noise(
//         vec2(
//           flowUv.x * 13.0 + 2.0,
//           flowUv.y * 8.0
//         )
//       );

//     /*
//       Verticale waterbanen.
//     */
//     float stream1 =
//       sin(
//         uv.x * 22.0 +
//         turbulence * 5.0 +
//         sin(flowUv.y * 4.0)
//       );

//     float stream2 =
//       sin(
//         uv.x * 43.0 -
//         uTime * 1.2 +
//         fineTurbulence * 3.0
//       );

//     /*
//       Basiskleur.
//       Meer glasachtig / groen-grijs dan fel blauw.
//     */
//     vec3 darkWater = vec3(0.25, 0.42, 0.44);
//     vec3 water = vec3(0.55, 0.72, 0.71);
//     vec3 lightWater = vec3(0.82, 0.91, 0.88);

//     float depth =
//       smoothstep(
//         0.0,
//         1.0,
//         uv.y
//       );

//     vec3 color =
//       mix(
//         darkWater,
//         water,
//         depth
//       );

//     /*
//       Lichtstrepen in het stromende water.
//     */
//     float highlight1 =
//       smoothstep(
//         0.65,
//         1.0,
//         stream1
//       );

//     float highlight2 =
//       smoothstep(
//         0.82,
//         1.0,
//         stream2
//       );

//     color =
//       mix(
//         color,
//         lightWater,
//         highlight1 * 0.18
//       );

//     color +=
//       lightWater *
//       highlight2 *
//       0.07;

//     /*
//       Extra bewegende helderheid.
//     */
//     float shimmer =
//       noise(
//         vec2(
//           uv.x * 8.0,
//           flowUv.y * 5.0
//         )
//       );

//     color +=
//       shimmer *
//       0.055;

//     /*
//       Masker:
//       alleen alles BOVEN de bewegende rand
//       is water.
//     */
//     float waterMask =
//       smoothstep(
//         edge - 0.015,
//         edge + 0.015,
//         uv.y
//       );

//     /*
//       Schuim / licht aan de onderrand.
//     */
//     float distanceToEdge =
//       abs(uv.y - edge);

//     float foam =
//       1.0 -
//       smoothstep(
//         0.0,
//         0.045,
//         distanceToEdge
//       );

//     foam *= waterMask;

//     color =
//       mix(
//         color,
//         vec3(0.93, 0.98, 0.96),
//         foam * 0.55
//       );

//     gl_FragColor =
//       vec4(
//         color,
//         waterMask
//       );
//   }
// `;

// const fragmentShader = `
//   varying vec2 vUv;

//   uniform float uTime;
//   uniform float uFill;

//   void main() {
//     vec2 uv = vUv;

//     float wave =
//       sin(uv.x * 8.0 + uTime * 2.0) * 0.025 +
//       sin(uv.x * 15.0 - uTime * 1.4) * 0.012 +
//       sin(uv.x * 27.0 + uTime * 2.8) * 0.006;

//     float waterLevel = uFill + wave;

//     float mask = smoothstep(
//       waterLevel + 0.015,
//       waterLevel - 0.015,
//       uv.y
//     );

//     vec3 deep = vec3(0.32, 0.48, 0.52);
//     vec3 light = vec3(0.72, 0.86, 0.84);

//     float gradient = smoothstep(0.0, 1.0, uv.y);

//     vec3 color = mix(deep, light, gradient);

//     float highlight =
//       sin(uv.x * 18.0 + uTime * 2.0 + uv.y * 10.0);

//     highlight = smoothstep(0.88, 1.0, highlight);

//     color += highlight * 0.08;

//     gl_FragColor = vec4(color, mask);
//   }
// `;

onMounted(() => {
  const el = container.value;

  scene = new THREE.Scene();

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  renderer.setSize(el.clientWidth, el.clientHeight);

  el.appendChild(renderer.domElement);

  material = new THREE.ShaderMaterial({
    transparent: true,

    uniforms: {
      uTime: { value: 0 },
      uFill: { value: 0 },
    },

    vertexShader,
    fragmentShader,
  });

  mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);

  scene.add(mesh);

  clock = new THREE.Clock();

  const animate = () => {
    material.uniforms.uTime.value = clock.getElapsedTime();

    renderer.render(scene, camera);

    animationFrame = requestAnimationFrame(animate);
  };

  animate();

  window.addEventListener("resize", handleResize);
});

function handleResize() {
  if (!container.value) return;

  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
}

function fillScreen() {
  return gsap.to(material.uniforms.uFill, {
    value: 1.15,
    duration: 3.2,
    ease: "power3.inOut",
  });
}

function reset() {
  material.uniforms.uFill.value = 0;
}

defineExpose({
  fillScreen,
  reset,
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);

  cancelAnimationFrame(animationFrame);

  mesh?.geometry.dispose();
  material?.dispose();
  renderer?.dispose();

  if (renderer?.domElement && renderer.domElement.parentNode) {
    renderer.domElement.parentNode.removeChild(renderer.domElement);
  }
});
</script>

<template>
  <div ref="container" class="water-transition"></div>
</template>

<style scoped>
.water-transition {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  pointer-events: none;
}
</style>
