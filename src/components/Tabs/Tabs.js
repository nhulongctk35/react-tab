import React from "react";
import "./tabs.style.css";
import Tab from "./Tab";
import TabProvider from "./TabContext";
import TabTitle from "./TabTitle";

export default class Tabs extends React.Component {
  static Tab = Tab;

  render() {
    return (
      <TabProvider>
        <div className="tabs">
          <TabTitle />
          <div>
            {React.Children.map(this.props.children, (child, childIndex) => {
              return React.cloneElement(child, {
                id: childIndex
              });
            })}
          </div>
        </div>
      </TabProvider>
    );
  }
}
