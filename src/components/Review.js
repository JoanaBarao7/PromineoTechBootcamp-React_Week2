import React from "react";
import Stars from "./Stars";

export default class Review extends React.Component {
    constructor(props){   
        super(props);       
        this.state ={
            username: props.username,
            movieReview: props.movieReview,
        };
    }

    render() {
        return (
            <div className="card rev-c w-75">
                <h5 className="card-header rev-h">
                    {this.state.username}
                </h5>
                <div className="card-body rev-b">
                    {this.state.movieReview}
                </div>
                <div className="card-footer rev-f">
                    <Stars />
                </div>
            </div>
        )
    }
}