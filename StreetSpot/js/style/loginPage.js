var StyleSheet = require('react-native').StyleSheet;
var cssStyle = require('./cssStyle');

var loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flexDirection: 'column',
    flexWrap: 'nowrap'
  },
  containerInput: {
    flex: 2
  },
  loginLogo: {
    flex: 1,
    resizeMode: 'contain',
    width: cssStyle.UNIT * 15,
    marginTop: cssStyle.PADDING
  },
  loginInput: {
    width: cssStyle.DEVICE_WIDTH - cssStyle.UNIT * 5,
    borderWidth: 1.5,
    borderColor: '#ffbf00',
    marginTop: cssStyle.PADDING * 5,
    fontSize: cssStyle.FONT_SIZE_TITLE
  }
});

module.exports = loginStyle;
