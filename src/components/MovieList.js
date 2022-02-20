import Armageddon from '../assets/Armageddon.jpg';
import Avatar from '../assets/Avatar.jpg';
import Titanic from '../assets/Titanic.png';

import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [ {
                title: "Armageddon",
                image: Armageddon,
                synopsis: "After discovering that an asteroid the size of Texas is going to impact Earth in less than a month, NASA recruits a misfit team of deep-core drillers to save the planet.",
                reviews: []
            },
            {
                title: "Avatar",
                image: Avatar,
                synopsis: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
                reviews: []
            },
            {
                title: "Titanic",
                image: Titanic,
                synopsis: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                reviews: []
            }]
        };
    };
    render() {
        let movies;

        if(this.state.movies) {
            movies = this.state.movies.map((movie, index) => <Movie key={index} {...movie} />);
        }
        return (
            <div className="d-flex flex-wrap justify-content-center">
                {movies}
            </div>
        )
    }  
}

    