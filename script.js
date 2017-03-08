$(document).ready(function () {
    var toggle = true;
    var count = 0;
    var grid = [[0,0,0],[0,0,0],[0,0,0]];
    var win = false;
    var re = false;

    $('.reset').hide();
  function entry(a, input){
    if (a == $('.board div:nth-child(1)').attr('class')){
      grid[0][0] = input;
    }
    if (a == $('.board div:nth-child(2)').attr('class')){
      grid[0][1] = input;
    }
    if (a == $('.board div:nth-child(3)').attr('class')){
      grid[0][2] = input;
    }
    if (a == $('.board div:nth-child(4)').attr('class')){
      grid[1][0] = input;
    }
    if (a == $('.board div:nth-child(5)').attr('class')){
      grid[1][1] = input;
    }
    if (a == $('.board div:nth-child(6)').attr('class')){
      grid[1][2] = input;
    }
    if (a == $('.board div:nth-child(7)').attr('class')){
      grid[2][0] = input;
    }
    if (a == $('.board div:nth-child(8)').attr('class')){
      grid[2][1] = input;
    }
    if (a == $('.board div:nth-child(9)').attr('class')){
      grid[2][2] = input;
    }
    winCondition();
  }
function cWrite(inp){
  var a = inp[0];
  var b = inp[1];

  if (a === 0 && b === 0){
    $('.tl').css('background-image','url(./media/opera.png)');
  }
  if (a === 0 && b === 1){
    $('.tm').css('background-image','url(./media/opera.png)');
  }
  if (a === 0 && b === 2){
    $('.tr').css('background-image','url(./media/opera.png)');
  }
  if (a === 1 && b === 0){
    $('.ml').css('background-image','url(./media/opera.png)');
  }
  if (a === 1 && b === 1){
    $('.mm').css('background-image','url(./media/opera.png)');
  }
  if (a === 1 && b === 2){
    $('.mr').css('background-image','url(./media/opera.png)');
  }
  if (a === 2 && b === 0){
    $('.bl').css('background-image','url(./media/opera.png)');
  }
  if (a === 2 && b === 1){
    $('.bm').css('background-image','url(./media/opera.png)');
  }
  if (a === 2 && b === 2){
    $('.br').css('background-image','url(./media/opera.png)');
  }
}

function cTurn(){
  count++;
  for (var x = 0; x<3;x++){
    if(grid[x][0] + grid[x][1] + grid[x][2]  == -2){
      for(var i = 0; i<3; i++){
        if (grid[x][i] === 0){
          grid[x][i] = -1;
          return [x,i];
      }
      }
    }
    else if(grid[0][x] + grid[1][x] + grid[2][x] == -2){
      for(var n = 0; n<3; n++){
        if (grid[n][x] === 0){
          grid[n][x] = -1;
          return [n,x];
      }
    }
  }
  }

  if (grid[0][0] + grid[1][1] + grid[2][2] == -2){
    if(grid[0][0] === 0){
      grid[0][0] = -1;
      return [0,0];
    }
    else if(grid[1][1] === 0){
      grid[1][1] = -1;
      return [1,1];
    }
    else if(grid[2][2] === 0){
      grid[2][2] = -1;
      return [2,2];
    }
  }
  else if (grid[0][2] + grid[1][1] + grid[2][0] == -2){
    if(grid[0][2] === 0){
      grid[0][2] = -1;
      return [0,2];
    }
    else if(grid[1][1] === 0){
      grid[1][1] = -1;
      return [1,1];
    }
    else if(grid[2][0] === 0){
      grid[2][0] = -1;
      return [2,0];
    }
  }
  else if (grid[0][0] === 0){
    grid[0][0] = -1;
    return [0,0];
  }
  else{
    while(true){
      console.log(grid);
      a = Math.floor((Math.random() * 3));
      b = Math.floor((Math.random() * 3));
      if(grid[a][b] === 0){
        grid[a][b] = -1;
        return [a,b];
      }
    }
  }
}
  function winCondition(){

    for (var x = 0; x<3;x++){
      if(grid[x][0] == grid[x][1] && grid[x][1] == grid[x][2] && grid[x][0] !== 0){
        // reset((grid[x][0]);
      resetBoard((grid[x][0]));
      }
      if(grid[0][x] == grid[1][x] && grid[1][x] == grid[2][x] && grid[0][x] !== 0){
        // console.log((grid[0][x] + " wins!"));
        resetBoard((grid[0][x]));
      }
    }

    if (grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2] && grid[0][0] !== 0){
      // console.log(grid[0][0] + " wins!");
      resetBoard((grid[0][0]));
    }
    else if (grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0] && grid[0][2] !== 0){
      // console.log(grid[0][2] + " wins!");
      resetBoard((grid[0][2]));
    }
    else if(count==9){
      resetBoard(0);
    }
  }

  function resetBoard(winner){
    win = true;
    $('.reset').show();
    if (winner == 1){
      $('h1').text('Internet Explorer Wins!');
    }
    else if (winner == -1){
      $('h1').text('Opera Wins!');
    }
    else if (winner === 0){
      $('h1').text('Draw!');
    }

  }
  function setWinner(){
    win = false;
    grid = [[0,0,0],[0,0,0],[0,0,0]];
  }

  $('.board').on('click','.reset',(function(e){
        e = 0;
        $('.square').css('background-image', 'none');
        $('h1').text("Browser Tic-Tac-Toe!");
        count = 0;
        re = true;
        win = false;
        $('.reset').hide();
        grid = [[0,0,0],[0,0,0],[0,0,0]];
  }));

  $('.board').on('click','.square', function(){
    if($('.reset').is(":visible") === false){
      if(win === false){
        if($(this).css('background-image') === 'none'){
          $(this).css('background-image','url(./media/ie.png');
          count++;
          entry($(this).attr('class'), 1);
          winCondition();
        }
      }
      if(win === false && count < 9){
        cWrite(cTurn());
        if (re === true){
          win = false;
          re = false;
        }
        winCondition();
      }
    }
  });


});
