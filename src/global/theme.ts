import {Dimensions, I18nManager} from 'react-native';
export const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
const guidelineBaseWidth = 393;
const guidelineBaseHeight = 852;
const scaleRatio = width / guidelineBaseWidth;
const VerticalScaleRatio = height / guidelineBaseHeight;

export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) => {
  const adjustedSize = size * scaleRatio;
  return size + (adjustedSize - size) * factor;
};

export const moderateVerticalScale = (size: number, factor = 0.5) => {
  const adjustedSize = size * VerticalScaleRatio;
  return size + (adjustedSize - size) * factor;
};

export const colors = {
  primary: '#3B3A36',
  primaryDark: '#1F1E1B', // Deep Charcoal
  primaryLight: '#E0E0E0', // Pale Gray
  secondaryLight: '#F5D78D', // Pale Gold
  secondary: '#DAA520',
  dark: '#051012',
  gray: '#f4f4f1',
  darkGray: '#EDEFEF',
  text: '#6b727f',
  white: '#ffffff',
  error: '#D32F2F', // Crimson Red
  warning: '#FFC11D',
  success: '#46B369',
  info: '#344fdc',
};

export const fonts = {
  InterBold: I18nManager.isRTL ? 'Cairo-Bold' : 'Inter-Bold',
  InterMedium: I18nManager.isRTL ? 'Cairo-Medium' : 'Inter-Medium',
  InterRegular: I18nManager.isRTL ? 'Tajawal-Regular' : 'Inter-Regular',
  InterLight: I18nManager.isRTL ? 'Tajawal-Regular' : 'Inter-Light',
  BarlowBold: I18nManager.isRTL ? 'Cairo-Bold' : 'BarlowSemiCondensed-SemiBold',
  BarlowMedium: I18nManager.isRTL
    ? 'Cairo-Medium'
    : 'BarlowSemiCondensed-Medium',
  BarlowRegular: I18nManager.isRTL
    ? 'Cairo-Regular'
    : 'BarlowSemiCondensed-Regular',
  CairoBold: 'Cairo-Bold',
  CairoMedium: 'Cairo-Medium',
  CairoRegular: 'Tajawal-Regular',
};
