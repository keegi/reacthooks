import React, { useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "I'm the content of the Section1"
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section2"
  }
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

function UseTabsExam() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h2>useTabsExam</h2>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTabsExam;
