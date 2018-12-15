import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core/';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Aïe ..." />
        <CardContent>
            <Typography 
                color="primary"
                variant="h4"
                align="center"
            >
                404
            </Typography>
            <Typography 
                color="textPrimary"
                variant="body1"
                align="center"
            >
                La page que vous demandez n'existe pas !
            </Typography>
        </CardContent>
    </Card>
);