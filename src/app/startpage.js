'use strict';
var React = require('react');


var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');

var Button = require('../common/button');


module.exports = React.createClass({
  render: function(){
    return <View style ={styles.container}>
    <Text style ={styles.text}> LEARN ANIMALS</Text>
      <Text style ={styles.text}> CHOOSE YOUR LANGUAGE</Text>
      <View style = {styles.buttonwrapper}>
    <Button text={'English'} onPress={this.playSound} />
    <Button text={'English'} onPress={this.onPress} />

    </View>

    </View>
  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'second'});
}

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green'
  },
  buttonwrapper: {
   flexDirection: 'row',// takes 5/8ths of available space
 justifyContent: 'space-around',
 alignItems: 'center'
  }

});
