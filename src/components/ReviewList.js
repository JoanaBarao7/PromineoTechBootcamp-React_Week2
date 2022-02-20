import React from "react";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: [ {
                username: "John",
                movieReview: "It was amazing!"
            },
            {
                username: "Mary",
                movieReview: "Boring!"
            },
            {
                username: "Alex",
                movieReview: "Not too bad!!"
            }
            ]
        };
    };

    addReview(review) {
        this.setState({
            reviews: [review, ...this.state.reviews]
        });
    }

    render() {
        let reviews;

        if(this.state.reviews) {
            reviews = this.state.reviews.map((review, index) => <Review key={index} {...review} />);
        }
        return (
            <div>
                <div><ReviewForm /></div>
                <div className="d-flex flex-wrap justify-content-center">
                    {reviews}
                </div>
            </div>
        )
    }  
    
}