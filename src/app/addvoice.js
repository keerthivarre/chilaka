var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');
import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';

// var Button = require('../common/button');

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
  componentDidMount : function(){

      // this.prepareRecordingPath(audioPath);
  },
  render: function(){
    return <View style = {styles.container}>

    <View style ={styles.imgwrapper2}>
    <TouchableHighlight onPress={this.onPress}>
      <Image
        source={require('./img/lion1.jpg')}
      />


    </TouchableHighlight>
    <View style = {styles.buttonwrapper}>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.button}>start</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.button}>stop</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.button}>play</Text>
    </TouchableHighlight>
    </View>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.text}>Next--></Text>
    </TouchableHighlight>
    </View>
    </View>
  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'training'});
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
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'green',
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

},
buttonwrapper: {
 flexDirection: 'row',// takes 5/8ths of available space
justifyContent: 'space-around',
alignItems: 'center'
}

});
