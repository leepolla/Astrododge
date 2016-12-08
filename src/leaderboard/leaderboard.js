import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

class Leaderboard extends Component {
    
    render() {
        var gameInstance = document.querySelector('canvas');
        if (gameInstance) {
            gameInstance.style.display = "none";
        }
        return (
            <div className="container" id="leaderboard">
                <div className="jumbotron">
                    <h1>Info Dodge Leaderboard</h1>
                </div>
                <h2>Top 100 Scores</h2>
                <table className="table table-striped">
                    <thead>    
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>heyo</th>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
        );
    }

    leaderboardSort(entry1, entry2) {
        if(entry1.score != entry2.score) {
            return entry2.score - entry1.score;
        } else {
            return entry1.user - entry2.user;
        }
    }

    assignRanks(scoreList) {
        scoreList.leaderboardSort();
        var count = 1;
        scoreList.forEach(function(entry) {
            entry.rank = count;
            count++;
        })
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