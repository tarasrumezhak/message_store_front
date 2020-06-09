import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {useRouteMatch} from "react-router";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(30),
        },
    },
}));

export default function Admin() {
    const classes = useStyles();
    let match = useRouteMatch();

    return (
        <div className={classes.root}>
            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="text"
            >
                <Link to='admin/query1'>
                    <Button >для автора A знайти усiх покупцiв, якi замовляли у нього повiдомлення хоча б N разiв за
                        вказаний перiод (з дати F по дату T)
                    </Button>
                </Link>
                <Button>для покупця С знайти усiх авторiв, у яких вiн замовляв повiдомлення чи статтi за вказаний
                    перiод (з дати F по дату T)</Button>
                <Button>знайти усiх авторiв, якi отримували замовлення вiд щонайменше N рiзних покупцiв за
                    вказаний перiод (з дати F по дату T)</Button>
                <Button>знайти усiх покупцiв, якi зробили хоча б N замовлень за вказаний перiод (з дати F по дату
                    T)</Button>
                <Button>для покупця С знайти усi соцiальнi мережi, для яких вiн зробив хоча б N замовлень за
                    вказаний перiод (з дати F по дату T)</Button>
                <Button>для автора А знайти усi облiковi записи у соцiальних мережах, до яких вiн мав доступ
                    протягом вказаного перiоду (з дати F по дату T)</Button>
                <Button>для покупця С знайти усiх авторiв, яким вiн надав доступ до хоча б одного облiкового
                    запису у соцiальнiй мережi, а потiм позбавив його цього доступу</Button>
                <Button>знайти усi спiльнi подiї для автора A та покупця С за вказаний перiод (з дати F по дату
                    T)</Button>
                <Button>для автора A та кожної соцiальної мережi, у якiй вiн писав статтю, знайти скiльки разiв за
                    вказаний перiод (з дати F по дату T) вiн писав її у групi з щонайменше N авторiв</Button>
                <Button>для покупця С та кожного стилю, у якому вiн замовляв повiдомлення, знайти скiльки
                    замовлень за вказаний перiод (з дати F по дату T) отримали 50% знижку</Button>
                <Button>знайти сумарну кiлькiсть замовлень по мiсяцях</Button>
                <Button>вивести соцiальнi мережi у порядку спадання середньої кiлькостi повiдомлень по усiх стилях, що були написанi автором A за вказаний перiод (з дати F по дату T)</Button>
                <Link to="/dashboard/admin/test">
                    <Button>тест: знайти усі замовлення з дати по дату</Button>
                </Link>
            </ButtonGroup>
        </div>
    );
}