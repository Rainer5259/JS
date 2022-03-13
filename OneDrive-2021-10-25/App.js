import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';

class App extends Component{

constructor(props){
  super(props);
  this.fechaBiscoito = this.fechaBiscoito.bind(this); 
  this.state = {

    textoFrase: '',
    img: require('./src/biscoito.png')
  };
  this.quebraBiscoito = this.quebraBiscoito.bind(this);
  this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
  ];
  
}

//Função sempre Fora do Construtor****

quebraBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

  this.setState({
    textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
    img: require('./src/biscoitoAberto.png')
  });

}
fechaBiscoito(){
  this.state.textoFrase, this.state.img;
}

  render(){
    return(
      <View style={styles.container} > 
    
        <Image 
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
         <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={this.fechaBiscoito}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Fechar Biscoito</Text>
            </View>
          </TouchableOpacity>
        </View> 
          
        
      </View>
      
    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  img:{
    width: 250,
    height: 250,
  },
  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btnContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  botao:{
    marginLeft: 15,
    width: 130,
    height: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
    textAlign: 'center'
  }


});

export default App; 
