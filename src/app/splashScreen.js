
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Linking,
    Image,
} from 'react-native'
var SplashScreen = require('@remobile/react-native-splashscreen');
module.exports = React.createClass({


    getInitialState: function () {
      return {
        done: false,

      }
  },

     timer()  {
       setTimeout(() => {
         this.setState ({
           done: true

         });
       }, 1000)

     },

    componentDidMount() {
      this.timer();
    },


    render: function() {
        return (
                  this.state.done ?
                  ({...this.props.children})
                  :
                  (   <View style = {styles.container}>
                    <Image source = {require('./img/bird.gif')} style ={styles.image}>
                </Image>
              </View>
              )


        )
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    item: {
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
       },
    line: {
        flex: 1,
        height: 0.3,
        backgroundColor: 'darkgray',
    },
    image: {
      width: 150 ,
      height: 150,
      // alignSelf: 'center',

    }
});
