import React, { Component } from 'react'
import TicketDataService from '../services/dataService';
import { Paper, withStyles, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import AppStyles from '../styles';

class List extends Component<any, any> {
    constructor(props: any){
        super(props);

        this.state = {
            error: null,
            loading: true,
            items: []
          };
    }

    componentDidMount() {
        const service = new TicketDataService();
        service
            .getTickets()
            .then((data: any) => {
                this.setState({
                    loading: false,
                    items: data
                });
            },
            (error: any) => {
                this.setState({
                    laoding: false,
                    error
                });
            });
    }

    render() {
        const { classes } = this.props;
        const { error, loading, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <Paper className={classes.root}>
                    <Table>
                        <TableHead className={classes.tableHead}>
                            <TableRow>
                                <TableCell className={classes.whiteText}>ID</TableCell>
                                <TableCell className={classes.whiteText}>Title</TableCell>
                                <TableCell className={classes.whiteText} align="center">Category</TableCell>
                                <TableCell className={classes.whiteText} align="center">Priority</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {items.map((item: any) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell align="center">{item.category}</TableCell>
                                <TableCell align="center">{item.priority}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            )
        }
    }
}

export default withStyles(AppStyles)(List)