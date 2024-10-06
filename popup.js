const tabs = await chrome.tabs.query({});

function tab_manager(){
    let tabURLs = [];
    let files = document.createElement('a');
    let bfiles = new Blob([""], {type: 'text/plain'});

    for (let i = 0; i < tabs.length; i++){
        tabURLs.push([tabs[i].url,tabs[i].title]);
        chrome.tabs.remove(tabs[i].id)
    }
    bfiles = new Blob([tabURLs.toString()], {type: 'text/plain'});
    files.href = URL.createObjectURL(bfiles);
    files.download = "savedTabs.txt";
    files.click();
    URL.revokeObjectURL(bfiles);
}


const button = document.querySelector("button");
button.addEventListener("click", async () => {
    let startDate = new Date()
    let endDate = new Date()
    endDate = new Date(endDate.setDate(startDate.getDate() + getOption()))

    tab_manager();
    
  });
  

function getOption() {
    let selectElement = document.querySelector('#select_tag');
    let time_frame = selectElement.options[selectElement.selectedIndex].value;
    let time_frame_int = 0;
    if (time_frame == "Weekly")
        time_frame_int = 7
    else if (time_frame == "Bi_Monthly")
        time_frame_int = 14
    else
        time_frame_int = 30

    return time_frame_int;
}

