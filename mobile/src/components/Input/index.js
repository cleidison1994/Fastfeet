import React from 'react';

import {Container, TInput} from './styles';

const Input = ({name, ...rest}) => {
  return (
    <Container>
      <TInput {...rest} autoCorrect={false} keyboardType="numeric" />
    </Container>
  );
};

export default Input;
