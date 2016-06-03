'use strict'

var React = require('react');
var ReactNative = require('react-native');
var {
  View,
  Image,
  StyleSheet
} = ReactNative;

var SplashPage = React.createClass({
  componentWillMount: function() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'LoginPage',
      });
    }, 1000);
  },
  render: function() {
    return (
      <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center', justifyContent: 'center'}}>
        <Image
          style={styles.splashPage_Logo} source={require('../public/logo_app.png')} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  splashPage_Logo: {
    resizeMode: 'contain',
    width: 200
  }
});

module.exports = SplashPage;
