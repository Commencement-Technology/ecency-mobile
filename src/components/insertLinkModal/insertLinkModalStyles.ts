import { TextStyle, StyleSheet, ViewStyle, Dimensions, ImageStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const gridItemWidth = Dimensions.get('window').width / 2 - 32;
const gridItemHeight = (gridItemWidth * 500) / 600;

export default EStyleSheet.create({
  sheetContent: {
    backgroundColor: '$primaryBackgroundColor',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  modalStyle: {
    flex: 1,
    backgroundColor: '$primaryBackgroundColor',
    margin: 0,
    paddingTop: 32,
    paddingBottom: 16,
  },
  container: {
    // flex: 1,
    // justifyContent: 'space-between',
    paddingVertical: 8,
  },
  bodyWrapper: {
    flex: 3,
    paddingHorizontal: 16,
  },
  floatingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '$primaryBackgroundColor',
  } as ViewStyle,
  insertBtn: {
    marginLeft: 16,
    width: 170
  },
  inputsContainer:{
    height: 200,
    paddingHorizontal: 16,
  },
  inputLabel:{
    color: '$primaryBlack',
    fontWeight: '600',
    textAlign: 'left',
  },
  input: {
    borderWidth: 1,
    borderColor: '$borderColor',
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '$primaryBlack',
    maxHeight: 50,
    marginVertical: 8, 
  },
});
