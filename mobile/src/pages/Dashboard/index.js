import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {LogoutRequest} from '~/store/modules/auth/actions';

import DeliveriesList from '~/components/ListDeliveries';
import {
  Container,
  Header,
  Avatar,
  HeaderInfo,
  ViewUser,
  TextUser,
} from './styles';

const Dashboard = () => {
  const dispacth = useDispatch();
  const deliveryman = useSelector(state => state.auth.profile);

  function handleSigninOut() {
    dispacth(LogoutRequest());
  }

  return (
    <Container>
      <Header>
        <HeaderInfo>
          <Avatar
            source={{
              uri: deliveryman.avatar_id
                ? deliveryman.deliveryman_avatar.url
                : 'https://api.adorable.io/avatars/50/abott@adorable.png',
            }}
          />
          <ViewUser>
            <Text>Bem vindo de volta,</Text>
            <TextUser>{deliveryman.name}</TextUser>
          </ViewUser>
        </HeaderInfo>
        <View>
          <TouchableOpacity onPress={handleSigninOut}>
            <Icon name="exit-to-app" size={26} color="#E74040" />
          </TouchableOpacity>
        </View>
      </Header>
      <DeliveriesList />
    </Container>
  );
};

export default Dashboard;
