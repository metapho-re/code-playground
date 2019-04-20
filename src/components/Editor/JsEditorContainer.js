import { connect } from 'react-redux';
import { toggleJsEditor, updateJsInput } from '../../redux/actionCreators';
import JsEditor from './JsEditor';

const mapStateToProps = state => ({
    isLightThemeSelected: state.isLightThemeSelected,
    isFullScreen: state.isFullScreen.jsEditor,
    code: state.jsCode,
});

const mapDispatchToProps = dispatch => ({
    toggleEditor: () => dispatch(toggleJsEditor()),
    updateInput: value => dispatch(updateJsInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JsEditor);
