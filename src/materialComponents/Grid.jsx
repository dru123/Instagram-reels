import { makeStyles,Paper,Container} from '@material-ui/core';
import { Grid} from '@material-ui/core'
import React from 'react'

function GridIntro() {
    //styling obj k form m pass krte h 
    let useStyles=makeStyles({
        size:{
        height:'20vh',
        backgroundColor:"lightgray"
        },
        color:{
            colors:"white"
        }}
    )
    let classes=useStyles();

    //wd->12 part uske acc. sare size define hote 
    return (
        <div>
            {/* CONTAINER age piche white space jhodta h... */ }
            {/* grid k ander  conainer ek prop h jo btate jise y btate ho y grid k container  */}
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={5} sm={3} md={5} lg={5}>
                        <Paper className={[classes.size,classes.color]}> Hello</Paper>
                          
                    </Grid>
                    <Grid item xs={5} sm={3} md={5} lg={5}>
                        <Paper className={classes.size} > Hello</Paper>
                          
                    </Grid>
                    <Grid item xs={5} sm={6} md={2} lg={2} >
                        <Paper className={classes.size} > Hello</Paper>
                          
                    </Grid>


                </Grid>
            </Container>
            
        </div>
    )
}

export default GridIntro
