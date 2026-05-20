import { useEffect, useRef } from "react"
import * as THREE from "three"

export function AtlasiHeroCanvas() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const vertexShader = `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `

    const fragmentShader = `
      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.03;
        float lineWidth = 0.0015;

        vec3 baseColor = vec3(0.172, 0.290, 0.243);
        vec3 goldColor = vec3(0.788, 0.573, 0.165);
        vec3 greenLight = vec3(0.243, 0.420, 0.353);
        vec3 parchment = vec3(0.961, 0.937, 0.878);

        vec3 color = baseColor;

        float gold = 0.0;
        for(int i = 0; i < 5; i++){
          gold += lineWidth * float(i * i) / abs(
            fract(t + float(i) * 0.015) * 4.5
            - length(uv)
            + mod(uv.x + uv.y, 0.25)
          );
        }
        color += goldColor * gold * 1.2;

        float greenL = 0.0;
        for(int i = 0; i < 4; i++){
          greenL += lineWidth * float(i) / abs(
            fract(t * 0.8 - 0.02 * float(i)) * 5.0
            - length(uv * 1.1)
            + mod(uv.x - uv.y, 0.3)
          );
        }
        color += greenLight * greenL * 0.6;

        float cream = 0.0;
        for(int i = 0; i < 3; i++){
          cream += (lineWidth * 0.5) * float(i) / abs(
            fract(t * 1.2 + float(i) * 0.03) * 6.0
            - length(uv * 0.9)
            + mod(uv.y, 0.18)
          );
        }
        color += parchment * cream * 0.3;

        float vignette = 1.0 - smoothstep(0.6, 1.4, length(uv));
        color *= vignette;

        gl_FragColor = vec4(color, 1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    }
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      uniforms.resolution.value.set(renderer.domElement.width, renderer.domElement.height)
    }
    onResize()
    window.addEventListener("resize", onResize)

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      uniforms.time.value += 0.04
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      window.removeEventListener("resize", onResize)
      cancelAnimationFrame(animId)
      if (container.contains(renderer.domElement))
        container.removeChild(renderer.domElement)
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 h-full w-full overflow-hidden z-0"
    />
  )
}
