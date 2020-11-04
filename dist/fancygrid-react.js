import React from 'react';
import Fancy from 'fancygrid';

class Grid extends React.Component {
	render() {
		let me = this,
			containerProps = this.props.containerProps || {};

		// Add ref to div props
		containerProps.ref = function (container) {
			me.container = container
		}

		// Create temp container for our grid
		return React.createElement('div', containerProps);
	}

	componentDidMount() {
		let me = this,
			props = me.props,
			config = me.props.config || {},
			container = me.container;

		for(let p in props){
			switch(p){
				case 'config':
					break;
				default:
					config[p] = props[p];
			}
		}

		config.renderOuter = container;

		me.widget = new Fancy.Grid(config);
	}

	componentWillUnmount() {
		if(this.widget.el.dom){
			this.widget.destroy(false);
		}
	}
}

class Form extends React.Component {
	render() {
		let me = this,
			containerProps = this.props.containerProps || {};

		// Add ref to div props
		containerProps.ref = function (container) {
			me.container = container
		}

		// Create temp container for our grid
		return React.createElement('div', containerProps);
	}

	componentDidMount() {
		let me = this,
			props = me.props,
			config = me.props.config || {},
			container = me.container;

		for(var p in props){
			switch(p){
				case 'config':
					break;
				default:
					config[p] = props[p];
			}
		}

		config.renderOuter = container;

		me.widget = new Fancy.Form(config);
	}
}

class Tab extends React.Component {
	render() {
		let me = this,
			containerProps = this.props.containerProps || {};

		// Add ref to div props
		containerProps.ref = function (container) {
			me.container = container
		}

		// Create temp container for our grid
		return React.createElement('div', containerProps);
	}

	componentDidMount() {
		let me = this,
			props = me.props,
			config = me.props.config || {},
			container = me.container;

		for(let p in props){
			switch(p){
				case 'config':
					break;
				default:
					config[p] = props[p];
			}
		}

		config.renderTo = container;

		me.widget = new Fancy.Tab(config);
	}
}

export {
	Fancy,
	Grid,
	Form,
	Tab,
	Grid as FancyGridReact,
	Form as FancyFormReact,
	Tab as FancyTabReact
}