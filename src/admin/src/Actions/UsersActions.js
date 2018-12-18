import React from 'react'
import {IconButton, Tooltip} from '@material-ui/core/'
import { CardActions, CreateButton, ExportButton, RefreshButton } from 'react-admin'
import Favorite from '@material-ui/icons/Favorite'

const UsersActions = ({
    bulkActions,
    basePath,
    currentSort,
    displayedFilters,
    exporter,
    filters,
    filterValues,
    onUnselectItems,
    resource,
    selectedIds,
    showFilter
}) => (
    <CardActions>
        {bulkActions && React.cloneElement(bulkActions, {
            basePath,
            filterValues,
            resource,
            selectedIds,
            onUnselectItems,
        })}
        {filters && React.cloneElement(filters, {
            resource,
            showFilter,
            displayedFilters,
            filterValues,
            context: 'button',
        }) }
        <CreateButton basePath={basePath} />
        <ExportButton
            resource={resource}
            sort={currentSort}
            filter={filterValues}
            exporter={exporter}
        />
        <RefreshButton />
        {/* Add your custom actions */}
        <Tooltip title="Like">               
            <IconButton color="primary">
                <Favorite/>
            </IconButton>
        </Tooltip>
    </CardActions>
);

export default UsersActions
