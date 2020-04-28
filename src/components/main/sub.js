import React from 'react'
import { Grid, Button } from '@material-ui/core'
import {  MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {  Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';

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

export default class sub extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div
                    style={{
                        marginTop: '150px',
                        backgroundColor: "#C4ADF4"
                    }}>
                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={12}>
                            <Button color="secondary" style={{ marginTop: "35px" }}>Home</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="secondary" >solution</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="secondary" >pricing</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button color="secondary" >Resources</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button size="small" variant="contained" color="secondary" style={ { marginBottom:"35px", marginTop: "15px" }}>login</Button>
                        </Grid>
                        <Grid item xs={12} style={ { marginBottom: "35px" }}>
                            <Button size="small" ><Facebook></Facebook></Button>
                            <Button size="small" ><Twitter></Twitter></Button>
                            <Button size="small" ><LinkedIn></LinkedIn></Button>
                            <Button size="small" ><Instagram></Instagram></Button>
                        </Grid>
                    </Grid>
                </div>
            </MuiThemeProvider>
        )
    }
}