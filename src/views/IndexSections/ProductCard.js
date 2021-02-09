import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

import CardComp from "./CardComp";
import img1 from "../Img/img-1-1200x1000.jpg";
import img2 from "../Img/img-2-1200x1000.jpg";
class ProductCard extends React.Component {
  render() {
    return (
      <>
        <h1 className="text-black font-bold text-center display-3 mb-5">
          About Product
        </h1>
        <Container className="py-md mt-5">
          <div className="row">
            <div className="col-md-4">
              <CardComp
                imgUrl={img1}
                title="product 1"
                desc="wkwkwkwkwkwkwkwkwkwkwkwkwk"
              />
            </div>
            <div className="col-md-4">
              <CardComp
                imgUrl={img2}
                title="product 2"
                desc="hahahahahahhahahahaha"
              />
            </div>
            <div className="col-md-4">
              <CardComp
                imgUrl={img1}
                title="product 3"
                desc="zzzzzzzzzzzzzzzzzzzzzz"
              />
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default ProductCard;
