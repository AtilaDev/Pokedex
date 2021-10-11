import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading() {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
