import {HomeComponent} from "./components/home/home.component";
import {StoreComponent} from "./components/store/store.component";

export const Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'store', component: StoreComponent }
];
