/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text, View, ImageBackground, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import layoutStyle from './layout.style';
import {layoutProps} from './layout.types';
import {useAppSelector} from '../../../hooks/useRedux.hooks';
import {colors, moderateScale} from '../../../global/theme';
const imageSources = {
  'b.png': require('../../../assets/imgs/avatars/b.png'),
  'c.png': require('../../../assets/imgs/avatars/c.png'),
  'd.png': require('../../../assets/imgs/avatars/d.png'),
  'e.png': require('../../../assets/imgs/avatars/e.png'),
  'f.png': require('../../../assets/imgs/avatars/f.png'),
  'h.png': require('../../../assets/imgs/avatars/h.png'),
  'k.png': require('../../../assets/imgs/avatars/k.png'),
  'p.png': require('../../../assets/imgs/avatars/p.png'),
  's.png': require('../../../assets/imgs/avatars/s.png'),
  't.png': require('../../../assets/imgs/avatars/t.png'),
};

const AccountLayout: React.FC<layoutProps> = ({children}) => {
  const userInfo = useAppSelector(state => state.user.data);

  return (
    <>
      <StatusBar
        backgroundColor={colors.primaryDark}
        barStyle={'light-content'}
      />
      <SafeAreaView style={layoutStyle.Container}>
        <View style={layoutStyle.header}>
          <View style={layoutStyle.headerInner}>
            <View style={layoutStyle.headerContent}>
              <View style={layoutStyle.headerAvatar}>
                {userInfo?.avatar ? (
                  <Image
                    style={{
                      resizeMode: 'contain',
                      width: moderateScale(45),
                      height: moderateScale(45),
                      borderRadius: moderateScale(8),
                    }}
                    source={{uri: `data:image/png;base64,${userInfo?.avatar}`}}
                  />
                ) : (
                  <Image
                    source={imageSources[userInfo?.defaultAvatar]}
                    style={{
                      resizeMode: 'contain',
                      width: moderateScale(45),
                      height: moderateScale(45),
                      borderRadius: moderateScale(8),
                    }}
                  />
                )}
              </View>
              <View>
                <Text style={layoutStyle.headerTitle}>
                  {userInfo?.firstName + ' ' + userInfo?.lastName}
                </Text>
                {/* <Text style={layoutStyle.headerDesc}>{userInfo?.email}</Text> */}
              </View>
            </View>
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
export default AccountLayout;
