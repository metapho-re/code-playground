import { connect } from 'react-redux';
import {
    toggleHtmlEditor,
    toggleCssEditor,
    toggleJsEditor,
    updateHtmlInput,
    updateCssInput,
    updateJsInput,
} from '../../redux/actionCreators';
import EditorPlatform from './EditorPlatform';

const mapStateToProps = state => ({
    isLightThemeSelected: state.isLightThemeSelected,
    isHtmlFullScreen: state.isFullScreen.htmlEditor,
    htmlCode: state.htmlCode,
    isCssFullScreen: state.isFullScreen.cssEditor,
    cssCode: state.cssCode,
    isJsFullScreen: state.isFullScreen.jsEditor,
    jsCode: state.jsCode,
});

const mapDispatchToProps = dispatch => ({
    toggleHtmlEditor: () => dispatch(toggleHtmlEditor()),
    toggleCssEditor: () => dispatch(toggleCssEditor()),
    toggleJsEditor: () => dispatch(toggleJsEditor()),
    updateHtmlInput: value => dispatch(updateHtmlInput(value)),
    updateCssInput: value => dispatch(updateCssInput(value)),
    updateJsInput: value => dispatch(updateJsInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditorPlatform);
