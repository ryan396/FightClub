import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/tailwind-light/theme.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
import Menubar from 'primevue/menubar'
import DataTable from 'primevue/datatable'
import Button from 'primevue/button'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup'
import Paginator from 'primevue/paginator'
import Dropdown from 'primevue/dropdown'
import Card from 'primevue/card'
import Divider from 'primevue/divider'
import Fieldset from 'primevue/fieldset'
import InputText from 'primevue/inputtext'
import store from './store'
import router from './router/router'
import Panel from 'primevue/panel'
import InputNumber from 'primevue/inputnumber'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'

const app = createApp(App)

app.use(PrimeVue)
app.component('Menubar', Menubar)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Button', Button)
app.component('Paginator', Paginator)
app.component('Dropdown', Dropdown)
app.component('Card', Card)
app.component('Divider', Divider)
app.component('Fieldset', Fieldset)
app.component('InputText', InputText)
app.component('Panel', Panel)
app.component('InputNumber', InputNumber)
app.component('Toast', Toast)
app.use(ToastService)
app.use(router)
app.use(store)
app.mount('#app')
