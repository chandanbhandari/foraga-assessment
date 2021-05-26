import React from 'react';
import { Emojione } from 'react-emoji-render';
import { Continent, Country } from '../../interfaces';
import { getContinentByCode, getCountryByCode } from '../../services';
import Section from './Section';
import styles from './excercise3.module.scss';

const Excercise3: React.FC = () => {
    const renderCountry = (country: Country) => {
        return <div>
            <div><label>Name: </label> { country.name }</div>
            <div><label>Code: </label> { country.code }</div>
            <div><label>Currency: </label> { country.currency }</div>
            <div><label>Flag: </label> <Emojione text={`${country.emoji}`} /></div>
        </div>
    };

    const renderContinent = (continent: Continent) => {
        return <div>
            <div><label>Name: </label> { continent.name }</div>
            <div><label>Code: </label> { continent.code }</div>
            <div>
                <label>Countries: </label> 
                <ol className={styles.countryListContainer}>
                    {
                        continent.countries.map((country: Country) => (<li><Emojione text={`${country.emoji} ${country.name}`} /> </li>))
                    }
                </ol>
            </div>
        </div>
    };

    return (
        <div className={styles.container}>
            <section className={styles.sectionContainer}>
                <Section 
                    contentGenerator={renderCountry}
                    dataFetcher={getCountryByCode}
                    placeholder="Enter Country Code"
                />
            </section>
            <section className={styles.sectionContainer}>
                <Section 
                    contentGenerator={renderContinent}
                    dataFetcher={getContinentByCode}
                    placeholder="Enter Continent Code"
                />
            </section>
        </div>
    )
}

export default Excercise3;
