import React from 'react'

class PlayerOne extends React.Component {

    render() {
        return (<div>


            <p>PlayerOne</p>
            <label>Name</label>
            <b>    {this.props.name1}</b>

            <label>Times played:  </label>

            <button onClick={(e)=>this.props.onClickPlayer1(e)}>
                {this.props.isPlaying1? "The user is playing now" : "Play" }
            </button>




        </div>)
    }
}

export default PlayerOne