import React from 'react';
import { useHistory } from 'react-router';
import styles from './home.module.scss';

type Link = {
    key: string;
    title: string;
    path: string;
}

const links: Array<Link> = [
    {
        key: 'excercise_q',
        title: 'Excercise 1',
        path: '/excercise-1'
    },
    {
        key: 'excercise_2',
        title: 'Excercise 2',
        path: '/excercise-2'
    },
    {
        key: 'excercise_3',
        title: 'Excercise 3',
        path: '/excercise-3'
    },
];

const Home: React.FC = () => {
    const history = useHistory();

    const handleButtonClick = (path: string) => () => {
        history.push(path)
    };

    const renderLink = ({ key, title, path }: Link) => (
        <button key={key} onClick={handleButtonClick(path)}>
            {title}
        </button>
    );

    return (
        <div className={styles.container}>
            {links.map(renderLink)}
        </div>
    )
}

export default Home;
