import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity  } from 'react-native';


class App extends Component{


constructor(props){
  super(props);

  this.state = {

    teclado: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],

    valor: '',
    img: require('./src/biscoito.png')
  };

  
}

//Função sempre Fora do Construtor****

quebraBiscoito(){
  let numeroAleatorio = Math.floor(Math.random() * this.frases.length)

  this.setState({
    textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
    img: require('./src/biscoitoAberto.png')
  });

}
onPress = () => {

  this.setState({

    teclado: [[1, 2, 3, 4, 5, 6, 7, 8, 9]],
    valor: this.state.teclado = this.state.valor
  })
}

  render(){
    return(
      <View style={styles.headerContainer}>
          <Image style={styles.logo} 
          source={require('./src/mercado-pago.png')} />
                
        
         <Text>loasd</Text>
         <View>
           <View style={styles.container}></View>
             
             <View style={styles.console}><Text style={styles.consoleTexto}>{this.state.valor}</Text></View>
                         <View style={styles.calculator}>
              
              <View>
                
                <View><TouchableOpacity style={styles.numPress} onPress={ this.state.teclado }><Text style={[styles.number]}>1</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>4</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>7</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>.</Text></TouchableOpacity></View>
              
              </View>

              <View>
                
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>2</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>5</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>8</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>0</Text></TouchableOpacity></View>
              
              </View>

              <View>
                
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>3</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>6</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>9</Text></TouchableOpacity></View>
                <View><TouchableOpacity style={styles.numPress} onPress={this.onPress}><Text style={[styles.number]}>00</Text></TouchableOpacity></View>
              
              </View>
              
              
              
   
                  
          
            </View>
            </View>

       
      
      </View>
    
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center'
    
  },
  headerContainer:{
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  logo:{
    marginTop: 100,
    width: 193,
    height: 50,
  },
  console: {
    marginBottom: 100,
    marginLeft: 40,
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#28316b',
    height: 100,
    width: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    
  },
  calculator:{
    flex: 0.3,
    marginBottom: 390,
    height: 305,
    width: 380,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  number:{
    marginTop: 4,
    marginHorizontal: 3,
    width: 120,
    height: 70,
    color: '#28316b',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'space-between',
    borderWidth: 5,
    borderColor: '#245bf2',
    borderRadius: 10,
  },
  numPress: {
    
  },
  textoFrase:{
    fontSize: 20,
    color: 'blue',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btnContainer:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: "#DDDDDD",
    padding: 5
    
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  consoleTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
    textAlign: 'center'
  }


});

export default App; 
