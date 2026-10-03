<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

const container = ref(null);

let renderer;
let scene;
let camera;
let clock;
let animationFrame;

const strips = [];
const mistParticles = [];

onMounted(() => {
  const el = container.value;

  scene = new THREE.Scene();

  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);

  camera.position.z = 2;

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(el.clientWidth, el.clientHeight);

  renderer.outputColorSpace = THREE.SRGBColorSpace;

  el.appendChild(renderer.domElement);

  clock = new THREE.Clock();

  createWaterCurtain();
  createMist();

  window.addEventListener("resize", handleResize);

  animate();
});

function createWaterCurtain() {
  const stripCount = 28;

  for (let i = 0; i < stripCount; i++) {
    const width = 0.03 + Math.random() * 0.12;

    const height = 1.8 + Math.random() * 0.7;

    const geometry = new THREE.PlaneGeometry(width, height, 1, 30);

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,

      uniforms: {
        uTime: { value: 0 },
        uOffset: { value: Math.random() * 10 },
        uOpacity: { value: 0.14 + Math.random() * 0.22 },
      },

      vertexShader: `
        varying vec2 vUv;

        uniform float uTime;
        uniform float uOffset;

        void main() {
          vUv = uv;

          vec3 pos = position;

          float sway =
            sin(
              pos.y * 4.0 +
              uTime * 1.3 +
              uOffset
            ) * 0.015;

          sway +=
            sin(
              pos.y * 9.0 -
              uTime * 1.8 +
              uOffset
            ) * 0.005;

          pos.x += sway;

          gl_Position =
            projectionMatrix *
            modelViewMatrix *
            vec4(pos, 1.0);
        }
      `,

      fragmentShader: `
        varying vec2 vUv;

        uniform float uTime;
        uniform float uOffset;
        uniform float uOpacity;

        float hash(float n) {
          return fract(sin(n) * 43758.5453123);
        }

        void main() {
          float flow =
            sin(
              vUv.y * 35.0 -
              uTime * 5.0 +
              uOffset
            );

          float fine =
            sin(
              vUv.y * 78.0 -
              uTime * 8.0 +
              uOffset * 2.0
            );

          float centerFade =
            1.0 -
            smoothstep(
              0.0,
              0.5,
              abs(vUv.x - 0.5)
            );

          float topFade =
            smoothstep(
              0.0,
              0.08,
              vUv.y
            );

          float bottomFade =
            1.0 -
            smoothstep(
              0.78,
              1.0,
              vUv.y
            );

          float stream =
            0.58 +
            flow * 0.18 +
            fine * 0.07;

          vec3 pearl =
            vec3(0.97, 0.98, 0.98);

          vec3 grey =
            vec3(0.76, 0.80, 0.80);

          vec3 color =
            mix(
              grey,
              pearl,
              stream
            );

          float alpha =
            uOpacity *
            centerFade *
            topFade *
            bottomFade;

          gl_FragColor =
            vec4(
              color,
              alpha
            );
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = -1.0 + (i / (stripCount - 1)) * 2.0;

    mesh.position.y = 0.15 + Math.random() * 0.15;

    mesh.position.z = Math.random() * 0.3;

    mesh.rotation.z = (Math.random() - 0.5) * 0.035;

    scene.add(mesh);

    strips.push({
      mesh,
      material,
      speed: 0.7 + Math.random() * 0.7,
    });
  }
}

function createMist() {
  const mistCount = 18;

  for (let i = 0; i < mistCount; i++) {
    const geometry = new THREE.PlaneGeometry(
      0.35 + Math.random() * 0.5,
      0.18 + Math.random() * 0.35,
    );

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,

      uniforms: {
        uOpacity: {
          value: 0.035 + Math.random() * 0.07,
        },
      },

      vertexShader: `
          varying vec2 vUv;

          void main() {
            vUv = uv;

            gl_Position =
              projectionMatrix *
              modelViewMatrix *
              vec4(position, 1.0);
          }
        `,

      fragmentShader: `
          varying vec2 vUv;

          uniform float uOpacity;

          void main() {
            vec2 p =
              vUv - 0.5;

            float d =
              length(
                p * vec2(1.0, 1.7)
              );

            float fog =
              1.0 -
              smoothstep(
                0.0,
                0.5,
                d
              );

            gl_FragColor =
              vec4(
                vec3(1.0),
                fog * uOpacity
              );
          }
        `,
    });

    const mist = new THREE.Mesh(geometry, material);

    mist.position.set(
      -0.95 + Math.random() * 1.9,
      -0.95 + Math.random() * 0.75,
      0.4 + Math.random() * 0.2,
    );

    scene.add(mist);

    mistParticles.push({
      mesh: mist,
      drift: 0.0004 + Math.random() * 0.0008,
      phase: Math.random() * Math.PI * 2,
    });
  }
}

function animate() {
  const time = clock.getElapsedTime();

  strips.forEach((item) => {
    item.material.uniforms.uTime.value = time * item.speed;
  });

  mistParticles.forEach((item, index) => {
    item.mesh.position.x += Math.sin(time * 0.3 + item.phase) * item.drift;

    item.mesh.position.y += Math.cos(time * 0.22 + index) * item.drift * 0.4;
  });

  renderer.render(scene, camera);

  animationFrame = requestAnimationFrame(animate);
}

function handleResize() {
  if (!container.value) return;

  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
}

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);

  cancelAnimationFrame(animationFrame);

  strips.forEach(({ mesh, material }) => {
    mesh.geometry.dispose();
    material.dispose();
  });

  mistParticles.forEach(({ mesh }) => {
    mesh.geometry.dispose();
    mesh.material.dispose();
  });

  renderer?.dispose();
});
</script>

<template>
  <div ref="container" class="waterfall" />
</template>

<style scoped>
.waterfall {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
  pointer-events: none;

  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.96),
    rgba(245, 246, 244, 0.97)
  );
}
</style>
