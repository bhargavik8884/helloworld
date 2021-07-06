import React, { Component } from 'react'
import "./Style.css"

export default class counter extends Component {
    state={
        count: 0,
        
    }
    increment = ()=>

    {
    this.setState({
        count:this.state.count+1
        
    })
    

    }

    decrement=()=>{
        
        
        if(this.state.count>0){
                
        this.setState({
            count:this.state.count-1
        })
        }
        
    
    }
    reset =()=>{
        this.setState({
            count:0
        })

    }
    render() {
        return (
            <>
            

            
            <div className="main">
            <h1 id="header">{this.state.count} </h1>


               <button className="green" onClick={this.increment}> + </button>
               <button className="yellow" onClick={this.reset} > RESET </button>
               <button className="red" onClick={this.decrement}> - </button>
                
            </div>

            </>
        )
    }
}