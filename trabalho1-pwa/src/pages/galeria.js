import React, {Component} from 'react';

class  Galeria extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:'0',
            urls: []
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeImagem = this.removeImagem.bind(this);
    }

    handleClick(event) {
        this.setState( state =>({
            urls: [...state.urls,require('../galeria/imagem'+this.state.value+'.jpg')]
        }));
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    removeImagem(event){
        this.setState(state =>({
            urls:
                state.urls.filter((item) => {
                    return item !== require('../galeria/imagem'+this.state.value+'.jpg');
                })
        }));
        event.preventDefault();
    }

    render() {
        const list = this.state.urls.map((item, i) => {
            return <img key={i} src={item} alt="Imagem não encontrada"/>
        });
        return (
            <div>
                <h4>Galeria</h4>
                <p>Essa é página da galeria de Fotos. Digite um numero para buscar e exibir e/ou retirar a imagem já adicionara!</p>
                <form >
                    <label>Entre com o numero da Imagem:
                        <input id="img" type="number" value={this.state.value} onChange={this.handleChange} required />
                    </label>
                    <button onClick={this.handleClick}>Adicionar imagem</button>
                    <button onClick={this.removeImagem}>Remover Imagem</button>
                </form>
                <div>
                    {list}
                </div>
            </div>
        );
    }
}

export default Galeria;