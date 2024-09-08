import {StyleSheet} from 'react-native';
import { colors, fonts, moderateScale, scale, verticalScale } from '../../../global/theme';

const inputStyle = StyleSheet.create({
  Container: {
    position: 'relative',
    minHeight: verticalScale(55),
  },
  TbInputField: {
    borderRadius: moderateScale(8),
    paddingHorizontal: scale(16),
    backgroundColor: colors?.white,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: scale(14),
    height: verticalScale(55),
    color: colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
  },
  PassIcon: {
    position: 'absolute',
    right: 0,
    height: verticalScale(55),
    width: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  InputIcon: {
    position: 'absolute',
    left: 0,
    top: 2,
    height: verticalScale(55),
    width: scale(50),
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9,
  },
});
export default inputStyle;
