import React from "react";
// import Button from '@material-ui/core/Button';
import Link from '../src/Link';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import PopupState, { bindHover, bindPopover } from 'material-ui-popup-state';
import {useRouter} from "next/router";
// import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import SendIcon from '@material-ui/icons/Send';

const LanguageChange = () => {

    const Router = useRouter();

    return (
        <PopupState
            popupId="demo-popup-popper"
            variant="popper"
        >
            {popupState => (
                <>
                    <span
                        // variant='button'
                        // className={classes.explore + ' ' + classes.sectionDesktop}
                        {...bindHover(popupState)}
                    >
                        {'Edition: '}
                        {
                            Router.pathname === '/en' ?
                                'English' :
                                'Odia'
                        }
                    </span>
                    <Popper
                        // className={classes.popperRoot}
                        modifiers={{
                            flip: {
                                enabled: false,
                            },
                            preventOverflow: {
                                enabled: true,
                                boundariesElement: 'undefined',
                            },
                        }}
                        placement="bottom-start"
                        {...bindPopover(popupState)}
                    >
                        <Paper>
                            {/*<ExploreMenuList />*/}
                            <MenuList>
                                <MenuItem component={Link} href="/en">{'English'}</MenuItem>
                                <MenuItem component={Link} href="/od">{'Odia'}</MenuItem>
                            </MenuList>
                            {/*<List*/}
                            {/*    component="nav"*/}
                            {/*    aria-labelledby="nested-list-subheader"*/}
                            {/*    subheader={*/}
                            {/*        <ListSubheader component="div" id="nested-list-subheader">*/}
                            {/*            Nested List Items*/}
                            {/*        </ListSubheader>*/}
                            {/*    }*/}
                            {/*    // className={classes.root}*/}
                            {/*>*/}
                            {/*    <ListItem button>*/}
                            {/*        <ListItemIcon>*/}
                            {/*            <SendIcon />*/}
                            {/*        </ListItemIcon>*/}
                            {/*        <ListItemText primary="Sent mail" />*/}
                            {/*    </ListItem>*/}
                            {/*</List>*/}
                        </Paper>
                    </Popper>
                </>
            )}
        </PopupState>
    );
};

export default LanguageChange;