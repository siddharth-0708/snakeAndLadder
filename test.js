var element = document.getElementById("timer");
element.innerText = "00:00:00";
var sec = 0;
var min = 0;
var hrs = 0; 
var interval = null;
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

demo([4,5,-2,0,1]);
function startTimer(){
    interval = setInterval(() => {
        sec = sec + 1;
        sec == 60 ? (sec = 0, min = min+1):sec;
        min == 60 ? (min = 0, hrs = hrs+1): min;
        element.innerText = `${hrs}:${min}:${sec}`;
    }, 1000);
}
function pauseTimer(){
    clearInterval(interval);
}
function resetTimer(){
    pauseTimer();
    element.innerText = "00:00:00";
    sec = 0;
    min = 0;
    hrs = 0;
    element.innerText = `${hrs}:${min}:${sec}`;
}

/*[0,-1,-1,-1,-1];
[4,5,-2,0,1]
left or right
max nutritional value
b-a 
*/
// function demo(arr){
//     while(arr.length > 1){
//         //console.log("This is array " + arr);
//         var dummy = [...arr];
//         dummy.sort((a, b)=>{ 
//             return a - b
//          });
//         //console.log("dummy is  " + dummy);
//         var maxNum = dummy[dummy.length - 1];
//         var indx = arr.indexOf(maxNum);
//         //console.log("maxNum  index is  " + indx);
//         var min = -1;
//         var minIndex = -1;
        
//         if(arr[indx - 1] && arr[indx + 1]){
//             min = arr[indx - 1] > arr[indx + 1] ? arr[indx + 1] : arr[indx - 1];
//         }else if(arr[indx - 1]){
//             min = arr[indx - 1];
//         }else{
//             min = arr[indx + 1];
//         }
//         minIndex = arr.indexOf(min);
//         var maxIndx = indx;
//         var startIndx = maxIndx > minIndex ? minIndex : maxIndx;
//         arr.splice(startIndx, 2, arr[maxIndx] - arr[minIndex]);
//         //console.log("Max index is " + maxIndx + " "+ "Min index is " + minIndex);
//         //console.log("This is array after splice " + arr);
//     }
//     console.log(arr);
//     return arr[0];
// }


