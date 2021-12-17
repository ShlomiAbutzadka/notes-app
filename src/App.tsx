import React, { useEffect } from "react";
import "./App.css";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Layout from "./components/layout/Layout";
import { useAppDispatch } from "./store/hooks";
import { getNotes } from "./store/notes";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  return (
    <div className="App">
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
