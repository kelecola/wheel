import { App as VM } from 'vue'
import {
  Button, Cell, Popup, Picker,
  CellGroup, Icon, Tabbar, TabbarItem,
  Image as VanImage, Form, Field,
  NavBar, Radio, RadioGroup,
  Checkbox, CheckboxGroup,
  CollapseItem,
  Collapse
} from 'vant'

const plugins = [Button, Icon,
  Cell, Popup, Picker, CellGroup, Tabbar, TabbarItem,
  VanImage, Form, Field, NavBar, Radio,
  RadioGroup, Checkbox, CheckboxGroup, CollapseItem, Collapse]

export const vantPlugins = {
  install: function (vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}
