/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  HeaderTitle,
  HeaderLabel,
  Label,
  DetailsContainer,
  DetailsItem,
  DetailsText,
} from './styles';

const DetailsInfo = ({delivery}) => {
  return (
    <Container>
      <HeaderTitle>
        <Icon
          name="local-shipping"
          size={24}
          color="#7159c1"
          style={{marginRight: 10}}
        />
        <HeaderLabel>Informações de entrega</HeaderLabel>
      </HeaderTitle>
      <DetailsContainer>
        <DetailsItem>
          <Label>Destinatário</Label>
          <DetailsText>{delivery.recipients.name}</DetailsText>
        </DetailsItem>
        <DetailsItem>
          <Label>Endereco de entrega</Label>
          <DetailsText>
            {delivery.recipients.street} {delivery.recipients.number}{' '}
            {delivery.recipients.city} {delivery.recipients.state}
          </DetailsText>
        </DetailsItem>
        <DetailsItem>
          <Label>Produto</Label>
          <DetailsText>{delivery.product}</DetailsText>
        </DetailsItem>
      </DetailsContainer>
    </Container>
  );
};

export default DetailsInfo;

DetailsInfo.propTypes = {
  delivery: PropTypes.object.isRequired,
};
