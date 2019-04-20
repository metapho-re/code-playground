import React from 'react';
import PropTypes from 'prop-types';
import { CompressIcon, ExpandIcon } from './Icons';

const ToggleViewButton = ({ isFullScreen, toggle }) => (
    isFullScreen
        ? <button type="button" onClick={toggle}><CompressIcon /></button>
        : <button type="button" onClick={toggle}><ExpandIcon /></button>
);
ToggleViewButton.propTypes = {
    isFullScreen: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default ToggleViewButton;
