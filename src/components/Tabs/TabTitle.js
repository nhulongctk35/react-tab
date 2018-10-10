import React from "react";
import { TabContext } from "./TabContext";

export default class TabTitle extends React.Component {
  render() {
    return (
      <ul className="tabs__labels">
        <TabContext.Consumer>
          {({ context: { tabs, onTabChange, activeIndex } }) => {
            return tabs.map(tab => {
              let cx = [
                "tabs__label",
                activeIndex === tab.id ? "tabs__label--active" : ""
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <li className={cx} key={tab.id}>
                  <button onClick={() => onTabChange(tab.id)}>
                    {tab.title}
                  </button>
                </li>
              );
            });
          }}
        </TabContext.Consumer>
      </ul>
    );
  }
}
