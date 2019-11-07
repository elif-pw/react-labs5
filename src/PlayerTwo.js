import React from 'react'

class PlayerTwo extends React.Component {

    render() {
        return (<div>
            <p>PlayerTwo</p>
            <label>Name</label>
            <b>    {this.props.name2}</b>

            <label>Times played:  </label>

            <button onClick={(e)=>this.props.onClickPlayer2(e)}>
                {this.props.isPlaying2? "The user is playing now" : "Play" }
            </button>


        </div>)
    }
}

export default PlayerTwo