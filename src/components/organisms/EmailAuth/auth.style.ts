import {StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  verticalScale,
} from '../../../global/theme';

const authStyle = StyleSheet.create({
  Container: {
    paddingVertical: verticalScale(30),
  },
  FormInput: {
    position: 'relative',
    marginBottom: verticalScale(20),
  },
  Label: {
    color: colors.dark,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(22),
    marginBottom: verticalScale(7),
    alignSelf: 'flex-start',
  },
  FormForget: {},
  FormForgetBtn: {},
  FormForgetBtnText: {
    color: colors.primaryDark,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(22),
    alignSelf: 'flex-start',
  },
  FormBtn: {
    marginTop: verticalScale(40),
  },
});

export default authStyle;
