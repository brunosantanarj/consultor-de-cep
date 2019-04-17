import * as React from 'react';

import { Card, Input, Button } from '@UI';
import { getCEP } from '@operations';

interface IProps {
  informationsCEP: (response: Object) => void;
}

export default ({ informationsCEP }: IProps) => {
  const [ cep, setCepValue ] = React.useState('');
  const [ loading, setLoading ] = React.useState(false);
  const [ error, setError ] = React.useState('');

  const onChangeCEPInput = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => setCepValue(
    currentTarget.value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
  );

  const onError = () => {
    setLoading(false);
    setError('Ops! CEP Inválido, por favor, tente novamente!');
  };

  const onSuccess = (response: Object) => {
    setLoading(false);
    setError('');
    informationsCEP(response);
  }

  const resetStates = () => {
    informationsCEP({});
    setError('');
  }

  const onSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    resetStates();
    setLoading(true);
    const response = await getCEP(cep);

    if (!response) {
      onError();
      return;
    }

    onSuccess(response);
  };

  return (
    <Card css={`text-align: center;`}>
      <form onSubmit={onSearch}>
        <Input
          placeholder='Digite seu CEP'
          maxLength={9}
          value={cep}
          onChange={onChangeCEPInput}
        />
        <Button loading={loading}>
          Buscar CEP
        </Button>
        {error && <p>{error}</p>}
      </form>
    </Card>
  );
};
