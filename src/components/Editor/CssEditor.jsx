import React from 'react';
import PropTypes from 'prop-types';
import EditorWrapper from './EditorWrapper';

const CssEditor = ({
    isLightThemeSelected,
    isFullScreen,
    code,
    toggleEditor,
    updateInput,
}) => (
    <EditorWrapper
        langType="css"
        langName="css"
        isFullScreen={isFullScreen}
        toggleEditor={() => toggleEditor()}
        isLightThemeSelected={isLightThemeSelected}
        code={code}
        onChange={value => updateInput(value)}
    />
);
CssEditor.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    code: PropTypes.string.isRequired,
    toggleEditor: PropTypes.func.isRequired,
    updateInput: PropTypes.func.isRequired,
};

export default CssEditor;
