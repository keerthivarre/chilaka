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
const { BlurView, VibrancyView } = require('react-native-blur');
var audioPath = AudioUtils.DocumentDirectoryPath+'/wrong.aac';
import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';
// var { AudioPlayer } = require('react-native').NativeModules;


module.exports = React.createClass({

  // prepareRecordingPath(audioPath){
  //   AudioRecorder.prepareRecordingAtPath(audioPath, {
  //     SampleRate: 22050,
  //     Channels: 1,
  //     AudioQuality: "Low",
  //     AudioEncoding: "aac",
  //     AudioEncodingBitRate: 32000
  //   });
  // },
  // componentDidMount : function(){
  //
  //     this.prepareRecordingPath(audioPath);
  // },

  render: function(){
    return <Image source = {require('./img/forest.jpg')} style ={styles.container}>
    <Text style ={styles.text}> LEARN ANIMALS</Text>
      <Text style ={styles.text}> CHOOSE YOUR LANGUAGE</Text>
      <View style = {styles.buttonwrapper}>
      <Button text={'ADD VOICE LABELS'} onPress={this.gotoAddVoice} />

    <Button text={'START training'} onPress={this.gotoTraining} />
    <Button text={'START TEST SEQUENCE'} onPress={this.gotoTest} />
    <Button text={'check'} onPress={this.gotoStart} />


    </View>
    </Image>
  },
  gotoStart: function() {
  //log the user in
  this.props.navigator.push({name: 'start'});
},

  gotoAddVoice : function() {
  //log the user in
  this.props.navigator.push({name: 'addvoice'});
},
gotoTraining : function() {
//log the user in
this.props.navigator.push({name: 'training'});
},
gotoTest : function() {
//log the user in
this.props.navigator.push({name: 'test'});
}




});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    // backgroundColor: 'black'
    width: null,
    height: null
  },
  text: {
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  buttonwrapper: {
  // takes 5/8ths of available space
 justifyContent: 'space-around',
 alignItems: 'center'
  }

});
