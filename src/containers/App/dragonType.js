import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Image, View } from 'react-native';
import { images } from 'assets/images';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { layoutStyle } from './style';
import { makeSelectBackgroundType } from './selectors';
import dragons from './data/dragons';

function Layout({ children, backgroundType }) {
  const randomIndexDragon = Math.floor(Math.random() * dragons.length);

  const backgroundImage = dragons[randomIndexDragon];
  console.log('backgroundImage', backgroundImage);

  return (
    <ImageBackground style={layoutStyle.background}>
      <View style={layoutStyle.children}>{children}</View>
      <Image source={images.home.land} style={layoutStyle.land} />
    </ImageBackground>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  backgroundType: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  backgroundType: makeSelectBackgroundType(),
});

export default connect(mapStateToProps)(Layout);
