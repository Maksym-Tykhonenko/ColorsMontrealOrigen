import React, {useEffect} from 'react';
import Pulsation from '../../components/ui/Pulsation';
import MainLayout from '../../components/layout/MainLayout';

const Welcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2000);
  }, []);
  return (
    <MainLayout>
      <Pulsation />
    </MainLayout>
  );
};

export default Welcome;
