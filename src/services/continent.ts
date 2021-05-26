import { gql } from '@apollo/client';
import client from '.';
import { Continent } from '../interfaces';

export const getContinentByCode = (code: string) => {
  return client
    .query({
      query: gql`
      {
        continent(code: "${code}") {
          name
          code
          countries {
            code
            emoji
            emojiU
            name
            capital
          }
        }
      }`
    })
    .then((r) => r.data.continent as Continent);
};
