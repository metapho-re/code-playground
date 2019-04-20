import React from 'react';
import PropTypes from 'prop-types';
import ToggleViewButton from '../Common/ToggleViewButton';
import {
    MoonIcon,
    SunIcon,
    TwoAndTwoIcon,
    ThreeAndOneVerticalIcon,
    ThreeAndOneHorizontalIcon,
    AddResourceIcon,
} from '../Common/Icons';
import './Header.scss';

const Header = ({
    isLightThemeSelected,
    isFullScreen,
    switchTheme,
    selectLayout,
    toggleFrame,
    toggleModal,
}) => (
    <div id="header">
        <div className="headerSection">
            <p>Switch theme: </p>
            <button type="button" onClick={() => switchTheme()}>
                {isLightThemeSelected ? <MoonIcon /> : <SunIcon />}
            </button>
        </div>
        <div className="headerSection">
            <p>Toggle iFrame: </p>
            <ToggleViewButton
                isFullScreen={isFullScreen}
                toggle={() => toggleFrame()}
            />
        </div>
        <div className="headerSection">
            <p>Select layout: </p>
            <button
                type="button"
                value="twoAndTwo"
                onClick={e => selectLayout(e.currentTarget.value)}
            >
                <TwoAndTwoIcon />
            </button>
            <button
                type="button"
                value="threeAndOneVertical"
                onClick={e => selectLayout(e.currentTarget.value)}
            >
                <ThreeAndOneVerticalIcon />
            </button>
            <button
                type="button"
                value="threeAndOneHorizontal"
                onClick={e => selectLayout(e.currentTarget.value)}
            >
                <ThreeAndOneHorizontalIcon />
            </button>
        </div>
        <div className="headerSection">
            <p>Add resources: </p>
            <button type="button" onClick={() => toggleModal()}>
                <AddResourceIcon />
            </button>
        </div>
    </div>
);
Header.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    switchTheme: PropTypes.func.isRequired,
    selectLayout: PropTypes.func.isRequired,
    toggleFrame: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
};

export default Header;
