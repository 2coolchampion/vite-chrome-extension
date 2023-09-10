import { useState, useEffect } from 'react'

function Popout() {
  // const [colour, setColour] = useState('')
  const [isCompactWidgetEnabled, setIsCompactWidgetEnabled] = useState(false)

  // const handleClick = async () => {
  //   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  //   chrome.scripting.executeScript<string[], void>({
  //     target: { tabId: tab.id! },
  //     args: [colour],
  //     func: (colour) => {document.body.style.backgroundColor = colour}
  //   })
  // }

  useEffect(() => {
    console.log('useEffect has been sucesfully ran!')
    chrome.storage.sync.get(['isCompactWidgetEnabled'], (data) => {
      setIsCompactWidgetEnabled(data.isCompactWidgetEnabled);
    });
  }, []);

  const toggleCompactWidget = (e: any) => {
    const newValue = e.target.checked;
    setIsCompactWidgetEnabled(newValue);
    chrome.storage.sync.set({ isCompactWidgetEnabled: newValue })
    chrome.storage.sync.get(['isCompactWidgetEnabled'], (data) => {
      console.log('isCompactWidgetEnabled: ' + data.isCompactWidgetEnabled);
    });
  }

  return (
    <>
      <div
        className='flex flex-row p-2 text-sm'
      >
        <input 
        type="checkbox" 
        className='mr-1' 
        id='compact'
        onChange={toggleCompactWidget}
        checked={isCompactWidgetEnabled}
        /> 
        <label htmlFor="compact">Enable compact widget?</label>
      </div>
      <p className='text-sm'>isCompactWidgetEnabled: {isCompactWidgetEnabled}</p>
    </>
  )
}

export default Popout

// mounts, use effect fires