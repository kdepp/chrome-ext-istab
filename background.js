
const rt = chrome.runtime;
const tabImages = {};
const extend = function () {
  var args = Array.from(arguments),
      len  = args.length;

  if (len <= 0)   return {};
  if (len === 1)  return args[0];

  var head = args[0],
      rest = args.slice(1);

  return rest.reduce(function (prev, cur) {
    for (var i = 0, keys = Object.keys(cur), len = keys.length; i < len; i ++) {
      prev[keys[i]] = cur[keys[i]];
    }

    return prev;
  }, head);
};
const capture = (windowId, tabId) => {
  chrome.tabs.captureVisibleTab((dataUrl) => {
    tabImages[windowId] = tabImages[windowId] || {};
    tabImages[windowId][tabId] = dataUrl;
  });
};

const collectTabInfos = (windowId) => {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ windowId }, (tabs) => {
      const ret = tabs.map(tab => ({
        url: tab.url,
        title: tab.title,
        favIconUrl: tab.favIconUrl,
        incognito: tab.incognito,
        tabId: tab.id,
        windowId: tab.windowId,
        imageData: tabImages[tab.windowId][tab.id]
      }));

      resolve(ret);
    });
  });

};

chrome.tabs.onActiveChanged.addListener(function (tabId, selectInfo) {
  capture(selectInfo.windowId, tabId);
});

chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {
  if (!req.cmd) return;

  switch (req.cmd) {
    case 'tabs': {
      collectTabInfos()
        .then(tabs => {
          var currentTabIndex = tabs.findIndex(t => t.tabId === sender.tab.id);
          sendResponse({tabs, currentTabIndex});
        });
      break;
    }
    case 'changeTab': {
      chrome.tabs.update(req.tabId, {active: true});
      break;
    }
  }

  return true;
});
