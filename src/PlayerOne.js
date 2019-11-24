import React from 'react'

class PlayerOne extends React.Component {

    render() {
        return (<div>


            <p>PlayerOne</p>
            <label>Name: </label>
            <b>    {this.props.name1}</b>
            <br/>
            <label>Times played:  </label>
            <b>   {this.props.times1}</b>
            <br/>
            <button onClick={(e)=>this.props.onClickPlayer1(e)} disabled={this.props.isPlaying1}>
                {this.props.isPlaying1? "The user is playing now" : "Play" }
            </button>




        </div>)
    }
}

export default PlayerOne