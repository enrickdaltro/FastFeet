import React, { useState } from 'react';

import { RNCamera } from 'react-native-camera';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  BackgroundPurple,
  Content,
  Thumbnail,
  Camera,
  SubmitButton,
  TakePhoto,
} from './styles';

export default function ConfirmDelivery() {
  const [camera, setCamera] = useState(null);
  const [file, setFile] = useState(null);

  async function handleTakePicture() {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: false,
        width: 800,
      };
      const data = await camera.takePictureAsync(options);

      setFile(data);
    }
  }

  return (
    <Container>
      <BackgroundPurple />
      <Content>
        {file ? (
          <Thumbnail source={{ uri: file.uri }} />
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
        <SubmitButton>Enviar</SubmitButton>
      </Content>
    </Container>
  );
}
