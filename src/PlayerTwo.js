import React from 'react'

class PlayerTwo extends React.Component{

    render(){
        return (<div>
            <p>PlayerTwo</p>
            <label>Name</label>
            <b>    {this.props.name2}</b>


        </div>)
    }
}

export default PlayerTwo