import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import React from 'react'

class GameAdmin extends React.Component {
    constructor() {
        super();
        this.state = {
            name1: '',
            name2: '',
            times1: 0,
            times2: 0
        }
    }

    onChangeName1 = (e) => {
        this.setState({name1: e.target.value})
    }
    onChangeName2 = (e) => {
        this.setState({name2: e.target.value})
    }

    render() {
        return (<div>
            <fieldset>
                <PlayerOne name1={this.state.name1}/>
            </fieldset>
            <fieldset>
                <PlayerTwo name2={this.state.name2}/>
            </fieldset>

            <input name1={this.state.name1} onChange={this.onChangeName1}/>
            <input name2={this.state.name2} onChange={this.onChangeName2}/>
        </div>)
    }
}

export default GameAdmin