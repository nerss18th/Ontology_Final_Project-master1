import { Routes } from '@angular/router';
import { Home } from './page/home/home';
import { Signup } from './page/signup/signup';
import { Login } from './page/login/login';
import { Promotion } from './page/promotion/promotion';
import { Dashboard } from './page/dashboard/dashboard';
import { ProjectDetail } from './page/project-detail/project-detail';
import { DiagramEditor } from './page/diagram-editor/diagram-editor';
import { AddUseCase } from './page/add-use-case/add-use-case';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'promotion', component: Promotion },
  { path: 'dashboard/project/:id/edit', component: DiagramEditor },
  { path: 'dashboard/project/:id/use-case/new', component: AddUseCase },
  { path: 'dashboard/project/:id', component: ProjectDetail },
  { path: 'dashboard', component: Dashboard },
];
