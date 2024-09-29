import {StyleSheet} from 'react-native';
import {verticalScale, scale, fonts, colors, moderateScale} from '../../global/theme';

const AlertStyle = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: scale(20),
    left: scale(16),
    right: scale(16),
    zIndex: 9999,
  },
  tbAlert: {
    minHeight: scale(50),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(15),
    backgroundColor: colors.error,
    borderWidth: 1,
    borderColor: colors.error,
    borderRadius: 8,
    zIndex: 9999,
  },
  tbAlertText: {
    fontFamily: fonts.InterMedium,
    fontWeight:"500",
    fontSize: moderateScale(13),
    lineHeight: moderateScale(13 * 1.6),
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

export default AlertStyle;
