import React from 'react'
import Chart from "react-apexcharts";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";


export function PieChart() {
    return React.createElement(Chart, {
        type: "pie",
        series: [15,48, 35, 5, 7],
        width: "100%",

        options: {
            labels: ["The Corporates 7","The Loyalists23, 326", "Agric Clients 336,602", "The Retail Techs 461,261", "The Micro Techs 291, 843"],
            legend: {
                show: false
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ["#407bffff", "#ffbc73ff", "#4fd9aeff", "#c4a2fc", "#4c3edbff"],
            foreColor: '#000',
            dataLabels: {
                enabled: false,

            }

        }
    });
}

export function RadialChart() {
    return React.createElement(Chart, {
        type: "radialBar",

        series: [100, 92.95, 85.76, 57.39, 38.03],
        options: {
            chart: {
                height: '100%',
            },
            // legend: {
            //     show: true
            // },
            
            plotOptions: {

                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 360,

                    hollow: {
                        margin: 20,
                        size: '40%',
                        background: 'transparent',

                    }
                }
            },
            labels: ["The Corporates", "The Micro Techs ", 
            "The Loyalists ", "Agric Clients ", "The Retail Techs"],
            colors: ["#407bffff", "#4c3edbff", "#ffbc73ff", "#4fd9aeff", "#c4a2fc"],
            itemMargin: {
                vertical: 100
            }

        }
    });
};



const data = [
    {
        name: "SP",
        sp: 18000,
    },
    {
        name: "F&A",
        fa: 17000,
    },
    {
        name: "EE",
        ee: 13000,
    },
    {
        name: "E+E",
        e: 12000,
    },
    {
        name: "Education",
        edu: 10000,
    },

];


export function BarCharts() {
    return (
        <div style={{ width: '100%', height: 350 }}>
            <ResponsiveContainer>
               

            <BarChart data={data}
                    margin={{
                        top: 30,
                        right: 30,
                        left: 0,
                        bottom: 5
                    }}
                    barSize={12} >
                <CartesianGrid strokeDasharray="1 9" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sp" name="SP" fill="#ffbc73ff"  />
                <Bar dataKey="fa" name="FA" fill="#407bffff" />
                <Bar dataKey="ee" name="EE" fill="#ff725eff" />
                <Bar dataKey="e" name="E" fill="#2a38a4ff" />
                <Bar dataKey="edu" name="EDU" fill="#15cc93ff" />
            </BarChart>
        </ResponsiveContainer>
        </div >
    );
}



