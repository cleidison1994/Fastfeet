import styled from 'styled-components/native';
import Button from '~/components/GlobalButton';
import Input from '~/components/GlobalInput';

export const Container = styled.View`
  background: #7159c1;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const SubmitInput = styled(Input)`
  margin-bottom: 10px;
`;
export const SubmitButton = styled(Button)`
  background: #82bf18;
`;
