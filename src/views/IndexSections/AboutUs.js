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
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-3">About Us</h2>
                <p className="lead">
                  The official package contains over 21.000 icons which are
                  looking great in combination with Argon Design System. Make
                  sure you check all of them and use those that you like the
                  most.
                </p>
              </Col>
              <Col className="text-center mt-5" lg="8">
                <i className="fa fa-bolt fa-5x"></i>
                <h2 className="display-3">Ability</h2>
                <p className="lead">
                  The official package contains over 21.000 icons which are
                  looking great in combination with Argon Design System. Make
                  sure you check all of them and use those that you like the
                  most.
                </p>
              </Col>
              <Col className="text-center mt-5" lg="8">
                <i className="fa fa-shield fa-5x"></i>
                <h2 className="display-3">Quality</h2>
                <p className="lead">
                  The official package contains over 21.000 icons which are
                  looking great in combination with Argon Design System. Make
                  sure you check all of them and use those that you like the
                  most.
                </p>
              </Col>
              <Col className="text-center mt-5" lg="8">
                <i className="fa fa-th-list fa-5x"></i>
                <h2 className="display-3">Visi Misi</h2>
                <p className="lead">
                  The official package contains over 21.000 icons which are
                  looking great in combination with Argon Design System. Make
                  sure you check all of them and use those that you like the
                  most.
                </p>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default AboutUs;
