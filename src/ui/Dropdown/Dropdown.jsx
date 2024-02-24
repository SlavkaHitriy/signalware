import { Box, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import styles from './index.module.scss';

export const Dropdown = ({ children, ...otherProps }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Box className={styles.button} onClick={handleClick}>
                {children}
                <KeyboardArrowDown />
            </Box>
            <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                {...otherProps}
            >
                <MenuItem onClick={handleClose}>Test 1</MenuItem>
                <MenuItem onClick={handleClose}>Test 2</MenuItem>
                <MenuItem onClick={handleClose}>Test 3</MenuItem>
            </Menu>
        </div>
    );
};
