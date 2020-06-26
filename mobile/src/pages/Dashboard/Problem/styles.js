import styled from 'styled-components/native';
import {Dimensions, Platform} from 'react-native';
import Input from '~/components/GlobalInput';
import Button from '~/components/GlobalButton';

export const Container = styled.View`
  position: relative;
  padding: ${Platform.OS === 'ios' ? '78px 20px 20px' : '65px 20px 20px'};
`;
export const BackgroundHeader = styled.View`
  position: absolute;
  background: #7d40e7;
  height: 145px;
  width: ${Dimensions.get('window').width}px;
`;
export const Form = styled.View``;
export const InputTextArea = styled(Input).attrs({
  textAlignVertical: 'top',
  padding: 0,
})`
  min-height: 250px;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  padding-bottom: ${Platform.OS === 'ios' ? '190px' : '50px'};
  flex: 1;
  text-align: center;

  border: 1px solid #eee;
  margin: 0 5px;
`;
export const SubmitButton = styled(Button)`
  background: #7159c1;
  height: 45px;
  border-radius: 4px;
  margin: ${Platform.OS === 'ios' ? '20px 0 10px' : '20px 5px 10px'};
`;

export const SubmitButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;
