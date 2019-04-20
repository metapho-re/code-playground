import React from 'react';
import PropTypes from 'prop-types';
import './Frame.scss';

const Frame = ({ page }) => <iframe title="iFrame" srcDoc={page} />;
Frame.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Frame;
