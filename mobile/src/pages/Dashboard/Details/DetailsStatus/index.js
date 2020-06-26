/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropType from 'prop-types';
import {
  Container,
  HeaderTitle,
  HeaderLabel,
  Label,
  DetailsContainer,
  DetailsItem,
  DetailsText,
  DetailsDate,
} from './styles';

const DetailsStatus = ({delivery}) => {
  return (
    <Container>
      <HeaderTitle>
        <Icon
          name="event"
          size={24}
          color="#7159c1"
          style={{marginRight: 10}}
        />
        <HeaderLabel>Situação da entrega</HeaderLabel>
      </HeaderTitle>
      <DetailsContainer>
        <DetailsItem>
          <Label>Status</Label>
          <DetailsText>
            {!delivery.start_date && !delivery.canceledAt
              ? 'Aguadando Retirada'
              : ''}
            {delivery.start_date && !delivery.canceledAt ? 'Retirado' : ''}
            {delivery.canceledAt ? 'Cancelado' : ''}
            {delivery.end_date && !delivery.canceledAt ? 'Entregue' : ''}
          </DetailsText>
        </DetailsItem>
      </DetailsContainer>
      <DetailsDate>
        <DetailsItem>
          <Label>Data da Retirada</Label>
          <DetailsText>
            {delivery.start_date ? delivery.formatedStartAt : ''}
          </DetailsText>
        </DetailsItem>
        <DetailsItem>
          <Label>Data da Entrega</Label>
          <DetailsText>
            {delivery.end_date ? delivery.formatedEndAt : ''}
          </DetailsText>
        </DetailsItem>
      </DetailsDate>
    </Container>
  );
};

export default DetailsStatus;
DetailsStatus.defaultProps = {
  delivery: {},
};

DetailsStatus.propTypes = {
  delivery: PropType.object,
};
