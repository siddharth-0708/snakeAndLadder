var gameCols = ["Player No", "Dice roll history", "position History", "WinStatus", "coordinates"];
playersObj = {};
var isZigZag = false;
// var demo = [10,18,25, 28];
// var demo1 = [4, 1, 13, 20];

// var demo2 = [6,11,24];
// var demo3 = [23,19,35];
function checkGridSize(){
    var element = document.getElementById("gridSize");
    var gridData = element.value;
    console.log("grid size is " , gridData);
    return gridData;
}
function checkPlayersSize(){
    var element = document.getElementById("playerSize");
    var playerData = element.value;
    console.log("plaer size is " , playerData);
    return playerData;
}
function submitDetails(){
    onInitCall(checkGridSize(),checkPlayersSize());
}
function onInitCall(gridSize, playerData){
    var tb = document.getElementById("gameTable");
    tb.style.border = "thin solid";

    for(let j= 0;j<gameCols.length; j++){
        var ele2 = document.createElement("th");
        ele2.innerText = gameCols[j];
        tb.appendChild(ele2);
        // ele2.style.border = "thin solid";
        // ele2.style.textAlign = "left";
    }

    for(let i = 1; i<= playerData; i++){
        var ele = document.createElement("tr");
        ele.setAttribute("id",i);
        tb.appendChild(ele);
        ele.style.outline = "thin solid";

        playersObj[i] = [];
        
        for(let j= 0;j<gameCols.length; j++){
            var ele1 = document.createElement("td");
            ele1.setAttribute("id",gameCols[j]);
            ele1.innerText = "Helllo";
            ele.appendChild(ele1);
            ele1.style.margin = "8px";
        }
    }
    onGameStart(gridSize,playerData);
    console.log(playersObj);
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function onGameStart(gridSize, playerData){
    var noOfSteps = parseInt(gridSize*gridSize);
    var winner = false;
    for(let i = 1; i <= playerData; i++){
        playersObj[i][0] = i;
        playersObj[i][1] = [];
        playersObj[i][2] = [];
        playersObj[i][3] = false;
        playersObj[i][4] = [];
    }
    var playerNo = 0;
    console.log(playersObj);
    while(!winner){
        if(playerNo >= parseInt(playerData)){
            playerNo = 1;
        }else{
            playerNo = playerNo + 1;
        }
        var diceValue = randomIntFromInterval(1,6);
        console.log("random number is ",diceValue);
        var firstData = playersObj[playerNo][1];
        var secondData = playersObj[playerNo][2];
        firstData.push(diceValue);
        console.log("firstData is ",firstData);
        
        if(firstData.length >= 2){
            if(diceValue + secondData[secondData.length - 1] >parseInt(noOfSteps)){
                playersObj[playerNo][2].push(secondData[secondData.length - 1]);
            }else{
                playersObj[playerNo][2].push(diceValue + secondData[secondData.length - 1]);
            }
            var coordinatePos = secondData[secondData.length - 1];

            var rows = parseInt(coordinatePos/parseInt(gridSize));
            // if(isZigZag){
            //     rows = (gridSize - rows - 1);
            // }
            console.log("this is row for /" + coordinatePos + "= " + rows);

            var col = (coordinatePos % parseInt(gridSize));
            if(rows == 0){
                rows = gridSize - 1;
                isZigZag = !isZigZag;
            }

            console.log("this is cols for  %" + coordinatePos + "= " + col);

            var final = "(" + rows + "," + col + ")";
            playersObj[playerNo][4].push(final);

            // if(secondData[secondData.length - 1] % gridSize == 0){
            // }

            // if(demo.includes(secondData[secondData.length - 1])){
            //     var Pos = demo.indexOf(secondData[secondData.length - 1]);
            //     playersObj[playerNo][2].push(demo1[Pos]);
            // }
            // if(demo2.includes(secondData[secondData.length - 1])){
            //     var Pos = demo2.indexOf(secondData[secondData.length - 1]);
            //     playersObj[playerNo][2].push(demo3[Pos]);
            // }
            console.log("second data is ",diceValue + secondData[secondData.length - 1]);
            if(secondData[secondData.length - 1] == parseInt(noOfSteps)){

                var final = "(" + gridSize + "," + gridSize + ")";
                playersObj[playerNo][4].push(final);

                winner = true;
                console.log("winnneerrrr");
                playersObj[playerNo][3] = "winner";
                gameCompleted(playerData);
            }
        }else{
            if(diceValue  == parseInt(noOfSteps)){
                var final = "(" + gridSize + "," + gridSize + ")";
                playersObj[playerNo][4].push(final);

                winner = true;
                console.log("winnneerrrr");
                playersObj[playerNo][2].push(diceValue);
                playersObj[playerNo][3] = "winner";
                gameCompleted(playerData);
                return;
            }

            playersObj[playerNo][2].push(diceValue);
            console.log("second data is ",diceValue);
            var coordinatePos = diceValue;
            var rows = parseInt(coordinatePos/parseInt(gridSize));
            console.log("this is row for " + coordinatePos + "= " + rows);

            // if(isZigZag){
            //     rows = (gridSize - rows - 1);
            // }
            var col = (coordinatePos % parseInt(gridSize));
            if(rows == 0){
                rows = gridSize - 1;
                isZigZag = !isZigZag;
            }
            console.log("this is cols for " + coordinatePos + "= " + col);

            var final = "(" + rows + "," + col + ")";

        }
        
    }
}
function gameCompleted(playerData){
    for(let i = 1; i <= parseInt(playerData); i++){
        var ele = document.getElementById(i);
        for(let j= 0;j < gameCols.length; j++){
            var ele1 = ele.children;
            if(j == 1 || j==2){
                ele1[j].innerText = playersObj[i][j].toString() + "    ";
            }
            ele1[j].innerText = playersObj[i][j] + "   ";
        }
    }
}
