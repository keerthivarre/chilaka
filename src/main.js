var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  Navigator
} = require('react-native');


var Start = require('./app/startpage.js');
var Second = require('./app/second.js');
var Third = require('./app/third.js');
var addvoice = require('./app/addvoice.js');
var training = require('./app/training.js');
var training2 = require('./app/training2.js');
var homepage = require('./app/homepage.js');
var test = require('./app/test.js');






var ROUTES = {
  start: Start,
  second: Second,
  third: Third,
  addvoice: addvoice,
  training: training,
  training2: training2,
  homepage: homepage,
  test: test


};

module.exports = React.createClass({

  renderScene: function (route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route ={route} navigator ={navigator}/>;
  },


  render: function() {

    return (
      <Navigator
      style = {styles.container}
      initialRoute ={{name : 'homepage'}}
      renderScene = {this.renderScene}
      configureScene = {() => {return Navigator.SceneConfigs.FloatFromRight;}}
      />


  );
  }
});

var styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center'
  }
});
