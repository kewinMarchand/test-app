import React from 'react'
import { Datagrid, ImageField, List } from 'react-admin'

const PhotosList = (props) => (
    <List {...props} title="Articles">
        <Datagrid rowClick="edit">
            <ImageField source="url" title="title" />
        </Datagrid>
    </List>
);

export default PhotosList
