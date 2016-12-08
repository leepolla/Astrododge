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
console.log(database.ref('Scores/Lee'));
var currentScores = [];
scoresData.once('value', function(snapshot) {
            snapshot.forEach(function(childSnap) {
                var highScore = {UserName: childSnap.val().UserName, ScoreValue: childSnap.val().scoreValue, keyID: childSnap.val().key};
                currentScores.push(highScore);
                console.log(highScore);
                console.log(currentScores);
            });
});
currentScores.push({UserName: 'lee', ScoreValue: 1000, keyID: 12345});
currentScores.push({UserName: 'trevor', ScoreValue: 2000, keyID: 1234});
currentScores.push({UserName: 'noah', ScoreValue: 400, keyID: 1245});

currentScores.sort(function(entry1, entry2) {
    if(entry1.ScoreValue !== entry2.ScoreValue) {
        return entry2.ScoreValue - entry1.ScoreValue;
    } else {
        return entry1.UserName - entry2.UserName;
    }
})



class Leaderboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scores: []
        };

        // scoresData.on('value', snapshot => {
        //     this.state.scores = snapshot.val();
        //     this.forceUpdate();
        //     console.log(snapshot.val());
        //     console.log('snapshot');
        // });
    }

    //Reads score data from firebase
    componentWillMount() {    
            // var database = firebase.database();
            // var scoresData = database.ref('Scores');
            scoresData.on('child_added', function(snapshot) {
                var highScore = {UserName: snapshot.val().UserName, ScoreValue: snapshot.val().scoreValue, keyID: snapshot.val().key};
                currentScores.push(highScore);
                console.log(highScore);
                console.log(currentScores);
            currentScores[0] = {UserName: 'lee', ScoreValue: 1000, keyID: 12345};  
            });        
            this.forceUpdate();
            console.log('mount');            
        }



    
    //Re-renders cart to reflect changes in firebase data
    forceUpdate(data) {
        this.setState({
            scores: currentScores
        });
        console.log('update');
    }





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

    assignRanks(scoreList) {
        scoreList.sort(function(entry1, entry2) {
            if(entry1.ScoreValue != entry2.ScoreValue) {
                return entry2.ScoreValue - entry1.ScoreValue;
            } else {
                return entry1.Username - entry2.Username;
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
