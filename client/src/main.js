import { createApp } from 'vue';
import app from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import icons from '../fontawesome';

library.add({ ...icons });
createApp(app).component('fa', FontAwesomeIcon).mount('#app');
