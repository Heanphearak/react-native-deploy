/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import CodePush from 'react-native-code-push';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>Hello You</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    // backgroundColor: 'green',
  },
  text: {
    fontFamily: 'WaterBrush-Regular',
  },
});

export default CodePush(App);
