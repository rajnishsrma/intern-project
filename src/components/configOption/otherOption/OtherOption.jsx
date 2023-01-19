import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeSvgIcon } from 'react-fontawesome-svg-icon';
import './otheroption.css';

export default function OtherOption() {
    return (
        <div className='other-option-container'>

            <Row className='other-option-header gx-0'>
                <h3>Window Option</h3>
            </Row>

            <Row className='other-option-row'>
                <Col md={5}>
                    <label>Glass Type <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>

                </Col>

                <Col md={6}>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">solid(no windows)</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Col>
                <Col md={1}></Col>
            </Row>
            <div className="row-items">
                <Row className='other-option-row'>
                    <Col md={5}>
                        <label>MISC Lock Option</label>
                    </Col>

                    <Col md={4}>
                        <Form.Check className='op-radio'
                            type='radio'
                            id='misc'
                            label="no lock hole"
                        />
                    </Col>

                    <Col md={3}></Col>

                </Row>

                <Row className='other-option-row'>
                    <Col md={5} className="">
                        <label>Packaging <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span></label>

                    </Col>

                    <Col md={6}>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">solid(no windows)</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col md={1}></Col>
                </Row>

                <Row className='other-option-row warning'>
                    <Col md={5}></Col>

                    <Col md={6} className="lable-ques">
                        <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span>
                        <span>clopy CWD models exclusive packaging options</span>
                    </Col>

                </Row>

                <Row className='other-option-row'>
                    <Col md={5} className="">
                        <label>Additional Option <span><FontAwesomeSvgIcon icon={faQuestionCircle} /></span> </label>
                    </Col>


                    <Col md={6}>
                        <Row >
                            <Col md={5}>
                                <Form.Check className='op-check'
                                    type="checkbox"
                                    label="extra strut(s)"
                                    id="add-opt-check"
                                />
                            </Col>

                            <Col md={7}>
                                <Form.Select aria-label="Default select example">
                                    <option>Open this select menu</option>
                                    <option value="1">solid(no windows)</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>


                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>

                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            <Col md={12}>

                            <Form.Check className='op-check'

                                type="checkbox"
                                label="extra strut(s)"
                                id="add-opt-check"
                            />
                            </Col>
                            
                        </Row>
                    </Col>

                    <Col md={1}></Col>
                </Row>
            </div>
        </div>
    )
}
