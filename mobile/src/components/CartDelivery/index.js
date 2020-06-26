/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import TimeLine from './TimeLine';
import {
  Container,
  Content,
  Header,
  Title,
  Footer,
  FooterButton,
  TextButton,
  FooterItem,
  Label,
  Info,
} from './styles';

const CartDelivery = ({delivery}) => {
  const navigation = useNavigation();
  return (
    <Container>
      <Content>
        <Header>
          <Icon name="local-shipping" size={26} color="#7159c1" />
          <Title>Encomenda {delivery.id}</Title>
        </Header>
        <TimeLine delivery={delivery} />
      </Content>
      <Footer>
        <FooterItem>
          <Label>Data</Label>
          <Info>{delivery.formatedCreatedAt}</Info>
        </FooterItem>
        <FooterItem>
          <Label>Cidade</Label>
          <Info>{delivery.recipients.city}</Info>
        </FooterItem>
        <FooterItem>
          <FooterButton
            onPress={() => navigation.navigate('Details', {delivery})}>
            <Label />
            <TextButton>Ver detalhes</TextButton>
          </FooterButton>
        </FooterItem>
      </Footer>
    </Container>
  );
};

export default CartDelivery;

CartDelivery.propTypes = {
  delivery: PropTypes.array.isRequired,
};
