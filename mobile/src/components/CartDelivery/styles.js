import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 5px 0 10px 0;
  border: 0.5px solid;
  border-radius: 4px;
`;

export const Content = styled.View``;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 0 0 20px;
`;
export const Title = styled.Text`
  color: #7159c1;
  margin-left: 10px;
`;
export const Footer = styled.View`
  background: #f8f9fd;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
export const FooterItem = styled.View``;

export const FooterButton = styled.TouchableOpacity`
  align-items: center;
`;
export const TextButton = styled.Text`
  color: #7159c1;
`;
export const Label = styled.Text`
  font-size: 12px;
`;
export const Info = styled.Text`
  font-size: 13px;
  font-weight: bold;
`;
