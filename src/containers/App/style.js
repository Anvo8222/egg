import { StyleSheet } from 'react-native';

export const appStyle = StyleSheet.create({
  turn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: '6%',
    left: '5%',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export const layoutStyle = StyleSheet.create({
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: '100%',
  },
});

export const homeStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerTutorial: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textTitle: {
    color: 'white',
    fontSize: 26,
  },
  cursor: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    marginRight: 20,
  },
  cart: {
    resizeMode: 'contain',
    width: 200,
    height: 100,
    borderRadius: 80,
    borderBottomRightRadius: 102,
  },
  tutorial: {
    resizeMode: 'contain',
    width: 200,
    height: 100,
  },
  eggs: {
    resizeMode: 'contain',
    width: 150,
    height: 250,
  },
});
