import {StyleSheet} from 'react-native';
import { colors, fonts, moderateScale, scale, verticalScale } from '../../global/theme';

const sheetStyle = StyleSheet.create({
  containerStyle: {
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
  },
  indicatorStyle: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    backgroundColor: '#C4C4C4',
  },
  sheetWrapper: {
    borderTopWidth: scale(1),
    borderTopColor: '#F0F0F040',
    minHeight: verticalScale(90),
    padding: scale(32),
    paddingTop: scale(24),
    paddingBottom: scale(24),
    backgroundColor: colors.white,
    position: 'relative',
  },
  IconContainer: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(90),
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: `${colors.error}10`,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(30),
  },
  Title: {
    textAlign: 'left',
    marginBottom: verticalScale(20),
  },
  TitleText: {
    fontFamily: fonts.BarlowBold,
    fontSize: moderateScale(16),
    fontWeight: '600',
    lineHeight: moderateScale(14 * 1.6),
    color: colors.primaryDark,
    marginBottom: verticalScale(10),
  },
  Body: {
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },

  Desc: {
    color: colors.primaryDark,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(14 * 1.6),
  },
  DeleteBtn: {
    marginTop: verticalScale(30),
    backgroundColor: `${colors.error}15`,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(40),
    borderRadius: moderateScale(6),
    borderWidth: 1,
    borderColor: colors.error,
  },
  DeleteBtnText: {
    color: colors.error,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(14),
  },
});

export default sheetStyle;
