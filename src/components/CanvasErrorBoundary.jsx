import { Component } from "react";

export default class CanvasErrorBoundary extends Component {
  state = { error: false };
  static getDerivedStateFromError() { return { error: true }; }
  render() {
    if (this.state.error) return null; // silently hide on WebGL failure
    return this.props.children;
  }
}
