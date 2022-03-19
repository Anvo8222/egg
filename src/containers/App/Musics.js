import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectTurn } from './selectors';
import { decrementTurn, setBackgroundType } from './actions';
import { musicsStyle } from './style';
import backgrounds from './data/backgrounds';

function Musics({ dispatch, turn }) {
  // Event Change background
  const onChangeBackground = backgroundNew => {
    if (turn <= 0) return false;
    dispatch(setBackgroundType(backgroundNew));
    dispatch(decrementTurn(1));
  };

  return (
    <View style={musicsStyle?.musicWrapper}>
      {backgrounds.map((background, backgroundKey) => (
        <TouchableOpacity
          onPress={() => onChangeBackground(background?.backgroundType)}
          onLongPress={() => onChangeBackground(background?.backgroundType)}
          style={musicsStyle?.musicButton}
          key={backgroundKey}>
          <Text style={musicsStyle?.musicButtonTitle}>{background?.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

Musics.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
});

export default connect(mapStateToProps)(Musics);
