import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
import Button from '~/components/GlobalButton';

export const Container = styled.View`
  padding: ${Platform.OS === 'ios' ? '78px 20px 20px' : '65px 20px 20px'};
  position: relative;
`;

export const HeaderBackground = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 145px;
  width: ${Dimensions.get('window').width}px;
`;

export const ButtonStart = styled(Button).attrs({
  color: '#7159c1',
})`
  margin: 5px 0;
`;
