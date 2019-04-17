import * as fetchImport from 'isomorphic-unfetch';

export default (fetchImport.default || fetchImport) as typeof fetchImport.default;