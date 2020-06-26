import React from 'react';

import {
  Container,
  Line,
  StatusContainer,
  LabelContainer,
  Dot,
  Label,
} from './styles';

const TimeLine = ({delivery}) => {
  return (
    <Container>
      <Line />
      <StatusContainer>
        <LabelContainer>
          <Dot filled={!!(!delivery.start_date && !delivery.canceled_at)} />
          <Label>Aguardando Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={!!delivery.start_date} />
          <Label>Retirada</Label>
        </LabelContainer>

        <LabelContainer>
          <Dot filled={!!delivery.end_date} />
          <Label>Entregue</Label>
        </LabelContainer>
      </StatusContainer>
    </Container>
  );
};

export default TimeLine;
