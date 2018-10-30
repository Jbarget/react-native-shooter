import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera, Permissions } from "expo";

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
            <View
              style={{
                flex: 1,
                backgroundColor: "transparent",
                flexDirection: "row"
              }}
            />
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
