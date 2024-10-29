var highestcps = 0;
var currentcps = 0;
const total_time = 5;
var timeDecrementFuncHasStarted = false;
var total_clicks = 0;
var time_left = total_time;
function incrementClick(){
    total_clicks++;
    document.getElementById("click_count").innerHTML=total_clicks;
}
function decrementCounter(){
    //reset
    time_left = total_time;
    total_clicks = 0;
    clearInterval(countdown);
    document.getElementById("click_count").innerHTML=total_clicks;
    document.getElementById("time_count").innerHTML=time_left;
    //reset_end

    var countdown = setInterval(() => {
        time_left--;
        document.getElementById("time_count").innerHTML=time_left;
        if(time_left == 0){
            clearInterval(countdown);
            currentcps = (total_clicks/total_time);
            alert("Your CPS is: "+(currentcps));
            timeDecrementFuncHasStarted = false;
            if(currentcps > highestcps){
                highestcps=currentcps;
                document.getElementById("highestcpstext").innerHTML = highestcps;
            }
        }
    }, 1000);
}
function incrementClickAndDecrementCounter(){
    incrementClick();

    if (timeDecrementFuncHasStarted == false){
        decrementCounter();
        timeDecrementFuncHasStarted=true;
    }
}