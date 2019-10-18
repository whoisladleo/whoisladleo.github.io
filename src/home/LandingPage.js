import React from 'react'
import '../App.css'
import me from '../assets/me.png'


function Home() {
  return (
    <div class="home">
      <div>
      <img class="me" src={ me }/>
        <p class="intro-text">Hey! <code>LADLEO</code> here!</p>
        </div>
    </div>

  )
}

export default Home;
