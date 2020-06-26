import React, {forwardRef} from 'react';
import {ViewPropTypes} from 'react-native';
import {Container, TInput} from './styles';

const GlobalInput = ({style, ...rest}, ref) => {
  return (
    <Container style={style}>
      <TInput {...rest} ref={ref} />
    </Container>
  );
};

export default forwardRef(GlobalInput);
GlobalInput.propTypes = {
  style: ViewPropTypes.style,
};

GlobalInput.defaultProps = {
  style: ',',
};
