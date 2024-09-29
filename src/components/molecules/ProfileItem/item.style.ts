import {StyleSheet} from 'react-native';
import { colors, fonts, moderateScale, scale, verticalScale } from '../../../global/theme';

const itemStyle = StyleSheet.create({
  Container: {
    backgroundColor: colors.darkGray,
    borderWidth:scale(1),
    borderColor:colors.darkGray,
    borderRadius: scale(6),
    padding: verticalScale(7),
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Content:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  Icon:{
  },
  MoreBtn: {
    backgroundColor: `${colors.primary600}20`,
    width: moderateScale(32),
    height: moderateScale(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(6),
  },
  Title: {
    color: colors.dark,
    fontFamily: fonts.InterMedium,
    fontWeight: '500',
    fontSize: moderateScale(13),
    lineHeight: moderateScale(22),
    marginLeft:scale(8)

  },
});
export default itemStyle;
