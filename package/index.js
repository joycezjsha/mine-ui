
import Pagination from './pagination/index.js';
import Dialog from './dialog/index.js';
import Autocomplete from './autocomplete/index.js';
import Dropdown from './dropdown/index.js';
import DropdownMenu from './dropdown-menu/index.js';
import DropdownItem from './dropdown-item/index.js';
import Menu from './menu/index.js';
import Submenu from './submenu/index.js';
import MenuItem from './menu-item/index.js';
import MenuItemGroup from './menu-item-group/index.js';
import Input from './input/index.js';
import InputNumber from './input-number/index.js';
import Radio from './radio/index.js';
import RadioGroup from './radio-group/index.js';
import RadioButton from './radio-button/index.js';
import Checkbox from './checkbox/index.js';
import CheckboxButton from './checkbox-button/index.js';
import CheckboxGroup from './checkbox-group/index.js';
import Switch from './switch/index.js';
import Select from './select/index.js';
import Option from './option/index.js';
import OptionGroup from './option-group/index.js';
import Button from './button/index.js';
import ButtonGroup from './button-group/index.js';
// import Table from './table/index.js';
import TableColumn from './table-column/index.js';
import DatePicker from './date-picker/index.js';
import TimeSelect from './time-select/index.js';
import TimePicker from './time-picker/index.js';
import Popover from './popover/index.js';
import Tooltip from './tooltip/index.js';
import Breadcrumb from './breadcrumb/index.js';
import BreadcrumbItem from './breadcrumb-item/index.js';
import Form from './form/index.js';
import FormItem from './form-item/index.js';
import Tabs from './tabs/index.js';
import TabPane from './tab-pane/index.js';
import Tag from './tag/index.js';
import Tree from './tree/index.js';
import Alert from './alert/index.js';
import Notification from './notification/index.js';
import Slider from './slider/index.js';
import Loading from './loading/index.js';
import Icon from './icon/index.js';
import Row from './row/index.js';
import Col from './col/index.js';
import Upload from './upload/index.js';
import Progress from './progress/index.js';
import Spinner from './spinner/index.js';
import Message from './message/index.js';
import Badge from './badge/index.js';
import Card from './card/index.js';
import Rate from './rate/index.js';
import Steps from './steps/index.js';
import Step from './step/index.js';
import Carousel from './carousel/index.js';
import Scrollbar from './scrollbar/index.js';
import CarouselItem from './carousel-item/index.js';
import Collapse from './collapse/index.js';
import CollapseItem from './collapse-item/index.js';
import Cascader from './cascader/index.js';
import ColorPicker from './color-picker/index.js';
import Transfer from './transfer/index.js';
import Container from './container/index.js';
import Header from './header/index.js';
import Aside from './aside/index.js';
import Main from './main/index.js';
import Footer from './footer/index.js';
import Timeline from './timeline/index.js';
import TimelineItem from './timeline-item/index.js';
import Link from './link/index.js';
import Divider from './divider/index.js';
import Image from './image/index.js';
import Calendar from './calendar/index.js';
import Backtop from './backtop/index.js';
import InfiniteScroll from './infinite-scroll/index.js';
import PageHeader from './page-header/index.js';
import CascaderPanel from './cascader-panel/index.js';
import Avatar from './avatar/index.js';
import Drawer from './drawer/index.js';
import Popconfirm from './popconfirm/index.js';
import locale from '@/locale';
import CollapseTransition from '@/transitions/collapse-transition';
//自定义基础组件
import map from './map/index.js';
import Case from './case/index.js';

const components = [
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  // Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Spinner,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  Scrollbar,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Timeline,
  TimelineItem,
  Link,
  Divider,
  Image,
  Calendar,
  Backtop,
  PageHeader,
  CascaderPanel,
  Avatar,
  Drawer,
  Popconfirm,
  CollapseTransition,
  map,
  Case
]

const install = function(Vue) {
  if (install.installed) return
  components.map(component =>
    Vue.component(component.name, component)
  )
  Vue.prototype.$message = Message;
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Message,
  CollapseTransition,
  // Carousel,
  // CarouselItem,
  // BreadCrumb,
  // Loading,
  // map,
  // Case
}
