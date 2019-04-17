import * as React from 'react';
import styled from 'styled-components';

import Colors from './Colors';
import Loading from './Loading';

interface IProps {
  loading: boolean;
  children: React.ReactChild|React.ReactNode|string;
}

const Button = styled.button.attrs({
  type: 'submit'
})`
  min-width: 119px;
  color: white;
  background-color: ${Colors.base};
  padding: 15px;
  cursor: pointer;
  outline: 0 none;
  text-align: center;
`;

export default ({ loading, children, ...props }: IProps) => (
  <Button {...props}>
    { loading ? <Loading /> : children }
  </Button>
);
