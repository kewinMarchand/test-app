import React from 'react';
import { List, Datagrid, TextField, UrlField, EmailField } from 'react-admin';
import AdminUrlField from '../Components/AdminUrlField';

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <TextField source="website" />
            <UrlField source="website" />
            <AdminUrlField source="website"/>
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export default UserList
