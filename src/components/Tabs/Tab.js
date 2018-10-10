import React from "react";
import { TabContext } from "./TabContext";

export default class Tab extends React.PureComponent {
  render() {
    return (
      <TabContext.Consumer>
        {({ context: { addTab, activeIndex } }) => {
          addTab({ id: this.props.id, title: this.props.title });
          let cx = [
            "tabs__content",
            activeIndex === this.props.id ? "tabs__content--active" : ""
          ]
            .filter(Boolean)
            .join(" ");
          return <section className={cx}>{this.props.children}</section>;
        }}
      </TabContext.Consumer>
    );
  }
}
