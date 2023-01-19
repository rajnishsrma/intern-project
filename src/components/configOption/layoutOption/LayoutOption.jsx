import React from 'react';
import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import "./layout-option.css";

function LayoutOption() {
    return (
        <div className='layout-option-container'>
            <Row className='layout-option-header gx-0' >
                <h4>Layout Option</h4>
            </Row>

            <Row className='layout-option-row g-0'>
                <Col md={5}>
                    <label>Assembly Type</label>
                </Col>
                <Col md={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Complete door</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col md={1}></Col>
            </Row>

            <Row className='layout-option-row g-0'>
                <Col md={5}>
                    <label>Measure Size <span>< FontAwesomeSvgIcon icon={faQuestionCircle} /></span> </label>
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={4} className="layout-measure-size-label">
                            <label>Width </label>
                        </Col>
                        <Col md={4}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row className='layout-option-row g-0'>
                <Col md={5}>
                    {/* <label>Measure Size </label> */}
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={4} className="layout-measure-size-label">
                            <label>Height </label>
                        </Col>
                        <Col md={4}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                        <Col md={4}>
                            <Form.Select aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row className='layout-option-row g-0'>
                <Col md={5}>
                    <label>Assembly Type</label>
                </Col>
                <Col md={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row className='layout-option-row g-0'>
                <Col md={5}>
                    <label>Assembly Type</label>
                </Col>
                <Col md={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col md={1}></Col>
            </Row>
            <Row className='layout-option-row g-0'>
                <Col md={5}>
                    <label>Assembly Type</label>
                </Col>
                <Col md={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col md={1}></Col>
            </Row>
        </div>
    )
}

export default LayoutOption