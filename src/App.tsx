import React from "react";
import { Box } from "@mantine/core";
import { Provider } from "react-redux";

import AddToFirstButton from "./components/AddToFirstButton/AddToFirstButton";
import FirstValue from "./components/FirstValue/FirstValue";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

import { store } from "./lib/redux/store";

import "./App.css";
import AddToSecondButton from "./components/AddToSecondButton/AddToSecondButton";
import SecondValue from "./components/SecondValue/SecondValue";
import NoChanges from "./components/NoChanges/NoChanges";
import Users from "./components/Users/Users";
import DialogModal from "./components/DialogModal/DialogModal";
import ConfirmModal from "./components/DialogModal/components/ConfirmModal/ConfirmModal";
import MassiveSearch from "./components/DialogModal/MassiveSearch/MassiveSearch";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="App">
      {/* <Header title="State management" />
      <Search />
      <Provider store={store}>
        <Box p={10}>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <AddToFirstButton />
            <FirstValue />
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <AddToSecondButton />
            <SecondValue />
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <NoChanges />
          </Box>
        </Box>
      </Provider>
      <Users />
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <DialogModal isOpen={isOpen} cssClass="modal_confirmation">
        <ConfirmModal onClose={() => setIsOpen(false)} onConfirm={() => null} />
      </DialogModal> */}
      <MassiveSearch />
    </div>
  );
}

export default App;
