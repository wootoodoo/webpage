import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, useMediaQuery } from '@material-ui/core';
import Notes from "../images/notes-scaled.png"
import Puzzle from "../images/8puzzle-scaled.png"
import projectsTitle from "../images/projects.png"
import NoteTitle from "../images/notesTitle.png"
import PuzzleTitle from "../images/8puzzleTitle.png"


function Projects() {
    const mobileDevice = useMediaQuery('(max-width:767px)');
    return  (
        <div className="projects">
            <Grid 
                container 
                alignItems="center"
                justify="center">
                <img className="project-image" src={projectsTitle} alt="cover-img"></img>
            </Grid>
            <Grid 
                container 
                alignItems="center"
                justify="center"
                item xs={12} m={6}>
                <a href="https://8puzzle.wootoodoo.com">
                <Card className="card">
                        <CardMedia 
                            className="media"
                            title="8 puzzle"
                            image={Puzzle}
                        />
                    
                    <CardContent className="card-content">
                        <Typography
                            className={"MuiTypography--heading"}
                            variant={mobileDevice ? "h4" : "h3"}
                            align={"center"}
                            gutterBottom
                        >
                            8 Puzzle Solver
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={mobileDevice ? "subtitle1" : "body1"}
                        >
                            Using Djikstra's Algorithm to solve the 8 puzzle problem using Node.js in the backend. 
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={mobileDevice ? "subtitle1" : "body1"}
                        >
                            Powered by AWS Lambda and API gateway serverlessly, and hosted on S3 with caching done using CloudFront.
                        </Typography>
                    </CardContent>
                </Card>
                </a>

                <a href="https://notes.wootoodoo.com">
                <Card className="card">
                    
                        <CardMedia 
                            className="media"
                            title="Notekeeper app"
                            image={Notes}
                        />
                    
                    <CardContent className="card-content">
                        <Typography
                            className={"MuiTypography--heading"}
                            variant={mobileDevice ? "h4" : "h3"}
                            align={"center"}
                            gutterBottom
                        >
                            Note App
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={mobileDevice ? "subtitle1" : "body1"}
                        >
                            Notekeeping app built using React, login using facebook or create an account to store your notes!
                        </Typography>
                        <Typography
                            className={"MuiTypography--subheading"}
                            variant={mobileDevice ? "subtitle1" : "body1"}
                        >
                            Authentication using AWS Cognito, powered by AWS Lambda, API gateway and DynamoDB serverlessly, and hosted on S3 with caching done using CloudFront.
                        </Typography>
                    </CardContent>
                </Card>
                </a>
            </Grid>
        </div> 
    );
    
}

export default Projects;