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

var images = require('./imageLoader');
var Button = require('../common/button');
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
  getInitialState: function(){
    let animal = this.props.name;
    var index = this.props.index;
    return {audioPath:AudioUtils.DocumentDirectoryPath+`/${animal}.aac`}
  },
  startPress : function(){



    let audioPath = this.state.audioPath;
    console.log(audioPath);
      this.prepareRecordingPath(audioPath);
      AudioRecorder.startRecording();


  },

  render: function(){
    return <View>
    <Image  style={styles.imgwrapper}
      source={images()[this.props.name]}>
      </Image>
      <View>
    <Button text={'Start'} onPress={this.startPress} />
    <Button text={'Stop'} onPress={this.stopRecording} />
    <Button text={'Play'} onPress={this.playRecording} />
    </View>
    <Button text={'Next'} onPress={this.gotoNextAnimal} />

    </View>

  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'addvoice'});
},
gotoNextAnimal: function() {


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

  AudioPlayer.play(this.state.audioPath);

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
