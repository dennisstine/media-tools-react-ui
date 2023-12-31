import React, {FC} from 'react';
import './ContainerServiceListItem.css';
import {
    Avatar, Icon, IconButton,
    IconTypeMap,
    Link,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, SvgIconProps,
    SvgIconTypeMap
} from "@mui/material";
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

interface ContainerServiceListItemProps {
    serviceName: string;
    primaryText: string;
    secondaryText: string;
    port: number;
    // iconName?: React.ReactElement<SvgIconProps>;
    secondaryTextIcon?: IconDefinition;
}

const ContainerServiceListItem: FC<ContainerServiceListItemProps> = (props: ContainerServiceListItemProps) => {

    const getSecondaryIcon = (secondaryTextIcon: IconDefinition | undefined) => {

        if (secondaryTextIcon !== undefined && secondaryTextIcon !== null) {
            return <FontAwesomeIcon icon={secondaryTextIcon} />;
        }
        return "";
    }

    return (
        <ListItem sx={{padding: 0}} >
            <ListItemButton component={Link}
                            href={`http://192.168.1.200:${props.port}`}
                            target={"_blank"}
                            dense
                            sx={{minHeight: "75px"}}>
                <ListItemIcon>
                    <Avatar alt={`${props.serviceName.toLowerCase()}`}
                            src={`/images/${props.serviceName.toLowerCase()}_tn.jpg`}
                            sx={{width: 48, height: 48}}/>
                </ListItemIcon>
                <ListItemText
                    primary={`${props.primaryText}`}
                              secondary={`${props.secondaryText}` + getSecondaryIcon(props.secondaryTextIcon)}
                              secondaryTypographyProps={{component: "h6"}}
                sx={{padding: "0 0 0 5px"}}/>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </ListItemButton>
        </ListItem>
    );
}

export default ContainerServiceListItem;
