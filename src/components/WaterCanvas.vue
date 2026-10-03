<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import * as THREE from "three";

const container = ref(null);

let renderer;
let scene;
let camera;
let mesh;
let material;
let animationId;
let clock;

let handleResize;
let handleMouseMove;
let handleMouseEnter;
let handleMouseLeave;

let targetMouseStrength = 0;

onMounted(() => {
  const el = container.value;

  scene = new THREE.Scene();
  camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  clock = new THREE.Clock();

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(el.clientWidth, el.clientHeight);
  el.appendChild(renderer.domElement);

  const uniforms = {
    uTime: { value: 0 },
    uResolution: {
      value: new THREE.Vector2(el.clientWidth, el.clientHeight),
    },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    uMouseStrength: { value: 0 },
  };

  material = new THREE.ShaderMaterial({
    transparent: true,
    uniforms,

    vertexShader: `
      varying vec2 vUv;

      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,

    fragmentShader: `
      varying vec2 vUv;

      uniform float uTime;
      uniform vec2 uMouse;
      uniform float uMouseStrength;

      float wave(vec2 uv, float freq, float speed, float amp, float shift) {
        return sin(uv.x * freq + uTime * speed + shift) * amp;
      }

      void main() {
        vec2 uv = vUv;

        float offset = 0.0;
        offset += wave(uv, 8.0, 0.8, 0.030, uv.y * 2.0);
        offset += wave(uv, 14.0, -1.1, 0.014, uv.y * 5.0);
        offset += wave(uv, 24.0, 1.7, 0.006, uv.y * 8.0);

        float dist = distance(uv, uMouse);
        float rippleMask = smoothstep(0.30, 0.0, dist) * uMouseStrength;
        float ripple = sin(40.0 * dist - uTime * 5.0) * 0.015 * rippleMask;

        vec2 warpedUv = uv;
        warpedUv.y += offset + ripple;
        warpedUv.x += ripple * 0.45;

        vec3 deep = vec3(0.72, 0.80, 0.78);
        vec3 light = vec3(0.92, 0.96, 0.94);
        vec3 foam = vec3(1.0);

        float gradient = smoothstep(0.0, 1.0, warpedUv.y);
        vec3 color = mix(deep, light, gradient);

        float lineA = sin((warpedUv.x * 18.0) - (uTime * 1.1) + warpedUv.y * 7.0);
        float lineB = sin((warpedUv.x * 25.0) + (uTime * 1.7) - warpedUv.y * 12.0);

        float highlights = smoothstep(0.86, 1.0, lineA) * 0.13;
        highlights += smoothstep(0.90, 1.0, lineB) * 0.08;

        color = mix(color, foam, highlights);

        float topFade = 1.0 - smoothstep(0.70, 1.0, uv.y);
        float alpha = 0.95 * topFade;

        gl_FragColor = vec4(color, alpha);
      }
    `,
  });

  mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
  scene.add(mesh);

  handleResize = () => {
    if (!container.value) return;

    const width = container.value.clientWidth;
    const height = container.value.clientHeight;

    renderer.setSize(width, height);
    material.uniforms.uResolution.value.set(width, height);
  };

  handleMouseMove = (event) => {
    const rect = el.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = 1 - (event.clientY - rect.top) / rect.height;

    material.uniforms.uMouse.value.set(x, y);
  };

  handleMouseEnter = () => {
    targetMouseStrength = 1;
  };

  handleMouseLeave = () => {
    targetMouseStrength = 0;
  };

  window.addEventListener("resize", handleResize);
  el.addEventListener("mousemove", handleMouseMove);
  el.addEventListener("mouseenter", handleMouseEnter);
  el.addEventListener("mouseleave", handleMouseLeave);

  const animate = () => {
    material.uniforms.uTime.value = clock.getElapsedTime();

    material.uniforms.uMouseStrength.value +=
      (targetMouseStrength - material.uniforms.uMouseStrength.value) * 0.06;

    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  };

  animate();
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);

  if (container.value) {
    container.value.removeEventListener("mousemove", handleMouseMove);
    container.value.removeEventListener("mouseenter", handleMouseEnter);
    container.value.removeEventListener("mouseleave", handleMouseLeave);
  }

  cancelAnimationFrame(animationId);

  if (mesh) {
    mesh.geometry.dispose();
  }

  if (material) {
    material.dispose();
  }

  if (renderer) {
    renderer.dispose();

    if (renderer.domElement && renderer.domElement.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  }
});
</script>

<template>
  <div ref="container" class="water-canvas"></div>
</template>

<style scoped>
.water-canvas {
  width: 100%;
  height: 100%;
}
</style>
