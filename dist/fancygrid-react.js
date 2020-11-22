import React from 'react';
import Fancy from 'fancygrid';

const CHANGABLE_GRID_PROPS = {
	title: {
		type: 'string',
		handler: (grid, value)=>{
			console.log(value);
			grid.setTitle(value);
		}
	},
	subTitle: {
		type: 'string',
		handler: (grid, value)=>{
			grid.setSubTitle(value);
		}
	},
	columns: {
		type: 'array',
		handler: (grid, columns)=>{
			grid.setColumns(columns);
		}
	},
	data: {
		type: 'array',
		handler: (grid, data)=>{
			grid.setData(data);
			grid.update();
		}
	},
	width: {
		type: 'number',
		handler: (grid, value)=>{
			grid.setWidth(value);
		}
	},
	height: {
		type: 'number',
		handler: (grid, value)=>{
			grid.setHeight(value);
		}
	}
};

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
		if(this.widget.el && this.widget.el.dom){
			this.widget.destroy(false);
		}
	}

	componentDidUpdate(prevProps) {
		this.processPropsChanges(prevProps, this.props);
	}

	shouldComponentUpdate(nextProps) {
		this.processPropsChanges(this.props, nextProps);
		return false;
	}

	processPropsChanges(prevProps, nextProps) {
		let changes = this.getChanges(prevProps, nextProps);
	}

	getChanges(prevProps, nextProps) {
		for(let p in prevProps){
			if(!CHANGABLE_GRID_PROPS[p]){
				continue;
			}

			let prevValue = prevProps[p],
				nextValue = nextProps[p],
				type = CHANGABLE_GRID_PROPS[p].type;

			if(Fancy.typeOf(prevValue) !== type || Fancy.typeOf(nextValue) !== type){
				continue;
			}

			switch(type){
				case 'string':
				case 'number':
					if(prevValue !== nextValue){
						CHANGABLE_GRID_PROPS[p].handler(this.widget, nextValue);
					}
					break;
				case 'array':
					if(prevValue.length !== nextValue.length){
						CHANGABLE_GRID_PROPS[p].handler(this.widget, nextValue);
					}
					else{
						prevValue.some((item, i) => {
							if(typeof item === 'object'){
								for(let q in item){
									if(item[q] !== nextValue[i][q]){
										CHANGABLE_GRID_PROPS[p].handler(this.widget, nextValue);
										return true;
									}
								}
							}
						});
					}
					break;
				case 'object':
					if(prevValue.toString() !== nextValue.toString()){
						CHANGABLE_GRID_PROPS[p].handler(this.widget, nextValue);
					}
					break;
			}
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

		for(let p in props){
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

		config.renderOuter = container;

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