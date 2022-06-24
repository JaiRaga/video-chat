import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#333333',
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 14
  },
  text: {
    color: 'white',
    paddingLeft: 15,
    fontSize: 18,
  },
});

export default styles;
