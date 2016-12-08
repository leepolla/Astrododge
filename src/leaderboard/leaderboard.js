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
var currentScores = [];

//Function for reading list of firebase data
//There are two event listening functions, because we couldnt get either of them to work independently. 
//Setting key id guarantees that there isnt duplicate information displayed, even though having two listeners puts duplicate data into our arrays
scoresData.on('child_added', function(snapshot) {
                var highScore = {UserName: snapshot.val().UserName, ScoreValue: snapshot.val().ScoreValue, keyID: snapshot.key};
                currentScores.push(highScore);
            });        

currentScores.sort(function(entry1, entry2) {
    if(entry1.ScoreValue !== entry2.ScoreValue) {
        return entry2.ScoreValue - entry1.ScoreValue;
    } else {
        return entry1.UserName - entry2.UserName;
    }
});



class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: []
        };
    }

    //Reads score data from firebase
    componentWillMount() {    
            scoresData.on('child_added', function(snapshot) {
                var highScore = {UserName: snapshot.val().UserName, ScoreValue: snapshot.val().ScoreValue, keyID: snapshot.key};
                currentScores.push(highScore);
            });        
            this.forceUpdate();        
        }



    
    //Re-renders cart to reflect changes in firebase data
    forceUpdate(data) {
        this.assignRanks(currentScores);
        this.setState({
            scores: currentScores
        });
    }




    //Generates leaderboard with firebase data
    render() {
        var gameInstance = document.querySelector('canvas');
        if (gameInstance) {
            gameInstance.style.display = "none";
        }
        return (
            <div className="container inactive"  id="leaderboard">
                <div className="jumbotron">
                    <h1>Info Dodge Leaderboard</h1>
                </div>
                <h2>Top 100 Scores</h2>
                <table className="table table-striped">
                    <thead>    
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                        this.state.scores.map((entry) => (
                            <tr key={entry.keyID}>
                                <td>{entry.UserName}</td>
                                <td>{entry.ScoreValue}</td>
                            </tr>
                        )) 
                    }

                    </tbody>
                    
                </table>
            </div>
        );
    }

    //Sorting function to arrange scores in descending order
    assignRanks(scoreList) {
        scoreList.sort(function(entry1, entry2) {
            if(entry1.ScoreValue != entry2.ScoreValue) {
                return entry2.ScoreValue - entry1.ScoreValue;
            } else {
                return entry1.UserName - entry2.UserName;
            }
        })
        var count = 1;
        scoreList.forEach(function(entry) {
            entry.rank = count;
            count++;
        })
    }
}
export default Leaderboard
