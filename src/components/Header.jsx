import React from "react";
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import title from "../images/JonslandingPage.png";


function Header() {
    const mobileDevice = useMediaQuery('(max-width:767px)');
    return (
        <div>
            <Grid 
                container 
                item xs={12}
                alignContent='center'
                justify='center'
            >
                <img className="img-fluid cover-image" src={title} alt="cover-img"></img>
                <Typography
                        className={"MuiTypography--heading header-font"}
                        variant={mobileDevice ? "h5" : "h2"}
                        align={"center"}
                        gutterBottom={true}
                    >
                        Sometimes in life you just got to have a few side projects.
                </Typography>
            </Grid>
        </div>
    );
}

export default Header;