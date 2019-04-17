import { fetch } from '@utils';

export default async (cep: string) => {
  const request = await fetch(`/buscar-cep/${cep.replace(/-/g, '')}`);

  try {
    if (request.ok) {
      return await request.json();
    }
  }

  catch (err) {
    return err;
  }
} 