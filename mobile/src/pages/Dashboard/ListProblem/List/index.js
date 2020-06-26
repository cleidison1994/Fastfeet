import React from 'react';
import {Container, Content, ProblemItem} from './styles';

import Itemproblem from './ItemList';

const List = ({listproblem}) => {
  return (
    <Container>
      <Content>
        <ProblemItem
          data={listproblem}
          renderItem={({item}) => (
            <Itemproblem
              problem={item}
              keyExtractor={items => String(items.id)}
            />
          )}
        />
      </Content>
    </Container>
  );
};

export default List;
