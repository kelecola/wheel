import { App as VM } from 'vue'
import { Button, Cell, CellGroup, Icon, Tabbar, TabbarItem, Image as VanImage, Form, Field, NavBar, Radio, RadioGroup, Checkbox, CheckboxGroup } from 'vant'

const plugins = [Button, Icon, Cell, CellGroup, Tabbar, TabbarItem, VanImage, Form, Field, NavBar, Radio, RadioGroup, Checkbox, CheckboxGroup]

export const vantPlugins = {
  install: function (vm: VM) {
    plugins.forEach((item) => {
      vm.component(item.name, item)
    })
  }
}
