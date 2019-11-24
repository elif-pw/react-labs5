import React from 'react'

class PlayerTwo extends React.Component {

    render() {
        return (<div>
            <p>PlayerTwo</p>
            <label>Name:</label>
            <b>    {this.props.name2}</b>
            <br/>

            <label>Times played:  </label>
            <b> {this.props.times2}</b>
            <br/>
            <button onClick={(e)=>this.props.onClickPlayer2(e)} disabled={this.props.isPlaying2}>
                {this.props.isPlaying2? "The user is playing now" : "Play" }
            </button>


        </div>)
    }
}

export default PlayerTwo