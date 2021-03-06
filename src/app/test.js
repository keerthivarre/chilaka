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
    <TouchableHighlight onPress ={() => this.playRecording('monkey')}>

    <Image source = {require('./img/forest.jpg')} style ={styles.image}></Image>
    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.text}>Next--></Text>
    </TouchableHighlight>
    <View style ={styles.imgwrapper1}>
    <TouchableHighlight onPress={ () => this.playRecording('sheep')}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/sheep.jpg')}
      />

    </TouchableHighlight>
    <TouchableHighlight onPress={() => this.playRecording('goat')}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/goat.jpg')}
      />


    </TouchableHighlight>
    </View>

    <View style ={styles.imgwrapper2}>
    <TouchableHighlight onPress={() => this.playRecording('rabbit')}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/rabbit.jpg')}
      />


    </TouchableHighlight>
    <TouchableHighlight onPress={() => this.playRecording('monkey')}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/monkey.jpg')}
      />
      </TouchableHighlight>


    </View>



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
},




});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    width: null,
    height: null

  },
  image : {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  text: {
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    marginTop: 100,
  },
  imgwrapper1: {
    flex: 1,
    flexDirection: 'row',// takes 5/8ths of available space
  justifyContent: 'space-around',
  alignItems: 'center',


},
imgwrapper2: {
  flex: 1,
  flexDirection: 'row',// takes 5/8ths of available space
justifyContent: 'space-around',
alignItems: 'center',

}

});
