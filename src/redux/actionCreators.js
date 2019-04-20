import * as actionTypes from './actionTypes';

export const switchTheme = () => ({
    type: actionTypes.SWITCH_THEME,
});

export const toggleFrame = () => ({
    type: actionTypes.TOGGLE_FRAME,
});

export const toggleHtmlEditor = () => ({
    type: actionTypes.TOGGLE_HTML_EDITOR,
});

export const toggleCssEditor = () => ({
    type: actionTypes.TOGGLE_CSS_EDITOR,
});

export const toggleJsEditor = () => ({
    type: actionTypes.TOGGLE_JS_EDITOR,
});

export const toggleModal = () => ({
    type: actionTypes.TOGGLE_MODAL,
});

export const toggleTabs = tabId => ({
    type: actionTypes.TOGGLE_TABS,
    payload: tabId,
});

export const selectLayout = layoutId => ({
    type: actionTypes.SELECT_LAYOUT,
    payload: layoutId,
});

export const updateHtmlInput = value => ({
    type: actionTypes.UPDATE_HTML_INPUT,
    payload: value,
});

export const updateCssInput = value => ({
    type: actionTypes.UPDATE_CSS_INPUT,
    payload: value,
});

export const updateJsInput = value => ({
    type: actionTypes.UPDATE_JS_INPUT,
    payload: value,
});

export const updateCssStylesheetInput = value => ({
    type: actionTypes.UPDATE_CSS_STYLESHEET_INPUT,
    payload: value,
});

export const addCssStylesheet = (file, fileIndex) => ({
    type: actionTypes.ADD_CSS_STYLESHEET,
    payload: { file, fileIndex },
});

export const removeCssStylesheet = fileIndex => ({
    type: actionTypes.REMOVE_CSS_STYLESHEET,
    payload: fileIndex,
});

export const updateJsLibraryInput = value => ({
    type: actionTypes.UPDATE_JS_LIBRARY_INPUT,
    payload: value,
});

export const addJsLibrary = (file, fileIndex) => ({
    type: actionTypes.ADD_JS_LIBRARY,
    payload: { file, fileIndex },
});

export const removeJsLibrary = fileIndex => ({
    type: actionTypes.REMOVE_JS_LIBRARY,
    payload: fileIndex,
});
