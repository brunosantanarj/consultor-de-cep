import React from 'react';

import { GlobalStyle } from '@UI';
import { SearchCEP, CEPREsult } from '@components';

export default () => {
  const [ cepInformations, setCepInformations] = React.useState({
    cep: '',
    uf: '',
    localidade: '',
    logradouro: '',
  });

  const onInformationsCEP = (cep: any): void => setCepInformations(cep);

  return (
      <React.Fragment>
        <GlobalStyle />
        <SearchCEP informationsCEP={onInformationsCEP} />
        {cepInformations.cep && <CEPREsult cepData={cepInformations} />}
      </React.Fragment>
    );
}