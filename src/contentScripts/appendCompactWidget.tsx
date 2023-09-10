import React from 'react'
import ReactDOM from 'react-dom/client'
import CompactWidget from '../pages/compact-widget/CompactWidget.tsx'

export default function initializeCompactWidget() {
const body = document.querySelector('body')!;

const compactWidgetRoot = document.createElement('div');
compactWidgetRoot.id = 'compact-widget-root';
body.appendChild(compactWidgetRoot);

ReactDOM.createRoot(document.getElementById('compact-widget-root')!).render(
  <React.StrictMode>
    <CompactWidget />
  </React.StrictMode>,
);
}