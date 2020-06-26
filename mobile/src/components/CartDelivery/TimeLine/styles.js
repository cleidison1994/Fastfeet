import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 20px;
`;
export const Line = styled.View`
  height: 1px;
  border: 1px solid #7159c1;
  background: #7159c1;
  margin-left: 23px;
  margin-right: 16px;
`;
export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: -6px;
`;
export const LabelContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Dot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 1px solid #7159c1;
  background: ${props => (props.filled ? '#7159c1' : '#fff')};
  margin-bottom: 5px;
`;
export const Label = styled.Text`
  font-size: 8px;
  max-width: 50px;
  text-align: center;
`;
