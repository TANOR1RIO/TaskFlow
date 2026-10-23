import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

const app = createApp(App)

// Pinia подключена, но учебное состояние пока живёт в App.vue.
// На этапе «Глобальное состояние» перенеси задачи в собственный store.
app.use(createPinia())

// TODO: на этапе «Глобальная регистрация» зарегистрируй BaseButton.

app.mount('#app')
