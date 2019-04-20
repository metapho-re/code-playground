import { connect } from 'react-redux';
import {
    toggleModal,
    toggleTabs,
    updateCssStylesheetInput,
    addCssStylesheet,
    removeCssStylesheet,
    updateJsLibraryInput,
    addJsLibrary,
    removeJsLibrary,
} from '../../redux/actionCreators';
import ResourceModal from './ResourceModal';

const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen,
    activeTabId: state.activeTabId,
    cssStylesheetInput: state.cssStylesheetInput,
    jsLibraryInput: state.jsSLibraryInput,
    externalCssArray: state.externalCssArray,
    externalCssArrayIndex: state.externalCssArrayIndex,
    externalJsArray: state.externalJsArray,
    externalJsArrayIndex: state.externalJsArrayIndex,
});

const mapDispatchToProps = dispatch => ({
    toggleModal: () => dispatch(toggleModal()),
    toggleTabs: tabId => dispatch(toggleTabs(tabId)),
    updateCssStylesheetInput: value => dispatch(updateCssStylesheetInput(value)),
    addCssStylesheet: (file, fileIndex) => dispatch(addCssStylesheet(file, fileIndex)),
    removeCssStylesheet: fileIndex => dispatch(removeCssStylesheet(fileIndex)),
    updateJsLibraryInput: value => dispatch(updateJsLibraryInput(value)),
    addJsLibrary: (file, fileIndex) => dispatch(addJsLibrary(file, fileIndex)),
    removeJsLibrary: fileIndex => dispatch(removeJsLibrary(fileIndex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResourceModal);
