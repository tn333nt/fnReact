import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

class DishDetail extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.description} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(commentList) {
    return (
      <div>
        <h4>Comments</h4>
        {commentList.map((comment) => (
          <ul className="list-unstyled">
            <li>{comment.comment}</li>
            <li>
              --{comment.author}, {dateFormat(comment.date, "mmm dd, yyyy")}
            </li>
          </ul>
        ))}
      </div>
    );
  }

  render() {
    if (this.props.dish) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.props.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
