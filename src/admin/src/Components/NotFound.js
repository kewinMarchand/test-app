import React from 'react';
import {Typography} from '@material-ui/core/';
import AdminCardLayout from '../Layouts/AdminCardLayout'

export default () => (
    <AdminCardLayout
        headerTitle="Aïe ..."
        title="404"
    >
        <Typography 
            color="textPrimary"
            variant="body1"
            align="center"
        >
            La page que vous demandez n&#39;existe pas !
        </Typography>
    </AdminCardLayout>
);