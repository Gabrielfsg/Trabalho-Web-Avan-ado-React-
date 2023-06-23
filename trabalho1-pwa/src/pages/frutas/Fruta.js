import React from 'react'

class Fruta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: '',
            frutas: [],
            frutaEscolhida: ''
        };
        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
        this.changeFrutaEscolhida = this.changeFrutaEscolhida.bind(this)
        this.submitFrutaEscolhida = this.submitFrutaEscolhida.bind(this)
    }

    change(event) {
        this.setState({ valor: event.target.value })
    }

    changeFrutaEscolhida(event) {
        this.setState({ frutaEscolhida: event.target.value })
    }

    submit(event) {
        let val = 0;
        this.state.frutas.forEach(f => {
            if(f === this.state.valor){
                val = 1;
            }
        });

        if(val === 1){
            alert('A fruta já foi adicionada.')
            event.preventDefault()
        } else {
        this.setState({ frutas: [...this.state.frutas, this.state.valor] })
        event.preventDefault()
        }
    }

    submitFrutaEscolhida(event) {
        alert('A fruta escolhida é: ' + this.state.frutaEscolhida);
        event.preventDefault();
    }

    render() {
        const listaFruta = this.state.frutas.map((fruta, index) => <option key={index} value={fruta}>{fruta}</option>)
        return (
            <div>
                <br></br>
                <form onSubmit={this.submit}>
                    <label>Digite uma: </label>
                    <input type="text" value={this.state.valor} onChange={this.change} />
                    <input type="submit" value="Submeter" onClick={this.state.frutaEscolhida = this.state.valor} />
                </form>
                <br></br>
                <form onSubmit={this.submitFrutaEscolhida}>
                    <select value={this.state.frutaEscolhida} onChange={this.changeFrutaEscolhida}>
                        {listaFruta}
                    </select>
                    <input type="submit" value="Selecionar Fruta" />
                </form>
            </div>
        );
    }
}

export default Fruta