var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,

} = require('react-native');

module.exports =React.createClass({
  render: function() {
    return (
      <TouchableHighlight
      style ={styles.button}
      underlayColor ="gray"
      onPress={this.props.onPress}>
      <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }

});

var styles= StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 5,
    padding: 5,
    marginTop: 10,

  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 17
  }
});
