import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/HeaderContainer';
import ResourceModal from '../ResourceModal/ResourceModalContainer';
import Body from '../Body/BodyContainer';
import './Main.scss';

const Main = ({ isLightThemeSelected }) => (
    <div className={isLightThemeSelected ? 'light' : 'dark'}>
        <Header />
        <ResourceModal />
        <Body />
        <div id="smallScreen">
            <p>Please use the code playground on a bigger screen.</p>
        </div>
    </div>
);
Main.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
};

export default Main;
