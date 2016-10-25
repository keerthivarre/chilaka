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

module.exports = React.createClass({

  render: function(){
    

      let animalPath = './img/'+animal+'.jpg'
      return(
      <TouchableHighlight key={index} onPress={ () => this.playRecording(animal).bind(this)}>
        <Image  style={{width: 150, height: 150}}
          // source={{uri:'https://upload.wikimedia.org/wikipedia/commons/3/3b/Rabbit_in_montana.jpg'}}>
          source={require(animalPath)}>


          </Image>

      </TouchableHighlight>
    );

    })
  }






    </View>

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
