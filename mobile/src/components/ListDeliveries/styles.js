import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
  flex: 1;
  flex-direction: column;
`;
export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const TextHeader = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;
export const FilterContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const FilterButton = styled.TouchableOpacity`
  margin-left: 10px;
`;
export const TextFilter = styled.Text`
  color: #7159c1;
`;
export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;
