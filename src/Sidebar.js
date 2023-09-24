import React from "react";
import ReactTV from "react-tv";
import { Focusable, VerticalList } from "react-key-navigation";

class ToogleItem extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Focusable
        onFocus={() => this.setState({ active: true })}
        onBlur={() => this.setState({ active: false })}
      >
        <div class={"item " + (this.state.active ? "item-focus" : "")}>
          <i class={"fa fa-" + this.props.icon} /> {this.props.children}
        </div>
      </Focusable>
    );
  }
}

export default class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false
    };
  }

  setActive(status) {
    this.setState({ active: status });
  }

  render() {
    return (
      <div id="sidebar" class={this.state.active ? "focused" : ""}>
        <div id="icons">
          <div>
            <span class="fa fa-home" />
          </div>
          <div>
            <span class="fa fa-star" />
          </div>
          <div>
            <span class="fa fa-music" />
          </div>
          <div>
            <span class="fa fa-ellipsis-v" />
          </div>
        </div>
        <div id="menu">
          <VerticalList
            onFocus={() => this.setActive(true)}
            onBlur={() => this.setActive(false)}
          >
            <ToogleItem icon="user">Login</ToogleItem>
            <ToogleItem icon="search">Search</ToogleItem>
            <ToogleItem icon="home">Home</ToogleItem>
            <ToogleItem icon="star">Star</ToogleItem>
            <ToogleItem icon="music">Music</ToogleItem>
            <ToogleItem icon="film">Film</ToogleItem>
          </VerticalList>
        </div>
      </div>
    );
  }
}
