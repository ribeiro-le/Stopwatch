import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ultimotemp: null,
      number: 0,
      botao: 'Go',
      img: require('./src/cronometro.png')
    };
    this.timer = null

    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {

    if (this.timer != null) {
      clearInterval(this.timer);

      this.timer = null
      this.setState({ botao: 'Go' })
    }
    else {
      this.timer = setInterval(() => {
        this.setState({ number: this.state.number + 0.1 })
      }, 100)

      this.setState({ botao: 'Stop' })
    }


  }
  clear() {
    if (this.timer != null) {
      clearInterval(this.timer)
      this.timer = null
    }
    this.setState({
      number: 0,
      botao: 'Go',
      ultimotemp: this.state.number

    })
  }

  render() {
    return (
      <View style={styles.container}>

        <Image source={this.state.img} style={styles.cronometro}></Image>
        <Text style={styles.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.go}>
            <Text style={styles.btnText}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={this.clear}>
            <Text style={styles.btnText}>Clear</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.ultimotemp}>
          <Text style={styles.tempfinal}>
            {this.state.ultimotemp > 0 ? 'Final Time: ' + this.state.ultimotemp.toFixed(2) + 's' : ''}
          </Text>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timer: {
    marginTop: -160,
    color: '#fff',
    fontSize: 70
  },
  btnArea: {
    marginTop: 70,
    flexDirection: 'row',
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 20,
    backgroundColor: '#5757FF',
    borderRadius: 8

  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  ultimotemp: {
    marginTop: 50
  },
  tempfinal: {
    fontSize: 20,
    fontStyle: 'italic',
    color: 'gray'
  }
})



export default App;