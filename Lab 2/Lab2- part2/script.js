var tttGameApp = angular.module('tttGameApp', []);

tttGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
    $scope.game = game;
});

var globals = {};

var State = function(){
    this.turn = '';
    this.board = [];
    this.advanceTurn = function() {
        this.turn = this.turn === 'X' ? 'O' : 'X';
    };

    this.result = 'still running';
    this.isTerminal = function(){
        var B = this.board;
        for (var i = 0; i <= 6; i = i + 3){
            if(B[i] !== 'E' && B[i] === B[i+1] && B[i+1] === B[i+2]){
                this.result = B[i] + '-won';
                return true;
            }
        }
        for (var i = 0; i <= 2; i++){
            if(B[i] !== 'E' && B[i] === B[i+3] && B[i+3] === B[i+6]){
                this.result = B[i] + '-won';
                return true;
            }
        }
        for (var i = 0, j = 4; i <= 2 ; i = i+2, j = j-2){
            if(B[i] !== 'E' && B[i] === B[i+j] && B[i+j] === B[i+2*j]){
                this.result = B[i] + '-won';
                return true;
            }
        }
    }

};

var GameManager = function(){
    this.currentState = new State();
    this.currentState.board =
        ["E", "E", "E",
            "E", "E", "E",
            "E", "E", "E"];
    this.currentState.turn = "X";
    this.status = "beginning";
    this.start = function(){
        if (this.status= "beginning"){
            this.status = "running";
        }
    };
    this.advanceTo = function(_state){
        if(_state.isTerminal()){
            this.status = 'ended';

            if(_state.result === "X-won"){
                $("#test").text("X-won");
            }

            else if(_state.result === "O-won"){
                $("#test").text("O-won");
            }

            else{
                $("#test").text("It's a Draw");
            }
        }
        else{

        }
    };
};


$('.start').click(function(){
    globals.game = new GameManager();
    globals.game.start();
    $(this).addClass('selected');
});


$(".cell").each(function(){

    var $this = $(this);
    $this.click(function(){

        if(globals.game.status === "running" && !$this.hasClass('occupied')){
            var indx = parseInt($this.data("indx"));
            var next = globals.game.currentState;

            $this.text(next.turn);
            next.board[indx] = next.turn;
            next.advanceTurn();
            $this.addClass('occupied');

            globals.game.advanceTo(next);
        }
    });
});