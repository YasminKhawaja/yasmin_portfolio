import * as THREE from 'three'

/**
 * Creates a soft, abstract rotating 3D shape (an icosahedron wireframe
 * wrapped around a translucent core) that gently follows the mouse.
 * Kept dependency-light: plain three.js, no extra loaders/controls.
 */
export function createHeroScene(canvas) {
  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  )
  camera.position.z = 6

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)

  // soft core
  const coreGeometry = new THREE.IcosahedronGeometry(1.4, 1)
  const coreMaterial = new THREE.MeshStandardMaterial({
    color: 0xd3d9bd,
    roughness: 0.4,
    metalness: 0.1,
    transparent: true,
    opacity: 0.85,
  })
  const core = new THREE.Mesh(coreGeometry, coreMaterial)
  scene.add(core)

  // wireframe shell, slightly larger, rotates the opposite way
  const shellGeometry = new THREE.IcosahedronGeometry(1.9, 1)
  const shellMaterial = new THREE.MeshBasicMaterial({
    color: 0x111111,
    wireframe: true,
    transparent: true,
    opacity: 0.18,
  })
  const shell = new THREE.Mesh(shellGeometry, shellMaterial)
  scene.add(shell)

  const ambient = new THREE.AmbientLight(0xffffff, 0.8)
  const point = new THREE.PointLight(0xffffff, 1.2)
  point.position.set(3, 3, 4)
  scene.add(ambient, point)

  let targetRotX = 0
  let targetRotY = 0
  let frameId = null

  function setPointerTarget(nx, ny) {
    // nx, ny expected in range [-1, 1]
    targetRotY = nx * 0.6
    targetRotX = ny * 0.4
  }

  function resize() {
    const { clientWidth, clientHeight } = canvas
    camera.aspect = clientWidth / clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize(clientWidth, clientHeight, false)
  }

  function animate() {
    core.rotation.y += 0.003
    core.rotation.x += 0.0015
    shell.rotation.y -= 0.0018

    // ease toward the mouse-driven target rotation for a floaty parallax feel
    core.rotation.y += (targetRotY - core.rotation.y) * 0.015
    core.rotation.x += (targetRotX - core.rotation.x) * 0.015
    shell.rotation.y += (targetRotY * 0.5 - shell.rotation.y) * 0.01
    shell.rotation.x += (targetRotX * 0.5 - shell.rotation.x) * 0.01

    renderer.render(scene, camera)
    frameId = requestAnimationFrame(animate)
  }

  animate()

  function dispose() {
    cancelAnimationFrame(frameId)
    coreGeometry.dispose()
    coreMaterial.dispose()
    shellGeometry.dispose()
    shellMaterial.dispose()
    renderer.dispose()
  }

  return { setPointerTarget, resize, dispose }
}
