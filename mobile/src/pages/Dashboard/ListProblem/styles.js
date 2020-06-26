import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';

export const Container = styled.View`
  position: relative;
  padding: ${Platform.OS === 'ios' ? '78px 20px 20px' : '65px 20px 20px'};
  position: relative;
`;
export const BackgroundHeader = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 145px;
  width: ${Dimensions.get('window').width}px;
`;

export const List = styled.FlatList``;
