import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 25px 20px;
  background: #fff;
`;
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
`;
export const HeaderInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewUser = styled.View`
  max-width: 180px;
`;

export const TextUser = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const HeaderTitle = styled.View`
  justify-content: space-between;
`;

export const TextTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
