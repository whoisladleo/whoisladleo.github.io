import React from 'react'
import '../App.css'
import me from '../assets/me.png'

// import Button from 'react-bootstrap/button'

function Home() {
    return (
        <div className="home">
            <div className={'left auto'}>
                <h3 className={'lead uppercase'}>i am denis t. rwelamila</h3>
                <h1 className={'capitalize title'}>software developer</h1>
                {/*<Button/>*/}
            </div>
            <div className={'right auto'}>
                <img className="me" src={me} alt="Denis Rwelamila"/>
                {/*<p className="intro-text">Hey! <code>LADLEO</code> here!</p>*/}
            </div>
        </div>

    )
}

export default Home;
