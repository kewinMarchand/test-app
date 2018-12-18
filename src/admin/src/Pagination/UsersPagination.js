import React from 'react'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import {Button, Grid, Toolbar} from '@material-ui/core/'

const UsersPagination = ({ page, perPage, total, setPage }) => {
    const nbPages = Math.ceil(total / perPage) || 1;
    return (
        <Toolbar>
            <Grid container alignItems="center" justify="flex-end">
                <Button 
                    key="prev" 
                    color="secondary" 
                    onClick={() => setPage(page - 1)}
                    disabled={!1 < page}
                >
                    <ChevronLeft />
                    Précédent
                </Button>
                <Button 
                    key="next"
                    color="primary" 
                    onClick={() => setPage(page + 1)} 
                    disabled={page === nbPages}
                >
                    Suivant
                    <ChevronRight />
                </Button>
            </Grid>
        </Toolbar>
    );
}

export default UsersPagination 
