import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/assets/css/tailwind.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import observer from './directives/scrollAnimate'


/* add icons to the library */
library.add(faCircleCheck)
library.add(faBars)
library.add(faAngleDown)
library.add(faArrowUp)

createApp(App)
      .component('font-awesome-icon', FontAwesomeIcon)
      .directive('scrollAble' , observer)
      .use(router).mount("#app");
