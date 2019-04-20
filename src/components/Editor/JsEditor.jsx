import React from 'react';
import PropTypes from 'prop-types';
import EditorWrapper from './EditorWrapper';

const JsEditor = ({
    isLightThemeSelected,
    isFullScreen,
    code,
    toggleEditor,
    updateInput,
}) => (
    <EditorWrapper
        langType="javascript"
        langName="js"
        isFullScreen={isFullScreen}
        toggleEditor={() => toggleEditor()}
        isLightThemeSelected={isLightThemeSelected}
        code={code}
        onChange={value => updateInput(value)}
    />
);
JsEditor.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    code: PropTypes.string.isRequired,
    toggleEditor: PropTypes.func.isRequired,
    updateInput: PropTypes.func.isRequired,
};

export default JsEditor;
