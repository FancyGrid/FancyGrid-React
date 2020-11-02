import { Component } from "react";
import {
  Fancy,
  FormOptions,
  GridOptions,
  TabOptions
} from "fancygrid";

interface FormReactProps extends FormOptions {
  config?: FormOptions;
}

declare class Form extends Component<FormReactProps, {}> {}

interface GridReactProps extends GridOptions {
  config?: GridOptions;
}

declare class Grid extends Component<GridReactProps, {}> {}

interface TabReactProps extends TabOptions {
  config?: TabOptions;
}

declare class Tab extends Component<TabReactProps, {}> {}

export {
  Fancy,
  Grid,
  Grid as FancyGridReact,
  Grid as grid,
  Form,
  Form as FancyFormReact,
  Form as form,
  Tab,
  Tab as FancyTabReact,
  Tab as tab
};