import React, { useEffect, useRef } from 'react';
import BreadCrump from '../components/BreadCrump';

import Highcharts from 'highcharts'

const Dashboard = () => {
    const chartContainer = useRef();
    useEffect(() => {
        Highcharts.chart(chartContainer.current  , {
            chart: {
              type: 'column'
            },
            title: {
              text: 'نمودار فروش شرکت'
            },
            subtitle: {
              text: 'سال 1400'
            },
            xAxis: {
              categories: [
                'فرورین',
                'اردیبهشت',
                'خرداد',
                'تیر',
                'مرداد',
                'شهریور',
                'مهر',
                'آبان',
                'آذر',
                'دی',
                'بهمن',
                'اسفند'
              ],
              crosshair: true
            },
            yAxis: {
              min: 0,
              title: {
                text: 'مبلغ'
              }
            },
            tooltip: {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            },
            plotOptions: {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            },
            series: [{
              name: 'شرکت',
              data: [5.2, 4, 3.85, 5, 14, 9, 135.6, 10, 9.6, 0.4, 9.6, 15.3]
          
            }, {
              name: 'مدرس',
              data: [45, 60, 70, 40, 30, 80, 105.0, 100, 50, 52, 61 , 45.7]
          
            }, {
              name: 'کل',
              data: [50.2, 64, 73.85, 45, 44, 89, 110, 59.6, 52.4, 65.2, 57.6, 61]
            }]
          });
    } ,[])
    return (
        <div>
            <BreadCrump>
                <li className=" flex items-center justify-center py-3">
                    داشبورد
                </li>
            </BreadCrump>
            <div className="flex flex-wrap w-full mb-4">
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 h-24 mb-2">
                    <div className="h-full w-full bg-white p-2 rounded hover:bg-indigo-500 hover:text-white">
                        <p>میزان فروش کل : 125میلیون تومان</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 h-24 mb-2">
                    <div className="h-full w-full bg-white p-2 rounded hover:bg-indigo-500 hover:text-white">
                        <p>میزان فروش کل : 125میلیون تومان</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 h-24 mb-2">
                    <div className="h-full w-full bg-white p-2 rounded hover:bg-indigo-500 hover:text-white">
                        <p>میزان فروش کل : 125میلیون تومان</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 h-24 mb-2">
                    <div className="h-full w-full bg-white p-2 rounded hover:bg-indigo-500 hover:text-white">
                        <p>میزان فروش کل : 125میلیون تومان</p>
                    </div>
                </div>
            </div>
            <div className="h-96 w-full flex justify-center font-vazir" ref={chartContainer}></div>
        </div>
    );
};

export default Dashboard;