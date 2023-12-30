import React, {FC} from 'react';
import './ContainerServiceListItem.css';
import {Avatar, Link, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface ContainerServiceListItemProps {
    serviceName: string;
    primaryText: string;
    secondaryText: string;
    port: number;

}

const ContainerServiceListItem: FC<ContainerServiceListItemProps> = (props: ContainerServiceListItemProps) => {


    return (
        <ListItem>
            <ListItemButton component={Link} href={`http://192.168.1.200:${props.port}`} target={"_blank"} dense>
                <ListItemIcon>
                    <Avatar alt={`${props.serviceName.toLowerCase()}`}
                            src={`/images/${props.serviceName.toLowerCase()}_tn.jpg`}
                            sx={{width: 48, height: 48}}/>
                </ListItemIcon>
                <ListItemText primary={`${props.primaryText}`} secondary={`${props.secondaryText}`}/>
                <OpenInNewIcon/>
            </ListItemButton>
        </ListItem>
    );
}

export default ContainerServiceListItem;
