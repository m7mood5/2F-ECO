import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../global/theme';

const styleOptions = StyleSheet.create({
  Container: {
    // flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(10),
    paddingTop: verticalScale(30),
    paddingBottom: verticalScale(30),
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colors.secondaryLight,
  },
  Heading: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    maxWidth: scale(320),
    margin: 'auto',
  },
  Body: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  HeadingTitle: {
    color: colors.dark,
    fontFamily: fonts.InterBold,
    fontWeight: '600',
    fontSize: moderateScale(18),
  },
  HeadingSubTitle: {
    color: colors.text,
    fontFamily: fonts.InterMedium,
    fontWeight: '400',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(13 * 1.8),
    marginTop: verticalScale(10),
    textAlign: 'center',
  },
  OptionList: {
    marginTop: verticalScale(20),
    width: scale(300),
  },
  OptionItem: {
    width: '100%',
    backgroundColor: colors.white,
    height: verticalScale(50),
    marginBottom: verticalScale(15),
    borderRadius: moderateScale(8),
    position: 'relative',
    overflow: 'hidden',
  },
  OptionFb: {
    backgroundColor: '#3b5998',
  },
  OptionApple: {
    backgroundColor: '#000000',
  },
  OptionGoogle: {
    backgroundColor: '#ffffff',
  },
  OptionEmail: {
    backgroundColor: colors.primary,
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
  Terms: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: '90%',
  },
  TermsText: {
    color: colors.text,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(12 * 1.7),
    textAlign: 'center',
  },
  pageLoader: {
    position: 'absolute',
    backgroundColor: `${colors.dark}01`,
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    marginTop: verticalScale(20),
  },
  pageLoaderInner: {
    backgroundColor: colors.dark,
    width: scale(70),
    height: scale(70),
    borderRadius: scale(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageProvider: {
    position: 'absolute',
    backgroundColor: `${colors.dark}20`,
    left: 0,
    top: -60,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 60,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99,
    marginTop: verticalScale(20),
  },
  pageProviderInner: {
    backgroundColor: colors.gray,
    width: scale(300),
    borderRadius: scale(8),
    padding: scale(20),
  },
  pageProviderHeader: {
    marginBottom: scale(10),
  },
  pageProviderHeaderText: {
    color: colors.dark,
    fontFamily: fonts.InterBold,
    fontWeight: '600',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(12 * 1.6),
  },
  pageProviderBody: {
    marginBottom: scale(12),
  },
  pageProviderBodyText: {
    color: colors.text,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(12),
    lineHeight: moderateScale(12 * 1.6),
  },
  pageProviderFooter: {},
  pageProviderFooterBtn: {
    marginBottom: verticalScale(-15),
  },
  pageProviderCancel: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(10),
    backgroundColor: colors.darkGray,
    padding: scale(10),
    paddingVertical: scale(12),
    borderRadius: scale(6),
  },
  pageProviderCancelText: {
    color: colors.primary,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(10),
    // lineHeight: moderateScale(16),
  },
});
export default styleOptions;
