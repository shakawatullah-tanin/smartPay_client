import React from 'react';
import Root from '../Root/Root';
import Banner from '../../Banner/Banner';
import Bills from '../Bills/Bills';
import WhyToUse from '../Why use us/WhyToUse';
import Partner from '../Partner/Partner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Partner></Partner>
            <WhyToUse></WhyToUse>
        </div>
    );
};

export default Home;