import React from 'react'
import { Grid, Typography } from '@material-ui/core'

var style = {
    display: "flex",
    alignItems: "center",
    maxWidth: "200px", 
    maxHeight: "100px",
    marginTop: "20px"

}

export default class others extends React.Component {
    render() {
        return (
            <div
                style={{
                    marginTop: '200px'
                }}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center">
                    <Grid item>
                        <Typography variant="h4" color="primary" style={{ maxWidth: "600px", textAlign: "center" }}>Companies Trust Ziplyne To Create Powerful Product Experiences</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}
                    style={{
                        padding: '50px',
                        margin: '50px'
                    }}>
                    <Grid item xs={4}>
                        <img src="/capital.png" alt="capital" style={{display: "flex", alignItems: "center", maxWidth: "200px",  maxHeight: "100px", marginTop: "50px"}} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src="/ethnicora.png" alt="ethnicora" style={{display: "flex", alignItems: "center", maxWidth: "135px"}} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src="/musing.png" alt="musing" style={style} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src="/plate.png" alt="plate" style={style} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src="/upflex.png" alt="upflex" style={style} />
                    </Grid>
                    <Grid item xs={4}>
                        <img src="/wealth.png" alt="wealth" style={style} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}