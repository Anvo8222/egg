import { images } from 'assets/images';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { useInjectReducer } from 'redux-injectors';
import { createStructuredSelector } from 'reselect';
import { decrementTurn } from './actions';
import dragons from './data/dragons';
import reducer from './reducer';
import {
  makeSelectBackgroundType,
  makeSelectDragonType,
  makeSelectTurn,
} from './selectors';
import { homeStyle, layoutStyle } from './style';

const key = 'App';

function App({ dispatch, turn, backgroundType, dragonImage }) {
  useInjectReducer({ key, reducer });
  const [isShowTutorial, setIsShowTutorial] = useState(true);
  const [isShowButtons, setShowButtons] = useState(false);
  const [eggStatus, setEggStatus] = useState(3);
  const onSetShowButtons = () => {
    setShowButtons(!isShowButtons);
  };

  const onSetChangeEgg = () => {
    if (eggStatus === 1) {
      dispatch(decrementTurn(1));
      setEggStatus(eggStatus - 1);
    } else {
      setEggStatus(eggStatus - 1 < 0 ? 3 : eggStatus - 1);
    }
  };

  const RenderEggImage = () => {
    let eggImage = images.home.eggOriginal;
    switch (eggStatus) {
      case 2:
        eggImage = images.home.eggCracked;
        break;
      case 1:
        eggImage = images.home.eggBroken;
        break;
      case 0:
        eggImage = dragons[Math.floor(Math.random() * dragons.length)]?.img;
        break;
      default:
        eggImage = images.home.eggOriginal;
        break;
    }
    return <Image source={eggImage} style={homeStyle.eggs} />;
  };

  return (
    <ImageBackground
      source={images.home.background}
      style={layoutStyle.background}>
      <View>
        <View style={homeStyle.header}>
          <Image style={homeStyle.cursor} source={images.home.cursorIcon} />
          <Text style={homeStyle.textTitle}>{`YOUR TAP ${turn}`}</Text>
        </View>
        <View style={homeStyle.container}>
          <Image style={homeStyle.cart} source={images.home.cart} />
        </View>
        <View style={homeStyle.containerTutorial}>
          {isShowTutorial ? (
            <Image style={homeStyle.tutorial} source={images.home.tutorial} />
          ) : null}
        </View>
        <View style={homeStyle.container}>
          <TouchableOpacity
            onPress={onSetChangeEgg}
            onLongPress={onSetChangeEgg}>
            <RenderEggImage />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

App.propTypes = {
  turn: PropTypes.number,
  dispatch: PropTypes.func,
  backgroundType: PropTypes.string,
  dragonImage: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  turn: makeSelectTurn(),
  backgroundType: makeSelectBackgroundType(),
  dragonImage: makeSelectDragonType(),
});

export default connect(mapStateToProps)(App);
