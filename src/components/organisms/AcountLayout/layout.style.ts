import {StyleSheet} from 'react-native';
import { colors, fonts, moderateScale, scale, verticalScale } from '../../../global/theme';

const layoutStyle = StyleSheet.create({
  Container: {
    backgroundColor: colors.gray,
    flex: 1,
  },
  header: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(20),
    marginTop: verticalScale(-120),
    paddingTop: verticalScale(135),
    position: 'relative',
    overflow: 'hidden',
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 99,
  },
  headerContent: {
    maxWidth: scale(250),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerAvatar: {
    width: moderateScale(45),
    height: moderateScale(45),
    borderRadius: moderateScale(45),
    marginRight: scale(8),
    overflow: 'hidden',
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: fonts.BarlowMedium,
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: colors.white,
    textTransform: 'capitalize',
    marginTop: verticalScale(-2),
    alignSelf: 'flex-start',
  },
  headerDesc: {
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(13),
    color: colors.primary600,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
    marginTop: verticalScale(2),

  },
  headerAction: {},
  headerActionBtn: {
    borderWidth: scale(1),
    borderColor: colors.primaryLight,
    backgroundColor: `${colors.primary}80`,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(3),
    position: 'relative',
    overflow: 'hidden',
    width: moderateScale(36),
    height: moderateScale(36),
  },
  headerActionBtnText: {
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(12),
    color: colors.white,
    marginLeft: scale(6),
  },
  body: {
    flex: 1,
    paddingBottom: verticalScale(0),
  },
});
export default layoutStyle;
