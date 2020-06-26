import styled from 'styled-components/native';
import {Dimensions, Platform, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Button from '~/components/GlobalButton';

export const Container = styled.View`
  position: relative;
  padding: ${Platform.OS === 'ios' ? '78px 20px 20px' : '65px 20px 20px'};
`;
export const BackgroundHeader = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 145px;
  width: ${Dimensions.get('window').width}px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  border-radius: 4px;
  padding-bottom: 40px;
`;
export const CameraContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
`;
export const StyledCamera = styled(RNCamera)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
`;
export const Preview = styled.Image`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
`;
export const CloseButton = styled(TouchableOpacity)`
  height: 62px;
  width: 62px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background: #0000004d;
  border-radius: 31px;
  top: 0;
  right: 0;
`;

export const SnapButton = styled(TouchableOpacity)`
  margin-top: auto;
  background: #0000004d;
  height: 62px;
  width: 62px;
  border-radius: 31px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled(Button).attrs({
  color: '#7d40e7',
})`
  margin-top: 10px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;
