import { StyleSheet } from 'react-native';

const WHITE = '#dadce1';
const BG_COLOR = '#161f23';
const ACCENT_COLOR = '#10171a';

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
    color: ACCENT_COLOR,
    zIndex: -1,
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
    fontSize: 64,
  },
  header3: {
    fontSize: 48,
  },
  benkyoText: {
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
    height: 45,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  textInput: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: WHITE,
    color: 'black',
  },
  statusContainer: {
    height: 16,
    marginHorizontal: 50,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: ACCENT_COLOR,
  },
  statusBar: {
    height: 16,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
});

export default styles;
