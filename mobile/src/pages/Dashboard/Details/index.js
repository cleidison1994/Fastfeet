/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import PropType from 'prop-types';

import {startDeliveryRequest} from '~/store/modules/deliveryman/actions';

import Cart from '~/pages/Dashboard/Details/DetailsInfo';
import Status from '~/pages/Dashboard/Details/DetailsStatus';
import Actions from '~/pages/Dashboard/Details/DetailsActions';

import Background from '~/components/Background';
import {Container, HeaderBackground, ButtonStart} from './styles';

const Details = ({route}) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.deliveryman.loading);
  function handleStartDelivery(id) {
    dispatch(startDeliveryRequest(id));
  }
  const {delivery} = route.params;
  return (
    <Background>
      <Container>
        <HeaderBackground />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Cart delivery={delivery} />
          <Status delivery={delivery} />
          <ButtonStart
            loading={loading}
            onPress={() => handleStartDelivery(delivery.id)}>
            Iniciar entrega
          </ButtonStart>
          <Actions delivery={delivery} />
        </ScrollView>
      </Container>
    </Background>
  );
};

export default Details;

Details.defaultProps = {
  delivery: {},
};

Details.propTypes = {
  route: PropType.object.isRequired,
  delivery: PropType.object,
};
