import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deliveryAddProblemRequest} from '~/store/modules/deliveryman/actions';
import Background from '~/components/Background';
import {
  Container,
  BackgroundHeader,
  Form,
  InputTextArea,
  SubmitButton,
} from './styles';

const Problem = ({route}) => {
  const {id} = route.params;

  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.deliveryman.loading);

  function handleAddNewProblem() {
    const data = {id, description};
    dispatch(deliveryAddProblemRequest(data));
  }

  return (
    <Background>
      <Container>
        <BackgroundHeader />
        <Form>
          <InputTextArea
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            placeholder="Inclua aqui o problema que ocorreu na entrega."
            autoCorrect={false}
            multiline
            numberOfLines={8}
            onChangeText={setDescription}
            value={description}
            returnKeyType="send"
          />
          <SubmitButton loading={loading} onPress={handleAddNewProblem}>
            Enviar
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
};

export default Problem;
