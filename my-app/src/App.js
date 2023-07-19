import React, { Component } from 'react'

import './style.css'

class App extends Component{

    constructor(props){
        super(props)
        this.state = {
            numero: 0,
            botao: 'Vai'
        }

        this.timer = null
        this.vai = this.vai.bind(this)
        this.zerar = this.zerar.bind(this)
    }

    vai(){
        let state = this.state
        
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null
            state.botao = 'Vai'
            this.setState(state)

        } else {
            this.timer = setInterval(() => {
            state.numero += 0.1
            state.botao = 'Pausar'
            this.setState(state)    
        }, 100);
        }


        
    }

    zerar(){
        let state = this.state
        clearInterval(this.timer)
        state.numero = 0
        this.timer = null
        state.botao = 'Vai'
        this.setState(state)
        
    }



    render(){
        return(
            <div className='container' >
                <img src={require('./image/cronometro.png')} alt='cronometro' className='image' />
                <a className='timer' href >{this.state.numero.toFixed(1)}</a>
                <div className='areaBtn' >
                    <a className='botao' href onClick={this.vai}  >{this.state.botao}</a>
                    <a className='botao' href onClick={this.zerar} >Zerar</a>
                </div>
            </div>
        )
    }
}

export default App