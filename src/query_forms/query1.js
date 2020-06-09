import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Title from "../Title";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';



const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Query1Form() {
    const classes = useStyles();

    const useInput = initialValue => {
        const [value, setValue] = useState(initialValue);

        return {
            value,
            setValue,
            reset: () => setValue(""),
            bind: {
                value,
                onChange: event => {
                    setValue(event.target.value);
                }
            }
        };
    };

    const {value:author, bind:bindAuthor, reset:resetAuthor} = useInput('');
    const {value:dateFrom, bind:bindDateFrom, reset:resetDateFrom} = useInput('');
    const {value:dateTo, bind:bindDateTo, reset:resetDateTo} = useInput('');
    const {value:count, bind:bindCount, reset:resetCount} = useInput('');

    const [customers, setCustomers] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [selectedDate, setSelectedDate] = React.useState(new Date('1990-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [selectedDate2, setSelectedDate2] = React.useState(new Date('2020-06-20T21:11:54'));

    const handleDateChange2 = (date) => {
        setSelectedDate(date);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        let state = {
            author: author,
            dateFrom: selectedDate,
            dateTo: selectedDate2,
            count: count,
        };
        // var date_from = selectedDate.getFullYear() + '-' + selectedDate.getDate() + '-' + selectedDate.getDay();
        // var date_to = selectedDate2.getFullYear() + '-' + selectedDate2.getDate() + '-' + selectedDate2.getDay();
        var url = new URL("https://db-flask-app.herokuapp.com/query1"),
            params = {author: author, date_from: selectedDate.getFullYear() + '-' + selectedDate.getMonth() + '-' + selectedDate.getDate(),
                date_to: selectedDate2.getFullYear() + '-' + selectedDate2.getMonth() + '-' + selectedDate2.getDate(),
                count: count};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCustomers(result);
                    // console.log(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    // setIsLoaded(true);
                    // setError(error);
                }
            )
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Введіть необхідні дані
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="author"
                                label="Прізвище Автора"
                                name="authore"
                                autoComplete="author"
                                {...bindAuthor}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="yyyy-MM-dd"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Виберіть початкову дату"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container justify="space-around">
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="yyyy-MM-dd"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Виберіть кінцеву дату"
                                        value={selectedDate2}
                                        onChange={handleDateChange2}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </Grid>
                            </MuiPickersUtilsProvider>
                        </Grid>
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="dateFrom"*/}
                        {/*        label="Початкова дата"*/}
                        {/*        name="Date From"*/}
                        {/*        autoComplete="Date From"*/}
                        {/*        {...bindDateFrom}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        {/*<Grid item xs={12}>*/}
                        {/*    <TextField*/}
                        {/*        variant="outlined"*/}
                        {/*        required*/}
                        {/*        fullWidth*/}
                        {/*        id="dateTo"*/}
                        {/*        label="Кінцева дата"*/}
                        {/*        name="Date To"*/}
                        {/*        autoComplete="Date To"*/}
                        {/*        {...bindDateTo}*/}
                        {/*    />*/}
                        {/*</Grid>*/}
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="count"
                                label="Кількість"
                                name="Count"
                                autoComplete="Count"
                                {...bindCount}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Отримати
                    </Button>
                </form>
                <React.Fragment>
                    <Title>Замовники</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Ім'я</TableCell>
                                <TableCell>Прізвище</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.map((row) => (
                                <TableRow>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </React.Fragment>
            </div>
        </Container>
    );
}