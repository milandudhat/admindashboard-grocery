import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import Sidebar from '../components/Layout/Sidebar/Sidebar'
import Navbar from '../components/Layout/Navbar/Navbar'
import Grid from '@mui/material/Grid';
import '../styles/Dash.css'
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Check from '@mui/icons-material/Check';


const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    const [italic, setItalic] = React.useState(false);
    const [fontWeight, setFontWeight] = React.useState('normal');
    const [anchorEl, setAnchorEl] = React.useState(null);

    return (
        <>
            <div className='bgcolor'>
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: 'flex' }}>
                    <Sidebar />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div style={{ height: 400, width: '100%' }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                        checkboxSelection
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl>
                                    <FormLabel>Your comment</FormLabel>
                                    <Textarea
                                        placeholder="Type something here…"
                                        minRows={3}
                                        endDecorator={
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    gap: 'var(--Textarea-paddingBlock)',
                                                    pt: 'var(--Textarea-paddingBlock)',
                                                    borderTop: '1px solid',
                                                    borderColor: 'divider',
                                                    flex: 'auto',
                                                }}
                                            >
                                                <IconButton
                                                    variant="plain"
                                                    color="neutral"
                                                    onClick={(event) => setAnchorEl(event.currentTarget)}
                                                >
                                                    <FormatBold />
                                                    <KeyboardArrowDown fontSize="md" />
                                                </IconButton>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={Boolean(anchorEl)}
                                                    onClose={() => setAnchorEl(null)}
                                                    size="sm"
                                                    placement="bottom-start"
                                                    sx={{ '--ListItemDecorator-size': '24px' }}
                                                >
                                                    {['200', 'normal', 'bold'].map((weight) => (
                                                        <MenuItem
                                                            key={weight}
                                                            selected={fontWeight === weight}
                                                            onClick={() => {
                                                                setFontWeight(weight);
                                                                setAnchorEl(null);
                                                            }}
                                                            sx={{ fontWeight: weight }}
                                                        >
                                                            <ListItemDecorator>
                                                                {fontWeight === weight && <Check fontSize="sm" />}
                                                            </ListItemDecorator>
                                                            {weight === '200' ? 'lighter' : weight}
                                                        </MenuItem>
                                                    ))}
                                                </Menu>
                                                <IconButton
                                                    variant={italic ? 'soft' : 'plain'}
                                                    color={italic ? 'primary' : 'neutral'}
                                                    aria-pressed={italic}
                                                    onClick={() => setItalic((bool) => !bool)}
                                                >
                                                    <FormatItalic />
                                                </IconButton>
                                                <Button sx={{ ml: 'auto' }}>Send</Button>
                                            </Box>
                                        }
                                        sx={{
                                            minWidth: 300,
                                            fontWeight,
                                            fontStyle: italic ? 'italic' : 'initial',
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    )
}