import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#a18cd1',
  },
  title: {
    fontSize: 40,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
  button: {
      height: 36,
      backgroundColor: '#ffc0cb',
      borderColor: '#ffc0cb',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center'
    },
});
