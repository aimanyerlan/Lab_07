import { Component } from "react";
import type {ReactNode} from "react";

type Props = {
  children: ReactNode;
  fallback: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          {this.props.fallback}
          <div style={{ marginTop: 12 }}>
            <button onClick={this.resetError}>Try Again</button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}