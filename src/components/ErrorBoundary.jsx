import React from "react";
import styled from "styled-components";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        this.props.setComponentErr(true)
        // You can render any custom fallback UI
        return <Err><p>Something went wrong.</p></Err>;
      }
      else{
        this.props.setComponentErr(false)
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary

  const Err = styled.div`
  height: 80vh;
  p{
    text-align: center;
    margin-top: 200px;
  }
`