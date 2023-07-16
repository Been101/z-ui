import { App } from "vue";
import Button from "@laozheng/button";
import Icon from "@laozheng/icon";
import ButtonGroup from "@laozheng/button-group";
import Row from "@laozheng/row";
import Col from "@laozheng/col";
import Checkbox from "@laozheng/checkbox";
import CheckboxGroup from "@laozheng/checkbox-group";
// import Transfer from '@laozheng/transfer';
const components = [
  Button,
  Icon,
  ButtonGroup,
  Row,
  Col,
  Checkbox,
  CheckboxGroup,
  // Transfer
];
const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
// 在使用组件库的时候可以使用 createApp().use(XXX)
export default {
  install,
};

// 组件库看效果的网址 -》 文档  =》 md -> webpack
