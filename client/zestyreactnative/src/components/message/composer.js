import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { border } from '../../helpers/scaffolding';
import { postMessage } from '../../helpers/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

class MessageComposer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.displayText = this.displayText.bind(this);
  }

  render() {
    return (
      <View style={ { padding: 10 } }>
        <TextInput
          style={ { height: 40 } }
          placeholder='Type here'
          onChangeText={ (text) => this.setState({ text }) }
        />
        <Text style={{padding: 10, fontSize: 42}}>
          { this.state.text }
        </Text>
      </View>
    );
  }
}

export default MessageComposer;
