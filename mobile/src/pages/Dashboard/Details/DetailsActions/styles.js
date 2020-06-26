import styled from 'styled-components/native';

export const Container = styled.View`
  height: 85px;
  width: 100%;
  background: #f8f9fd;
  flex-direction: row;
  border-radius: 4px;
`;

export const DetailsItem = styled.View`
  height: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-color: #0000001a;
  border-style: solid;
  border-right-width: 1px;
`;
export const DetailsText = styled.Text`
  font-size: 14px;
  text-align: center;
  max-width: 100px;
  color: #999;
`;
export const DetailsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;
