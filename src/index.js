import React from "react";
import ReactDOM from "react-dom";
import ReactTV from "react-tv";

import Sidebar from "./Sidebar.js";
import List from "./List.js";
import Search from "./Search.js";

import Navigation, { VerticalList, HorizontalList } from "react-key-navigation";

class ReactTVApp extends React.Component {
  constructor() {
    super();

    this.state = {
      active: null,
      lists: ["Title 1", "Title 2"],
      danamicInsert: false
    };
  }

  changeFocusTo(index) {
    this.setState({ active: index });
  }

  onBlurLists() {
    this.setState({ active: null });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        danamicInsert: true
      });
    }, 1000);
  }

  render() {
    const { lists } = this.state;
    return (
      <Navigation>
        <div id="container">
          <HorizontalList>
            <Sidebar />
            <div class="mainbox">
              <VerticalList navDefault>
                {this.state.danamicInsert && <Search text="inserted!!" />}
                <Search />
                <VerticalList id="content" onBlur={() => this.onBlurLists()}>
                  {lists.map((list, i) => (
                    <List
                      title={list}
                      onFocus={() => this.changeFocusTo(i)}
                      visible={
                        this.state.active !== null
                          ? i >= this.state.active
                          : true
                      }
                    />
                  ))}
                </VerticalList>
              </VerticalList>
            </div>
          </HorizontalList>
        </div>
      </Navigation>
    );
  }
}

ReactTV.render(<ReactTVApp />, document.querySelector("#root"));
// ReactDOM.render(<ReactTVApp />, document.querySelector("#root"));
