import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {format, parseISO} from 'date-fns';
import PropType from 'prop-types';

import api from '~/services/api';

import CartDelivery from '~/components/CartDelivery';
import {
  Container,
  Header,
  TextHeader,
  FilterContainer,
  FilterButton,
  TextFilter,
  List,
} from './styles';

const ListDeliveries = () => {
  const isFocused = useIsFocused();
  const deliveryman = useSelector(state => state.auth.profile);
  const [Deliveries, SetDeliveries] = useState([]);

  async function loadDeliveries() {
    const response = await api.get(
      `deliveryman/${deliveryman.id}/mydeliveries`
    );
    const DeliveryList = response.data.map(delivery => {
      const dateCreate = format(parseISO(delivery.createdAt), 'dd/MM/yyyy');
      const dateStart = delivery.start_date
        ? format(parseISO(delivery.start_date), 'dd/MM/yyyy')
        : '00/00/0000';
      const dateEnd = delivery.end_date
        ? format(parseISO(delivery.end_date), 'dd/MM/yyyy')
        : '00/00/0000';
      const dateCancel = delivery.canceledAt
        ? format(parseISO(delivery.canceledAt), 'dd/MM/yyyy')
        : '00/00/0000';

      return {
        ...delivery,
        formatedCreatedAt: dateCreate,
        formatedStartAt: dateStart,
        formatedEndAt: dateEnd,
        formatedCanceledAt: dateCancel,
      };
    });

    SetDeliveries(DeliveryList);
  }

  useEffect(() => {
    if (isFocused) {
      loadDeliveries();
    }
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <TextHeader>Entregas</TextHeader>
        <FilterContainer>
          <FilterButton onPress={() => {}}>
            <TextFilter>Entregues</TextFilter>
          </FilterButton>
          <FilterButton onPress={() => {}}>
            <TextFilter>Pendentes</TextFilter>
          </FilterButton>
        </FilterContainer>
      </Header>
      <List
        data={Deliveries}
        renderItem={({item}) => <CartDelivery delivery={item} />}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
};

export default ListDeliveries;

ListDeliveries.defaultProps = {
  deliveries: [],
};
ListDeliveries.propTypes = {
  deliveries: PropType.shape({
    deliveries: PropType.array,
  }),
};
