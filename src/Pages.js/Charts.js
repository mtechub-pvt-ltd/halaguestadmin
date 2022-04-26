import React from 'react'
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

function Charts() {
    // Sample data
    const data = [
        { argument: 'Monday', value: 30 },
        { argument: 'Tuesday', value: 20 },
        { argument: 'Wednesday', value: 10 },
        { argument: 'Thursday', value: 50 },
        { argument: 'Friday', value: 60 },
    ];
    return (
        <div>
            <Grid container>
                <Grid xs={4} md={4}>
                    <Paper>
                        <Chart
                            data={data}
                        >
                            <ArgumentAxis />
                            <ValueAxis />

                            <BarSeries valueField="value" argumentField="argument" />
                        </Chart>
                    </Paper>
                </Grid>
                <Grid xs={4} md={4}>Bar chart</Grid>
                <Grid xs={4} md={4}>Bar chart</Grid>

            </Grid>

        </div>
    )
}

export default Charts