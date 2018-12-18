import React from 'react'
import { List, Datagrid, TextField } from 'react-admin'

const CommentsList = props => (
    <List {...props} title="Commentaires">
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export default CommentsList
