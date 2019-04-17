import styled from 'styled-components';

import Colors from './Colors';

export default styled.input.attrs({
  type: 'text',
})`
  border: 1px solid ${Colors.line};
  color: ${Colors.gray};
  padding: 15px 20px;
  outline-color: #0868be;
  margin-right: 5px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;
