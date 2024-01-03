import React, {FC} from 'react';
import './ContainerServiceListItem.css';
import {Avatar, Link, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface ContainerServiceListItemProps {
    serviceName: string;
    primaryText: string;
    secondaryText: string;
    subdomain: string;
    port?: number;
}

const ContainerServiceListItem: FC<ContainerServiceListItemProps> = (props: ContainerServiceListItemProps) => {

    return (
        <ListItem sx={{padding: 0}} >
            <ListItemButton component={Link}
                            href={`https://${props.subdomain}.minininja.dev`}
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
