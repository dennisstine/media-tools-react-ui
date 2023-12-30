import React, {FC} from 'react';
import './NinjaflixDialog.css';
import {Dialog, Grid, Typography} from "@mui/material";
import 'animate.css';

interface NinjaflixDialogProps {
    introWatched: boolean;
}

const NinjaflixDialog: FC<NinjaflixDialogProps> = (props: NinjaflixDialogProps) => {

    return (
        <Dialog fullScreen open={!props.introWatched}>
            <div className="animate__animated animate__bounceInDown ">
                <div className="animate__animated animate__bounce animate__delay-2s">
                    <div className="animate__animated animate__bounceOutUp animate__delay-4s">
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{minHeight: '100vh'}}
                        >
                            <Grid item xs={3} style={{textAlign: "center"}} rowSpacing={0}>
                                <img alt="ninjaflix" src="/images/ninjaflix.png" style={{marginBottom: "-10px"}}/>
                                <Typography variant="h6" sx={{width: "100%", alignItems: "center", paddingTop: "00px"}}>
                                    Suck it, Netflix!
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default NinjaflixDialog;
