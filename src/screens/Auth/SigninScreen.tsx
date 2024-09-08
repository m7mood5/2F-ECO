import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {title} from '../../global/styles';
import {moderateScale} from '../../global/theme';

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="My Account" />

      <View style={styles.content}>
        <Text style={title}>Sign In</Text>
      </View>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
