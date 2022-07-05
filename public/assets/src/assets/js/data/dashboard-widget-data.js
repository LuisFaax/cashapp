
// window.addEventListener("load", function(){

//   getcorkThemeObject = localStorage.getItem("theme");
//   getParseObject = JSON.parse(getcorkThemeObject)
//   ParsedObject = getParseObject;

//   console.log(localStorage);
//   console.log(localStorage.getItem("theme"));
//   console.log(localStorage.theme);
//   console.log(getParseObject);
//   console.log(ParsedObject);

//   if (ParsedObject.settings.layout.darkMode) {

//     var Theme = 'dark';

//     console.log(ParsedObject.settings.layout.darkMode)
    
//     Apex.tooltip = {
//         theme: Theme
//     }
    
//     /*
//       ==============================
//       |    @Options Charts Script   |
//       ==============================
//     */
    
//     /*
//       ======================================
//           Visitor Statistics | Options
//       ======================================
//     */
    
    
//     // Total Visits
    
//     var spark1 = {
//     chart: {
//         id: 'unique-visits',
//         group: 'sparks2',
//         type: 'line',
//         height: 80,
//         sparkline: {
//             enabled: true
//         },
//         dropShadow: {
//             enabled: true,
//             top: 1,
//             left: 1,
//             blur: 2,
//             color: '#e2a03f',
//             opacity: 0.7,
//         }
//     },
//     series: [{
//         data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
//     }],
//     stroke: {
//       curve: 'smooth',
//       width: 2,
//     },
//     markers: {
//         size: 0
//     },
//     grid: {
//       padding: {
//         top: 35,
//         bottom: 0,
//         left: 40
//       }
//     },
//     colors: ['#e2a03f'],
//     tooltip: {
//         x: {
//             show: false
//         },
//         y: {
//             title: {
//                 formatter: function formatter(val) {
//                     return '';
//                 }
//             }
//         }
//     },
//     responsive: [{
//         breakpoint: 1351,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 1200,
//         options: {
//           chart: {
//               height: 80,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 40
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 576,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 45,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     }
    
//     ]
//     }
    
//     // Paid Visits
    
//     var spark2 = {
//     chart: {
//       id: 'total-users',
//       group: 'sparks1',
//       type: 'line',
//       height: 80,
//       sparkline: {
//         enabled: true
//       },
//       dropShadow: {
//         enabled: true,
//         top: 3,
//         left: 1,
//         blur: 3,
//         color: '#009688',
//         opacity: 0.7,
//       }
//     },
//     series: [{
//       data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
//     }],
//     stroke: {
//       curve: 'smooth',
//       width: 2,
//     },
//     markers: {
//       size: 0
//     },
//     grid: {
//       padding: {
//         top: 35,
//         bottom: 0,
//         left: 40
//       }
//     },
//     colors: ['#009688'],
//     tooltip: {
//       x: {
//         show: false
//       },
//       y: {
//         title: {
//           formatter: function formatter(val) {
//             return '';
//           }
//         }
//       }
//     },
//     responsive: [{
//         breakpoint: 1351,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 1200,
//         options: {
//           chart: {
//               height: 80,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 40
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 576,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     }
//     ]
//     }
    
    
//     /*
//       ===================================
//           Unique Visitors | Options
//       ===================================
//     */
    
//     var d_1options1 = {
//     chart: {
//         height: 350,
//         type: 'bar',
//         toolbar: {
//           show: false,
//         }
//     },
//     colors: ['#622bd7', '#ffbb44'],
//     plotOptions: {
//         bar: {
//             horizontal: false,
//             columnWidth: '55%',
//             endingShape: 'rounded',
//             borderRadius: 10,
    
//         },
//     },
//     dataLabels: {
//         enabled: false
//     },
//     legend: {
//         position: 'bottom',
//         horizontalAlign: 'center',
//         fontSize: '14px',
//         markers: {
//             width: 10,
//             height: 10,
//             offsetX: -5,
//             offsetY: 0
//         },
//         itemMargin: {
//             horizontal: 10,
//             vertical: 8
//         }
//     },
//     grid: {
//       borderColor: '#191e3a',
//     },
//     stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//     },
//     series: [{
//         name: 'Direct',
//         data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
//     }, {
//         name: 'Organic',
//         data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
//     }],
//     xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shade: Theme,
//         type: 'vertical',
//         shadeIntensity: 0.3,
//         inverseColors: false,
//         opacityFrom: 1,
//         opacityTo: 0.8,
//         stops: [0, 100]
//       }
//     },
//     tooltip: {
//         marker : {
//             show: false,
//         },
//         theme: Theme,
//         y: {
//             formatter: function (val) {
//                 return val
//             }
//         }
//     },
//     responsive: [
//         { 
//             breakpoint: 767,
//             options: {
//                 plotOptions: {
//                     bar: {
//                         borderRadius: 0,
//                         columnWidth: "50%"
//                     }
//                 }
//             }
//         },
//     ]
//     }
    
//     /*
//       ==============================
//           Statistics | Options
//       ==============================
//     */
    
//     // Followers
    
//     var d_1options3 = {
//     chart: {
//       id: 'sparkline1',
//       type: 'area',
//       height: 160,
//       sparkline: {
//         enabled: true
//       },
//     },
//     stroke: {
//         curve: 'smooth',
//         width: 2,
//     },
//     series: [{
//       name: 'Sales',
//       data: [38, 60, 38, 52, 36, 40, 28 ]
//     }],
//     labels: ['1', '2', '3', '4', '5', '6', '7'],
//     yaxis: {
//       min: 0
//     },
//     colors: ['#4361ee'],
//     tooltip: {
//       x: {
//         show: false,
//       }
//     },
//     grid: {
//         show: false,
//         xaxis: {
//             lines: {
//                 show: false
//             }
//         },
//         padding: {
//         top: 5,
//         right: 0,
//         left: 0
//         }, 
//     },
//     fill: {
//       type:"gradient",
//       gradient: {
//           type: "vertical",
//           shadeIntensity: 1,
//           inverseColors: !1,
//           opacityFrom: .30,
//           opacityTo: .05,
//           stops: [100, 100]
//       }
//     }
//     }
    
//     // Referral
    
//     var d_1options4 = {
//     chart: {
//       id: 'sparkline1',
//       type: 'area',
//       height: 160,
//       sparkline: {
//         enabled: true
//       },
//     },
//     stroke: {
//         curve: 'smooth',
//         width: 2,
//     },
//     series: [{
//       name: 'Sales',
//       data: [ 60, 28, 52, 38, 40, 36, 38]
//     }],
//     labels: ['1', '2', '3', '4', '5', '6', '7'],
//     yaxis: {
//       min: 0
//     },
//     colors: ['#e7515a'],
//     tooltip: {
//       x: {
//         show: false,
//       }
//     },
//     grid: {
//         show: false,
//         xaxis: {
//             lines: {
//                 show: false
//             }
//         },
//         padding: {
//         top: 5,
//         right: 0,
//         left: 0
//         }, 
//     },
//     fill: {
//       type:"gradient",
//       gradient: {
//           type: "vertical",
//           shadeIntensity: 1,
//           inverseColors: !1,
//           opacityFrom: .30,
//           opacityTo: .05,
//           stops: [100, 100]
//       }
//     }
//     }
    
//     // Engagement Rate
    
//     var d_1options5 = {
//       chart: {
//         id: 'sparkline1',
//         type: 'area',
//         height: 160,
//         sparkline: {
//           enabled: true
//         },
//       },
//       stroke: {
//           curve: 'smooth',
//           width: 2,
//       },
//       fill: {
//         opacity: 1,
//       },
//       series: [{
//         name: 'Sales',
//         data: [28, 50, 36, 60, 38, 52, 38 ]
//       }],
//       labels: ['1', '2', '3', '4', '5', '6', '7'],
//       yaxis: {
//         min: 0
//       },
//       colors: ['#00ab55'],
//       tooltip: {
//         x: {
//           show: false,
//         }
//       },
//       grid: {
//           show: false,
//           xaxis: {
//               lines: {
//                   show: false
//               }
//           },
//           padding: {
//           top: 5,
//           right: 0,
//           left: 0
//           }, 
//       },
//       fill: {
//         type:"gradient",
//         gradient: {
//             type: "vertical",
//             shadeIntensity: 1,
//             inverseColors: !1,
//             opacityFrom: .30,
//             opacityTo: .05,
//             stops: [100, 100]
//         }
//       }
//     }
    

//   } else {
    
//     var Theme = 'dark';
    
//     Apex.tooltip = {
//         theme: Theme
//     }
    
//     /*
//       ==============================
//       |    @Options Charts Script   |
//       ==============================
//     */
    
//     /*
//       ======================================
//           Visitor Statistics | Options
//       ======================================
//     */
    
    
//     // Total Visits
    
//     var spark1 = {
//     chart: {
//         id: 'unique-visits',
//         group: 'sparks2',
//         type: 'line',
//         height: 80,
//         sparkline: {
//             enabled: true
//         },
//         dropShadow: {
//             enabled: true,
//             top: 1,
//             left: 1,
//             blur: 2,
//             color: '#e2a03f',
//             opacity: 0.7,
//         }
//     },
//     series: [{
//         data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
//     }],
//     stroke: {
//       curve: 'smooth',
//       width: 2,
//     },
//     markers: {
//         size: 0
//     },
//     grid: {
//       padding: {
//         top: 35,
//         bottom: 0,
//         left: 40
//       }
//     },
//     colors: ['#e2a03f'],
//     tooltip: {
//         x: {
//             show: false
//         },
//         y: {
//             title: {
//                 formatter: function formatter(val) {
//                     return '';
//                 }
//             }
//         }
//     },
//     responsive: [{
//         breakpoint: 1351,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 1200,
//         options: {
//           chart: {
//               height: 80,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 40
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 576,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 45,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     }
    
//     ]
//     }
    
//     // Paid Visits
    
//     var spark2 = {
//     chart: {
//       id: 'total-users',
//       group: 'sparks1',
//       type: 'line',
//       height: 80,
//       sparkline: {
//         enabled: true
//       },
//       dropShadow: {
//         enabled: true,
//         top: 3,
//         left: 1,
//         blur: 3,
//         color: '#009688',
//         opacity: 0.7,
//       }
//     },
//     series: [{
//       data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
//     }],
//     stroke: {
//       curve: 'smooth',
//       width: 2,
//     },
//     markers: {
//       size: 0
//     },
//     grid: {
//       padding: {
//         top: 35,
//         bottom: 0,
//         left: 40
//       }
//     },
//     colors: ['#009688'],
//     tooltip: {
//       x: {
//         show: false
//       },
//       y: {
//         title: {
//           formatter: function formatter(val) {
//             return '';
//           }
//         }
//       }
//     },
//     responsive: [{
//         breakpoint: 1351,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 1200,
//         options: {
//           chart: {
//               height: 80,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 40
//               }
//           },
//         },
//     },
//     {
//         breakpoint: 576,
//         options: {
//           chart: {
//               height: 95,
//           },
//           grid: {
//               padding: {
//                 top: 35,
//                 bottom: 0,
//                 left: 0
//               }
//           },
//         },
//     }
//     ]
//     }
    
    
//     /*
//       ===================================
//           Unique Visitors | Options
//       ===================================
//     */
    
//     var d_1options1 = {
//     chart: {
//         height: 350,
//         type: 'bar',
//         toolbar: {
//           show: false,
//         }
//     },
//     colors: ['#622bd7', '#ffbb44'],
//     plotOptions: {
//         bar: {
//             horizontal: false,
//             columnWidth: '55%',
//             endingShape: 'rounded',
//             borderRadius: 10,
    
//         },
//     },
//     dataLabels: {
//         enabled: false
//     },
//     legend: {
//         position: 'bottom',
//         horizontalAlign: 'center',
//         fontSize: '14px',
//         markers: {
//             width: 10,
//             height: 10,
//             offsetX: -5,
//             offsetY: 0
//         },
//         itemMargin: {
//             horizontal: 10,
//             vertical: 8
//         }
//     },
//     grid: {
//       borderColor: '#bfc9d4',
//     },
//     stroke: {
//         show: true,
//         width: 2,
//         colors: ['transparent']
//     },
//     series: [{
//         name: 'Direct',
//         data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
//     }, {
//         name: 'Organic',
//         data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
//     }],
//     xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     },
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shade: Theme,
//         type: 'vertical',
//         shadeIntensity: 0.3,
//         inverseColors: false,
//         opacityFrom: 1,
//         opacityTo: 0.8,
//         stops: [0, 100]
//       }
//     },
//     tooltip: {
//         marker : {
//             show: false,
//         },
//         theme: Theme,
//         y: {
//             formatter: function (val) {
//                 return val
//             }
//         }
//     },
//     responsive: [
//         { 
//             breakpoint: 767,
//             options: {
//                 plotOptions: {
//                     bar: {
//                         borderRadius: 0,
//                         columnWidth: "50%"
//                     }
//                 }
//             }
//         },
//     ]
//     }
    
//     /*
//       ==============================
//           Statistics | Options
//       ==============================
//     */
    
//     // Followers
    
//     var d_1options3 = {
//     chart: {
//       id: 'sparkline1',
//       type: 'area',
//       height: 160,
//       sparkline: {
//         enabled: true
//       },
//     },
//     stroke: {
//         curve: 'smooth',
//         width: 2,
//     },
//     series: [{
//       name: 'Sales',
//       data: [38, 60, 38, 52, 36, 40, 28 ]
//     }],
//     labels: ['1', '2', '3', '4', '5', '6', '7'],
//     yaxis: {
//       min: 0
//     },
//     colors: ['#4361ee'],
//     tooltip: {
//       x: {
//         show: false,
//       }
//     },
//     grid: {
//         show: false,
//         xaxis: {
//             lines: {
//                 show: false
//             }
//         },
//         padding: {
//         top: 5,
//         right: 0,
//         left: 0
//         }, 
//     },
//     fill: {
//       type:"gradient",
//       gradient: {
//           type: "vertical",
//           shadeIntensity: 1,
//           inverseColors: !1,
//           opacityFrom: .40,
//           opacityTo: .05,
//           stops: [100, 100]
//       }
//     }
//     }
    
//     // Referral
    
//     var d_1options4 = {
//     chart: {
//       id: 'sparkline1',
//       type: 'area',
//       height: 160,
//       sparkline: {
//         enabled: true
//       },
//     },
//     stroke: {
//         curve: 'smooth',
//         width: 2,
//     },
//     series: [{
//       name: 'Sales',
//       data: [ 60, 28, 52, 38, 40, 36, 38]
//     }],
//     labels: ['1', '2', '3', '4', '5', '6', '7'],
//     yaxis: {
//       min: 0
//     },
//     colors: ['#e7515a'],
//     tooltip: {
//       x: {
//         show: false,
//       }
//     },
//     grid: {
//         show: false,
//         xaxis: {
//             lines: {
//                 show: false
//             }
//         },
//         padding: {
//         top: 5,
//         right: 0,
//         left: 0
//         }, 
//     },
//     fill: {
//       type:"gradient",
//       gradient: {
//           type: "vertical",
//           shadeIntensity: 1,
//           inverseColors: !1,
//           opacityFrom: .40,
//           opacityTo: .05,
//           stops: [100, 100]
//       }
//     }
//     }
    
//     // Engagement Rate
    
//     var d_1options5 = {
//       chart: {
//         id: 'sparkline1',
//         type: 'area',
//         height: 160,
//         sparkline: {
//           enabled: true
//         },
//       },
//       stroke: {
//           curve: 'smooth',
//           width: 2,
//       },
//       fill: {
//         opacity: 1,
//       },
//       series: [{
//         name: 'Sales',
//         data: [28, 50, 36, 60, 38, 52, 38 ]
//       }],
//       labels: ['1', '2', '3', '4', '5', '6', '7'],
//       yaxis: {
//         min: 0
//       },
//       colors: ['#00ab55'],
//       tooltip: {
//         x: {
//           show: false,
//         }
//       },
//       grid: {
//           show: false,
//           xaxis: {
//               lines: {
//                   show: false
//               }
//           },
//           padding: {
//           top: 5,
//           right: 0,
//           left: 0
//           }, 
//       },
//       fill: {
//         type:"gradient",
//         gradient: {
//             type: "vertical",
//             shadeIntensity: 1,
//             inverseColors: !1,
//             opacityFrom: .40,
//             opacityTo: .05,
//             stops: [100, 100]
//         }
//       }
//     }

//   }
// })




