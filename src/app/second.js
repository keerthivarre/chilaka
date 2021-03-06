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

var Button = require('../common/button');

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
    <Text style = {styles.text}> Tiger  </Text>
    <View style ={styles.imgwrapper1}>
    <TouchableHighlight onPress={ () => this.playRecording('lion')}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/lion1.jpg')}
      />

    </TouchableHighlight>
    <TouchableHighlight onPress={() => this.playRecording('lion')}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/lion1.jpg')}
      />


    </TouchableHighlight>
    </View>

    <View style ={styles.imgwrapper2}>
    <TouchableHighlight onPress={this.onPress}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/lion1.jpg')}
      />


    </TouchableHighlight>

    </View>
    </View>
  },
  onPress : function() {
  //log the user in
  this.props.navigator.push({name: 'addvoice'});
},


playRecording: function(animal){
  // AudioRecorder.playRecording();
   AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
  console.log('horse');
}




});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    flex: 2,
    textAlign: 'center',
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'green',
    marginTop: 100
  },
  imgwrapper1: {
    flex: 2,
    flexDirection: 'row',// takes 5/8ths of available space
  justifyContent: 'space-around',
  alignItems: 'center',

},
imgwrapper2: {
  flex: 2,
  flexDirection: 'row',// takes 5/8ths of available space
justifyContent: 'space-around',
alignItems: 'center',

}

});
