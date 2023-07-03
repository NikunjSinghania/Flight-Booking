import React, { useEffect, useRef } from 'react'
import '../Css/login.css'

function Login() {

  const cloud1 = useRef()
  const cloud2 = useRef()

  useEffect(() => {
    document.addEventListener('mousemove', (e) => {
        cloud1.current.style.top = (500+e.clientY/20)+'px';
        cloud1.current.style.left = 500+e.clientX/20+'px';
        cloud2.current.style.top = (100-e.clientY/20)+'px';
        cloud2.current.style.left = -e.clientX/20+'px';
        //cloud1.current.style.top = (500+e.clientY/20)+'px';
        //cloud1.current.style.left = 500+e.clientX/20+'px';
      })
  },[cloud1, cloud2])

  

  return (
    <>
        <div id='formCollector'>
            <img ref={cloud1} className='cloud1' src={process.env.PUBLIC_URL+'/cloud1.png'} />
            <img ref={cloud2} className='cloud2' src={process.env.PUBLIC_URL+'/cloud1.png'} />

            <span id="main">
                <h2>Flight Booking System</h2>
                <h4>Take it away from HERE.</h4>
                <form>
                    <span>
                        <label>Username</label>
                        <input type="text" name='username' placeholder='Enter your Username'/>
                    </span>
                    <span>
                        <label>Password</label>
                        <input type="text" name='password' placeholder='Enter your Password'/>
                    </span>
                    <span>
                        <input type="submit" value="Submit"/>
                    </span>
                </form>
            </span>
        </div>
        <img id='rside' src={process.env.PUBLIC_URL+'/flight.png'} />
    </>
  )
}

export default Login