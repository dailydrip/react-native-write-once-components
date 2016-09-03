import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class writeOnceComponents extends Component {

  constructor(props) {
    super(props);

    this.state = { text: 'Swipe Down to refresh', refreshing: false };
    this.onRefresh = this.onRefresh.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.fetchData();
  }

  fetchData() {
    setTimeout(() => {
      this.setState({ text: 'REFRESHED', refreshing: false });
      alert('Refreshed!');
    }, 2000);
  }

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }
      >
        <View style={styles.container}>
          <Text>{this.state.text}</Text>
        </View>
      </ScrollView>
    );
  }
}


AppRegistry.registerComponent('writeOnceComponents', () => writeOnceComponents);
