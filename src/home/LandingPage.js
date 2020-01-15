import React from 'react'
import '../App.css'
import me from '../assets/me.png'
import Button from "@material-ui/core/Button";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className={'left auto'}>
                    <h3 className={'lead uppercase'}>i am denis t. rwelamila</h3>
                    <h1 className={'capitalize title'}>software developer</h1>
                    <Button variant={'contained'} color={'primary'} size={'large'}
                            href={"mailto:rwelamila.jr@gmail.com"}>contact me</Button>
                </div>
                <div className={'right auto'}>
                    <img className="me" src={me} alt="Denis Rwelamila"/>
                </div>
            </div>

        );

    }
}
export default Home;
