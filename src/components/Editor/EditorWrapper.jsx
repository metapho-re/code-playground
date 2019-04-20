import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import ToggleViewButton from '../Common/ToggleViewButton';
import 'brace/ext/language_tools';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow_night_eighties';
import 'brace/theme/kuroir';
import './EditorWrapper.scss';

const EditorWrapper = ({
    isLightThemeSelected,
    langName,
    langType,
    isFullScreen,
    toggleEditor,
    code,
    onChange,
}) => (
    <div
        id={`${langName}Code`}
        className="wrapper"
    >
        <p>{langName.toUpperCase()}</p>
        <ToggleViewButton
            isFullScreen={isFullScreen}
            toggle={() => toggleEditor()}
        />
        <AceEditor
            value={code}
            mode={langType}
            onChange={value => onChange(value)}
            wrapEnabled
            fontSize={16}
            width="100%"
            height="100%"
            theme={isLightThemeSelected ? 'kuroir' : 'tomorrow_night_eighties'}
            showPrintMargin={false}
            enableBasicAutocompletion
            enableLiveAutocompletion
            editorProps={{ $blockScrolling: Infinity }}
            setOptions={{ fixedWidthGutter: true }}
        />
    </div>
);
EditorWrapper.propTypes = {
    isLightThemeSelected: PropTypes.bool.isRequired,
    langName: PropTypes.string.isRequired,
    langType: PropTypes.string.isRequired,
    isFullScreen: PropTypes.bool.isRequired,
    toggleEditor: PropTypes.func.isRequired,
    code: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default EditorWrapper;
