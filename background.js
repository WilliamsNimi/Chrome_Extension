let tabs = [];

chrome.tabs.query({}, (tab) => {
        tabs = tab;
    });

async function tab_manager(){

    let tabURLs = [];
    let today = new Date();
    
    for (let i = 0; (i < tabs.length); i++){
        chrome.bookmarks.create({
            title: tabs[i].title.split()[0] + today.toString(),
            url: tabs[i].url
        });
        await chrome.tabs.remove(tabs[i].id);
    }
    await chrome.tabs.query({}, (tab) => {
        tabs = tab;
    });

}

  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'myAlarm') {
      tab_manager();
    }
  });

  

  