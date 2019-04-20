import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

function ResourceList({ externalArray, handleRemove }) {
    const Resources = externalArray;
    const List = Resources.map(item => (
        <li key={item[0]}>
            <Row>
                <Col xs="11">
                    <p>{item[1]}</p>
                </Col>
                <Col xs="1">
                    <button type="button" onClick={() => handleRemove(item[0])}>
                        <span>×</span>
                    </button>
                </Col>
            </Row>
        </li>
    ));
    return (
        <ul className="resourceList">{List}</ul>
    );
}
ResourceList.propTypes = {
    externalArray: PropTypes.arrayOf(PropTypes.array).isRequired,
    handleRemove: PropTypes.func.isRequired,
};

export default ResourceList;
