import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    Toolbar,
    IconButton,
    Typography,
    Drawer,
    Link,
    MenuItem
} from '@material-ui/core'
import logo_rcv from './logos/logo.png'
import MenuIcon from '@material-ui/icons/Menu';
import { Link as RouterLink, Route } from "react-router-dom";

const headersData = [
    {
        label: "Geradores",
        href: "/listings",
    },
    {
        label: "Peças",
        href: "/mentors",
    },
    {
        label: "Corretora",
        href: "/account",
    },
    {
        label: "Sobre",
        href: "/logout",
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    header: {
        backgroundColor: "#326c9a",
        paddingRight: "79px",
        paddingLeft: "118px",
        "@media (max-width: 900px)": {
            paddingLeft: 0,
        },
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    drawerContainer: {
        padding: "20px 30px",
    },
}));

export default function Header(props) {
    const { header, logo, menuButton, toolbar, drawerContainer, classes } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {RCV_logo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Link
                    {...{
                        component: RouterLink,
                        to: href,
                        color: "inherit",
                        style: { textDecoration: "none" },
                        key: label,
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </Link>
            );
        });
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <IconButton
                    {...{
                        edge: "start",
                        color: "inherit",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>

                <div>{RCV_logo}</div>
            </Toolbar>
        );
    };

    

    const RCV_logo = (
        <div style={{height:'80px', marginTop:'15px'}}>
            <img style={{ alignContent:"center"}} src={logo_rcv} height={'80%'} width={'auto'}/>
        </div>
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <Button
                    {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: menuButton,
                    }}
                >
                    {label}
                </Button>
            );
        });
    };

    return (
        <React.Fragment>
            <header>
                <AppBar className={header}>
                    {mobileView ? displayMobile() : displayDesktop()}
                </AppBar>
            </header>
            {/*<div className={classes.root}>*/}
            {/*    <AppBar style={{ background: '#326c9a', height:'10%'}}>*/}

            {/*        <Toolbar variant="dense">*/}
            {/*            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
            {/*                <MenuIcon />*/}
            {/*            </IconButton>*/}

            {/*                <img style={{ alignContent:"center"}} src={logo} height={'80%'} width={'auto'}/>*/}
            {/*        </Toolbar>*/}
            {/*    </AppBar>*/}
            {/*</div>*/}
        </React.Fragment>
    );
}