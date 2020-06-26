/* eslint-disable no-undef */
import React, {useRef, useState} from 'react';
import {Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';
import Background from '~/components/Background';
import {
  Container,
  BackgroundHeader,
  Content,
  CameraContainer,
  StyledCamera,
  Preview,
  CloseButton,
  SnapButton,
  SubmitButton,
} from './styles';

const Confirm = ({route}) => {
  const {id} = route.params;
  const camera = useRef(null);
  const [picture, setPicture] = useState(null);
  function handleCancel() {
    setPicture(null);
  }

  async function takePicture() {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      setPicture(data.uri);
    }
  }
  async function handleSubmit() {
    try {
      if (!picture) {
        Alert.alert(
          'Erro',
          'Voçe deve enviar uma imagem com assinatura da entrega !'
        );
        return;
      }
      const data = new FormData();
      data.append('file', {
        type: 'image/jpeg',
        uri: picture,
        name: picture.split('/').pop(),
      });

      const response = await api.post('/files/', data);
      const signature_id = response.data.id;
      const end_date = new Date();

      await api.put(`/delivery/${id}/finish-delivery`, {
        signature_id,
        end_date,
      });
    } catch (error) {
      Alert.alert('Erro', 'Falha ao finalizar entrega !');
    }
  }

  return (
    <Background>
      <Container>
        <BackgroundHeader />
        <Content>
          <CameraContainer>
            {picture ? (
              <>
                <Preview source={{uri: picture}} />
                <CloseButton onPress={handleCancel}>
                  <Icon color="#FFF" size={26} name="close" />
                </CloseButton>
              </>
            ) : (
              <StyledCamera
                ref={camera}
                captureAudio={false}
                type={StyledCamera.Constants.Type.back}
                flashMode={StyledCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}>
                <SnapButton onPress={takePicture}>
                  <Icon color="#FFFFFF" size={26} name="camera-alt" />
                </SnapButton>
              </StyledCamera>
            )}
          </CameraContainer>
          <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
        </Content>
      </Container>
    </Background>
  );
};
export default Confirm;
