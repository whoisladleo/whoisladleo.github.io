import React from 'react';
import '../App.css'

class WelcomeNote extends React.Component {
    experienceInYears() {
        let date = new Date();
        let time = date.getFullYear() - 2013;
        return time + " years";
    }


    render() {
        return (
            <div className={'home'}>
                <div className={"auto"}>
                    <h1 className={'title'}>About Me</h1>
                    <h3>I have been actively doing professional software development for
                        about <code>{this.experienceInYears()}</code></h3>
                    <h3>In all that time i have worked mostly on <code>Web Applications</code> and <code>Phone
                        Applications</code></h3>
                    <h3>As much as I want to say I am proficient in #java, #pyhthon, #php, #react.... I will refrain and
                        say I handle <code>Backend Development</code> just as good as I handle <code>FrontEnd
                            Development</code></h3>
                </div>
            </div>
        );
    }
}
export default WelcomeNote;