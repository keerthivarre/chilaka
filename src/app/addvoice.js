var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');
var audioPath = AudioUtils.DocumentDirectoryPath+'/right.aac';
var Button = require('../common/button');


import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';

// var Button = require('../common/button');

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
    <TouchableHighlight onPress={this.gotoHomepage}>

    <Text style={styles.text}>Back</Text>
    </TouchableHighlight>

    <View style ={styles.imgwrapper2}>

    <TouchableHighlight onPress={this.onPress}>
      <Image
        source={require('./img/elephant.jpg')}
      />
  </TouchableHighlight>
    <View style = {styles.buttonwrapper}>
    <Button text={'Start'} onPress={this.startPress} />
    <Button text={'Stop'} onPress={this.stopRecording} />
    <Button text={'Play'} onPress={this.playRecording} />
    <Button text={'Save'} onPress={this.playRecording} />

    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.text}>Next--></Text>
    </TouchableHighlight>
    </View>
    </View>
</Image>
},
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'training'});
},
gotoHomepage : function() {
//log the user in
this.props.navigator.push({name: 'homepage'});
},
stopRecording: function(){
  console.log("In stop recording");
  AudioRecorder.stopRecording();
},

playRecording: function(){
  // AudioRecorder.playRecording();
  AudioPlayer.play(audioPath);
  console.log(audioPath);
},

playRecording1: function(){
  // AudioRecorder.playRecording();
  // AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
  console.log('lion');
},
playRecording2: function(){
  // AudioRecorder.playRecording();
  // AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
  console.log('horse');
}




});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    width:null,
    height:null

  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 100
  },
imgwrapper2: {
  flex: 1,
  justifyContent: 'center',
alignItems: 'center',

},
button: {
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: 'green',
  borderRadius: 5,
  padding: 5,
  marginTop: 10,
  color: 'white'

},
buttonwrapper: {
justifyContent: 'space-around',
alignItems: 'center'
}

});
