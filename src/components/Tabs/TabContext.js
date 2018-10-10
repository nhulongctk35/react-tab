import React from "react";

export const TabContext = React.createContext();

export default class TabProvider extends React.Component {
  state = {
    tabs: [],
    activeIndex: 0
  };

  addTab = newTab => {
    let isExisting;
    for (let tab of this.state.tabs) {
      if (tab.id === newTab.id) {
        isExisting = true;
        break;
      }
    }

    if (!isExisting) {
      this.setState(state => ({
        tabs: state.tabs.concat(newTab)
      }));
    }
  };

  updateActiveTab = tabIndex =>
    this.setState(() => ({ activeIndex: tabIndex }));

  render() {
    return (
      <TabContext.Provider
        value={{
          context: {
            ...this.state,
            addTab: this.addTab,
            onTabChange: this.updateActiveTab
          }
        }}
      >
        {this.props.children}
      </TabContext.Provider>
    );
  }
}
