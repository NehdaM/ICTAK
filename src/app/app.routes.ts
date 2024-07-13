import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StdhomeComponent } from './stdhome/stdhome.component';
import { StdcontactComponent } from './stdcontact/stdcontact.component';
import { StdformComponent } from './stdform/stdform.component';
import { StdhelpComponent } from './stdhelp/stdhelp.component';
import { StdmailComponent } from './stdmail/stdmail.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BatchesComponent } from './batches/batches.component';
import { SendemailComponent } from './sendemail/sendemail.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: '', component: LoginComponent},
    {path: 'sform', component: StdformComponent},
    {
        path: 'admin-dashboard', 
        component: AdminDashboardComponent,
        children:[
            {path:'batches', component:BatchesComponent},
            {path:'sendemail', component:SendemailComponent}
        ]
    },
   
    {
        path: 'dashboard', 
        component: DashboardComponent,
        children:[
            
            {path: '', component: StdhomeComponent},
            {path: 'sform', component: StdformComponent},
            {path: 'scontact', component: StdcontactComponent},
            {path: 'shelp', component: StdhelpComponent},
            {path: 'smail', component: StdmailComponent},
        ]
    }
    
];