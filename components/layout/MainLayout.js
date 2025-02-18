import {StyleSheet, Text, View, ImageBackground} from 'react-native';

const MainLayout = ({children}) => {
  return (
    <ImageBackground
      source={require('../../assets/image/bg/bg.jpg')}
      style={{flex: 1}}>
      {children}
    </ImageBackground>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
