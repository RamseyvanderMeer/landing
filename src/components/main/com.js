import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Particles from 'react-particles-js'
import Typical from 'react-typical'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#C4ADF4',
        },
        secondary: {
            main: '#7246CE',
        },
    },
    typography: {
        // Use the system font.
        fontFamily:
            "Lato"
    },
})



export default class com extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div style={{
                    backgroundColor: "#282828"
                }}>
                    <Particles
                        params={{
                            "particles": {
                                "number": {
                                    "value": 55
                                },
                                "size": {
                                    "value": 1.5
                                },
                                "move": {
                                    "speed": 0.75,
                                    "out_mode": "out",
                                },
                                "line_linked": {
                                    "enable": true,
                                    "distance": 150,
                                    "shadow": {
                                        enable: true,
                                        color: "#ffab40",
                                        blur: 35
                                    }
                                },
                            },
                        }}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            top: "350px"
                        }} />
                    <div style={{
                        position: "relative",
                        overflow: "hidden",
                        zIndex: "1"
                    }}>
                        <Grid container spacing={3} style={{ padding: "50px", paddingBottom: "0px", paddingTop: "0px" }}>
                            <Grid item xs={8}>
                                <Typography variant="h4" style={{ color: "white", fontWeight: "100", textAlign: "center", }}><Typical
                                    steps={['Elevate', 500, 'Elevate Training', 500, 'Elevate Efficiency', 500, 'Elevate Onboarding', 500, 'Elevate Training', 500, 'Elevate Sales', 500, 'Elevate Productivity', 500, 'Elevate Adoption', 500, 'Elevate Revenue', 500]}
                                    loop={Infinity}
                                    wrapper="p"
                                    className={'caca'}
                                /></Typography>
                                <img src="/com.png" alt="com" style={{ maxWidth: "600px" }} />
                            </Grid>
                            <Grid item xs={4}>
                                <img src="/Diamond.png" alt="Dimond" style={{ maxWidth: "500px" }} />
                                <Typography variant="subtitle1" style={{ position: "relative", bottom: 325, left: 45, textAlign: "center", color: "#E8E8E8" }}>Ready to take your SaaS Product Experience to new, soaring heights? Ziplyne isn't just a tutorial or tool...It's a seamless omnichannel solution for employees and customers alike </Typography>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{
                        backgroundImage: "linear-gradient(90deg, #C4ADF4, #5609FB)",
                        height: "200px",
                        position: "relative",
                        zIndex: "0",
                        bottom: "300px"
                    }}></div>
                </div>

            </MuiThemeProvider>
        )
    }
}
