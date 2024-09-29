/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {FC} from 'react';
import {Animated, Text, View} from 'react-native';
import toastStyle from './toast.style';
import {toastProps} from './toast.type';
import {useSharedValue} from 'react-native-reanimated';
import { colors } from '../../../global/theme';

const ToastMessage: FC<toastProps> = ({
  message,
  icon,
  status = 'info',
  visible = false,
}) => {
  const toastOffsetY = useSharedValue(-100);

  return (
    <>
      {visible && (
        <Animated.View style={[toastStyle.toastContainer]}>
          <View
            style={[
              toastStyle.tbAlert,
              {
                backgroundColor:
                  status === 'success'
                    ? colors.success
                    : status === 'info'
                    ? colors.dark
                    : colors.error,
                borderColor:
                  status === 'success'
                    ? colors.success
                    : status === 'info'
                    ? colors.primaryDark
                    : colors.error,
              },
            ]}>
            <Text style={toastStyle.tbAlertText}>{message}</Text>
            {icon && icon}
          </View>
        </Animated.View>
      )}
    </>
  );
};

export default ToastMessage;
