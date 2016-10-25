var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');

//var Button = require('../common/button');

module.exports = React.createClass({
  render: function(){
    return <View style = {styles.container}>
    <Text style = {styles.text}> LION  </Text>
    <View style ={styles.imgwrapper1}>
    <TouchableHighlight onPress={this.onPress}>
      <Image
        style={styles.imgwrapper}
        source={require('./img/lion1.jpg')}
      />


    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>
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

  renderAnimals: function(){

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

    <TouchableHighlight onPress={ () => this.playRecording('rabbit')}>
      <Image
        source={require('./img/rabbit.jpg')}>
        </Image>

    </TouchableHighlight>


    {animals.map(function(animal, index){
      return(
      <TouchableHighlight key={index} onPress={ () => this.playRecording(animal)}>
        <Image
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Rabbit_in_montana.jpg'}}>
          </Image>

      </TouchableHighlight>);

    }
  )}






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
