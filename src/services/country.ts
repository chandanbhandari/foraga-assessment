import { gql } from '@apollo/client';
import client from '.';
import { Country } from '../interfaces';

export const getCountryByCode = (code: string) => {
    return client
        .query({
            query: gql`
            {
                country(code: "${code}") {
                    code
                    emoji
                    emojiU
                    name
                    capital
                    currency
                }
            }`
        }).then(r => r.data.country as Country);
};