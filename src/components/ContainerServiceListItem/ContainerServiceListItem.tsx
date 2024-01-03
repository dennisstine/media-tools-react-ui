import React, {FC} from 'react';
import './ContainerServiceListItem.css';
import {Avatar, Link, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ContainerServiceListItemProps {
    serviceName: string;
    primaryText: string;
    secondaryText: string;
    context: string;
    port?: number;
}

const ContainerServiceListItem: FC<ContainerServiceListItemProps> = (props: ContainerServiceListItemProps) => {

    const getUrlFromProps = () => {
        return props.port ? `http://192.168.1.200:${props.port}`
            : `https://ninjaflix.dennisstine.dev${props.context}`
    }
    return (
        <ListItem sx={{padding: 0}} >
            <ListItemButton component={Link}
                            href={getUrlFromProps()}
                            target={"_blank"}
                            dense
                            sx={{minHeight: "75px"}}>
                <ListItemIcon>
                    <Avatar alt={`${props.serviceName.toLowerCase()}`}
                            src={`/images/${props.serviceName.toLowerCase()}_tn.jpg`}
                            sx={{width: 48, height: 48}}/>
                </ListItemIcon>
                <ListItemText
                    primary={props.primaryText}
                              secondary={props.secondaryText}
                              secondaryTypographyProps={{component: "h6"}}
                sx={{padding: "0 0 0 5px"}}/>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </ListItemButton>
        </ListItem>
    );
}

export default ContainerServiceListItem;
