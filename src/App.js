import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import page1 from "./services/CONTENTLISTINGPAGE-PAGE1.json";
import page2 from "./services/CONTENTLISTINGPAGE-PAGE2.json";
import page3 from "./services/CONTENTLISTINGPAGE-PAGE3.json";
import { addListsAction } from "./redux/actions/addallLIst";

const Navbar = React.lazy(() => import("./components/Navbar"));
const Lists = React.lazy(() => import("./components/Lists"));

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
