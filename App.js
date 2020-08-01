import React from 'react';
import { ToastAndroid,StyleSheet, Text, View, Alert, Button,TouchableOpacity, Clipboard, Image } from 'react-native';



export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      randomcolor:null,
    };
  }
  set_Text_Into_Clipboard = () => {
    Clipboard.setString(this.state.randomcolor);
  }
  RandomColorGenerator = () => {
    return(
      "rgb(" +Math.floor(Math.random()* 256) + ","
      +Math.floor(Math.random()* 256) + ","+
      +Math.floor(Math.random()* 256) + ")"
     );
  }
  ButtonPressed = () =>
  {
    this.setState({randomcolor: this.RandomColorGenerator() })
  }
  createTButtonAlert = () => {
      ToastAndroid.show("Copied to clipboard", ToastAndroid.SHORT);
    };
  render(){
    return (
      <View style={[styles.container,{backgroundColor: this.state.randomcolor}]}>
      <Text style={styles.stl}>Press the below Button to change the color</Text>
      <TouchableOpacity onPress={this.ButtonPressed}>
      <Text style={styles.txt}>
      {this.state.randomcolor}
      </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.set_Text_Into_Clipboard(); this.createTButtonAlert();}}>
      <Image style={{marginTop:10,height:40, width:40}} source={{uri:"https://img.icons8.com/ios-glyphs/90/000000/copy.png"}}/>
      </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stl:{
    marginTop: 20,
    color:"black",
    marginBottom:40
  },
  txt:{
    paddingVertical:10,
    backgroundColor:"teal",
    borderRadius:10,
    paddingHorizontal:70,
    fontSize: 20,
    color:"white",
    borderWidth:2,
    borderColor:"white",
  }
});
