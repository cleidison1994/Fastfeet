import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content} from './styles';

const AvatarInput = ({url}) => {
  return (
    <Container>
      <Content source={{uri: url}} />
    </Container>
  );
};

export default AvatarInput;

AvatarInput.defaultProps = {
  url: 'https://api.adorable.io/avatars/50/abott@adorable.png',
};

AvatarInput.propTypes = {
  url: PropTypes.string,
};
