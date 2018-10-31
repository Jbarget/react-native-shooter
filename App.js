import React from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";
const gunshot = Expo.Audio.Sound.create(require("./gunshot.mp3"));

const shootGun = async () => {
  const soundObject = new Expo.Audio.Sound();
  try {
    soundObject.loadAsync(require("./gunshot.mp3"));
    await soundObject.playAsync();
    // Your sound is playing!
  } catch (error) {
    // An error occurred!
  }
};

export default class App extends React.Component {
  state = {
    hasAudioPermissions: null,
    hasCameraPermissions: null
  };

  async componentWillMount() {
    const { hasAudioPermissions, hasCameraPermissions } = this.state;
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <TouchableOpacity style={styles.container} onPress={shootGun}>
              <Image style={styles.gun} source={require("./gun.png")} />
            </TouchableOpacity>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: 50
  },
  gun: {
    width: 80,
    height: 100
  }
});
