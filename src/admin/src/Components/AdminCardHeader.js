import React from 'react';
import {CardHeader} from '@material-ui/core/';

export default (props) => (
    <CardHeader
        title={props.title}
        titleTypographyProps={{
            align: "center",
            color: "primary"
        }}
    />
)
