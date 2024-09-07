// src/app/app-routing.ts
import { Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/members', pathMatch: 'full' }, // Redirect to member list by default
  { path: 'members', component: MemberListComponent }, // Member List route
  { path: 'member/:id', component: MemberDetailComponent }, // Member Detail route
];
