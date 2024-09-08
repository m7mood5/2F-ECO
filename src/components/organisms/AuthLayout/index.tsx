import React from 'react';
import {
  StatusBar,
  Text,
  View,
  //   ImageBackground,
  TouchableNativeFeedback,
  I18nManager,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import layoutStyle from './layout.style';
import {layoutProps} from './layout.types';
import {colors, moderateScale} from '../../../global/theme';
// import {useNavigation} from '@react-navigation/native';
import {ArrowLeftIcon, ArrowRightIcon} from '../../../global/icons';

const AuthLayout: React.FC<layoutProps> = ({
  children,
  title,
  subTitle,
  withBack,
}) => {
  //   const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      <SafeAreaView style={layoutStyle.Container}>
        <View style={layoutStyle.header}>
          {withBack && (
            <View style={layoutStyle.BackContainerWarpper}>
              <TouchableNativeFeedback onPress={() => {}}>
                <View style={layoutStyle.BackContainer}>
                  {I18nManager.isRTL ? (
                    <ArrowRightIcon
                      width={moderateScale(22)}
                      height={moderateScale(22)}
                      color={colors.dark}
                    />
                  ) : (
                    <ArrowLeftIcon
                      width={moderateScale(22)}
                      height={moderateScale(22)}
                      color={colors.dark}
                    />
                  )}
                </View>
              </TouchableNativeFeedback>
            </View>
          )}
          {title && (
            <Text
              style={[
                layoutStyle.Title,
                title == 'مرحبا بكم في Tow-F' &&
                  !I18nManager.isRTL &&
                  layoutStyle.ArTitle,
              ]}>
              {title}
            </Text>
          )}
          {subTitle && (
            <Text
              style={[
                layoutStyle.SubTitle,
                title == 'مرحبا بكم في Tow-F' &&
                  !I18nManager.isRTL &&
                  layoutStyle.ArSubTitle,
              ]}>
              {subTitle}
            </Text>
          )}
          <View
            style={{
              width: 350,
              height: 350,
              position: 'absolute',
              right: 0,
              bottom: -100,
            }}>
            <ImageBackground
              resizeMode="contain"
              style={{flex: 1}}
              source={require('../../../assets/imgs/skeleton.png')}
            />
          </View>
        </View>
        <View style={layoutStyle.body}>{children}</View>
      </SafeAreaView>
    </>
  );
};
export default AuthLayout;
