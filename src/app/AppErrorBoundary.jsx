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
      const fr = window.location.pathname.split("/")[1] === "fr";
      return (
        <main className={styles.wrap}>
          <div>
            <span>PROSPERYA</span>
            <h1>{fr ? "Une erreur est survenue." : "Something went wrong."}</h1>
            <p>
              {fr
                ? "Rechargez la page pour réessayer."
                : "Reload the page to try again."}
            </p>
            <button type="button" onClick={() => window.location.reload()}>
              {fr ? "Recharger la page" : "Reload page"}
            </button>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}
