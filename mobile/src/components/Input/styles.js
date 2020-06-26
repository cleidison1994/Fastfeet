import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 45px;
  padding: 0 16px;
  background: #fff;
  border-radius: 4px;
  margin: 15px 0;
`;

export const TInput = styled(TextInput)`
  flex: 1;
  font-size: 16px;
  font-family: sans-serif;
  color: #333;
`;
