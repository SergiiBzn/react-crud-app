import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // تحديث الحالة ليعرض fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // هنا يمكنك تسجيل الخطأ في خدمة مثلا أو Console
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      // fallback UI وقت الخطأ
      return <h1>Oops! Something went wrong: {this.state.error.message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;