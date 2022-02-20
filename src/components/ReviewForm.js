import React from "react";
import Review from "./Review";

export default class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        review: {
          username: '',
          movieReview: ''
        },
        reviews: []
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
    }

  handleChange(event) { 
    const {value, name} = event.target;
    this.setState({
      review: {
        ...this.state.review,
        [name]: value
      }
    });
  };

  handleSubmit(event) {
      if(this.state.review !== ''){
        this.state.reviews.push(new Review(this.state.username, this.state.movieReview))
      }
      event.preventDefault();    
  }

  render() { 
    return ( 
      <div className="card rev-c">
        <form onSubmit={this.handleSubmit}> 
            <div className="card-header rev-h">
              <h3>Review this movie</h3>
            </div>

            <div className="card-body rev-b">
              <div className="form-group">
              <label>
                  Username:
                  <input 
                  type="text" required
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  value={this.state.review.username} 
                  onChange={this.handleChange}/>
              </label>
              </div>

              <br />

              <div className="form-group">
              <label>
                  Review:
                  <textarea 
                  required rows="5" cols="30" minLength="5"
                  name="movieReview"
                  placeholder="Review"
                  className="form-control"
                  value={this.state.review.movieReview}
                  onChange={this.handleChange} />
              </label>
              </div>
            </div>

              <br />

            <div className="card-footer rev-f">
              <div className="form-group">
              <button className="btn btn-primary">Submit</button>
              </div>
            </div>
        </form>
      </div>
    );
  }
}



