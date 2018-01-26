import React from "react";
import Fancy from "fancygrid";

class Grid extends React.Component {
  render() {
	return '';
  }
  componentDidMount() {
    let p = this.props;
	let config = p.config;
	
	this.widget = new Fancy.Grid(config);
  }
  
  componentWillUnmount() {
    this.widget.destroy();
  }
}

class Form extends React.Component {
  render() {
	return '';
  }
  componentDidMount() {
    let p = this.props;
	let config = p.config;
	
	this.widget = new Fancy.Form(config);
  }
  
  componentWillUnmount() {
    this.widget.destroy();
  }
}

class Tab extends React.Component {
  render() {
	return '';
  }
  
  componentDidMount() {
    let p = this.props;
	let config = p.config;
	
	this.widget = new Fancy.Tab(config);
  }
  
  componentWillUnmount() {
    this.widget.destroy();
  }
}

export {
  Grid as grid,
  Form as form,
  Tab as tab
};