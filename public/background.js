console.log("background.js loaded!");

let passedAlarmCnt = 0;
const CreateTab = (link) => {
  //링크가 null이 아니라면 탭 열기
  if (link !== null) {
    chrome.tabs.create({
      url: link,
    });
  }
};
const CreateNotificationOptions = (message) => {
  let notificationOptions = {
    type: "basic",
    iconUrl: "logo.png",
    title: "웨, 일해",
    message: "🐳제목없음🐳",
    priority: 2,
  };
  if (message !== null) {
    notificationOptions.message = message;
  }
  return notificationOptions;
};
const CreateNotification = (NOTIFICATION_ID, message) => {
  chrome.notifications.create(
    NOTIFICATION_ID,
    CreateNotificationOptions(message)
  );
};
const UpdateNotification = (NOTIFICATION_ID, message) => {
  chrome.notifications.update(
    NOTIFICATION_ID,
    CreateNotificationOptions(message),
    (wasUpdated) => {
      console.log("wasUpdated:", wasUpdated);
    }
  );
};
const FindIndexOfTodo = (id, result) => {
  for (index in result.todos) {
    if (id === result.todos[index].id.toString()) return index;
  }
};

chrome.alarms.onAlarm.addListener(async (alarm) => {
  console.log("Alarm executed!", alarm);
  const id = alarm.name;
  const result = await chrome.storage.local.get(["todos"]);
  console.log("result is...", result);
  const index = FindIndexOfTodo(id, result);
  //시간이 지난 알람일 때
  if (Date.now() > result.todos[index].date + 60000) {
    passedAlarmCnt++;
    const NOTIFICATION_ID = "hasPassedAlarms";
    const message = `자리를 비운 동안 ${passedAlarmCnt}개의 알림이 실행되지 않았습니다.`;
    if (passedAlarmCnt === 1) {
      CreateNotification(NOTIFICATION_ID, message);
    } else {
      UpdateNotification(NOTIFICATION_ID, message);
    }
    //정상 알람일 때
  } else {
    const message = result.todos[index].title;
    CreateNotification(id, message);
    CreateTab(result.todos[index].link);
  }
});
