import {Platform, StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../global/theme';
const tabsStyle = StyleSheet.create({
  Container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  BottomNavContainer: {
    alignItems: 'stretch',
    paddingHorizontal: scale(20),
    paddingBottom:
      Platform?.OS === 'ios' ? verticalScale(35) : verticalScale(30),
  },
  BottomNavContainerInner: {
    backgroundColor: colors.primaryDark,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(70),
    borderRadius: scale(12),
    width: 'auto',
  },
  NavTabButton: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(90),
  },
  NavTabIcon: {},
  NavTabButtonLabel: {
    marginTop: verticalScale(3),
    textAlign: 'center',
  },
  NavTabButtonText: {
    fontFamily: fonts.BarlowMedium,
    fontWeight: '500',
    fontSize: moderateScale(13),
    color: colors.white,
    textTransform: 'capitalize',
  },
});

export default tabsStyle;
