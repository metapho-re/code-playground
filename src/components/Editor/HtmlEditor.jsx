import React from 'react';
import PropTypes from 'prop-types';
import EditorWrapper from './EditorWrapper';

const HtmlEditor = ({
    isLightThemeSelected,
    isFullScreen,
    code,
    toggleEditor,
    updateInput,
}) => (
    <EditorWrapper
        langType="html"
        langName="html"
        isFullScreen={isFullScreen}
        toggleEditor={() => toggleEditor()}
        isLightThemeSelected={isLightThemeSelected}
        code={code}
        onChange={value => updateInput(value)}
    />
);
HtmlEditor.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    code: PropTypes.string.isRequired,
    toggleEditor: PropTypes.func.isRequired,
    updateInput: PropTypes.func.isRequired,
};

export default HtmlEditor;
