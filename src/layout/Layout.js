import * as React from 'react';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core/styles';

const useSidebarStyles = makeStyles({
    drawerPaper: {
        backgroundColor: 'rgba(0,0,0,.87)',
    }
});

const CustomSidebar = (props) => {
    const classes = useSidebarStyles();
    return (
        <Sidebar classes={classes} {...props} size={100} />
    );
}

export default (props) => {
    return (
        <Layout
            {...props}
            appBar={AppBar}
            sidebar={CustomSidebar}
            menu={Menu}
        />
    );
};
