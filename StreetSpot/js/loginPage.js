'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
  StyleSheet,
  Component,
  View,
  Navigator,
  Image,
  TextInput,
  View
} = ReactNative;

var TextInputLayout = require('react-native-text-input-layout');

var loginStyle = require('./style/loginPage');

var LoginPage = React.createClass({
  focusNextField(nextField) {
    this.refs[nextField].focus();
  },
  getInitialState: function() {
    return {
      email: ''
    };
  },
  updateText: function(text) {
    this.setState(() =>{
      return {
        email: text
      };
    });
  },
  render: function() {
    var layoutRender =
      <Navigator
        renderScene={this.renderScene}
      />
      ;
    return layoutRender;
  },
  renderScene: function(route, navigator) {
    var layoutScene =
    <Image
      source={require('../public/loginPage/background.jpg')}
      style={loginStyle.container}>
      <Image
        source={require('../public/logo_app.png')}
        style={[loginStyle.loginLogo, {overflow: 'visible'}]}/>
      <View style={loginStyle.containerInput}>
        <TextInputLayout>
          <TextInput
            ref="1"
            style={loginStyle.loginInput}
            keyboardType="email-address"
            placeholder="Email"
            returnKeyType="next"
            blurOnSubmit={false}
            onSubmitEditing={() => this.focusNextField('2')} />
        </TextInputLayout>
        <TextInputLayout>
          <TextInput
            ref={"2"}
            style={loginStyle.loginInput}
            placeholder="Password"
            secureTextEntry={true}
            password={true}
            returnKeyType="send" />
        </TextInputLayout>
      </View>
    </Image>
    ;

    return layoutScene;
    /*return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableHighlight
            onPress={this.gotoNext}>
          <Text style={{color: 'red'}}>Page Suivante</Text>
        </TouchableHighlight>
      </View>
    );*/
  },
  gotoNext: function() {
    this.props.navigator.push({
      id: 'MainPage',
      name: 'Home',
    });
  }
});

module.exports = LoginPage;
