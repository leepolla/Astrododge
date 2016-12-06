var database = firebase.database();
var scoresData = database.ref('Scores');
var currentScores = [];

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: []
        };

        scoresData.on('value', snapshot => {
        this.state.scores = snapshot.val();
        //this.forceUpdate();
        });
    }

    //Reads movie data from firebase
    componentDidMount() {    
            this.unMountChilAdded = scoresData.on('child_added', function(data) {
                var highScore = {userName: data.val().userName, scoreValue: data.val().scoreValue, keyID: data.key};
                currentScores.push(highScore);  
            });        
            this.forceUpdate();            
        }
    
    //Re-renders cart to reflect changes in firebase data
    forceUpdate(data) {
        this.setState({
            scores: currentScores
        });
    }





    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Info Dodge Leaderboard</h1>
                </div>
                <h2>Top 100 Scores</h2>
                <table className="table table-striped">
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                    {
                        /*this.state.scores.map((entry) => (
                            <tr key={entry.score}>
                                <td>{entry.rank}</td>
                                <td>{entry.user}</td>
                                <td>{entry.score}</td>
                            </tr>
                        )) */
                    }
                </table>
            </div>
        );
    }
}

var app = document.getElementById("app");

ReactDOM.render(<Leaderboard />, app);