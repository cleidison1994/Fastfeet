import React, {useState, useEffect} from 'react';
import {format, parseISO} from 'date-fns';
import api from '~/services/api';

import Background from '~/components/Background';
import ListProblems from './List';
import {Container, BackgroundHeader} from './styles';

const ListProblem = ({route}) => {
  const {id} = route.params;
  const [listProblem, setProblem] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${id}/problems`);

      const problems = response.data.map(problem => {
        const CreatedAt = problem.createdAt
          ? format(parseISO(problem.createdAt), 'dd/MM/yyyy')
          : '00/00/0000';
        return {
          ...problem,
          formattedCreatedAt: CreatedAt,
        };
      });
      setProblem(problems);
    }
    loadProblems();
  }, [id]);

  return (
    <Container>
      <Background />
      <BackgroundHeader />
      <ListProblems listproblem={listProblem} />
    </Container>
  );
};
export default ListProblem;
