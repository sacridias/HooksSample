import React from 'react';
import { ErrorText } from '../components/Text/ErrorText';

export default class LoaderErrorBoundary extends React.Component<
  any,
  any,
  any
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log({ error });
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service\
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorText>Something went wrong.</ErrorText>;
    }

    return this.props.children;
  }
}
