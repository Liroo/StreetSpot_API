'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Text,
  Navigator,
  TouchableHighlight,
  TouchableOpacity,
} = ReactNative;
var Snackbar = require('react-native-android-snackbar');

var MainPage = React.createClass({
  render: function() {
    return (
      <Navigator
          renderScene={this.renderScene}
          navigator={this.props.navigator}
          navigationBar={
            <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
                routeMapper={NavigationBarRouteMapper} />
          } />
    );
  },
  renderScene: function(route, navigator) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        <TouchableHighlight style={{backgroundColor: 'yellow', padding: 10}}
            onPress={this.gotoPersonPage}>
          <Text style={{backgroundColor: 'yellow', color: 'green'}}>Page Suivante</Text>
        </TouchableHighlight>
      </View>
    );
  },
  gotoPersonPage: function() {
    Snackbar.show('Hello World!', {
      actionColor: '#FFCA00',
      actionLabel: 'CLICK',
      actionCallback: (() => Snackbar.show('Nice click!'))
});
    this.props.navigator.push({
      id: 'PersonPage',
      name: 'My home',
    });
  }
});

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={{color: 'white', margin: 10,}}>
          Retour
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{color: 'white', margin: 10, fontSize: 16}}>
          Home
        </Text>
      </TouchableOpacity>
    );
  }
};

module.exports = MainPage;
