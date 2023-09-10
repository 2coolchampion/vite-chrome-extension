import initializeCompactWidget from '../contentScripts/appendCompactWidget.tsx';

// Onboarding page

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "src/pages/options/options.html" });
  }
});



// Inject CompactWidget Script on page load if permissions satisfied and isCompactWidgetEnabled

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo) => {
  console.log('changeInfo: ', changeInfo, ' | TabId: ', tabId)

  const permissions = await chrome.permissions.getAll().catch((error) => console.log(error));
  const hasAllUrlsPermission = permissions?.origins?.includes("<all_urls>");

  if (hasAllUrlsPermission && changeInfo.status === "complete") {
    chrome.storage.sync.get(['isCompactWidgetEnabled']).then((items) => {
      if (items.isCompactWidgetEnabled === true) {
        chrome.scripting.executeScript({
          target: {
            tabId: tabId,
          },
          func: (scriptContent) => {
            const script = document.createElement('script');
            script.textContent = `(${scriptContent.toString()})();`;
            script.type = 'module';
            document.head.appendChild(script);
          },
          args: [initializeCompactWidget],
        });
      }
    });
  } else {
    console.log('Error injecting script\nEither status of the tab is not \'complete\' | changeinfo.status =', changeInfo.status, '\nOr there is a problem with permissions: ', permissions);
  }
});