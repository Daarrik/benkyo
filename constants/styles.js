import { StyleSheet } from 'react-native';

const WHITE = '#dadce1';
const BG_COLOR = '#161f23';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: BG_COLOR,
  },
  backdropCommon: {
    position: 'absolute',
    left: -40,
    bottom: -90,
    paddingTop: 150,
    zIndex: -1,
    opacity: 0.5,
  },
  backdrop2Char: {
    fontSize: 350,
    lineHeight: 330,
  },
  backdrop3Char: {
    fontSize: 250,
    lineHeight: 230,
  },
  headerBox: {
    paddingBottom: 20,
  },
  header: {
    fontSize: 90,
  },
  header2: {
    fontSize: 50,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    fontSize: 20,
    color: WHITE,
  },
  textBold: {
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
  },
  textCenter: {
    textAlign: 'center',
  },
  textBlack: {
    color: BG_COLOR,
  },
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: 45,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  textInput: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    backgroundColor: '#dadce1',
    color: 'black',
  },
});

export default styles;
