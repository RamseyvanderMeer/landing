import React from 'react'
import { Grid, Typography, Card, Button } from '@material-ui/core'


export default class features extends React.Component {
    render() {
        return (
            <div
                style={{
                    marginTop: '150px'
                }}>
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={2}>
                    <Grid item xs={12} style={{ textAlign: 'center', maxWidth: '800px', color: '#9A60F2' }}>
                        <Typography variant="h4"> User-Friendly Approach to Maximizing Customer and Employee Engagement</Typography>
                    </Grid>
                </Grid>
                <Grid container style={{ marginTop: '25px', padding: "30px" }}>
                    <Grid item xs={4} style={{ padding: "30px" }}>
                        <Card style={{ textAlign: 'center', padding: "20px", backgroundColor: "#C4ADF4" }}>
                            <Typography variant="h4">First Impressions Last a Lifetime</Typography>
                            <Typography variant="body1" style={{ marginTop: "25px" }}>Guide your users to success step-by-step. Create power users who will Evangelize and champion your product</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4} style={{ padding: "30px" }}>
                        <Card style={{ textAlign: 'center', padding: "20px", backgroundColor: "#C4ADF4" }}>
                            <Typography variant="h4">Iterate & Improve Your Technology</Typography>
                            <Typography variant="body1" style={{ marginTop: "25px" }}>Ziplyne's journey analytics help product managers and business leaders pinpoint the precise insights to maximize the user experience</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={4} style={{ padding: "30px" }}>
                        <Card style={{ textAlign: 'center', padding: "20px", backgroundColor: "#C4ADF4" }}>
                            <Typography variant="h4">Easy to Use</Typography>
                            <Typography variant="subtitle2">No coding needed</Typography>
                            <Typography variant="body1" style={{ marginTop: "25px" }}>Get started immediately! You can even take your existing content (e.g. PDFs, QRGs and/or videos) and incorporate them into digital Ziplyne guides</Typography>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={2}>
                    <Grid item xs={12}>
                        <Button color="secondary" variant="contained" style={{ align: "center" }} >See in action</Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}