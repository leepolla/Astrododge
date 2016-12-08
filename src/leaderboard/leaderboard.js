import React, { Component } from 'react';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyA39eaG9n2IuM9HPu9s4t5kDtXD-wRpkEo",
    authDomain: "running-challenge.firebaseapp.com",
    databaseURL: "https://running-challenge.firebaseio.com",
    storageBucket: "running-challenge.appspot.com",
    messagingSenderId: "809639999871"
};
firebase.initializeApp(config);


var database = firebase.database();
var scoresData = database.ref('Scores');
console.log(scoresData);
console.log(database.ref('Scores/lee'));
var currentScores = [];

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: []
        };

        scoresData.on('value', snapshot => {
        this.state.scores = snapshot.val();
        this.forceUpdate();
        });
    }

    //Reads movie data from firebase
    componentDidMount() {    
            this.unMountChilAdded = scoresData.on('child_added', function(data) {
                var highScore = {userName: data.val().userName, scoreValue: data.val().scoreValue, keyID: data.key};
                currentScores.push(highScore);
                console.log(highScore);
                console.log(currentScores);  
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