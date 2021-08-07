player1_name = localStorage.getItem("player_1name");
player2_name = localStorage.getItem("player_2name");
player1score = 0 ;
player2score = 0 ;
document.getElementById("player_1").innerHTML = player1_name + "-";
document.getElementById("player_2").innerHTML = player2_name + "-";
document.getElementById("player_1score").innerHTML = player1score;
document.getElementById("player_2score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn- " + player2_name;
function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lower case =  " + word); 
    charat1 = word.charAt(1);
    console.log(charat1);
    length_divide_2 = Math.floor(word.length/2);
    charat2 = word.charAt(length_divide_2) ;
    console.log(charat2);
    length_minus_1 = word.length - 1;
    charat3 = word.charAt(length_minus_1);
    console.log(charat3);

    remove_1 = word.replace(charat1, "_");
    remove_2 = remove_1.replace (charat2, "_");
    remove_3 = remove_2.replace(charat3, "_") ;
    console.log(remove_3);

    question_word = "<h4 id = 'word_display'>Q." + remove_3 +"</h4>";

    input_box = "<br> Answer: <input type = 'text' id = 'input_box' > ";
    check_button = "<br> <br> <button class='btn btn-info' onclick = 'check()' >check</button>" ;
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";


}
question_turn = "player1";
answer_turn = "player2";
function check()    {
get_answer = document.getElementById("input_box").value;
answer = get_answer.toLowerCase();
console.log("answer in lower case -"+ answer);
if(answer==word){
    if(answer_turn=="player1"){
        player1score = player1score+1;
        document.getElementById("player_1score").innerHTML = player1score;
    }
    else{
        player2score = player2score+1;
        document.getElementById("player_2score").innerHTML = player2score;
    }

}
if(question_turn=="player1"){
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "Question Turn - " +player2_name;

}
else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question Turn - " +player1_name;
}
if(answer_turn=="player1"){
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " +player2_name;

}
else{
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn - " +player1_name;
}
document.getElementById("output").innerHTML = "";
}