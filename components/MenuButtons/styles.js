import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#1f1f1f',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  menuBtn: {
    width: 50,
    height: 50,
    borderRadius: 14,
    // backgroundColor: '#3B44F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtnText: {
    color: '#FCF8E8',
    fontSize: 15,
    paddingTop: 10,
    fontWeight: '600',
  },
});

export default styles;
