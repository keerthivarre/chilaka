var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Image
} = require('react-native');

var Button = require('../common/button');
var Recording = require('./recording.js');




module.exports = React.createClass({

  getInitialState: function() {
        return { };
    },
  render: function(){

      return <Recording name ='monkey'/>



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
saveData: function(value) {
        AsyncStorage.setItem("myKey", value);
        this.setState({"myKey": value});
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
