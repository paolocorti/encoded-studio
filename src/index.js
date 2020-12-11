import { render } from 'react-dom'
import React, { useState, useEffect, useRef } from 'react'
import { Canvas, useThree } from 'react-three-fiber'
import { HTML } from 'drei'
import { Block } from './blocks'
import { Shapes, Categories, Box, Sphere, Panel } from './Home'
import logo from './assets/images/encoded_logo_text.png';
import state from './store'
import './styles.css'
import planar01 from './assets/images/planar_01.jpg';
import led01 from './assets/images/led_01.jpg';


function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree()
  return (
    <HTML
      portal={portal}
      style={{
        position: 'absolute',
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height
      }}>
      <div className={className} style={style}>
        {children}
      </div>
    </HTML>
  )
}

function App() {
  const [events, setEvents] = useState()
  const domContent = useRef()
  const scrollArea = useRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas
        colorManagement
        gl={{ alpha: false, antialias: true }}
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 100 }}
        onCreated={({ gl, events }) => {
          gl.setClearColor('white')
          gl.toneMappingExposure = 2.5
          gl.toneMappingWhitePoint = 1
          // Export canvas events, we will put them onto the scroll area
          setEvents(events)
        }}>
        <Block factor={1.5} offset={0}>
          <Shapes />
          <HtmlContent portal={domContent}>
            {/* <div className="menu left" style={{ top: '2.55rem' }}>
              <h2 style={{ fontSize: '2em', top: '4rem' }}>buerli.</h2>
            </div>
            <div className="menu right">
              <span>Login</span>
              <span>Sign up</span>
            </div> */}
            <div className="jumbo">
              {/* <h1>
                Encoded Studio
              </h1> */}
              <img src={logo} width='100%' />
              <Categories />
            </div>
          </HtmlContent>
        </Block>

        <Block factor={1.5} offset={1}>
          <Panel scale={[2, 2, 0.6]} texture={planar01} />
          <HTML center portal={domContent}>
          <h2>Award Winner</h2>
          <h4>Cross Fertilization Lab</h4>
          </HTML>
        </Block>

        <Block factor={1.5} offset={2}>
          <Panel scale={[2, 2, 0.6]} texture={led01} />
          <HTML center portal={domContent}>
            <h2>Flares from Darkness</h2>
            <h4>Light Design</h4>
          </HTML>
        </Block>


        <Block factor={1.5} offset={3}>
          <Sphere position={[-1, 2, -3]} scale={[1.2, 1.2, 1.2]} factor={Math.random()} />
          <HTML center portal={domContent}>
            <div>
              <h2 style={{ marginTop: '0px', fontSize: '40px'}}>encoded.studio@gmail.com</h2>
              <a target='_blank' href="https://instagram.com/encoded.studio">Follow us</a>
            </div>
          </HTML>
        </Block>


      </Canvas>

      <div className="scrollArea" ref={scrollArea} onScroll={onScroll} {...events}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 85}vh` }} />
      </div>
    </>
  )
}

render(<App />, document.querySelector('#root'))
