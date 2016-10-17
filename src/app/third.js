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
        source={require('/Users/sdutta/ReactApps/kidsapp2/src/app/img/lion1.jpg')}
      />


    </TouchableHighlight>
    <TouchableHighlight onPress={this.onPress}>
      <Image
        style={styles.imgwrapper}
        source={require('/Users/sdutta/ReactApps/kidsapp2/src/app/img/lion1.jpg')}
      />


    </TouchableHighlight>
    </View>

    <View style ={styles.imgwrapper2}>
    <TouchableHighlight onPress={this.onPress}>
      <Image
        style={styles.imgwrapper}
        source={require('/Users/sdutta/ReactApps/kidsapp2/src/app/img/lion1.jpg')}
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
