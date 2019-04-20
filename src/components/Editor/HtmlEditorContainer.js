import { connect } from 'react-redux';
import { toggleHtmlEditor, updateHtmlInput } from '../../redux/actionCreators';
import HtmlEditor from './HtmlEditor';

const mapStateToProps = state => ({
    isLightThemeSelected: state.isLightThemeSelected,
    isFullScreen: state.isFullScreen.htmlEditor,
    code: state.htmlCode,
});

const mapDispatchToProps = dispatch => ({
    toggleEditor: () => dispatch(toggleHtmlEditor()),
    updateInput: value => dispatch(updateHtmlInput(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HtmlEditor);
