import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {format, parseISO} from 'date-fns';

import {LogoutRequest} from '~/store/modules/auth/actions';

import Avatar from '~/components/AvatarInput';
import {
  Container,
  ProfileContainer,
  Label,
  ProfileItem,
  ProfileName,
  ProfileButton,
  ProfileText,
} from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.profile);
  const formattedData = format(parseISO(profile.createdAt), 'dd/MM/yyyy');

  return (
    <Container>
      <Avatar url={profile.avatar_id ? profile.deliveryman_avatar.url : null} />
      <ProfileContainer>
        <ProfileItem>
          <Label>Nome</Label>
          <ProfileName>{profile.name}</ProfileName>
        </ProfileItem>
        <ProfileItem>
          <Label>Email</Label>
          <ProfileName>{profile.email}</ProfileName>
        </ProfileItem>
        <ProfileItem>
          <Label>Data de cadastro</Label>
          <ProfileName>{formattedData}</ProfileName>
        </ProfileItem>
      </ProfileContainer>
      <ProfileButton onPress={() => dispatch(LogoutRequest())}>
        <ProfileText>Logout</ProfileText>
      </ProfileButton>
    </Container>
  );
};

export default Profile;
