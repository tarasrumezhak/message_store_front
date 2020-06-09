import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";

export default function AddressForm() {

    const handleSubmit = (event) => {
        event.preventDefault();
        let state = {
            account: account,
            service: service,
            message: message
        };
        fetch("https://db-flask-app.herokuapp.com/order", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        }).then(function (response) {
            // console.log(response);
            // console.log(state);
            // return response.json();
            if (response.status === 200) {
                // return <Redirect to='login'/>
            }
        });
    };

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

    const {value:account, bind:bindAccount, reset:resetAccount} = useInput('');
    const {value:service, bind:bindService, reset:resetService} = useInput('');
    const {value:message, bind:bindMessage, reset:resetMessage} = useInput('');
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                General info
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="account"
                        name="account"
                        label="Your account"
                        fullWidth
                        autoComplete="your account"
                        {...bindAccount}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="service"
                        name="service"
                        label="Service Name"
                        fullWidth
                        autoComplete="service name"
                        {...bindService}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="message"
                        name="message"
                        label="Message for author"
                        fullWidth
                        autoComplete="message"
                        {...bindMessage}
                    />
                </Grid>
            </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                >
                    Place order now
                </Button>
            </form>
        </React.Fragment>
    );
}