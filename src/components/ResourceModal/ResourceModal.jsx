import React from 'react';
import PropTypes from 'prop-types';
import {
    Row,
    Col,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    InputGroup,
    InputGroupAddon,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import ResourceList from './ResourceList';
import './ResourceModal.scss';

const ResourceModal = ({
    isModalOpen,
    toggleModal,
    activeTabId,
    toggleTabs,
    cssStylesheetInput,
    updateCssStylesheetInput,
    externalCssArray,
    externalCssArrayIndex,
    addCssStylesheet,
    removeCssStylesheet,
    jsLibraryInput,
    updateJsLibraryInput,
    externalJsArray,
    externalJsArrayIndex,
    addJsLibrary,
    removeJsLibrary,
}) => (
    <Modal
        isOpen={isModalOpen}
        toggle={() => toggleModal()}
    >
        <ModalHeader toggle={() => toggleModal()}>Add a stylesheet or a library.</ModalHeader>
        <ModalBody>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={activeTabId === '0' ? 'active' : ''}
                        onClick={() => toggleTabs('0')}
                    >
                        CSS
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={activeTabId === '1' ? 'active' : ''}
                        onClick={() => toggleTabs('1')}
                    >
                        JS
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTabId}>
                <TabPane tabId="0">
                    <Row>
                        <Col>
                            <p className="tip">
                                {'Any URL\'s added here will be added as <link>s in order, and before the CSS in the editor.'}
                            </p>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">CSS</InputGroupAddon>
                                <Input
                                    type="text"
                                    name="cssStylesheet"
                                    id="cssStylesheet"
                                    value={cssStylesheetInput}
                                    onChange={e => updateCssStylesheetInput(e.currentTarget.value)}
                                    placeholder="Add an external stylesheet..."
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ResourceList
                                externalArray={externalCssArray}
                                handleRemove={fileIndex => removeCssStylesheet(fileIndex)}
                            />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="1">
                    <Row>
                        <Col>
                            <p className="tip">
                                {'Any URL\'s added here will be added as <script>s in order, and run before the JavaScript in the editor.'}
                            </p>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">JS</InputGroupAddon>
                                <Input
                                    type="text"
                                    name="jsLibrary"
                                    id="jsLibrary"
                                    value={jsLibraryInput}
                                    onChange={e => updateJsLibraryInput(e.currentTarget.value)}
                                    placeholder="Add an external library or script..."
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ResourceList
                                externalArray={externalJsArray}
                                handleRemove={fileIndex => removeJsLibrary(fileIndex)}
                            />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </ModalBody>
        <ModalFooter>
            <Button
                color="primary"
                onClick={
                    parseInt(activeTabId, 2)
                        ? () => addJsLibrary(jsLibraryInput, externalJsArrayIndex)
                        : () => addCssStylesheet(cssStylesheetInput, externalCssArrayIndex)
                }
            >
                Add
            </Button>
            <Button
                color="secondary"
                onClick={() => toggleModal()}
            >
                Close
            </Button>
        </ModalFooter>
    </Modal>
);
ResourceModal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    toggleModal: PropTypes.func.isRequired,
    activeTabId: PropTypes.string.isRequired,
    toggleTabs: PropTypes.func.isRequired,
    cssStylesheetInput: PropTypes.string.isRequired,
    updateCssStylesheetInput: PropTypes.func.isRequired,
    externalCssArray: PropTypes.arrayOf(PropTypes.array).isRequired,
    externalCssArrayIndex: PropTypes.number.isRequired,
    addCssStylesheet: PropTypes.func.isRequired,
    removeCssStylesheet: PropTypes.func.isRequired,
    jsLibraryInput: PropTypes.string.isRequired,
    updateJsLibraryInput: PropTypes.func.isRequired,
    externalJsArray: PropTypes.arrayOf(PropTypes.array).isRequired,
    externalJsArrayIndex: PropTypes.number.isRequired,
    addJsLibrary: PropTypes.func.isRequired,
    removeJsLibrary: PropTypes.func.isRequired,
};

export default ResourceModal;
