import React from "react"

/*

Uma página que será renderizada por um componente que possua um filho e a
frase: “É um tipoAutomovel”. No componente filho existirá um input de texto, um
button de inclusão e um de exclusão de um novo automóvel. Além disso, o
componente filho possuirá uma frase “Isto é um tipoAutomóvel” abaixo da frase do
pai, uma foto mostrando o automóvel em questão e quando clicar na foto, um alerta
mostrará uma descrição no estilo “Este tipoAutomóvel é um modeloAutomóvel”.
Perceba que apenas a foto do automóvel em questão estará sendo mostrada.
Abaixo da foto existirão botões para alternar entre os automóveis, sendo que o botão
do automóvel mostrado não aparecerá. Para as imagens, usem uma galeria
pré-definida, da mesma forma que o ponto 2. Não é necessário fazer tratamentos
para saber se a imagem consta ou não na galeria;

*/

function FilhoInputs(props){

    //as propriedades a seguir serão definidas na classe Automovel
    //incluirAutomovel e excluirAutomovel receberão como props as funções que estão dentro da classe/componente Automovel

    return(

        <div>

            <form>

                <label>Nome do automovel:

                    <input id="textoAuto" type="text" placeholder="Ex: (carro/caminhão/moto)"/>

                </label>

                <button onClick = {props.incluirAutomovel}>Incluir Automóvel</button>
                <button onClick = {props.excluirAutomovel}>Excluir Automóvel</button>

            </form>

        </div>

    );

}

function ButtonImg(props){

    if(props.index === 0) { //se for a primeira imagem, o botão "imagem anterior" nao será exibido

        if(props.tamTotal === 1){

            return(
                <div>
                    <h2>É um(a) {props.tipoAuto}</h2>
                    <img src={props.srcAuto} alt={props.tipoAuto} onClick={props.mostrarTipo}/>
                </div>

            );
        }else{

            return(
                <div>
                    <p>
                        <button onClick={props.proximaImagem}>Próxima Imagem</button>
                    </p>

                    <h2>É um(a) {props.tipoAuto}</h2>
                    <img src={props.srcAuto} alt={props.tipoAuto} onClick={props.mostrarTipo}/>

                </div>
            );

        }

    }
    else if(props.index > 0){

        if(props.index === props.tamTotal - 1){ //está no final do array

            console.log("Imagem ta no final do array")

            return(
                <div>

                    <p>
                        <button onClick = {props.imagemAnterior}>Imagem Anterior</button>
                    </p>
                    <h2>É um(a) {props.tipoAuto}</h2>
                    <img src={props.srcAuto} alt={props.tipoAuto} onClick={props.mostrarTipo}/>

                </div>
            );

        }else { //se a imagem estiver entre a primeira e a ultima, exibir ambos os botoes

            return (
                <div>

                    <p>
                        <button onClick={props.imagemAnterior}>Imagem Anterior</button>
                        <button onClick={props.proximaImagem}>Próxima Imagem</button>
                    </p>

                    <h2>É um(a) {props.tipoAuto}</h2>
                    <img src={props.srcAuto} alt={props.tipoAuto} onClick={props.mostrarTipo}/> <br/>

                </div>
            );

        }

    }


}

function obterIndex(imagens,tipoEscolhido){

    for(let i=0; i < imagens.length;i++){

        if(imagens[i].tipo === tipoEscolhido){
            return i
        }

    }

    return -1

}

class Automovel extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            temImg: false,
            imagens: [{
                url: '',
                tipo: ''
            }],
            indexImg: 0
        };

        /*Efetuando as binds para que as funções de evento sejam usadas em
         todo o escopo do componente */

        this.incluirAutomovel = this.incluirAutomovel.bind(this)
        this.excluirAutomovel = this.excluirAutomovel.bind(this)
        this.proximaImagem = this.proximaImagem.bind(this)
        this.imagemAnterior = this.imagemAnterior.bind(this)
        this.mostrarTipo = this.mostrarTipo.bind(this)
    }

    incluirAutomovel(e){

        e.preventDefault()

        //obtendo o tipo de automovel
        let tipoAuto = document.getElementById("textoAuto").value

        //montando o path
        let imgAtual = require("../auto/"+tipoAuto+".jpg")

        //criando novo objeto a ser adicionado
        let newAuto = {
            url: imgAtual,
            tipo: tipoAuto
        };

        if(this.state.temImg){
            this.setState({ //da um append da imagem no array de objetos (string do path) e o tipo
                imagens: [...this.state.imagens, newAuto],
            });

        }else{
            this.setState({ //da um append da imagem no array de objetos (string do path) e o tipo
                imagens: [newAuto],
                temImg: true
            });
        }

    }

    excluirAutomovel(e) {
        e.preventDefault()

        let tipoEscolhido = document.getElementById("textoAuto").value

        let indexSelecionado = obterIndex(this.state.imagens,tipoEscolhido)

        if(indexSelecionado !== -1){

            this.state.imagens.splice(indexSelecionado,1)

            this.setState({ //volta pro começo da galeria
                indexImg: 0
            })

            if (this.state.imagens.length === 0) {
                this.setState({
                    temImg: false
                })
            }
        } else {
            alert("O automóvel inserido não foi encontrado para remoção !");
        }

    }

    proximaImagem(){

        if (this.state.indexImg < this.state.imagens.length) {
            this.setState({
                indexImg: this.state.indexImg + 1
            });
        }
    }

    imagemAnterior(){
        if(this.state.indexImg > 0){
            this.setState({
                indexImg: this.state.indexImg - 1
            });
        }
    }

    mostrarTipo(){
        switch(this.state.imagens[this.state.indexImg].tipo){
            case "carro":{
                alert("Este carro é um Fiat Uno (Com Escada) !")
                break
            }
            case "moto":{
                alert("Esta moto é uma YAMAHA MT-03 !")
                break
            }
            case "caminhão":{
                alert("Este caminhão é o OPTIMUS PRIME !")
                break
            }
            default:{
                alert("Erro na imagem !")
                break
            }
        }
    }

    render(){
        let imgButton;
        if(this.state.temImg){ //se tiver algum path de imagem no array, a imagem atual será então enviada

            let indexAtual = this.state.indexImg; //obtendo o index da imagem atual

            //enviando propriedades para o componente filho
            imgButton = <ButtonImg index = {indexAtual} tamTotal = {this.state.imagens.length}
                                   srcAuto = {this.state.imagens[indexAtual].url}
                                   proximaImagem = {this.proximaImagem}
                                   imagemAnterior = {this.imagemAnterior}
                                   tipoAuto = {this.state.imagens[indexAtual].tipo}
                                   mostrarTipo = {this.mostrarTipo}
            />

        }

        return(
            <div>
                <h1>Página Automóvel</h1>
                <FilhoInputs
                    incluirAutomovel = {this.incluirAutomovel}
                    excluirAutomovel = {this.excluirAutomovel}
                />
                {imgButton}
            </div>

        );
    }
}

export default Automovel;
