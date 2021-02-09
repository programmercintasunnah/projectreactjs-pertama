/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";
import wa from "../Img/wa.png";
import ig from "../Img/ig.jpeg";
import github from "../Img/github.png";

class Contact extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">Contact Us</h4>
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          width="50"
                          alt="..."
                          className="img-fluid"
                          src={wa}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Klik akun whatsApp kami
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/vue-argon-design-system?ref=adsr-landing-page"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          width="50"
                          alt="..."
                          className="img-fluid"
                          src={ig}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Klik akun instagram kami
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system-angular?ref=adsr-landing-page"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          width="50"
                          alt="..."
                          className="img-fluid"
                          src={github}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Klik akun github kami
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Contact;
