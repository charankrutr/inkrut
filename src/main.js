import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import global CSS
import './styles/variables.css';
import './styles/global.css';

import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).mount('#app');