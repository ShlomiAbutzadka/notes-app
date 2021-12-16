import React, { useEffect } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { useAppDispatch } from "./store/hooks";
import { getNotes } from "./store/notes";

function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(getNotes());
  }, []);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
