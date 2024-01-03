import React from 'react';
import './App.css';
import {
    Avatar,
    Collapse,
    Container,
    createTheme,
    CssBaseline,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    ThemeProvider
} from "@mui/material";

import ContainerServiceListItem from "./components/ContainerServiceListItem/ContainerServiceListItem";
import NinjaflixDialog from "./components/NinjaflixDialog/NinjaflixDialog";
import LogoMenuAppBar from "./components/LogoMenuAppBar/LogoMenuAppBar";
import MetricsDialog from "./components/MetricsDialog/MetricsDialog";

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
    const [apiMetricsOpen, setApiMetricsOpen] = React.useState<boolean>(false);

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

    const handleMetricsDialogOpen = () => {
        setApiMetricsOpen(true);
    };

    const handleMetricsDialogClose = () => {
        setApiMetricsOpen(false);
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
            <NinjaflixDialog introWatched={introWatched} />
            <MetricsDialog apiMetricsOpen={apiMetricsOpen} handleMetricsDialogClose={handleMetricsDialogClose} />
            <div className="App">
                <Container component="main" maxWidth="md">
                    <LogoMenuAppBar handleMetricsDialogOpen={handleMetricsDialogOpen} advancedOpen={advancedOpen} handleToggle={handleToggle} />
                    <Paper sx={{maxWidth: '100%'}}>
                        <List sx={{alignItems: 'left', width: '100%', paddingTop: 0}}>
                            {/* -- plex -- */}
                            <ContainerServiceListItem serviceName={'plex'}
                                                      primaryText={'Plex'}
                                                      secondaryText={'Watch Movies and TV'}
                                                      context={'/plex'}/>
                            {/* -- radarr -- */}
                            <ContainerServiceListItem serviceName={'radarr'}
                                                      primaryText={'Radarr'}
                                                      secondaryText={'Find new movies to download and watch'}
                                                      context={'/radarr'}/>
                            {/* -- sonarr -- */}
                            <ContainerServiceListItem serviceName={'sonarr'}
                                                      primaryText={'Sonarr'}
                                                      secondaryText={'Find TV shows to download and watch'}
                                                      context={'/sonarr'}/>
                            {/* -- sabnzbd -- */}
                            <ContainerServiceListItem serviceName={'sabnzbd'}
                                                      primaryText={'sabnzbd'}
                                                      secondaryText={'Check out what\'s downloading'}
                                                      context={'/sabnzbd'}/>
                            <Collapse in={advancedOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {/* -- cadvisor -- */}
                                    <ContainerServiceListItem serviceName={'cadvisor'}
                                                              primaryText={'cAdvisor'}
                                                              secondaryText={'Resource usage and performance of running containers'}
                                                              context={"/cadvisor"}/>
                                    {/* -- fedora console -- */}
                                    <ContainerServiceListItem serviceName={'fedora'}
                                                              primaryText={'Fedora Web Console'}
                                                              secondaryText={'OS-provided web-based management console'}
                                                              context={"/fedora-console"}
                                                              port={9090}/>
                                    {/* -- reset/re-watch intro -- */}
                                    <ListItemButton component={Link} onClick={() => handleIntroAnimationReset()} dense>
                                        <ListItemIcon>
                                            <Avatar alt={"ninjaflix"}
                                                    src={"/images/ninjaflix_tn.jpg"}
                                                    sx={{width: 48, height: 48}}/>
                                        </ListItemIcon>
                                        <ListItemText primary="Show intro animation"
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
