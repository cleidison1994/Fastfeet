import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;
  border-radius: 4px;

  justify-content: center;
  align-items: center;
  background: #82bf18;
  color: #fff;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
