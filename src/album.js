import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from "@material-ui/core/Avatar";
import AuthorCard from "./authorCard";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <main>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Our Authors
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            We are glad to present our amazing authors which will help you write the best message for your social network account.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {/*{cards.map((card) => (*/}
                            <Grid item xs={12} sm={6} md={4}>
                        <AuthorCard image='https://i.ytimg.com/vi/rjO1hhmQTR8/maxresdefault.jpg' name="Коза Дереза" description="Our main author"/>
                            </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AuthorCard image='https://miro.medium.com/max/3150/2*FXDwohnwPB1G0OENggAWDg.jpeg' name="Taras Rumezhak" description="Cool author"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AuthorCard image='https://www.iboo.com/Content/Images/uploaded/Homepage/Authors/Author%20680%20x%20300.jpg' name="Solomia Sorokotiaha" description="Cool author"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <AuthorCard image='https://www.iboo.com/Content/Images/uploaded/Homepage/Authors/Author%20680%20x%20300.jpg' name="Max Hrytsay" description="Cool author"/>
                    </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <AuthorCard image='https://www.iboo.com/Content/Images/uploaded/Homepage/Authors/Author%20680%20x%20300.jpg' name="Danylo Nazaruk" description="Cool author"/>
                        </Grid>

                                {/*<Card className={classes.card}>*/}
                                {/*    <CardMedia*/}
                                {/*        className={classes.cardMedia}*/}
                                {/*        image="https://i.ytimg.com/vi/rjO1hhmQTR8/maxresdefault.jpg"*/}
                                {/*        title="Image title"*/}
                                {/*    />*/}
                                {/*    <CardContent className={classes.cardContent}>*/}
                                {/*        <Typography gutterBottom variant="h5" component="h2">*/}
                                {/*            Коза Дереза*/}
                                {/*        </Typography>*/}
                                {/*        <Typography>*/}
                                {/*            Головний автор!*/}
                                {/*        </Typography>*/}
                                {/*    </CardContent>*/}
                                {/*</Card>*/}




                        {/*))}*/}
                    </Grid>
                </Container>
            </main>
        </React.Fragment>
    );
}