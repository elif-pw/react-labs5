import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import React from 'react'

class GameAdmin extends React.Component {
    constructor() {
        super();
        this.state = {
            name1: '',
            name2: '',
            isplaying1:false,
            isplaying2:false,
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

    // onClickPlayer1 = (e)=>{
    //     if(this.state.isplaying1==false)
    //     {
    //         this.setState({isplaying2:false, isplaying1:true, times1:this.state.times1+1})
    //     }
    // }
    onClickPlayer1 =(e)=> {
        if ( this.state.isplaying1 == false) {
            this.setState(prevState => ({
                isplaying2: false, isplaying1: true,
                times1: prevState.times1 + 1
            }))
        }
    }

    // onClickPlayer2 = (e)=>{
    //
    //     if(this.state.isplaying2==false) {
    //         this.setState({isplaying2: true, isplaying1: false, times2:this.state.times2+1})
    //     }
    // }

    onClickPlayer2 =(e)=> {
        if ( this.state.isplaying2 == false) {
            this.setState(prevState => ({
                isplaying1: false, isplaying2: true,
                times2: prevState.times2 + 1
            }))
        }
    }

    render() {
        return (<div>
            <fieldset>
                <PlayerOne name1={this.state.name1} onClickPlayer1={this.onClickPlayer1}
                isPlaying1={this.state.isplaying1} times1={this.state.times1}/>

            </fieldset>
            <fieldset>
                <PlayerTwo name2={this.state.name2} onClickPlayer2={this.onClickPlayer2}
                           isPlaying2={this.state.isplaying2} times2={this.state.times2}/>
            </fieldset>


            <br/>
            <b>Set Name of Player One   </b>
            <input name1={this.state.name1} onChange={this.onChangeName1}/>
            <br/>
            <br/>
            <b>Set Name of Player Two   </b>
            <input name2={this.state.name2} onChange={this.onChangeName2}/>
            <br/>


        </div>)
    }
}

export default GameAdmin