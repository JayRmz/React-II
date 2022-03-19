import React from "react";
import classes from './Layout.module.css'
import MainNavigation from "./MainVavigation";

const Layout = (props) => {
    const { children } = props;
    return (
        <>
            <MainNavigation />
            <main className={classes.main}>{children}</main>
        </>
    )
};

export default Layout;