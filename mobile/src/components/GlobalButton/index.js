/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator} from 'react-native';
import {Container, Text} from './styles';

const GlobalButton = ({color, children, loading, ...rest}) => {
  return (
    <Container {...rest} color={color}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default GlobalButton;

GlobalButton.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  loading: PropTypes.bool,
};

GlobalButton.defaultProps = {
  color: undefined,
  loading: false,
};
