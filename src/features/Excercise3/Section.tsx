import React, { useEffect, useState } from 'react';
import { Country } from '../../interfaces';
import styles from './excercise3.module.scss';

interface IProps {
    dataFetcher: (code: string) => any;
    contentGenerator: (data: any) => JSX.Element;
    placeholder: string;
}

const Section: React.FC<IProps> = ({ dataFetcher, contentGenerator, placeholder } : IProps) => {
    const [code, setCode] = useState<string>('');
    const [ data, setData] = useState<Country>();
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const data = await dataFetcher(code);
            setData(data);
        } catch(e) {
            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(code.length != 2) return;
        fetchData();
    }, [code]); 


    const handleInputChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value.toUpperCase())
    };


    return (
        <div>
            <section>
                <input className={styles.input} placeholder={placeholder} onChange={handleInputChange} value={code} maxLength={2} />
                <div>
                    {data && contentGenerator(data)}
                    {loading && <div>Loading...</div>}
                </div>
            </section>
        </div>
    )
}

export default Section;
