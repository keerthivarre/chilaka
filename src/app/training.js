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
// import autoBind from 'react-autobind';

var Button = require('../common/button');
var Animal = require('./animalDisplay');


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
// construct(){ self(); this.playRecording = this.playRecording.bind(this); },

  componentDidMount : function(){

      // this.prepareRecordingPath(audioPath);
  },

  render: function(){
    let animals = ['monkey','rabbit','sheep'];
    return <View style = {styles.container}>
    <TouchableHighlight onPress={this.gotoHomepage}>

    <Text style={styles.text}>Back</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.text}>Next--></Text>
    </TouchableHighlight>




    {animals.map(function(animal, index){

        return <Animal name={animal} index={index}/>

    })
  }






    </View>

  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'training2'});
},
gotoHomepage : function() {
//log the user in
this.props.navigator.push({name: 'homepage'});
},

playRecording: function(animal){
  // AudioRecorder.playRecording();
   AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
  console.log('lion');
}





});

var styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    marginTop: 50,
  },
//   imgwrapper: {
//     flexDirection: 'row',// takes 5/8ths of available space
//   justifyContent: 'space-around',
//   alignItems: 'center',
//
//
// }
});
