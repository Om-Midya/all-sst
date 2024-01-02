import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function getMessage() {
  const currentDate = new Date();
  const time = currentDate.getHours()
  if (time >= 4 && time < 12) {
    return 'Morning';
  } else if (time >= 12 && time < 17) {
    return 'Afternoon';
  } else if (time >= 17 && time < 20) {
    return 'Evening';
  } else {
    return 'Night';
  }
}

const WelcomeMessage = () => {
  return (
    <View>
      <Text style={styles.welcomemessage}>
        Good {getMessage()}
      </Text>
    </View>

  );
}

const styles = StyleSheet.create({
  welcomemessage: {
    color: "#000",
    fontSize: 18,
    marginTop: '8%',
    fontFamily: 'monospace',
  },
});

export default WelcomeMessage;
