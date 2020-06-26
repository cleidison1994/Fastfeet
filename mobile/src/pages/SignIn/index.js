import React, {useState} from 'react';
import {Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import logo from '~/assets/fastfeetlogo.png';

import {SignInRequest} from '~/store/modules/auth/actions';

import {Container, SubmitButton, SubmitInput} from './styles';

const SignIn = () => {
  const [deliverymanId, setdeliverymanID] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSignIn() {
    dispatch(SignInRequest(deliverymanId));
    setdeliverymanID('');
  }

  return (
    <Container>
      <Image
        source={logo}
        style={{tintColor: '#fff', alignSelf: 'center', marginBottom: 25}}
      />
      <SubmitInput
        name="id"
        placeholder="Informe seu id de cadastro"
        onChangeText={setdeliverymanID}
        value={deliverymanId}
        keyboardType="numeric"
        onSubmitEditing={handleSignIn}
      />
      <SubmitButton loading={loading} onPress={handleSignIn}>
        Entrar no sistema
      </SubmitButton>
    </Container>
  );
};

export default SignIn;
