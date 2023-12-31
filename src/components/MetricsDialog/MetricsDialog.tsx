import React, {FC} from 'react';
import './MetricsDialog.css';
import {Container, Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

interface MetricsDialogProps {
    apiMetricsOpen: boolean;
    handleMetricsDialogClose: () => void;
}

const MetricsDialog: FC<MetricsDialogProps> = (props: MetricsDialogProps) => {

    return (
        <Dialog open={props.apiMetricsOpen}>
            <Container component="main" maxWidth="md">
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    API Status Checks
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.handleMetricsDialogClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <FontAwesomeIcon icon={faXmark} />
                </IconButton>
                <DialogContent>
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        // alignItems="center"
                        justifyContent="center"
                        sx={{minHeight: '100vh', paddingTop: "20px"}}
                    >
                        <Grid item xs={12} rowSpacing={3}>
                            <Typography variant="h6" sx={{width: "100%", alignItems: "center", paddingTop: "00px"}}>
                                Suck it, Netflix!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} rowSpacing={3}>
                            <Typography variant="h6" sx={{width: "100%", alignItems: "center", paddingTop: "00px"}}>
                                Suck it, Netflix!
                            </Typography>
                        </Grid>
                        <Grid item xs={12} rowSpacing={3}>
                            <Typography variant="h6" sx={{width: "100%", alignItems: "center", paddingTop: "00px"}}>
                                Suck it, Netflix!
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Container>
        </Dialog>
    );
}

export default MetricsDialog;
