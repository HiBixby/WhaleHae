console.log("background.js loaded!");

chrome.alarms.onAlarm.addListener((alarm) => {
  console.log("Alarm!!!");
  const id = alarm.name;
  chrome.storage.local.get(["todos"]).then((result) => {
    for (index in result.todos) {
      if (id === result.todos[index].id.toString()) {
        const message = result.todos[index].title;
        chrome.notifications.create(id.toString(), {
          type: "basic",
          iconUrl: "logo.png",
          title: "웨, 일해",
          message: message ? message : "🐳제목 없음🐳",
          priority: 2,
        });
        if (result.todos[index].link !== null) {
          chrome.tabs.create({
            url: result.todos[index].link,
          });
        }
      }
    }
  });
});
