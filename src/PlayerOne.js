import React from 'react'

class PlayerOne extends React.Component{

    render(){
        return (<div>


            <p>PlayerOne</p>
            <label>Name</label>
            <b>    {this.props.name1}</b>


        </div>)
    }
}

export default PlayerOne