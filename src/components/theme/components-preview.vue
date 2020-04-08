<style lang="scss">
.component-preview {
  padding-right: 10px;
  &:last-of-type {
    padding-bottom: 20px;
  }
  h4 {
    font-size: 20px;
    margin: 40px 0 20px;
    color: #909399
  }
  .demo-item {
    margin-top: 10px;
    margin-right: 40px;
  }

  .demo-line {
    margin: 15px 0;
  }

  .mi-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .mi-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .mi-avatar:not(:last-child) {
    margin-right: 20px;
  }

  .avatar-demo {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <div class="component-preview">
    <h4>Button</h4>
    <mi-row class="demo-line">
      <mi-button>Default</mi-button>
      <mi-button type="primary">Primary</mi-button>
      <mi-button type="success">Success</mi-button>
      <mi-button type="info">Info</mi-button>
      <mi-button type="warning">Warning</mi-button>
      <mi-button type="danger">Danger</mi-button>
    </mi-row>
    <mi-row class="demo-line">
      <mi-button plain>Plain</mi-button>
      <mi-button type="primary" plain>Primary</mi-button>
      <mi-button type="success" plain>Success</mi-button>
      <mi-button type="info" plain>Info</mi-button>
      <mi-button type="warning" plain>Warning</mi-button>
      <mi-button type="danger" plain>Danger</mi-button>
    </mi-row>
    <mi-row class="demo-line">
      <mi-button round>Round</mi-button>
      <mi-button type="primary" round>Primary</mi-button>
      <mi-button type="success" round>Success</mi-button>
      <mi-button type="info" round>Info</mi-button>
      <mi-button type="warning" round>Warning</mi-button>
      <mi-button type="danger" round>Danger</mi-button>
    </mi-row>
    <mi-row class="demo-line">
      <mi-button icon="mi-icon-search" circle></mi-button>
      <mi-button type="primary" icon="mi-icon-edit" circle></mi-button>
      <mi-button type="success" icon="mi-icon-check" circle></mi-button>
      <mi-button type="info" icon="mi-icon-message" circle></mi-button>
      <mi-button type="warning" icon="mi-icon-star-off" circle></mi-button>
      <mi-button type="danger" icon="mi-icon-delete" circle></mi-button>
    </mi-row>
    <mi-row class="demo-line">
      <mi-button>Default</mi-button>
      <mi-button size="medium">Medium</mi-button>
      <mi-button size="small">Small</mi-button>
      <mi-button size="mini">Mini</mi-button>
    </mi-row>
    <h4>Radio</h4>
    <mi-row class="demo-line">
      <mi-radio v-model="radio" label="1">Option A</mi-radio>
      <mi-radio v-model="radio" label="2">Option B</mi-radio>
    </mi-row>
    <mi-row class="demo-line">
      <mi-radio-group v-model="radio1">
        <mi-radio-button label="New York"></mi-radio-button>
        <mi-radio-button label="Washington"></mi-radio-button>
        <mi-radio-button label="Los Angeles"></mi-radio-button>
        <mi-radio-button label="Chicago"></mi-radio-button>
      </mi-radio-group>
    </mi-row>
    <mi-row class="demo-line">
      <mi-radio v-model="radio2" label="1" border>Option A</mi-radio>
      <mi-radio v-model="radio2" label="2" border>Option B</mi-radio>
    </mi-row>
    <h4>Checkbox</h4>
    <mi-row class="demo-line">
      <mi-checkbox v-model="checked">Option</mi-checkbox>
    </mi-row>
    <mi-row class="demo-line">
      <mi-checkbox-group v-model="checked1">
        <mi-checkbox-button v-for="city in ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']" :label="city" :key="city">{{city}}</mi-checkbox-button>
      </mi-checkbox-group>
    </mi-row>
    <mi-row class="demo-line">
      <mi-checkbox v-model="checked2" label="Option1" border></mi-checkbox>
    </mi-row>
    <h4>Input</h4>
    <mi-row style="width: 180px">
      <mi-input placeholder="Please input" v-model="input"></mi-input>
    </mi-row>
    <h4>InputNumber</h4>
    <mi-row>
      <mi-input-number v-model="inputNumber" :min="1" :max="10"></mi-input-number>
    </mi-row>
    <h4>Select</h4>
    <mi-row>
      <mi-select v-model="selectValue" placeholder="Select">
        <mi-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></mi-option>
      </mi-select>
    </mi-row>
    <h4>Cascader</h4>
    <mi-row>
      <mi-cascader :options="cascadeOptions" v-model="cascaderValue"></mi-cascader>
    </mi-row>
    <h4>Switch</h4>
    <mi-row>
      <mi-switch v-model="switchValue"></mi-switch>
      <mi-switch
        style="margin-left: 40px"
        v-model="switchValue"
        active-text="Pay by month"
        inactive-text="Pay by year">
      </mi-switch>
    </mi-row>
    <h4>Slider</h4>
    <mi-row style="width: 380px">
      <mi-slider v-model="slider"></mi-slider>
    </mi-row>
    <h4>DatePicker</h4>
    <mi-row>
      <mi-date-picker v-model="datePicker" type="date"></mi-date-picker>
    </mi-row>
    <h4>Rate</h4>
    <mi-row>
      <mi-rate class="demo-line" v-model="rate"></mi-rate>
      <mi-rate
        class="demo-line"
        v-model="rate"
        show-score
        text-color="#ff9900"
        score-template="{value} points">
      </mi-rate>
    </mi-row>
    <h4>Transfer</h4>
    <mi-row>
      <mi-transfer v-model="transfer" filterable :data="transferData">
        <mi-button class="transfer-footer" slot="left-footer" size="small">Operation</mi-button>
        <mi-button class="transfer-footer" slot="right-footer" size="small">Operation</mi-button>
      </mi-transfer>
    </mi-row>
    <h4>Table</h4>
    <mi-row>
      <mi-table :data="tableData" style="width: 70%">
        <mi-table-column prop="date" label="Date" width="180"></mi-table-column>
        <mi-table-column prop="name" label="Name" width="180"></mi-table-column>
        <mi-table-column prop="address" label="Address"></mi-table-column>
      </mi-table>
    </mi-row>
    <h4>Tag</h4>
    <mi-row>
      <mi-tag class="demo-item" closable>Tag One</mi-tag>
      <mi-tag class="demo-item" closable type="success">Tag Two</mi-tag>
      <mi-tag class="demo-item" closable type="info">Tag Three</mi-tag>
      <mi-tag class="demo-item" closable type="warning">Tag Four</mi-tag>
      <mi-tag class="demo-item" closable type="danger">Tag Five</mi-tag>
    </mi-row>
    <h4>Progress</h4>
    <mi-row style="width: 380px">
      <mi-progress :percentage="20"></mi-progress>
      <mi-progress :percentage="60" status="exception"></mi-progress>
      <mi-progress :percentage="100" status="success"></mi-progress>
    </mi-row>
    <h4>Tree</h4>
    <mi-row style="width: 380px">
      <mi-tree :data="treeData" :props="defaultTreeProps" ></mi-tree>
    </mi-row>
    <h4>Pagination</h4>
    <mi-row>
      <mi-pagination layout="prev, pager, next" :total="1000"></mi-pagination>
    </mi-row>
    <h4>Badge</h4>
    <mi-row>
      <mi-badge :value="12" class="demo-item">
        <mi-button size="small">comments</mi-button>
      </mi-badge>
      <mi-badge :value="3" class="demo-item">
        <mi-button size="small">replies</mi-button>
      </mi-badge>
      <mi-badge :value="1" class="demo-item" type="primary">
        <mi-button size="small">comments</mi-button>
      </mi-badge>
      <mi-badge :value="2" class="demo-item" type="warning">
        <mi-button size="small">replies</mi-button>
      </mi-badge>
    </mi-row>
    <h4>Alert</h4>
    <mi-row style="width: 380px;">
      <mi-alert class="demo-item" title="success alert" type="success" show-icon></mi-alert>
      <mi-alert class="demo-item" title="info alert" type="info" close-text="Gotcha" show-icon></mi-alert>
      <mi-alert class="demo-item" title="warning alert" type="warning" show-icon></mi-alert>
      <mi-alert
        class="demo-item"
        title="error alert"
        type="error"
        description="more text description"
        show-icon>
      </mi-alert>
    </mi-row>
    <h4>Loading</h4>
    <mi-row>
      <mi-table :data="tableData" style="width: 90%" v-loading="true">
        <mi-table-column prop="date" label="Date" width="180"></mi-table-column>
        <mi-table-column prop="name" label="Name" width="180"></mi-table-column>
        <mi-table-column prop="address" label="Address"></mi-table-column>
      </mi-table>
    </mi-row>
    <h4>Message</h4>
    <mi-row>
      <div role="alert" class="demo-item mi-message mi-message--success mi-message-fade-leave-active mi-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="mi-message__icon mi-icon-success"></i><p class="mi-message__content">Congrats, this is a success message.</p><!----></div>
      <div role="alert" class="demo-item mi-message mi-message--warning mi-message-fade-leave-active mi-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="mi-message__icon mi-icon-warning"></i><p class="mi-message__content">Warning, this is a warning message.</p><!----></div>
      <div role="alert" class="demo-item mi-message mi-message--info mi-message-fade-leave-active mi-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="mi-message__icon mi-icon-info"></i><p class="mi-message__content">This is a message.</p><!----></div>
      <div role="alert" class="demo-item mi-message mi-message--error is-closable mi-message-fade-leave-active mi-message-fade-leave-to" style="top: 0;left: 0;width: 100px; opacity: 1; position: relative;transform: none;"><i class="mi-message__icon mi-icon-error"></i><p class="mi-message__content">Oops, this is a error message.</p><i class="mi-message__closeBtn mi-icon-close"></i></div>
    </mi-row>
    <h4>MessageBox</h4>
    <mi-row>
      <div class="mi-message-box"><div class="mi-message-box__header"><div class="mi-message-box__title"><!----><span>Warning</span></div><button type="button" aria-label="Close" class="mi-message-box__headerbtn"><i class="mi-message-box__close mi-icon-close"></i></button></div><div class="mi-message-box__content"><div class="mi-message-box__status mi-icon-warning"></div><div class="mi-message-box__message"><p>This will permanently delete the file. Continue?</p></div><div class="mi-message-box__input" style="display: none;"><div class="mi-input"><!----><input type="text" autocomplete="off" placeholder="" class="mi-input__inner"><!----><!----><!----></div><div class="mi-message-box__errormsg" style="visibility: hidden;"></div></div></div><div class="mi-message-box__btns"><button type="button" class="mi-button mi-button--default mi-button--small"><!----><!----><span>
          Cancel
        </span></button><button type="button" class="mi-button mi-button--default mi-button--small mi-button--primary "><!----><!----><span>
          OK
        </span></button></div></div>
    </mi-row>
    <h4>Notification</h4>
    <mi-row>
      <div role="alert" class="mi-notification right" style="position: relative; left: 0;"><!----><div class="mi-notification__group"><span class="mi-notification__title">Notification</span><div class="mi-notification__content"><div>This is a message </div></div><div class="mi-notification__closeBtn mi-icon-close"></div></div></div>
    </mi-row>
    <h4>Menu</h4>
    <mi-row>
      <mi-menu :default-active="menu" class="mi-menu-demo" mode="horizontal">
        <mi-menu-item index="1">Processing Center</mi-menu-item>
        <mi-submenu index="2">
          <template slot="title">Workspace</template>
          <mi-menu-item index="2-1">item one</mi-menu-item>
          <mi-menu-item index="2-2">item two</mi-menu-item>
          <mi-menu-item index="2-3">item three</mi-menu-item>
          <mi-submenu index="2-4">
            <template slot="title">item four</template>
            <mi-menu-item index="2-4-1">item one</mi-menu-item>
            <mi-menu-item index="2-4-2">item two</mi-menu-item>
            <mi-menu-item index="2-4-3">item three</mi-menu-item>
          </mi-submenu>
        </mi-submenu>
        <mi-menu-item index="3" disabled>Info</mi-menu-item>
        <mi-menu-item index="4">
          <a href="https://www.ele.me" target="_blank">Orders</a>
        </mi-menu-item>
      </mi-menu>
      <mi-menu
        default-active="2"
        class="demo-line"
      >
        <mi-submenu index="1">
          <template slot="title">
            <i class="mi-icon-location"></i>
            <span>Navigator One</span>
          </template>
          <mi-menu-item-group title="Group One">
            <mi-menu-item index="1-1">item one</mi-menu-item>
            <mi-menu-item index="1-2">item one</mi-menu-item>
          </mi-menu-item-group>
          <mi-menu-item-group title="Group Two">
            <mi-menu-item index="1-3">item three</mi-menu-item>
          </mi-menu-item-group>
          <mi-submenu index="1-4">
            <template slot="title">item four</template>
            <mi-menu-item index="1-4-1">item one</mi-menu-item>
          </mi-submenu>
        </mi-submenu>
        <mi-menu-item index="2">
          <i class="mi-icon-menu"></i>
          <span>Navigator Two</span>
        </mi-menu-item>
        <mi-menu-item index="3" disabled>
          <i class="mi-icon-document"></i>
          <span>Navigator Three</span>
        </mi-menu-item>
        <mi-menu-item index="4">
          <i class="mi-icon-setting"></i>
          <span>Navigator Four</span>
        </mi-menu-item>
      </mi-menu>
    </mi-row>
    <h4>Tabs</h4>
    <mi-row>
      <mi-tabs v-model="tab" class="demo-item">
        <mi-tab-pane label="User" name="first">User</mi-tab-pane>
        <mi-tab-pane label="Config" name="second">Config</mi-tab-pane>
        <mi-tab-pane label="Role" name="third">Role</mi-tab-pane>
        <mi-tab-pane label="Task" name="fourth">Task</mi-tab-pane>
      </mi-tabs>
      <mi-tabs type="card" class="demo-item">
        <mi-tab-pane label="User">User</mi-tab-pane>
        <mi-tab-pane label="Config">Config</mi-tab-pane>
        <mi-tab-pane label="Role">Role</mi-tab-pane>
        <mi-tab-pane label="Task">Task</mi-tab-pane>
      </mi-tabs>
    </mi-row>
    <h4>Dialog</h4>
    <mi-row>
      <div role="dialog" aria-modal="true" aria-label="Tips" class="mi-dialog" style="margin: 0"><div class="mi-dialog__header"><span class="mi-dialog__title">Tips</span><button type="button" aria-label="Close" class="mi-dialog__headerbtn"><i class="mi-dialog__close mi-icon mi-icon-close"></i></button></div><div class="mi-dialog__body"><span>This is a message</span> </div><div class="mi-dialog__footer"><span class="dialog-footer"><button type="button" class="mi-button mi-button--default"><!----><!----><span>Cancel</span></button> <button type="button" class="mi-button mi-button--primary"><!----><!----><span>Confirm</span></button></span></div></div>
    </mi-row>
    <h4>Tooltip</h4>
    <mi-row>
      <div role="tooltip" x-placement="top" class="mi-tooltip__popper is-dark" style="position: relative; width: 40px;text-align: center;">Dark<div x-arrow="" class="popper__arrow"></div>
      </div>
      <div role="tooltip" x-placement="top" class="mi-tooltip__popper is-light" style="margin-top: 10px;position: relative; width: 40px;text-align: center;">Light<div x-arrow="" class="popper__arrow"></div>
      </div>
    </mi-row>
    <h4>Popover</h4>
    <mi-row>
      <div role="tooltip" x-placement="top" id="mi-popover-2936" aria-hidden="true" class="mi-popover mi-popper mi-popover--plain" tabindex="0" style="width: 200px; position: relative; "><div class="mi-popover__title">Title</div>this is content, this is content, this is content<div x-arrow="" class="popper__arrow"></div></div>
    </mi-row>
    <h4>Card</h4>
    <mi-row>
      <mi-card class="box-card">
        <div slot="header" class="clearfix">
          <span>Card name</span>
        </div>
      </mi-card>
    </mi-row>
    <h4>Carousel</h4>
    <mi-row>
      <mi-carousel height="150px">
        <mi-carousmi-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </mi-carousmi-item>
      </mi-carousel>
    </mi-row>
    <h4>Collapse</h4>
    <mi-row>
      <mi-collapse v-model="collapse">
        <mi-collapse-item title="Consistent" name="1">
          <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
        </mi-collapse-item>
        <mi-collapse-item title="Feedback" name="2">
          <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
        </mi-collapse-item>
      </mi-collapse>
    </mi-row>
    <h4>Avatar</h4>
    <mi-row class="demo-line avatar-demo">
      <mi-avatar icon="mi-icon-user-solid"/>
      <mi-avatar> avatar </mi-avatar>
      <mi-avatar shape="square" fit="contain" :src="avatarData.url"></mi-avatar>
      <mi-avatar size="large"> large </mi-avatar>
      <mi-avatar size="medium"> medium </mi-avatar>
      <mi-avatar size="small"> small </mi-avatar>
    </mi-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: 'Washington',
      radio2: '1',
      checked: true,
      checked1: ['Shanghai'],
      checked2: true,
      input: 'Element',
      inputNumber: 1,
      selectOptions: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      selectValue: '',
      cascadeOptions: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency'
                },
                {
                  value: 'feedback',
                  label: 'Feedback'
                }
              ]
            }
          ]
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components'
            },
            {
              value: 'sketch',
              label: 'Sketch Templates'
            },
            {
              value: 'docs',
              label: 'Design Documentation'
            }
          ]
        }
      ],
      cascaderValue: [],
      switchValue: true,
      slider: 28,
      datePicker: '',
      rate: null,
      transferData: (() => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `Option ${i}`,
            disabled: i % 4 === 0
          });
        }
        return data;
      })(),
      transfer: [1, 4],
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ],
      menu: '1',
      tab: 'first',
      collapse: ['1'],
      treeData: [{
        label: 'Level one 1',
        children: [{
          label: 'Level two 1-1',
          children: [{
            label: 'Level three 1-1-1'
          }]
        }]
      }, {
        label: 'Level one 2',
        children: [{
          label: 'Level two 2-1',
          children: [{
            label: 'Level three 2-1-1'
          }]
        }, {
          label: 'Level two 2-2',
          children: [{
            label: 'Level three 2-2-1'
          }]
        }]
      }, {
        label: 'Level one 3',
        children: [{
          label: 'Level two 3-1',
          children: [{
            label: 'Level three 3-1-1'
          }]
        }, {
          label: 'Level two 3-2',
          children: [{
            label: 'Level three 3-2-1'
          }]
        }]
      }],
      defaultTreeProps: {
        children: 'children',
        label: 'label'
      },
      avatarData: {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      }
    };
  }
};
</script>
