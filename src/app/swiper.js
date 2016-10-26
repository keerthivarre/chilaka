// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// import Swiper from 'react-native-swiper';
//
// var styles = StyleSheet.create({
//   wrapper: {
//   },
//   slide1: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#9DD6EB',
//   },
//   slide2: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#97CAE5',
//   },
//   slide3: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#92BBD9',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 30,
//     fontWeight: 'bold',
//   }
// });
//
// module.exports = React.createClass({
//   render: function() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={true}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     )
//   }
// });
//
// AppRegistry.registerComponent('kidsapp2', () => swiper);
var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,

} = require('react-native');

module.exports =React.createClass({
  render: function() {
    return (
      <TouchableHighlight
      style ={styles.wrapper}
      underlayColor ="gray"
      onPress={this.props.onPress}>
      <Text style={styles.buttonText}>{this.props.text}</Text>
      <View style={styles.slide1}>{this.props.swipeView}</View>
      </TouchableHighlight>
    )
  }

});

var styles= StyleSheet.create({
  wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
    }
  });
