import styled from 'styled-components';

import Colors from './Colors';

interface IProps {
  css?: string;
}

export default styled.div<IProps>`
  max-width: 700px;
  padding: 25px;
  margin: 15px auto;
  background-color: white;
  border: 1px solid ${Colors.line};
`;