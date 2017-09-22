function getGithubInfo(user) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'https://api.github.com/users/'+user, false);
    xhttp.send();
    return xhttp;
}

function showUser(user) {
    $('#profile h2').html("username: "+user.login);
    $('#profile .userid').html("user id: "+user.id);
    $('#profile .avatar').html("<img src=https://avatars0.githubusercontent.com/u/"+user.id+"?v=4?s=40/>");
    $('#profile .information').html("link to user account: "+user.html_url);
    $('#profile .creation').html("account creation date: "+user.created_at);
    $('#profile .followed').html("number of people followed by user: "+user.following);
    $('#profile .followers').html("number of followers: "+user.followers);
    $('#profile .repositories').html("number of repositories: "+user.public_repos);
}

function noSuchUser(username) {
    document.getElementById('error').innerHTML="Invalid username. Try again.";
}


$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the response
            response = getGithubInfo(username);
            console.log(response);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
