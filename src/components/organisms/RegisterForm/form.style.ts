import {StyleSheet} from 'react-native';
import { colors, fonts, moderateScale, scale, verticalScale } from '../../../global/theme';

const formStyle = StyleSheet.create({
  Container: {
    padding: scale(20),
  },
  FormInput: {
    position: 'relative',
    marginBottom: verticalScale(20),
  },
  Label: {
    color: colors.primary,
    fontFamily: fonts.CairoRegular,
    fontWeight: '500',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
    marginBottom: verticalScale(25),
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
    marginTop: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Col: {
    width: '48%',
  },
  GenderContainer: {
    marginBottom: verticalScale(20),
  },
  GenderSelection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  GenderOption: {
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(100), // adjust as needed
    height: scale(120), // adjust as needed
    borderWidth: scale(1),
    borderColor: colors.primaryDark,
    borderRadius: scale(20),
    // padding: 10,
  },
  Selected: {
    borderColor: colors.secondary, 
    width: scale(150), // adjust as needed
    height: scale(170),  },
  GenderImage: {
    width: 60, // adjust as needed
    height: 60, // adjust as needed
    marginBottom: 8,
  },
});

export default formStyle;
