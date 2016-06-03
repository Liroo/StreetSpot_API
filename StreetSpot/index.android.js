'use strict'

var React = require('react'),
    ReactNative = require('react-native');
require('./js/style/cssStyle');
var {
    AppRegistry,
    Navigator,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} = ReactNative;

var SplashPage = require('./js/splashPage');
var LoginPage = require('./js/loginPage');
var MainPage = require('./js/mainPage');
var PersonPage = require('./js/personPage');

var StreetSpot = React.createClass({
  render: function() {
    return (
      <Navigator
        initialRoute={{id: 'SplashPage', name: 'Index'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  },
  renderScene: function(route, navigator) {
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
          navigator={navigator} />
      )
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      )
    }
    return this.noRoute(navigator);
  },
  noRoute: function(navigator) {
    return (
      <View>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>Configuration index.js</Text>
        </TouchableOpacity>
      </View>
    );
  }
});

AppRegistry.registerComponent('StreetSpot', () => StreetSpot);
