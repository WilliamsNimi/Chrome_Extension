let chosen_time_frame;
const button = document.querySelector("button");
button.addEventListener("click", async () => {
    //document.getElementById('#alert').innerHTML = "Your open Chrome tabs will be saved to your bookmarks and cleared. This will occur based on the timeframe you have set";
    chosen_time_frame = getOption();
    console.log(chosen_time_frame);

    chrome.alarms.create('myAlarm', {
        delayInMinutes: chosen_time_frame, // Set the delay to chosen time frame
        periodInMinutes: chosen_time_frame // Set the period to chosen time frame
      });
    
  });


function getOption() {
    let selectElement = document.querySelector('#select_tag');
    let time_frame = selectElement.options[selectElement.selectedIndex].value;
    let time_frame_int = 0;
    if (time_frame == "30Mins")
        time_frame_int = 30;
    else if (time_frame == "Weekly")
        time_frame_int = 7*24*60;
    else if (time_frame == "Bi_Monthly")
        time_frame_int = 14*24*60
    else
        time_frame_int = 30*24*60;

    return time_frame_int;
}