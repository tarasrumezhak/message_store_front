import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {Link} from "react-router-dom";
import ViewListIcon from '@material-ui/icons/ViewList';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


export const mainListItems = (
    <div>
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <DashboardIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Dashboard" />*/}
        {/*</ListItem>*/}
        <Link to="/dashboard/orders">
        <ListItem button>
            <ListItemIcon>
                <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        </Link>
        <Link to="/dashboard/authors">
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Authors" />
        </ListItem>
        </Link>
        <Link to="/dashboard/order">
            <ListItem button>
                <ListItemIcon>
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Make order" />
            </ListItem>
        </Link>
        <Link to="/dashboard/admin">
            <ListItem button>
                <ListItemIcon>
                    <VerifiedUserIcon />
                </ListItemIcon>
                <ListItemText primary="Admin queries" />
            </ListItem>
        </Link>
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <BarChartIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Reports" />*/}
        {/*</ListItem>*/}
        {/*<ListItem button>*/}
        {/*    <ListItemIcon>*/}
        {/*        <LayersIcon />*/}
        {/*    </ListItemIcon>*/}
        {/*    <ListItemText primary="Integrations" />*/}
        {/*</ListItem>*/}
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);