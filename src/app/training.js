var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Image
} = require('react-native');
import Swiper from 'react-native-swiper';

import {AudioRecorder,AudioPlayer, AudioUtils} from 'react-native-audio';
// import autoBind from 'react-autobind';

var Button = require('../common/button');
var Swipe = require('./swiper');
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
    return <Image source = {require('./img/forest.jpg')} style ={styles.container}>
    <Swiper showsButtons={true}>
    <View style={styles.slide1}>

    <TouchableHighlight onPress={this.gotoHomepage}>

    <Text style={styles.text}>Back</Text>
    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>

    <Text style={styles.Next}>Next--></Text>
    </TouchableHighlight>



    <View  style={styles.imgwrapper}>

    {animals.map(function(animal, index){

        return <Animal name={animal} index={index}/>

    })

  }
  </View>

  </View>
  <View style={styles.slide2}>

  <TouchableHighlight onPress={this.gotoHomepage}>

  <Text style={styles.text}>Back</Text>
  </TouchableHighlight>
  <TouchableHighlight onPress={this.onPress}>

  <Text style={styles.Next}>Next--></Text>
  </TouchableHighlight>



  <View  style={styles.imgwrapper}>

  {animals.map(function(animal, index){

      return <Animal name={animal} index={index}/>

  })

}
</View>
</View>
  </Swiper>
  </Image>

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
    width: null,
    height:null,
    justifyContent: 'center'


  },
  text: {
    flex: 1,
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 50,
    textAlign: 'left',
  },
  Next: {
    fontFamily: 'copperplate',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    // marginTop: 50,
    textAlign: 'right',
  },
  imgwrapper: {
    flex:1,
    flexDirection: 'row',// takes 5/8ths of available space
  justifyContent: 'space-around',
  justifyContent: 'space-between',

  alignItems: 'center',
  flexWrap: 'wrap',
}
});
