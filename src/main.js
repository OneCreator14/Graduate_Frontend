import "@/assets/styles/light-styles.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";



import PrimeVue from 'primevue/config';
import Divider from 'primevue/divider';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';                   // optional
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Dialog from 'primevue/dialog';
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import Textarea from 'primevue/textarea';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'




const app = createApp(App);
app.use(router);
app.use(PrimeVue);

app.component('Divider', Divider);
app.component('TabView', TabView);
app.component('TabPanel', TabPanel);
app.component('InputGroup', InputGroup);
app.component('InputGroupAddon', InputGroupAddon);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown);
app.component('Dialog', Dialog);
app.component('Button', Button);
app.component('Calendar', Calendar);
app.component('Textarea', Textarea);

app.mount("#app");
