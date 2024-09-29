import {StyleSheet} from 'react-native';
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
    backgroundColor: colors.primaryDark,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
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
    maxWidth: scale(300),
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: fonts.BarlowMedium,
    fontWeight: '500',
    fontSize: moderateScale(16),
    color: colors.white,
    // textTransform: 'capitalize',
  },
  headerBackBtn: {
    borderWidth: scale(1),
    borderColor: colors.primaryLight,
    backgroundColor: `${colors.primary}70`,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(6),
    width: moderateScale(38),
    height: moderateScale(38),
    position: 'relative',
    overflow: 'hidden',
    marginRight: scale(10),
  },
  headerAction: {},
  headerActionBtn: {
    borderWidth: scale(1),
    borderColor: colors.primaryLight,
    backgroundColor: `${colors.primary}70`,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(6),
    width: moderateScale(38),
    height: moderateScale(38),
    position: 'relative',
    overflow: 'hidden',
  },
  body: {
    flex: 1,
  },
});
export default layoutStyle;
