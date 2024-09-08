import {StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../global/theme';

const styleOptions = StyleSheet.create({
  OptionItem: {
    width: '100%',
    backgroundColor: colors.white,
    height: verticalScale(50),
    marginBottom: verticalScale(15),
    borderRadius: moderateScale(8),
    position: 'relative',
    overflow: 'hidden',
  },
  OptionGoogle: {
    backgroundColor: '#ffffff',
  },
  OptionItemIcon: {
    position: 'absolute',
    height: verticalScale(50),
    width: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  OptionItemContent: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  OptionItemText: {
    color: colors.white,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
});
export default styleOptions;
