/* eslint-disable react-hooks/exhaustive-deps */
import React, {ReactNode, createContext, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import alertStyles from './toast.style';
import {
  ToastContextProps,
  ToastProviderProps,
  ToastContentProps,
} from './toast.type';
import { colors } from '../../global/theme';

export const ToastContext = createContext<ToastContextProps>({
  showToast: () => {},
  hideToast: () => {},
});

export const ToastProvider: React.FC<ToastProviderProps> = ({children}) => {
  const [toastContent, setToastContent] = useState<ToastContentProps>({
    message: '',
    status: 'alert',
    component: undefined,
  });
  const [isToastVisible, setIsToastVisible] = useState<boolean>(false);
  const toastOffsetY = useSharedValue(-100);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isToastVisible) {
      timeout = setTimeout(() => {
        hideToast();
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isToastVisible]);

  const showToast = (
    message: string,
    status?: 'alert' | 'success' | 'info',
    component?: ReactNode,
  ) => {
    setToastContent({message, status, component});
    setIsToastVisible(true);
    toastOffsetY.value = withSpring(0); // Reset the offset to slide up from bottom
  };

  const hideToast = () => {
    toastOffsetY.value = withSpring(-100); // Slide down to hide
    setTimeout(() => {
      setIsToastVisible(false);
      setToastContent({
        message: '',
        status: undefined,
        component: undefined,
      });
    }, 250);
  };

  const toastContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: toastOffsetY.value * -1}],
    };
  });

  return (
    <ToastContext.Provider value={{showToast, hideToast}}>
      {children}
      {isToastVisible && (
        <Animated.View
          style={[alertStyles.toastContainer, toastContainerStyle]}>
          <View
            style={[
              alertStyles.tbAlert,
              {
                backgroundColor:
                  toastContent.status === 'success'
                    ? colors.success
                    : colors.error,
                borderColor:
                  toastContent.status === 'success'
                    ? colors.success
                    : colors.error,
              },
            ]}>
            <Text style={alertStyles.tbAlertText}>{toastContent.message}</Text>
            {toastContent.component && toastContent.component}
          </View>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};
