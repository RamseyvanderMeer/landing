import React from 'react'
import Wave from 'react-wavify'

class footer extends React.Component {
    render() {
        return (
            <div style={{
                position: "absolute",
                bottom: 40,
                // right: 0,
                alignItems: 'center',
                maxWidth: "1080px",
                width: "100%"
            }}>
                <Wave fill="#7246CE99"
                    paused={false}
                    options={{
                        height: 10,
                        amplitude: 30,
                        speed: 0.15,
                        points: 3,
                    }}
                />

                {/* <div style={{ width: "100%", height: "150px", backgroundColor: "#7246CE99" }}></div> */}
                {/* <div style={{
                    position: "relative",
                    border: "3px solid #73AD21",
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
                                <Typography variant="subtitle1" style={{ textAlign: 'center', marginTop: "5px" }}>For End Users</Typography>
                                <Typography variant="subtitle2" style={{ textAlign: 'center', marginTop: "5px" }}>In-app, step-by-step guides created without code by you. The end result is a interactive, self guided experience for the end user</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="subtitle1" style={{ textAlign: 'center', marginTop: "5px" }}>For Internal Employees</Typography>
                                <Typography variant="subtitle2" style={{ textAlign: 'center', marginTop: "5px" }}>Guideance to get emplayees started usign new technology or trasition to new platforms</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div> */}
            </div>
        )
    }
}

export default footer