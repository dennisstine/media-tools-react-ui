import React, { FC } from 'react';
import './LogoMenuAppBar.css';
import {AppBar, Avatar, Grid, IconButton, Menu, MenuItem, Switch, Toolbar} from "@mui/material";

interface LogoMenuAppBarProps {

    advancedOpen: boolean;
    handleToggle: () => void;
}

const LogoMenuAppBar: FC<LogoMenuAppBarProps> = (props: LogoMenuAppBarProps) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const animateAppBarLogo = () => {

        let wrapper = document.getElementById("ninjaflix-logo-wrapper");

        wrapper?.classList.add('animate__animated');
        wrapper?.classList.add('animate__hinge');

        setTimeout(function() {
            wrapper?.classList.remove('animate__hinge');
            wrapper?.classList.add("animate__bounceInDown");

            setTimeout(() => {
                wrapper?.classList.remove('animate__animated');
                wrapper?.classList.remove("animate__bounceInDown");
            }, 2000);
        }, 3000);
    };

    return (
        <AppBar position="static" sx={{zIndex: 30000}}>
        <Toolbar disableGutters sx={{background: "transparent", backgroundColor: "#121212", paddingTop: "5px"}} variant="dense">
            <Grid container justifyContent="space-between" sx={{alignItems: "middle"}}>
                <Grid item className="animate__animated animate__bounceInDown" id="ninjaflix-logo-wrapper"
                      sx={{margin: "auto 10px auto", display: "block", textAlign: "left", zIndex: "fab"}}>
                        <img alt="ninjaflix" src="/images/ninjaflix.png"
                             id="ninjaflix-logo"
                             width={"70%"}

                             style={{objectFit: "contain", display: "block"}}
                             onClick={animateAppBarLogo}/>
                </Grid>
                <Grid item>
                    <div>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar alt="minininja" src="/images/minininja.png"
                                    sx={{
                                        alignItems: "center",
                                        verticalAlign: "middle",
                                        width: 56,
                                        height: 56
                                    }}/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem>Show Nerd Links<Switch checked={props.advancedOpen} onClick={props.handleToggle} sx={{float: "right"}}/></MenuItem>
                        </Menu>
                    </div>

                </Grid>
            </Grid>
            {/*</div>*/}
        </Toolbar>
        </AppBar>
    );
}

export default LogoMenuAppBar;
