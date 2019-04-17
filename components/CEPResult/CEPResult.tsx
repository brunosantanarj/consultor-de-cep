import * as React from 'react';
import styled from 'styled-components';

import { Card, Colors } from '@UI';

interface IProps {
  cepData: {
    cep: string;
    uf: string;
    localidade: string;
    logradouro: string;
  };  
}

const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${Colors.gray};
`;

const Line = styled.li`
 
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export default ({ cepData }: IProps) => (
  <Card>
    <Ul>
      <Line>
        <strong>CEP:</strong> {cepData.cep}
      </Line>
      <Line>
        <strong>Estado:</strong> {cepData.uf}
      </Line>
      <Line>
        <strong>Cidade:</strong> {cepData.localidade}
      </Line>
      <Line>
        <strong>Logradouro</strong> {cepData.logradouro}
      </Line>
    </Ul>
  </Card>
);