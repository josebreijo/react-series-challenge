import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { MemoryRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import configureStore from "redux-mock-store";
import "jest-styled-components";
import App from "./App";

const mockStore = configureStore();

const initialState = {
  favsReducer: {
    favs: [
      {
        id: 1,
        images: {
          original: { width: 400, height: 400, url: "http://original" },
          fixed_width: { width: 300, height: 300, url: "http://fixed" }
        }
      }
    ]
  },
  homeReducer: {
    gifs: [
      {
        id: 1,
        images: {
          original: { width: 400, height: 400, url: "http://original" },
          fixed_width: { width: 300, height: 300, url: "http://fixed" }
        }
      }
    ],
    fetching: false
  },
  detailsReducer: {
    gif: {
      id: 1,
      images: {
        original: { width: 400, height: 400, url: "http://original" },
        fixed_width: { width: 300, height: 300, url: "http://fixed" }
      },
      title: "hello",
      username: "self",
      url: "http://dummy"
    },
    loaded: true
  },
  imageLoaderReducer: {
    loaded: { 1: true }
  }
};

describe("<App />", () => {
  it("renders properly", () => {
    const init = Object.assign(initialState);
    const store = mockStore(init);
    ReactDOM.createPortal = node => node;
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
