const React = require('react');
const ReactCodepen = require('react-codepen');
const IdyllComponent = require('idyll-component');

class Codepen extends IdyllComponent {
  render () {
    return <ReactCodepen
      user={this.props.user}
      hash={this.props.hash}
      width={this.props.width}
      height={this.props.height}
      tab={this.props.tab}
      theme={this.props.theme}
    />;
  }
}

module.exports = ReactCodepen;
