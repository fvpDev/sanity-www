import React from 'react'
import Fonts from '../load/fonts'
import Alert from '../components/alert'
import Footer from '../components/footer'
import SEOMeta from '../components/meta/seo'
import PWAMeta from '../components/meta/pwa'

export default class Layout extends React.Component {
  componentDidMount () { Fonts() }
  render() {
    const { preview, children } = this.props;
    return (
      <>
        <SEOMeta />
        <PWAMeta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )
  }
}
