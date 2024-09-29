import {StyleSheet} from 'react-native';
import { colors, fonts, moderateScale, scale, verticalScale } from '../../../global/theme';

const sectionStyle = StyleSheet.create({
  Container: {
    marginTop: verticalScale(20),
    paddingHorizontal: scale(16),
  },
  Header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  HeaderTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: scale(10),
  },
  title: {
    fontFamily: fonts.BarlowMedium,
    fontWeight:'600',
    fontSize: moderateScale(16),
    lineHeight: moderateScale(16 * 1.6),
    color: colors.primary,
  },
  HeaderLine: {
    flex: 1,
    height: 1,
    backgroundColor: `${colors.primary}30`,
  },
  readMore: {
    width: scale(28),
    height: scale(28),
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: scale(12),
  },
  Body: {
    paddingTop: verticalScale(16),
  },
});

export default sectionStyle;
