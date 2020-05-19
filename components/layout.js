import React from 'react'
import Fonts from '../load/fonts'
import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default class Layout extends React.Component {
  componentDidMount () { Fonts() }
  render() {
    const { preview, children } = this.props;
    return (
      <>
        <Meta />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )
  }
}
