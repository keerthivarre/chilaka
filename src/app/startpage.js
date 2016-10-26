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
var audioPath = AudioUtils.DocumentDirectoryPath+'/elephant.aac';
import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';
// var { AudioPlayer } = require('react-native').NativeModules;


module.exports = React.createClass({

  prepareRecordingPath(audioPath){
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000
    });
  },
  startPress : function(){

      this.prepareRecordingPath(audioPath);
      AudioRecorder.startRecording();


  },

  render: function(){
    return <Image source = {require('./img/forest.jpg')} style ={styles.container}>
    <Text style ={styles.text}> LEARN ANIMALS</Text>
      <Text style ={styles.text}> CHOOSE YOUR LANGUAGE</Text>
      <View style = {styles.buttonwrapper}>
      <Button text={'Telugu'} onPress={this.onPress} />
      <Button text={'swipe'} onPress={this.gotoSwipe} />

    <Button text={'Start'} onPress={this.startPress} />
    <Button text={'Stop'} onPress={this.stopRecording} />
    <Button text={'Play'} onPress={this.playRecording} />

    </View>
    </Image>
  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'addvoice'});
},
gotoSwipe : function() {
//log the user in
this.props.navigator.push({name: 'swipe'});
},
// startRecording : function() {
// //log the user in
// console.log("In playsound");
// // AudioRecorder.startRecording();
// AudioRecorder.startRecording();
// },

stopRecording: function(){
  console.log("In stop recording");
  AudioRecorder.stopRecording();
},

playRecording: function(){
  // AudioRecorder.playRecording();
  AudioPlayer.play(audioPath);
  console.log(audioPath);
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
   flexDirection: 'row',// takes 5/8ths of available space
 justifyContent: 'space-around',
 alignItems: 'center'
  }

});
