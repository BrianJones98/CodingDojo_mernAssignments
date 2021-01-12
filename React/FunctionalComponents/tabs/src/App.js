import './App.css';
import styles from './App.module.css';
import React, {useState} from 'react';
import Tab from './components/Tab'

function App() {
  const tabs = [
    {
      label: "Tab 1", 
      content: "This is the tab 1 content"
    },
    {
      label: "Tab 2",
      content: "This is the tab 2 content"
    },
    {
      label: "Tab 3",
      content: "This is the tab 3 content"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const changeTab = (idx) =>{
    setActiveIndex(idx);
  }

  return (
    <>
      <header>
        <ul className={styles.tabs}>
          {
            tabs.map((tab, idx) =>
              <li key={idx} onClick={() => changeTab(idx)} className={idx === activeIndex ? styles.active : styles.inactive}>{tab.label}</li>
            )
          }
        </ul>
      </header>
      <div className={styles.activeTab}>
        <Tab 
          content = {tabs[activeIndex].content}
        />
      </div>
    </>
  );
}

export default App;