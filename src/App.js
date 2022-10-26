import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Lists from "./components/Lists";

import page1 from "./services/CONTENTLISTINGPAGE-PAGE1.json";
import page2 from "./services/CONTENTLISTINGPAGE-PAGE2.json";
import page3 from "./services/CONTENTLISTINGPAGE-PAGE3.json";

import { addListsAction } from "./redux/actions/addallLIst";
const person = React.lazy(() =>
  import("./services/CONTENTLISTINGPAGE-PAGE1.json")
);

function App(props) {
  useEffect(() => {
    props.setItemList([page1?.page, page2?.page, page3?.page]);
  }, []);

  return (
    <div>
      <Navbar />
      <Lists />
    </div>
  );
}
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setItemList: (payload) => dispatch(addListsAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
