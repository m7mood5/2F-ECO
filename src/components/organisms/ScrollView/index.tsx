/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Dimensions,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  I18nManager,
} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  colors,
  fonts,
  moderateScale,
  verticalScale,
} from '../../../global/theme';
import {CBtn} from '../../atoms';

const {width, height} = Dimensions.get('window');
interface DataItem {
  id: number;
  title: string;
  img: any;
}
const Data: DataItem[] = [
  {
    id: 1,
    title: 'FUNKY',
    img: require('../../../assets/imgs/funky.png'),
  },
  {
    id: 2,
    title: 'RELAXED',
    img: require('../../../assets/imgs/travel.png'),
  },
  {
    id: 3,
    title: 'SPORT',
    img: require('../../../assets/imgs/sport.png'),
  },
  {
    id: 4,
    title: 'EXCENTRIC',
    img: require('../../../assets/imgs/group.png'),
  },
];

const Slide = (item:any) => {
  return (
    <View style={styles.slide}>
      <Image source={item.img} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const Scrollview = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const ref = useRef<FlatList<DataItem>>(null);
  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.indicatorContainer}>
          {Data.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentPage === index && {
                  backgroundColor: colors.primaryDark,
                  width: 20,
                },
              ]}
            />
          ))}
        </View>
        {currentPage === Data.length - 1 ? (
          <View style={styles.btnContainer}>
            <View style={styles.btnContent}>
              <CBtn
                text={I18nManager.isRTL ? 'ابدأ الأن' : 'Get Started'}
                onPress={() => {}}
              />
            </View>
          </View>
        ) : (
          <View style={styles.btnContainer}>
            <View style={styles.btnContent}>
              <CBtn
                text={I18nManager.isRTL ? 'تخطي' : 'Skip'}
                onPress={skip}
                scndary
              />
              <CBtn
                text={I18nManager.isRTL ? 'التالي' : 'Next'}
                onPress={goNext}
              />
            </View>
          </View>
        )}
      </View>
    );
  };
  const onScroll = (e: { nativeEvent: { contentOffset: { x: any; }; }; }) => {
    const {x} = e.nativeEvent.contentOffset;
    setCurrentPage(Math.round(x / width));
  };
  const goNext = () => {
    if (currentPage < Data.length - 1) {
      const nextSlide = currentPage + 1;
      if (nextSlide !== Data.length) {
        const offset = nextSlide * width; // Calculate the offset
        ref.current?.scrollToOffset({offset, animated: true}); // Scroll to next slide
        setCurrentPage(nextSlide); // Update state
      }
    }
  };
  const skip = () => {
    const lastSlide = Data.length - 1;
    const offset = lastSlide * width; // Calculate the offset
    ref.current?.scrollToOffset({offset, animated: true}); // Scroll to next slide
    setCurrentPage(lastSlide); // Update state
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryDark}
        barStyle={'light-content'}
      />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={onScroll}
        pagingEnabled
        data={Data}
        contentContainerStyle={styles.content}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default Scrollview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    height: height * 0.75,
  },
  slide: {
    alignItems: 'center',
  },
  image: {
    width,
    height: '80%',
    resizeMode: 'contain',
  },
  title: {
    color: colors.primary,
    fontFamily: fonts.InterBold,
    fontSize: moderateScale(20),
    marginTop: verticalScale(12),
    minHeight: verticalScale(30),
    fontWeight: '700',
    textAlign: 'center',
  },
  SubTitle: {
    color: colors.primaryDark,
    fontFamily: fonts.CairoRegular,
    fontWeight: '400',
    fontSize: I18nManager.isRTL ? moderateScale(16) : moderateScale(14),
    lineHeight: I18nManager.isRTL
      ? moderateScale(16 * 1.6)
      : moderateScale(14 * 1.6),
    marginTop: verticalScale(7),
    minHeight: verticalScale(40),
    alignSelf: 'flex-start',
    marginEnd: '20%',
    textAlign: 'left',
  },
  footer: {
    height: height * 0.25,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(20),
    justifyContent: 'center',
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: colors.primaryLight,
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btnContainer: {
    marginBottom: verticalScale(20),
  },
  btnContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width - 40,
    borderRadius: moderateScale(10),
    gap: 20,
  },
});
