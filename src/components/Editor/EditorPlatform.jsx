import React from 'react';
import PropTypes from 'prop-types';
import EditorWrapper from './EditorWrapper';

const EditorPlatform = ({
    isLightThemeSelected,
    isHtmlFullScreen,
    toggleHtmlEditor,
    htmlCode,
    updateHtmlInput,
    isCssFullScreen,
    toggleCssEditor,
    cssCode,
    updateCssInput,
    isJsFullScreen,
    toggleJsEditor,
    jsCode,
    updateJsInput,
}) => (
    <>
        <EditorWrapper
            langType="html"
            langName="html"
            isFullScreen={isHtmlFullScreen}
            toggleEditor={() => toggleHtmlEditor()}
            isLightThemeSelected={isLightThemeSelected}
            code={htmlCode}
            onChange={value => updateHtmlInput(value)}
        />
        <EditorWrapper
            langType="css"
            langName="css"
            isFullScreen={isCssFullScreen}
            toggleEditor={() => toggleCssEditor()}
            isLightThemeSelected={isLightThemeSelected}
            code={cssCode}
            onChange={value => updateCssInput(value)}
        />
        <EditorWrapper
            langType="javascript"
            langName="js"
            isFullScreen={isJsFullScreen}
            toggleEditor={() => toggleJsEditor()}
            isLightThemeSelected={isLightThemeSelected}
            code={jsCode}
            onChange={value => updateJsInput(value)}
        />
    </>
);
EditorPlatform.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
    isHtmlFullScreen: PropTypes.bool.isRequired,
    toggleHtmlEditor: PropTypes.func.isRequired,
    htmlCode: PropTypes.string.isRequired,
    updateHtmlInput: PropTypes.func.isRequired,
    isCssFullScreen: PropTypes.bool.isRequired,
    toggleCssEditor: PropTypes.func.isRequired,
    cssCode: PropTypes.string.isRequired,
    updateCssInput: PropTypes.func.isRequired,
    isJsFullScreen: PropTypes.bool.isRequired,
    toggleJsEditor: PropTypes.func.isRequired,
    jsCode: PropTypes.string.isRequired,
    updateJsInput: PropTypes.func.isRequired,
};

export default EditorPlatform;
