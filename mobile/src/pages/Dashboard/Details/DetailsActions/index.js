import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {Container, DetailsText, DetailsItem, DetailsButton} from './styles';

const DetailsActions = ({delivery}) => {
  const {id} = delivery;
  const navigation = useNavigation();
  return (
    <Container>
      <DetailsItem>
        <DetailsButton onPress={() => navigation.navigate('Problem', {id})}>
          <Icon name="highlight-off" size={24} color="#E74040" />
          <DetailsText>Informar problema</DetailsText>
        </DetailsButton>
      </DetailsItem>
      <DetailsItem>
        <DetailsButton onPress={() => navigation.navigate('ListProblem', {id})}>
          <Icon name="info-outline" size={24} color="#EED28A" />
          <DetailsText>Visualizar problema</DetailsText>
        </DetailsButton>
      </DetailsItem>
      <DetailsItem>
        <DetailsButton onPress={() => navigation.navigate('Confirm', {id})}>
          <Icon name="check-circle" size={24} color="#7159c1" />
          <DetailsText>Confirmar entrega</DetailsText>
        </DetailsButton>
      </DetailsItem>
    </Container>
  );
};

export default DetailsActions;
