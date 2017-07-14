import React from 'react'
import GoogleAnalytics from 'react-ga'
GoogleAnalytics.initialize('UA-102507504-1')

export default (WrappedComponent) => {
  const trackPage = (page) => {
    GoogleAnalytics.set({ page });
    GoogleAnalytics.pageview(page);
  }

  const HOC = (props) => {
    const page = window.location.pathname
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    )
  }

  return HOC
}
