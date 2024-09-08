import {StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  verticalScale,
} from '../../../global/theme';

const authStyle = StyleSheet.create({
  Container: {
    paddingVertical: verticalScale(50),
  },
  FormInput: {
    position: 'relative',
    marginBottom: verticalScale(15),
  },
  Label: {
    color: colors.dark,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(22),
    marginBottom: verticalScale(5),
    alignSelf: 'flex-start',
  },
  FormForget: {},
  FormForgetBtn: {},
  FormForgetBtnText: {
    color: colors.primary,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(22),
  },
  FormBtn: {
    marginTop: verticalScale(10),
  },
});

export default authStyle;
