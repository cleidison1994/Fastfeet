import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 45px;
  background: ${props => (props.color ? props.color : '#CACACA')};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: ${props => (props.color ? props.color : '#FFF')};
`;
