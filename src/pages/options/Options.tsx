
const requestPremission = () => {
  chrome.permissions.request({
    origins: ["<all_urls>"],
  })
}

const closeTab = () => {
  chrome.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    chrome.tabs.remove(tabs[0].id!)
  })
}

const logPremissions = () => {
  chrome.permissions.getAll().then(permissions => console.log(permissions)).catch(console.error)
}

const Options = () => {
  return (
    <div className="flex flex-col w-5/6 justify-center items-center">
      <h1 className="text-3xl mb-4">Based Web Extension sucesfully installed!</h1>
      <p>Enable extension <b>automatically</b> on all websites?</p>
      <div 
      className="flex flex-row justify-center gap-4 pt-4 w-full mb-4">
        <button onClick={closeTab}>Ignore</button>
        <button onClick={requestPremission} className="bg-blue-500 hover:bg-blue-700 hover:border-white">Enable</button>
      </div>
      <button onClick={logPremissions} >console.log(permissions)</button>
    </div>
  )
}

export default Options