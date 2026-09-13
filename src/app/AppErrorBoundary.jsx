import React from "react";
import styles from "./AppErrorBoundary.module.css";
export default class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("Prosperya render error", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <main className={styles.wrap}>
          <div>
            <span>PROSPERYA / SYSTEM ERROR</span>
            <h1>The interface hit an unexpected state.</h1>
            <p>
              Reload the page to reset the client application. If this persists,
              inspect the browser console and route data.
            </p>
            <button type="button" onClick={() => window.location.reload()}>
              Reload application
            </button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
