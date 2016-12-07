import React from 'react';

class Leaderboard extends React.Component {
    
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

//var app = document.getElementById("app");

//ReactDOM.render(<Leaderboard />, app);