import React from 'react';

class ListagemApi extends React.Component {
    state = {
        linguagens: []
    };

    componentDidMount() {
        fetch('http://alefesouza.dev/api/languages.php')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    linguagens: res
                });
            });
    }

    render() {
        return (
            <div>
                <h1>Lista de linguagens de programação</h1>

                <ul>
                    {this.state.linguagens.map(item => (
                        <li key={item.id}>
                            <p><b>Nome:</b> {item.name} | <b>Criador:</b> {item.creator}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default ListagemApi;

