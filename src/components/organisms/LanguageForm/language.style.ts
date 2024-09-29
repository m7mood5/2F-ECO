import {I18nManager, StyleSheet} from 'react-native';
import {scale, colors, moderateScale, fonts, verticalScale} from '../../../global/theme';
const formStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  languageListContainer: {},
  btnContainer: {
    paddingVertical: verticalScale(10),
    justifyContent: 'center',
  },
  ListItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: scale(8),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(12),
    marginBottom: verticalScale(10),
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
    position: 'relative',
    overflow: 'hidden',
  },
  ListItemContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ListItemImg: {
    minWidth: moderateScale(35),
    width: moderateScale(35),
    height: moderateScale(35),
    borderRadius: moderateScale(35),
    overflow: 'hidden',
    position: 'relative',
  },
  ListItemText: {
    marginLeft: scale(15),
    color: colors.dark,
    fontSize: moderateScale(14),
    fontWeight: '600',
    fontFamily: fonts.InterBold,
    textTransform: 'capitalize',
    lineHeight: moderateScale(30),
  },
  ListItemTextAr: {
    fontFamily: fonts.CairoBold,
    fontWeight: '600',
  },
  headingLogoContainer: {
    marginBottom: verticalScale(10),
  },
  headingLogo: {
    width: moderateScale(55),
    height: moderateScale(55),
  },
  soonBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: scale(40),
    justifyContent: 'center',
    paddingStart: scale(150),
    alignItems: 'flex-end',
  },
  soonBoxText: {
    marginLeft: scale(20),
    color: colors.primary,
    fontSize: moderateScale(10),
    fontWeight: '500',
    fontFamily: fonts.InterMedium,
    textTransform: 'capitalize',
    lineHeight: moderateScale(30),
  },
  btnContainerInner: {
    backgroundColor: colors.primaryDark,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderRadius: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(55),
  },
  SelectedText: {
    color: colors.primaryDark, // Change text color for selected language
    fontWeight: 'bold',
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: I18nManager.isRTL ? scale(15) : scale(13),
    lineHeight: I18nManager.isRTL ? scale(15 * 1.6) : scale(13 * 1.4),
  },
});

export default formStyle;
