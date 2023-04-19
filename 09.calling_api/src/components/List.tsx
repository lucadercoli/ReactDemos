import React, { Component } from "react";
import CountriesDataService from "../services/dataService";
import {
  Paper,
  withStyles,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import AppStyles from "../styles";

class List extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      items: [],
    };
  }

  componentDidMount() {
    const service = new CountriesDataService();
    service.getCountries().then(
      (data: any) => {
        this.setState({
          loading: false,
          items: data,
        });
      },
      (error: any) => {
        this.setState({
          laoding: false,
          error,
        });
      }
    );
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
                <TableCell className={classes.whiteText}>Title</TableCell>
                <TableCell className={classes.whiteText} align="center">
                  Population
                </TableCell>
                <TableCell className={classes.whiteText} align="center">
                  Region
                </TableCell>
              </TableRow>
            </TableHead>
            {items && (
              <TableBody>
                {items?.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{item.name?.common}</TableCell>
                    <TableCell>{item.population}</TableCell>
                    <TableCell align="center">{item.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </Paper>
      );
    }
  }
}

export default List;
