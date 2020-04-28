import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from '../content/logo.png'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#C4ADF4',
        },
        secondary: {
            main: '#7246CE',
        },
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    logo: {
        maxWidth: 125,
        marginRight: 25,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <AppBar position="static" color="primary" >
                    <Toolbar>
                        <img src={logo} alt="logo" className={classes.logo} style={{ alignItems: "left" }} />
                        <Grid 
                        justify="space-between"
                        container>
                            <Grid item>
                                <Button color="secondary" >Product</Button>
                                <Button color="secondary" >Solution</Button>
                                <Button color="secondary" >Pricing</Button>
                                <Button color="secondary" >Customer Service</Button>
                                <Button color="secondary" >Resources</Button>
                            </Grid>
                            <Grid item>
                                <Button size="small" color="secondary" variant="outlined" style={{ align: "right" }} >Request a Demo</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </MuiThemeProvider>
        </div>
    )
}
