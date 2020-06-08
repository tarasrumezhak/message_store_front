import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import React from "react";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

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

export default function AuthorCard(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cardMedia}
                image={props.image}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography>
                    {props.description}
                </Typography>
            </CardContent>
            {/*<CardActions>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        View*/}
            {/*    </Button>*/}
            {/*    <Button size="small" color="primary">*/}
            {/*        Edit*/}
            {/*    </Button>*/}
            {/*</CardActions>*/}
        </Card>
    )
}