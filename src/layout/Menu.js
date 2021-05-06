import { useState } from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import DnsIcon from '@material-ui/icons/Dns';

import { useMediaQuery, Theme, Box } from '@material-ui/core';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink,
    MenuProps,
} from 'react-admin';

import SubMenu from './SubMenu';

import { makeStyles } from '@material-ui/core/styles';

const useMenuStyles = makeStyles(theme => ({
    root: {
        color: '#ffffff',
        height: 60,
        '&:active::after': {
            // recreate a static ripple color
            // use the currentColor to make it work both for outlined and contained buttons
            // but to dim the background without dimming the text,
            // put another element on top with a limited opacity
            content: '""',
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: '#e0e0e3',
            opacity: 0.3,
            borderRadius: 'inherit',
        },
    },
    icon: { 
        minWidth: theme.spacing(5),
        color: 'white'
    },
}));

const Menu = ({ onMenuClick, logout, dense = false }) => {
    const classes = useMenuStyles();
    const [state, setState] = useState({
        menuCatalog: true,
        menuSales: true,
        menuCustomers: true,
    });
    const translate = useTranslate();
    const isXSmall = useMediaQuery((theme) =>
        theme.breakpoints.down('xs')
    );

    const handleToggle = (menu) => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    return ( 
        <Box mt={1}>
            {' '}
            <MenuItemLink
                to={`/`}
                primaryText="Local orders"
                leftIcon={<ShoppingBasketIcon className={classes.icon} />}
                onClick={onMenuClick}
                // sidebarIsOpen={open}
                dense={dense}
                className={classes.root}
            />
            <SubMenu
                handleToggle={() => handleToggle('menuSales')}
                isOpen={state.menuSales}
                // sidebarIsOpen={open}
                name="Supplier products"
                icon={<StoreIcon />}
                dense={dense}
            >
                <MenuItemLink
                    to={`/`}
                    primaryText="Brands"
                    leftIcon={<DnsIcon className={classes.icon} />}
                    onClick={onMenuClick}
                    // sidebarIsOpen={open}
                    dense={dense}
                    className={classes.root}
                />
                <MenuItemLink
                    to={`/`}
                    primaryText="Product supply"
                    leftIcon={<LocalMallIcon className={classes.icon} />}
                    onClick={onMenuClick}
                    // sidebarIsOpen={open}
                    dense={dense}
                    className={classes.root}
                />
            </SubMenu>
            {isXSmall && logout}
        </Box>
     );
}
 
export default Menu;