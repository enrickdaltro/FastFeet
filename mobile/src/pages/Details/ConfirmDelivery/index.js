import React, { useState } from 'react';
import { Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import {
  Container,
  BackgroundPurple,
  Content,
  Thumbnail,
  Camera,
  SubmitButton,
  TakePhoto,
  TakeAgain,
} from './styles';

export default function ConfirmDelivery({ route, navigation }) {
  const { data } = route.params;

  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState(null);

  async function handleTakePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: false,
      };
      const dataPhoto = await camera.takePictureAsync(options);

      setFile(dataPhoto);
    }
  }

  async function handleTakeOtherPicture() {
    setFile(null);
  }

  async function handleSubmit() {
    if (file) {
      const dataFile = new FormData();
      dataFile.append('file', {
        uri: file.uri,
        name: 'signature.jpg',
        type: 'image/jpeg',
      });

      const response = await api.post('/files', dataFile);

      const { id } = response.data;

      await api.put(`/delivery/${data.id}`, {
        signature_id: id,
        end_date: new Date(),
      });

      navigation.navigate('Dashboard');
    } else {
      Alert.alert('É necessário uma foto da assinatura do destinatário.');
    }
  }

  return (
    <Container>
      <BackgroundPurple />
      <Content>
        {file ? (
          <>
            <Thumbnail source={{ uri: file.uri }} />
            <TakeAgain onPress={handleTakeOtherPicture}>
              <Icon name="close" size={40} color="#aaa" />
            </TakeAgain>
          </>
        ) : (
          <>
            <Thumbnail>
              <Camera
                ref={ref => {
                  setCamera(ref);
                }}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                captureAudio={false}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permissão para usar a câmera',
                  message: 'Precisamos de permissão para usar sua câmera',
                  buttonPositive: 'OK',
                  buttonNegative: 'Cancelar',
                }}
              />
              <TakePhoto onPress={handleTakePicture}>
                <Icon name="photo-camera" size={40} color="#aaa" />
              </TakePhoto>
            </Thumbnail>
          </>
        )}
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Content>
    </Container>
  );
}
