import React from 'react'
import {Grid, Typography} from '@material-ui/core/'

const UsersListAside = () => (
    <Grid style={{ width: 400, margin: '16px' }}>
        <Typography variant="h6">
            Liste des utilisateurs
        </Typography>
        <Typography variant="body1">
            Ici vous pouvez voir les informations sur nos utilisateurs.
        </Typography>
    </Grid>
)

export default UsersListAside