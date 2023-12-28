import React from 'react';
import './App.css';
import {
    Avatar, Button,
    Container,
    createTheme,
    CssBaseline,
    Divider, IconButton, Link, ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    MenuItem,
    MenuList,
    Paper,
    ThemeProvider, Toolbar,
    Typography
} from "@mui/material";

import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    },
});

const openInNew = () => {
    return (
        <IconButton edge="end" aria-label="comments">
            <OpenInNewIcon />
        </IconButton>
        );
}

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <div className="App">
                <Container component="main" maxWidth="md">
                    <Toolbar disableGutters>
                        <Avatar alt="plex" src="/images/minininja.png" sx={{verticalAlign: "middle"}}/>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Toolbar>
                    <Paper sx={{maxWidth: '100%'}}>
                        <MenuList sx={{alignItems: 'left',  width: '100%'}} >
                            {/* -- plex -- */}
                            <ListItem secondaryAction={openInNew()}>
                                <ListItemButton component={Link} href={"http://192.168.1.200:32400"} target={"_blank"} dense>
                                    <ListItemIcon>
                                        <Avatar alt="plex" src="/images/plex_tn.jpg" sx={{width: 48, height: 48}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Plex" secondary="Watch Movies and TV" />
                                </ListItemButton>
                            </ListItem>
                            {/* -- radarr -- */}
                            <ListItem secondaryAction={openInNew()}>
                                <ListItemButton component={Link} href={"http://192.168.1.200:32400"} target={"_blank"} dense>
                                    <ListItemIcon>
                                        <Avatar alt="plex" src="/images/plex_tn.jpg" sx={{width: 48, height: 48}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Plex" secondary="Watch Movies and TV" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem component={"a"} href={"http://192.168.1.200:7878"} target={"_blank"} sx={{alignItems: "start"}} >
                                <Button component={"text"}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        sx={{justifyContent: "flex-start"}}
                                        startIcon={<Avatar alt="plex" src="/images/radarr_tn.jpg" sx={{width: 48, height: 48}}/>}>
                                    <Typography variant="body1" sx={{paddingRight: '20px'}}>
                                        Radarr
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Find new TV shows to download and watch
                                    </Typography>
                                </Button>
                            </ListItem>
                            {/* -- sonarr -- */}
                            <ListItem secondaryAction={openInNew()}>
                                <ListItemButton component={Link} href={"http://192.168.1.200:32400"} target={"_blank"} dense>
                                    <ListItemIcon>
                                        <Avatar alt="plex" src="/images/plex_tn.jpg" sx={{width: 48, height: 48}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Plex" secondary="Watch Movies and TV" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem component={"a"} href={"http://192.168.1.200:8989"} target={"_blank"} sx={{alignItems: "start"}} >
                                <Button component={"text"}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        sx={{justifyContent: "flex-start"}}
                                        startIcon={<Avatar alt="plex" src="/images/sonarr_tn.jpg" sx={{width: 48, height: 48}}/>}>
                                    <Typography variant="body1" sx={{paddingRight: '20px'}}>
                                        Sonarr
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Find new movies to download and watch
                                    </Typography>
                                </Button>
                            </ListItem>
                            {/* -- sabnzbd -- */}
                            <ListItem secondaryAction={openInNew()}>
                                <ListItemButton component={Link} href={"http://192.168.1.200:32400"} target={"_blank"} dense>
                                    <ListItemIcon>
                                        <Avatar alt="plex" src="/images/plex_tn.jpg" sx={{width: 48, height: 48}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Plex" secondary="Watch Movies and TV" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem component={"a"} href={"http://192.168.1.200:8080"} target={"_blank"} sx={{alignItems: "start"}} >
                                <Button component={"text"}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        sx={{justifyContent: "flex-start"}}
                                        startIcon={<Avatar alt="plex" src="/images/sabnzbd_tn.jpg" sx={{width: 48, height: 48}}/>}>
                                    <Typography variant="body1" sx={{paddingRight: '20px'}}>
                                        sabnzbd
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Check on what's downloading
                                    </Typography>
                                </Button>
                            </ListItem>

                            <Divider/>
                            {/* -- cadvisor -- */}
                            <ListItem secondaryAction={openInNew()}>
                                <ListItemButton component={Link} href={"http://192.168.1.200:32400"} target={"_blank"} dense>
                                    <ListItemIcon>
                                        <Avatar alt="plex" src="/images/plex_tn.jpg" sx={{width: 48, height: 48}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Plex" secondary="Watch Movies and TV" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem component={"a"} href={"http://192.168.1.200:8282"} target={"_blank"} sx={{alignItems: "start"}} >
                                <Button component={"text"}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        sx={{justifyContent: "flex-start"}}
                                        startIcon={<Avatar alt="plex" src="/images/docker_cadvisor_tn.jpg" sx={{width: 48, height: 48}}/>}>
                                    <Typography variant="body1" sx={{paddingRight: '20px'}}>
                                        cAdvisor
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Resource usage and performance of running containers
                                    </Typography>
                                </Button>
                            </ListItem>
                            {/* -- fedora console -- */}
                            <ListItem secondaryAction={openInNew()}>
                                <ListItemButton component={Link} href={"http://192.168.1.200:32400"} target={"_blank"} dense>
                                    <ListItemIcon>
                                        <Avatar alt="plex" src="/images/plex_tn.jpg" sx={{width: 48, height: 48}}/>
                                    </ListItemIcon>
                                    <ListItemText primary="Plex" secondary="Watch Movies and TV" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem component={"a"} href={"http://192.168.1.200:9090"} target={"_blank"} sx={{alignItems: "start"}} >
                                <Button component={"text"}
                                        variant={"outlined"}
                                        fullWidth={true}
                                        sx={{justifyContent: "flex-start"}}
                                        startIcon={<Avatar alt="plex" src="/images/fedora_tn.jpg" sx={{width: 48, height: 48}}/>}>
                                    <Typography variant="body1" sx={{paddingRight: '20px'}}>
                                        Fedora Web Console
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        OS-provided web-based management console
                                    </Typography>
                                </Button>
                            </ListItem>
                        </MenuList>
                    </Paper>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
