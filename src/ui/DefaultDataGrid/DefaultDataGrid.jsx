import React, { useCallback } from 'react';
import { DataGrid } from '@mui/x-data-grid';

export const DefaultDataGrid = ({
    columns,
    rows,
    sx,
    disablePagination,
    pageItems,
    pageSizeOptions = [5, 10, 25],
    handlePageChange,
    onRowClick = () => {},
    defaultSize = 13,
    ...otherProps
}) => {
    const handlePageSizeChange = useCallback(
        ({ pageSize }) => {
            handlePageChange && handlePageChange(pageSize);
        },
        [handlePageChange]
    );

    return (
        <DataGrid
            onPaginationModelChange={handlePageSizeChange}
            initialState={{
                pagination: { paginationModel: { pageSize: pageItems || 5 } },
            }}
            pageSizeOptions={pageSizeOptions}
            onRowClick={onRowClick}
            sx={{
                minHeight: '100px',
                border: 'none',
                fontSize: defaultSize,
                '.MuiDataGrid-columnHeader': {
                    '&:last-of-type': {
                        overflow: 'hidden',
                    },
                    '&:last-of-type .MuiDataGrid-columnSeparator': {
                        display: 'none',
                    },
                },
                '.MuiDataGrid-columnHeaders': {
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: 15,
                    overflow: 'visible',
                },
                '.MuiDataGrid-columnHeaderTitle': {
                    fontWeight: 700,
                },
                '.MuiDataGrid-footerContainer': {
                    border: 'none',
                    display: (disablePagination || rows.length === 0) && 'none',
                },
                '.MuiDataGrid-cell': {
                    border: 'none',
                    '&:focus': {
                        outline: 'none',
                    },
                },
                '.MuiDataGrid-row': {
                    cursor: 'pointer',
                },
                '.MuiDataGrid-row:nth-of-type(even)': {
                    bgcolor: '#F3F6F9',

                    '.MuiAvatar-root': {
                        backgroundColor: 'secondary.main',
                        color: 'common.white',
                    },
                },
                '.MuiTablePagination-root': {
                    width: '100%',
                    mr: 'auto',
                },
                '.MuiToolbar-gutters': {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                },
                '.MuiTablePagination-displayedRows': {
                    mr: 'auto',
                },
                '.MuiTablePagination-spacer': {
                    display: 'none',
                },
                '.MuiDataGrid-selectedRowCount': {
                    flexShrink: 0,
                },
                '.MuiDataGrid-virtualScroller': {
                    overflow: 'visible',
                    overflowX: 'hidden',
                },
                '.MuiDataGrid-main': {
                    overflowX: 'auto',
                },
                '.MuiDataGrid-columnHeadersInner': {
                    bgcolor: '#F3F6F9',
                },
                '.MuiDataGrid-columnHeaderTitleContainerContent': {
                    flexGrow: 1,
                    maxWidth: '200px',
                },
                ...sx,
            }}
            columns={columns}
            rows={rows}
            {...otherProps}
        />
    );
};
