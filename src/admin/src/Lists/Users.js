import React from 'react'
import { List, Datagrid, TextField, UrlField, EmailField } from 'react-admin'
import AdminUrlField from '../Components/AdminUrlField'
import UsersActions from '../Actions/UsersActions'
import UsersPagination from '../Pagination/UsersPagination'
import UsersListAside from '../Asides/UsersListAside'
import {withStyles} from '@material-ui/core/'
import DesktopOnlyTextField from '../Components/DesktopOnlyTextField'

const styles = theme => ({
    root: {
        backgroundColor: '#ccc',
    },
    header: {
        backgroundColor: '#eee',
    },
    actions: {
        backgroundColor: '#ddd',
    },
    noResults: {
        backgroundColor: '#000',
    },
    rowEven: {
        backgroundColor: '#ddd',
    },
    rowOdd: {
        backgroundColor: '#ccc',
    },
    hiddenOnSmallScreens: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
})

const UserList = ({ classes, permissions, ...props }) =>
    (
        <List 
            {...props} 
            title="Utilisateurs"
            actions={
                <UsersActions 
                    permissions={permissions}
                />
            }
            sort={{ 
                field: 'name', 
                order: 'ASC' 
            }}
            pagination={
                <UsersPagination/>
            }
            aside={
                <UsersListAside />
            }
            classes={{ 
                root: classes.root,
                header: classes.header,
                actions: classes.actions,
                noResults: classes.noResults 
            }}
        >
            <Datagrid 
                rowClick="edit"
                classes={{ 
                    table: classes.table,
                    tbody: classes.tbody,
                    headerCell: classes.headerCell,
                    row: classes.row,
                    rowEven: classes.rowEven,
                    rowOdd: classes.rowOdd, 
                    rowCell: classes.rowCell, 
                }}
            >
                <TextField source="id" />
                <DesktopOnlyTextField source="name" />
                <TextField 
                    source="username" 
                    headerClassName={classes.hiddenOnSmallScreens}
                    cellClassName={classes.hiddenOnSmallScreens}
                />
                <EmailField source="email" />
                <DesktopOnlyTextField source="address.street" />
                <TextField 
                    source="phone" 
                    sortable={false}
                />
                <TextField source="website" />
                <UrlField source="website" />
                <AdminUrlField source="website"/>
                <TextField source="company.name" />
            </Datagrid>
        </List>
    );

export default withStyles(styles)(UserList)
