import React, { Component } from "react";
import "./App.css";
import Tabs from "./components/Tabs/Tabs";

class App extends Component {
  render() {
    return (
      <Tabs>
        <Tabs.Tab title="Code">
          <h3>Tab 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            ab?
          </p>
        </Tabs.Tab>
        <Tabs.Tab title="About">
          <h3>Tab 2</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            suscipit corporis provident? Adipisci minus praesentium modi
            architecto, inventore dolorum ea minima expedita blanditiis,
            voluptas dolore at earum. Voluptate ea unde repellat voluptas,
            cumque iusto sit, nobis quas, temporibus rerum eum?
          </p>
        </Tabs.Tab>
        <Tabs.Tab title="Services">
          <h3>Tab 3</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
            suscipit corporis provident? Adipisci minus praesentium modi
            architecto, inventore dolorum ea minima expedita blanditiis,
            voluptas dolore at earum. Voluptate ea unde repellat voluptas,
            cumque iusto sit, nobis quas, temporibus rerum eum?
          </p>
        </Tabs.Tab>
        <Tabs.Tab title="Contact">
          <h3>Tab 4</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            quibusdam!
          </p>
        </Tabs.Tab>
      </Tabs>
    );
  }
}

export default App;
