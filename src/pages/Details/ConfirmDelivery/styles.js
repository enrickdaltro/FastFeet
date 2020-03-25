import styled from 'styled-components/native';

import { RNCamera } from 'react-native-camera';
import Button from '~/components/Button';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background: #fff;
  z-index: -1;
`;
export const BackgroundPurple = styled.View`
  height: 25%;
  width: 100%;
  background: #7d40e7;
  position: relative;
`;

export const Content = styled.SafeAreaView`
  flex: 1;

  align-items: center;
`;

export const Thumbnail = styled.View`
  top: -70px;
  width: 90%;
  height: 500px;
  position: absolute;
  background: #fff;

  justify-content: center;
  align-items: center;

  border-radius: 4px;
`;
export const ThumbnailText = styled.Text`
  margin-top: 10px;
  width: 250px;
  text-align: center;
  font-size: 24px;
  color: #aaa;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 100%;
`;

export const TakePhoto = styled.TouchableOpacity`
  top: 400px;
  background: #666;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const SubmitButton = styled(Button)`
  background: #7d40e7;
  top: 450px;
  width: 90%;
`;
