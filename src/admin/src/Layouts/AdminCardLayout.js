import React from 'react'
import {Card, CardContent} from '@material-ui/core/'
import {Title} from 'react-admin'
import AdminCardHeader from '../Components/AdminCardHeader'

export default (props) => (
    <Card style={{flexGrow: 1}}>
        <Title title={props.headerTitle} />
        <CardContent>
            <AdminCardHeader title={props.title}/>
            {props.children}
        </CardContent>
    </Card>
)
