/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useState, useEffect} from 'react';
import {Keyboard, View, Pressable, Text} from 'react-native';
import tabStyle from './tabs.style';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {useTranslation} from 'react-i18next';
import {
  HomeIconFilled,
  ProfileIcon,
  TemplatesIcon,
  TemplatesIconFilled,
  ProfileIconFilled,
  HomeIcon,
} from '../../global/icons';
import {colors, moderateScale} from '../../global/theme';

const BottomTabsBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
  ...props
}) => {
  const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(true);
  const {t} = useTranslation();
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions?.tabBarStyle?.display === 'none') {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [props, state.index, descriptors]);

  return (
    <>
      {show ? (
        <View style={tabStyle.Container}>
          <View style={tabStyle.BottomNavContainer}>
            <View style={tabStyle.BottomNavContainerInner}>
              {state.routes.map((route, index) => {
                const {options} = descriptors[route.key];
                const label =
                  options.tabBarLabel !== undefined
                    ? options.tabBarLabel
                    : options.title !== undefined
                    ? options.title
                    : route.name;

                const isFocused = state.index === index;
                let icon;
                let labelName;

                if (label === 'Home') {
                  icon = (
                    <View style={tabStyle.NavTabButton}>
                      {isFocused ? (
                        <HomeIconFilled
                          width={moderateScale(24)}
                          height={moderateScale(24)}
                          color={colors?.white}
                        />
                      ) : (
                        <HomeIcon
                          width={moderateScale(24)}
                          height={moderateScale(24)}
                          color={colors?.gray}
                        />
                      )}
                      <View style={tabStyle.NavTabButtonLabel}>
                        <Text
                          style={[
                            tabStyle.NavTabButtonText,
                            {
                              color: isFocused ? colors.white : colors.gray,
                            },
                          ]}>
                          {t('Home')}
                        </Text>
                      </View>
                    </View>
                  );
                } else if (label === 'Templates') {
                  icon = (
                    <View style={tabStyle.NavTabButton}>
                      {isFocused ? (
                        <TemplatesIconFilled
                          width={moderateScale(24)}
                          height={moderateScale(24)}
                          color={colors?.white}
                        />
                      ) : (
                        <TemplatesIcon
                          width={moderateScale(24)}
                          height={moderateScale(24)}
                          color={colors?.gray}
                        />
                      )}
                      <View style={tabStyle.NavTabButtonLabel}>
                        <Text
                          style={[
                            tabStyle.NavTabButtonText,
                            {
                              color: isFocused ? colors.white : colors.gray,
                            },
                          ]}>
                          {t('Templates')}
                        </Text>
                      </View>
                    </View>
                  );
                } else if (label === 'Account') {
                  icon = (
                    <View style={tabStyle.NavTabButton}>
                      {isFocused ? (
                        <ProfileIconFilled
                          width={moderateScale(24)}
                          height={moderateScale(24)}
                          color={colors?.white}
                        />
                      ) : (
                        <ProfileIcon
                          width={moderateScale(24)}
                          height={moderateScale(24)}
                          color={colors?.gray}
                        />
                      )}

                      <View style={tabStyle.NavTabButtonLabel}>
                        <Text
                          style={[
                            tabStyle.NavTabButtonText,
                            {
                              color: isFocused ? colors.white : colors.gray,
                            },
                          ]}>
                          {t('Account')}
                        </Text>
                      </View>
                    </View>
                  );
                }

                const onPress = () => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });
                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                };

                const onLongPress = () => {
                  navigation.emit({
                    type: 'tabLongPress',
                    target: route.key,
                  });
                };
                return (
                  <Pressable
                    style={tabStyle.NavTabButton}
                    key={`footer-${index}`}
                    onPress={onPress}
                    onLongPress={onLongPress}>
                    <View style={tabStyle.NavTabIcon}>{icon}</View>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};
export default BottomTabsBar;
