import React from 'react';
import HeroBanner from '../../components/Banner/HeroBanner';
import IssueCard from '../../components/IssueCard/IssueCard';
import TinyCards from '../../components/TinyCards/TinyCards';

const HomePage = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <TinyCards></TinyCards>
            <IssueCard></IssueCard>
        </div>
    );
};

export default HomePage;