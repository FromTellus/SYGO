// fetch catFact from backend and set value to the react div

const RandomMovieFetcher = (props) => {
    const checkIfRandomMovieIsFetched = () => {
        if (props.movie === null) {
        return 'Loading..';
        }
        return props.movie;
    }
    checkIfRandomMovieIsFetched(props.movie);
    const randomMoviePass = checkIfRandomMovieIsFetched();
    return (
        <div className="cat-fact">
        <h3>Don't go outside!</h3> 
        <h3> Watch this movie instead : {randomMoviePass}</h3>
        </div>
    );
    }
    export default RandomMovieFetcher;