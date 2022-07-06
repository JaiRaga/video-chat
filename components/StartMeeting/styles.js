import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {},
  info: {
    width: '100%',
    height: 50,
    backgroundColor: '#414144',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#646464',
    padding: 12,
    justifyContent: 'center',
  },
  textInput: {
    color: 'white',
    fontSize: 18,
  },
  btnContainer: {
    alignItems: 'center',
  },
  meetingBtn: {
    width: 350,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2155CD',
    height: 50,
    borderRadius: 25,
  },
  meetingBtnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
