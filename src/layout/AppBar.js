import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import { forwardRef } from 'react';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    abRoot: {
        backgroundColor: "rgba(0,0,0,.87)"
    },
});

const ConfigurationMenu = forwardRef((props, ref) => {
    return (
        <MenuItemLink
            ref={ref}
            to="/"
            primaryText="Settings"
            leftIcon={<SettingsIcon />}
            onClick={props.onClick}
            sidebarIsOpen
        />
    );
});

const CustomUserMenu = (props) => (
    <UserMenu {...props}>
        <ConfigurationMenu />
    </UserMenu>
);

const CustomAppBar = (props) => {
    const classes = useStyles();

    return (
        <AppBar 
            {...props} 
            elevation={1} 
            userMenu={<CustomUserMenu />}
            classes={{ toolbar: classes.abRoot }}
        >
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <Typography variant="h5" color="inherit">Trading Platform Manager (TPM)</Typography>
            <span className={classes.spacer} />
        </AppBar>
    );
}
 
export default CustomAppBar;