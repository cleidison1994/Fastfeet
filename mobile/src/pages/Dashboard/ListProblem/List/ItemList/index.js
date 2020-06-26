import React from 'react';

import {Container, Content, ContentInfo, ContentDate} from './styles';

const ItemList = ({problem}) => {
  return (
    <Container>
      <Content>
        <ContentInfo>{problem.description}</ContentInfo>
        <ContentDate>{problem.formattedCreatedAt}</ContentDate>
      </Content>
    </Container>
  );
};

export default ItemList;
