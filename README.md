# FancyGrid-React

*A React Component for FancyGrid*

Quickly create dynamic JavaScript grids that react when your data changes by utilizing the FancyGrid library and Facebook's React together.

## Resources:
* Want to see the application running? See our [sample repo](https://github.com/FancyGrid/FancyGrid-React-Seed)
* [Docs](https://fancygrid.com/docs/)
* [Support](https://fancygrid.com/support/)

## Quick Start

### Install
```
npm install fancygrid-react
```

### Usage

The FancyGrid-React Component exposes 3 components.
* `Grid`
* `Form`
* `Tab`

### Components
All components are wrappers around the entire widgets of FancyGrid.  
The simplest one approach is to use config with widget options.  

```js
import {Grid, Fancy, Form, Tab} from 'fancygrid-react';

...
const getFancyGrid = () => {
  return (
    <div style={{marginTop: '5px'}}>
      <Form
        id={'myForm'}
        theme={'extra-gray'}
        title={'Form'}
        items={[{
          name: 'id',
          type: 'hidden'
        },{
          label: 'Name',
          emptyText: 'Name',
          name: 'name'
        },{
          label: 'SurName',
          emptyText: 'SurName',
          name: 'surname'
        }]}
        buttons={[{
          text: 'Save',
          handler: () => {
            let grid = Fancy.getGrid('myGrid'),
              form = Fancy.getForm('myForm'),
              values = form.get(),
              id = values.id;

            grid.setById(id, values);
            grid.update({
              type: 'row'
            });
          }
        }]}>
      </Form>
      <Grid
        id={'myGrid'}
        height={500}
        theme={'extra-gray'}
        exporter={true}
        selModel={{
          activeCell: true,
          type: 'rows'
        }}
        defaults={{
          resizable: true,
          menu: true
        }}
        events={[{
          selectrow: (grid, rowIndex, dataItem: any) => {
            let form = Fancy.getForm('myForm');

            form.set(dataItem.data);
          }
        }]}
        columns={getColumns()}
        data={getData()}>
      </Grid>
    </div>
  );
}
```