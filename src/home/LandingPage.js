import React from 'react'
import '../App.css'
import me from '../assets/me.png'
import Button from "@material-ui/core/Button";

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className={'left auto'}>
                    <img className="me" src={me} alt="Denis Rwelamila"/>
                </div>
                <div className={'right auto'}>
                    <h3 className={'lead'}>Name: Rwelamila, Denis T.</h3>
                    <h3 className={'lead mt-1'}>Profession: Software Engineer</h3>

                    <Button className='button' variant={'contained'} color={'primary'} size={'large'}
                            href={"https://jofibo.com/s/RcMcTc7MYUN6XQjal7-v6Q"}>résumé</Button>
                </div>
            </div>

        );

    }
}
export default Home;
