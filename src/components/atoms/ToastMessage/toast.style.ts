import {StyleSheet} from 'react-native';
import {colors, scale, fonts, verticalScale, moderateScale} from '../../../global/theme';

const toastStyle = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: verticalScale(20),
    left: scale(16),
    right: scale(16),
    zIndex: 9999999,
  },
  tbAlert: {
    minHeight: scale(45),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(16),
    backgroundColor: colors.error,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: 8,
    zIndex: 99999999,
  },
  tbAlertText: {
    fontFamily: fonts.InterMedium,
    fontSize: moderateScale(13),
    fontWeight:"400",
    lineHeight: moderateScale(18),
    color: colors.white,
  },
  tbAlertTextBtn: {
    width: scale(32),
    height: scale(32),
    backgroundColor: '#ffffff',
    borderRadius: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(12),
  },
});
export default toastStyle;
