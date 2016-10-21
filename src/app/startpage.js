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
    return <View style ={styles.container}>
    <Text style ={styles.text}> LEARN ANIMALS</Text>
      <Text style ={styles.text}> CHOOSE YOUR LANGUAGE</Text>
      <View style = {styles.buttonwrapper}>
      <Button text={'English'} onPress={this.onPress} />

    <Button text={'Start'} onPress={this.startRecording} />
    <Button text={'Stop'} onPress={this.stopRecording} />
    <Button text={'Play'} onPress={this.playRecording} />

    </View>

    </View>
  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'training'});
},
startRecording : function() {
//log the user in
console.log("In playsound");
// AudioRecorder.startRecording();
AudioRecorder.startRecording();
},

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
