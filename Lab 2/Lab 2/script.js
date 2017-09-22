function getGithubInfo(user) {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    console.log(xhttp.readyState);
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this);
            showUser(JSON.parse(this.responseText));
        }
        else if(this.readyState === 4 && this.status !== 200)
       {
           noSuchUser(user);
       }
    };
    xhttp.open("GET", "https://api.github.com/users/"+user, true);
    xhttp.send();
}

function getGithubInfo1(user) {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    console.log(xhttp.readyState);
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this);
            var userSet;
            userSet = (JSON.parse(this.responseText));
            showUser1(userSet);
        }
        else if(this.readyState === 4 && this.status !== 200)
       {
           noSuchUser(user);
       }

    };
    xhttp.open("GET", "https://api.github.com/users/"+user+"/followers", true);
    xhttp.send();
}

function getGithubInfo2(user) {
    var xhttp = new XMLHttpRequest();
    console.log(xhttp);
    console.log(xhttp.readyState);
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this);
            var userSet;
            userSet = (JSON.parse(this.responseText));
            showUser2(userSet);
        }
       else if(this.readyState === 4 && this.status !== 200)
       {
           noSuchUser(user);
       }

    };
    xhttp.open("GET", "https://api.github.com/users/"+user+"/repos", true);
    xhttp.send();
}

function showUser(user) {
    $('#profile h2').html("USERNAME: "+user.login);
    $('#profile .userid').html("USER IS: "+user.id);
    $('#profile .avatar').html("<img src=https://avatars0.githubusercontent.com/u/"+user.id+"?v=4?s=100/>");
    $('#profile .information').html("LINK TO USER ACCOUNT: "+user.html_url);
    $('#profile .creation').html("ACCOUNT CREATION DATE: "+user.created_at);
    $('#profile .followed').html("NUMBER OF PEOPLE FOLLOWED BY USER: "+user.following);
    $('#profile .followers').html("NUMBER OF FOLLOWERS: "+user.followers);
    $('#profile .repositories').html("NUMBER OF REPOSITORIES: "+user.public_repos);
}

function showUser1(userSet) {
    $('#profile .topfollowers1').html("FIVE FOLLOWERS: "+userSet[0].login);
    $('#profile .topfollowers2').html(userSet[1].login);
    $('#profile .topfollowers3').html(userSet[2].login);
    $('#profile .topfollowers4').html(userSet[3].login);
    $('#profile .topfollowers5').html(userSet[4].login);
}

function showUser2(userSet) {
    $('#profile .toprepos1').html("FIVE REPOSITORIES: "+userSet[0].name);
    $('#profile .toprepos2').html(userSet[1].name);
    $('#profile .toprepos3').html(userSet[2].name);
    $('#profile .toprepos4').html(userSet[3].name);
    $('#profile .toprepos5').html(userSet[4].name);
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    document.getElementById('profile').innerHTML="Invalid username. Try again.";
}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which === 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            getGithubInfo(username);
            getGithubInfo1(username);
            getGithubInfo2(username);
        }
    })
});
