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
var images = require('./imageLoader');
var Button = require('../common/button');


module.exports = React.createClass({

  render: function(){



      return(
      <TouchableHighlight key={this.props.index}  onPress={ () => this.playRecording(this.props.name)}>
        <Image  style={{width:50, height: 90}}
          source={images()[this.props.name]}>
          </Image>

      </TouchableHighlight>
    );


  },

  playRecording: function(animal){
    // AudioRecorder.playRecording();
     AudioPlayer.play(AudioUtils.DocumentDirectoryPath+'/'+animal+'.aac');
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
