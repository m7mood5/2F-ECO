/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import layoutStyle from './innerlayout.style';

import {InnerPageProps} from './layout.type';
import {ArrowLeftIcon, ArrowRightIcon} from '../../../global/icons';
import { useAppNavigation } from '../../../hooks';
import { colors, moderateScale } from '../../../global/theme';

const InnerLayout = ({
  title,
  withBack,
  children,
  icon,
  bg = colors.gray,
}: InnerPageProps) => {
  const navigation = useAppNavigation();

  return (
    <>
      <StatusBar
        backgroundColor={colors.primaryDark}
        barStyle={'light-content'}
      />
      <SafeAreaView style={[layoutStyle.Container, {backgroundColor: bg}]}>
        <View style={layoutStyle.header}>
          <View style={layoutStyle.headerInner}>
            <View style={layoutStyle.headerContent}>
              {withBack && (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={layoutStyle.headerBackBtn}>
                    {I18nManager.isRTL ? (
                      <ArrowRightIcon
                        width={moderateScale(18)}
                        height={moderateScale(18)}
                        color={colors.white}
                      />
                    ) : (
                      <ArrowLeftIcon
                        width={moderateScale(18)}
                        height={moderateScale(18)}
                        color={colors.white}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              )}

              <Text style={layoutStyle.headerTitle}>{title}</Text>
            </View>
            <View style={layoutStyle.headerAction}>{icon && icon}</View>
          </View>
          <View
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              right: 0,
              bottom: -100,
            }}>
            <ImageBackground
              resizeMode="contain"
              style={{flex: 1}}
              source={require('../../../assets/imgs/back.png')}
            />
          </View>
        </View>
        <View style={layoutStyle.body}>{children}</View>
      </SafeAreaView>
    </>
  );
};
export default InnerLayout;
