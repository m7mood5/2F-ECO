import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  verticalScale,
} from '../../../global/theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    position: 'absolute',
    top: verticalScale(20),
    right: verticalScale(20),
    fontSize: moderateScale(24),
    color: colors.white,
    fontFamily: fonts.CairoBold, // Use fontFamily for custom fonts
    padding: verticalScale(10),
    borderRadius: verticalScale(5),
    textAlign: 'right', // Aligns Arabic text to the right
  },
  goButton: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(50),
    width: width - 40,
    borderRadius: moderateScale(10),
  },
  goButtonText: {
    color: colors.white,
    fontSize: moderateScale(18),
    fontFamily: fonts.CairoBold,
  },
});

export default styles;
