import {I18nManager, StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../global/theme';

const layoutStyle = StyleSheet.create({
  Container: {
    backgroundColor: colors.gray,
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(60),
    marginTop: verticalScale(-120),
    paddingTop: verticalScale(150),
    borderBottomRightRadius: verticalScale(36),
    borderBottomLeftRadius: verticalScale(36),
    position: 'relative',
    overflow: 'hidden',
    minHeight: verticalScale(300),
  },
  body: {
    paddingHorizontal: scale(20),
    flex: 1,
  },
  BackContainerWarpper: {
    borderRadius: moderateScale(8),
    position: 'relative',
    overflow: 'hidden',
    height: moderateScale(44),
    width: moderateScale(44),
    marginBottom: verticalScale(12),
  },
  BackContainer: {
    backgroundColor: colors.primaryLight,
    borderRadius: moderateScale(15),
    height: moderateScale(44),
    width: moderateScale(44),
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: moderateScale(2),
  },

  Title: {
    color: colors.white,
    fontFamily: fonts.InterBold,
    fontSize: moderateScale(20),
    marginTop: verticalScale(12),
    minHeight: verticalScale(30),
    fontWeight: '700',
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  ArTitle: {
    fontFamily: fonts.CairoBold,
    alignSelf: 'flex-end',
  },
  SubTitle: {
    color: colors.primaryLight,
    fontFamily: fonts.CairoRegular,
    fontWeight: '400',
    fontSize: I18nManager.isRTL ? moderateScale(16) : moderateScale(14),
    lineHeight: I18nManager.isRTL
      ? moderateScale(16 * 1.6)
      : moderateScale(14 * 1.6),
    marginTop: verticalScale(7),
    minHeight: verticalScale(40),
    alignSelf: 'flex-start',
    marginEnd: '20%',
    textAlign: 'left',
  },
  ArSubTitle: {
    fontFamily: fonts.CairoMedium,
    fontWeight: '500',
    marginEnd: 0,
    marginStart: '20%',
    marginTop: verticalScale(5),
    minHeight: verticalScale(40),
    alignSelf: 'flex-end',
  },
});
export default layoutStyle;
