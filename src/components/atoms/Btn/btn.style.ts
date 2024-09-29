import {StyleSheet} from 'react-native';
import {I18nManager} from 'react-native';
import {colors, fonts, scale, verticalScale} from '../../../global/theme';

const btnStyle = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(20),
    borderRadius: verticalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(55),
    flex: 1,
  },
  btnText: {
    color: colors.white,
    fontFamily: fonts.InterBold,
    fontWeight: '500',
    fontSize: I18nManager.isRTL ? scale(15) : scale(13),
    lineHeight: I18nManager.isRTL ? scale(15 * 1.8) : scale(13 * 1.4),
  },
});

export default btnStyle;
