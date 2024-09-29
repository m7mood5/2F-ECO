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
    minHeight: verticalScale(300),
    padding: scale(32),
    paddingTop: scale(24),
    paddingBottom: scale(24),
    backgroundColor: colors.white,
    position: 'relative',
  },
  Title: {
    textAlign: 'left',
  },
  TitleText: {
    fontFamily: fonts.BarlowBold,
    fontSize: moderateScale(18),
    fontWeight: '600',
    lineHeight: moderateScale(18 * 1.6),
    color: colors.primaryDark,
    marginBottom: verticalScale(20),
  },
  Body: {},
  FormInput: {
    position: 'relative',
    marginBottom: verticalScale(15),
  },
  Label: {
    color: colors.primaryDark,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(12),
    lineHeight:moderateScale(12 * 1.6),
    marginBottom: verticalScale(5),
  },
  LabelBold: {
    fontFamily: fonts.InterBold,
    fontWeight: '600',
  },
  ItemSlider: {
    height: moderateScale(50),
    position: 'relative',
    overflow: 'hidden',
    borderRadius: scale(6),
  },
  thumbStyle: {
    borderRadius: scale(4),
    height: moderateScale(50),
    width: moderateScale(75),
  },
  sliderContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: scale(6),
  },
  sliderDivider: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 0,
    padding: scale(4),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sliderDividerItem: {
    width: scale(2),
    height: verticalScale(30),
    backgroundColor: colors.primaryLight,
  },
  FormBtn: {
    marginTop: verticalScale(36),
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
});

export default sheetStyle;
