import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

const PostList = props => (
    <List {...props} title="Articles">
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="id" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export default PostList
