import React from 'react'
import { Grid, Typography } from '@material-ui/core'


export default class text extends React.Component {
    render() {
        return (
            <div
                style={{
                    position: "absolute",
                    bottom: 45,
                    right: 0,
                    width: "100%",
                    color: "white"
                }}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <Typography variant="h4" style={{ textAlign: 'center' }}>Maximize User Experience</Typography>
                    </Grid>
                    <Grid container spacing={6}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1" style={{ textAlign: 'center', marginTop: "2px" }}>For End Users</Typography>
                            <Typography variant="subtitle2" style={{ textAlign: 'center', marginTop: "2px" }}>In-app, step-by-step guides created without code by you. The end result is a interactive, self guided experience for the end user</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="subtitle1" style={{ textAlign: 'center', marginTop: "2px" }}>For Internal Employees</Typography>
                            <Typography variant="subtitle2" style={{ textAlign: 'center', marginTop: "2px" }}>Guideance to get employees started using new technology or trasition to new platforms</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}