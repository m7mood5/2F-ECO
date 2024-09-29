import {Dimensions, StyleSheet} from 'react-native';
import {
  colors,
  fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../global/theme';
const {width} = Dimensions.get('window');

const formStyle = StyleSheet.create({
  Container: {
    padding: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  MapContainer: {
    height: verticalScale(300), // Adjust height for the map
    marginBottom: verticalScale(20),
    borderWidth: scale(1),
    borderColor: colors.primaryDark,
    borderRadius: scale(10),
  },
  MapView: {
    width: '100%',
    height: '100%',
    borderRadius: scale(10),
  },
  Label: {
    color: colors.primary,
    fontFamily: fonts.CairoRegular,
    fontWeight: '500',
    fontSize: moderateScale(18),
    lineHeight: moderateScale(22),
    marginBottom: verticalScale(15),
    alignSelf: 'flex-start',
  },
  FormBtn: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: verticalScale(70),
    width: width - 40,
    borderRadius: moderateScale(10),
  },
  SelectedLocation: {
    color: colors.secondary,
    fontFamily: fonts.InterMedium,
    fontSize: moderateScale(14),
    lineHeight: moderateScale(20),
    textAlign: 'center',
    marginVertical: verticalScale(10),
  },
});

export default formStyle;
