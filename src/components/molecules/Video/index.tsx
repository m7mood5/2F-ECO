/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, I18nManager} from 'react-native';
import Video from 'react-native-video';
import styles from './video.style';
import {CBtn} from '../../atoms';
import {verticalScale} from '../../../global/theme';
import {SheetManager} from 'react-native-actions-sheet';

const BackgroundVideoScreen: React.FC = () => {
  const handleGoPress = () => {
    SheetManager.show('LoginOptions');
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../../../assets/fastfitV.mp4')}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
        repeat
        muted
        playInBackground={false}
        playWhenInactive={false}
      />
      <Text
        style={[
          styles.heading,
          {
            textAlign: I18nManager.isRTL ? 'right' : 'left',
            right: I18nManager.isRTL ? verticalScale(20) : 'auto',
            left: I18nManager.isRTL ? 'auto' : verticalScale(20),
          },
        ]}>
        {I18nManager.isRTL
          ? '.ليست نظام غذائي. \nانها الحياة'
          : "This is not a diet. \nIt's life."}
      </Text>
      <View style={styles.goButton}>
        <CBtn
          text={I18nManager.isRTL ? 'ابدأ الأن' : 'Get Started'}
          onPress={handleGoPress}
        />
      </View>
    </View>
  );
};

export default BackgroundVideoScreen;
