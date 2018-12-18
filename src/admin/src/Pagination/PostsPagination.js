import React from 'react'
import { Pagination } from 'react-admin'

const PostsPagination = props => 
    <Pagination 
        {...props} 
        rowsPerPageOptions={[10, 25, 50, 100]}    
    />

export default PostsPagination 