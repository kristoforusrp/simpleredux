import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from './actions'
/**
 * 
 * This part is inside our component
 */
const mapStateToProps = ({ state }) => ({
    isToggle: state.toggleTextReducer.isToggleTextColor
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
      ...actions
  }, dispatch)
}

class ToggleButton extends React.Component {

  setToggleStatus = () => {
    this.props.toggleTextColor(!this.props.isToggle)
  }

  render() {
    const colors = ['black', 'yellow', 'brown', 'cyan', 'fuchsia']
    const { isToggle } = this.props;
    const index = Math.floor(Math.random() * (5 - 1 + 1)) + 1
    const toggle = isToggle ? colors[index] : colors[index];    
    return (
      <View style={styles.container}>
        <Text style={{ color: toggle, marginBottom: 30, fontSize: 25 }}>
          Simple example of redux
        </Text>
        <Button
          title="Click me!"
          onPress={this.setToggleStatus}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);
