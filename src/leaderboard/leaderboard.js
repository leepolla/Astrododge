import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class Leaderboard extends Component {
    
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
                    
                </table>
            </div>
        );
    }
}

export default Leaderboard;

//var app = document.getElementById("app");

//ReactDOM.render(<Leaderboard />, app);

//{
                    //     this.state.scores.map((entry) => (
                    //         <tr key={entry.score}>
                    //             <td>{entry.rank}</td>
                    //             <td>{entry.user}</td>
                    //             <td>{entry.score}</td>
                    //         </tr>
                    //     )) 
                    // }