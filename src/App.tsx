import React from 'react';
import './App.css';
import {
    Avatar,
    Collapse,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Switch,
    ThemeProvider,
    Toolbar
} from "@mui/material";

import ContainerServiceListItem from "./components/ContainerServiceListItem/ContainerServiceListItem";
import NinjaflixDialog from "./components/NinjaflixDialog/NinjaflixDialog";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#0072ff",
        }
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    }
});

/**
 * This app provides links to the media server tools (Plex, Radarr, Sonarr, sabnzbd).
 *
 * It uses react state and local storage for some settings to persist beyond current browser cache.
 *
 * @constructor
 */
function App() {

    // the toggle value for if the "advanced" features should be shown
    const advToggledLSKey = 'x-media-server-ui-advanced-toggle';

    // whether or not the intro animation has been watched
    const introWatchedLSKey = 'x-media-server-ui-intro-watched';

    const [advancedOpen, setAdvancedOpen] = React.useState(localStorage.getItem(advToggledLSKey) === "true");
    const [introWatched, setIntroWatched] = React.useState(localStorage.getItem(introWatchedLSKey) === "true");

    React.useEffect(() => {
        localStorage.setItem(advToggledLSKey, String(advancedOpen));
        localStorage.setItem(introWatchedLSKey, String(introWatched));
    }, [advancedOpen, introWatched]);

    React.useEffect(() => {
        setTimeout(() => {
            if (!introWatched) {
                localStorage.setItem(introWatchedLSKey, String(!introWatched));
                setIntroWatched(!introWatched);
            }
        }, 5000);
    }, [introWatched]);

    /**
     * Show/hide the "advanced" features.  Updates local storage and react state.
     */
    const handleToggle = () => {
        localStorage.setItem(advToggledLSKey, String(!advancedOpen));
        setAdvancedOpen(!advancedOpen);
    };


    /**
     * Sets local storage and react state back to the initial (false) state for if the intro
     * animation has been displayed to the user.
     *
     * This is mainly for if someone wants to see it again for some reason.
     */
    function handleIntroAnimationReset() {

        // reset the intro watched local storage and react state to false (inverted original value)
        localStorage.setItem(introWatchedLSKey, String(!introWatched));
        setIntroWatched(!introWatched);

        setTimeout(() => {
            // reset the intro watched local storage and react state to true (original value)
            localStorage.setItem(introWatchedLSKey, String(introWatched));
            setIntroWatched(introWatched);
        }, 5000);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <NinjaflixDialog introWatched={introWatched}/>
            <div className="App">
                <Container component="main" maxWidth="md">
                    <Toolbar disableGutters sx={{padding: "10px 0 10px"}}>
                        <div style={{display: "flex", width: "100%"}}>
                            <Grid container alignItems="center">
                                <Grid item xs={2}>
                                    <Avatar alt="minininja" src="/images/minininja.png"
                                            sx={{
                                                alignItems: "center",
                                                verticalAlign: "middle",
                                                width: 56,
                                                height: 56
                                            }}/>
                                </Grid>
                                <Grid item xs={8} sx={{paddingLeft: 0}}>
                                    <img alt="ninjaflix" src="/images/ninjaflix.png"
                                         style={{verticalAlign: "middle", transform: "scale(0.65)"}}/>
                                </Grid>
                                <Grid item xs={2}>
                                    <Switch checked={advancedOpen} onClick={handleToggle} sx={{float: "right"}}/>
                                </Grid>
                            </Grid>
                        </div>
                    </Toolbar>
                    <Paper sx={{maxWidth: '100%'}}>
                        <List sx={{alignItems: 'left', width: '100%'}}>
                            {/* -- plex -- */}
                            <ContainerServiceListItem serviceName={'plex'}
                                                      primaryText={'Plex'}
                                                      secondaryText={'Watch Movies and TV'}
                                                      port={32400}/>
                            {/* -- radarr -- */}
                            <ContainerServiceListItem serviceName={'radarr'}
                                                      primaryText={'Radarr'}
                                                      secondaryText={'Find new TV shows to download and watch'}
                                                      port={7878}/>
                            {/* -- sonarr -- */}
                            <ContainerServiceListItem serviceName={'sonarr'}
                                                      primaryText={'Sonarr'}
                                                      secondaryText={'Find new movies to download and watch'}
                                                      port={8989}/>
                            {/* -- sabnzbd -- */}
                            <ContainerServiceListItem serviceName={'sabnzbd'}
                                                      primaryText={'sabnzbd'}
                                                      secondaryText={'Check out what\'s downloading'}
                                                      port={8080}/>
                            <Collapse in={advancedOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {/* -- cadvisor -- */}
                                    <ContainerServiceListItem serviceName={'cadvisor'}
                                                              primaryText={'cAdvisor'}
                                                              secondaryText={'Resource usage and performance of running containers'}
                                                              port={8282}/>
                                    {/* -- fedora console -- */}
                                    <ContainerServiceListItem serviceName={'fedora'}
                                                              primaryText={'Fedora Web Console'}
                                                              secondaryText={'OS-provided web-based management console'}
                                                              port={9090}/>
                                    {/* -- reset/re-watch intro -- */}
                                    <ListItemButton component={Link} onClick={() => handleIntroAnimationReset()} dense>
                                        <ListItemIcon>
                                            <Avatar alt={"ninjaflix"}
                                                    src={"/images/ninjaflix_tn.jpg"}
                                                    sx={{width: 48, height: 48}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Show into animation"
                                                      secondary="Show the intro animation again"/>
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </Paper>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
