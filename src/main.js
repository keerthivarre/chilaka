var React = require('react');
var {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  Navigator
} = require('react-native');

var Start = require('/Users/sdutta/ReactApps/kidsapp2/src/app/startpage');
var Second = require('/Users/sdutta/ReactApps/kidsapp2/src/app/second');
var Third = require('/Users/sdutta/ReactApps/kidsapp2/src/app/third.js');

var ROUTES = {
  start: Start,
  second: Second,
  third: Third
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
      initialRoute ={{name : 'start'}}
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
