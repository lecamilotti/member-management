// src/app/app-routing.ts
import { Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/members', pathMatch: 'full' }, // Redirect to member list by default
  { path: 'members', component: MemberListComponent }, // Member List route
  { path: 'member/:id', component: MemberDetailComponent }, // Member Detail route
];

// export const appRoutes: Routes = [
//   { path: '', redirectTo: '/members', pathMatch: 'full' },
//   {
//     path: 'members',
//     component: MemberListComponent,
//     children: [
//       {
//         path: ':id',
//         component: MemberDetailComponent,
//         outlet: 'detail', // Named outlet for the detail component
//       },
//     ],
//   },
// ];
// export const appRoutes: Routes = [
//   { path: '', redirectTo: '/members', pathMatch: 'full' },
//   {
//     path: 'members',
//     component: MemberListComponent,
//     children: [
//       {
//         path: ':id',
//         loadComponent() {
//           return import('./member-detail/member-detail.component').then(
//             (module) => module.MemberDetailComponent
//           );
//         },
//         outlet: 'details', // Named outlet for the detail component
//       },
//     ],
//   },
// ];
