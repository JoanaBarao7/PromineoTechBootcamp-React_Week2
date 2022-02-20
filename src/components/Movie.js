import React from "react";
import Stars from "./Stars";
import ReviewList from "./ReviewList";

export default class Movie extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            title: props.title,
            image: props.image,
            synopsis: props.synopsis,
            rating: props.rating,
            reviews: [] 
        };
    }

    render() {
        return (
            <div className="card mov-c w-75">
            <h4 className="card-header text-center mov-h">
                <div className="row">
                    <div className="col">{this.state.title}</div>
                    <div className="col">{this.state.rating}</div>
                    <div className="col-6"><Stars /></div>
                </div>
            </h4>
            <div className="card-body mov-b">
                <div className="row">
                    <div className="col mov-p"><img className="poster" src={this.state.image} alt={this.state.title}/></div>
                    <div className="col mov-s"><p className="card-text">{this.state.synopsis}</p></div>
                </div>
            </div>
            <div className="card-footer mov-f">
                <div><ReviewList /></div>
                
            </div>
        </div>
        )
    }
    
}