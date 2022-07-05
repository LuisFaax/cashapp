/** 
 * 
 * Analytics
 * 
**/

window.addEventListener("load", function(){
    try {
  
      getcorkThemeObject = localStorage.getItem("theme");
      getParseObject = JSON.parse(getcorkThemeObject)
      ParsedObject = getParseObject;
  
      if (ParsedObject.settings.layout.darkMode) {
  
        var Theme = 'dark';
  
        Apex.tooltip = {
            theme: Theme
        }
        
        /**
          ==============================
          |    @Options Charts Script   |
          ==============================
        */
        
        /*
          ======================================
              Visitor Statistics | Options
          ======================================
        */
        
        
        // Total Visits
        
        var spark1 = {
        chart: {
            id: 'unique-visits',
            group: 'sparks2',
            type: 'line',
            height: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                color: '#e2a03f',
                opacity: 0.7,
            }
        },
        series: [{
            data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
        }],
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        markers: {
            size: 0
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40
          }
        },
        colors: ['#e2a03f'],
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 1351,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        },
        {
            breakpoint: 1200,
            options: {
              chart: {
                  height: 80,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 40
                  }
              },
            },
        },
        {
            breakpoint: 576,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 45,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        }
        
        ]
        }
        
        // Paid Visits
        
        var spark2 = {
        chart: {
          id: 'total-users',
          group: 'sparks1',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 1,
            blur: 3,
            color: '#009688',
            opacity: 0.7,
          }
        },
        series: [{
          data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
        }],
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40
          }
        },
        colors: ['#009688'],
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        },
        responsive: [{
            breakpoint: 1351,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        },
        {
            breakpoint: 1200,
            options: {
              chart: {
                  height: 80,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 40
                  }
              },
            },
        },
        {
            breakpoint: 576,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        }
        ]
        }
        
        
        /*
          ===================================
              Unique Visitors | Options
          ===================================
        */
        
        var d_1options1 = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
              show: false,
            }
        },
        colors: ['#622bd7', '#ffbb44'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadius: 10,
        
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 10,
                height: 10,
                offsetX: -5,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 10,
                vertical: 8
            }
        },
        grid: {
          borderColor: '#191e3a',
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Direct',
            data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
        }, {
            name: 'Organic',
            data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: Theme,
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        tooltip: {
            marker : {
                show: false,
            },
            theme: Theme,
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        responsive: [
            { 
                breakpoint: 767,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: "50%"
                        }
                    }
                }
            },
        ]
        }
        
        /*
          ==============================
              Statistics | Options
          ==============================
        */
        
        // Followers
        
        var d_1options3 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
          name: 'Sales',
          data: [38, 60, 38, 52, 36, 40, 28 ]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#4361ee'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .30,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
        }
        
        // Referral
        
        var d_1options4 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
          name: 'Sales',
          data: [ 60, 28, 52, 38, 40, 36, 38]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#e7515a'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .30,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
        }
        
        // Engagement Rate
        
        var d_1options5 = {
          chart: {
            id: 'sparkline1',
            type: 'area',
            height: 160,
            sparkline: {
              enabled: true
            },
          },
          stroke: {
              curve: 'smooth',
              width: 2,
          },
          fill: {
            opacity: 1,
          },
          series: [{
            name: 'Sales',
            data: [28, 50, 36, 60, 38, 52, 38 ]
          }],
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          yaxis: {
            min: 0
          },
          colors: ['#00ab55'],
          tooltip: {
            x: {
              show: false,
            }
          },
          grid: {
              show: false,
              xaxis: {
                  lines: {
                      show: false
                  }
              },
              padding: {
              top: 5,
              right: 0,
              left: 0
              }, 
          },
          fill: {
            type:"gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .30,
                opacityTo: .05,
                stops: [100, 100]
            }
          }
        }
        
  
      } else {
        
        var Theme = 'dark';
        
        Apex.tooltip = {
            theme: Theme
        }
        
        /**
          ==============================
          |    @Options Charts Script   |
          ==============================
        */
        
        /*
          ======================================
              Visitor Statistics | Options
          ======================================
        */
        
        
        // Total Visits
        
        var spark1 = {
        chart: {
            id: 'unique-visits',
            group: 'sparks2',
            type: 'line',
            height: 80,
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 2,
                color: '#e2a03f',
                opacity: 0.7,
            }
        },
        series: [{
            data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
        }],
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        markers: {
            size: 0
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40
          }
        },
        colors: ['#e2a03f'],
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 1351,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        },
        {
            breakpoint: 1200,
            options: {
              chart: {
                  height: 80,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 40
                  }
              },
            },
        },
        {
            breakpoint: 576,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 45,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        }
        
        ]
        }
        
        // Paid Visits
        
        var spark2 = {
        chart: {
          id: 'total-users',
          group: 'sparks1',
          type: 'line',
          height: 80,
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 1,
            blur: 3,
            color: '#009688',
            opacity: 0.7,
          }
        },
        series: [{
          data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
        }],
        stroke: {
          curve: 'smooth',
          width: 2,
        },
        markers: {
          size: 0
        },
        grid: {
          padding: {
            top: 35,
            bottom: 0,
            left: 40
          }
        },
        colors: ['#009688'],
        tooltip: {
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter(val) {
                return '';
              }
            }
          }
        },
        responsive: [{
            breakpoint: 1351,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        },
        {
            breakpoint: 1200,
            options: {
              chart: {
                  height: 80,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 40
                  }
              },
            },
        },
        {
            breakpoint: 576,
            options: {
              chart: {
                  height: 95,
              },
              grid: {
                  padding: {
                    top: 35,
                    bottom: 0,
                    left: 0
                  }
              },
            },
        }
        ]
        }
        
        
        /*
          ===================================
              Unique Visitors | Options
          ===================================
        */
        
        var d_1options1 = {
        chart: {
            height: 350,
            type: 'bar',
            toolbar: {
              show: false,
            }
        },
        colors: ['#622bd7', '#ffbb44'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
                borderRadius: 10,
        
            },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            fontSize: '14px',
            markers: {
                width: 10,
                height: 10,
                offsetX: -5,
                offsetY: 0
            },
            itemMargin: {
                horizontal: 10,
                vertical: 8
            }
        },
        grid: {
          borderColor: '#e0e6ed',
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        series: [{
            name: 'Direct',
            data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
        }, {
            name: 'Organic',
            data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: Theme,
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        tooltip: {
            marker : {
                show: false,
            },
            theme: Theme,
            y: {
                formatter: function (val) {
                    return val
                }
            }
        },
        responsive: [
            { 
                breakpoint: 767,
                options: {
                    plotOptions: {
                        bar: {
                            borderRadius: 0,
                            columnWidth: "50%"
                        }
                    }
                }
            },
        ]
        }
        
        /*
          ==============================
              Statistics | Options
          ==============================
        */
        
        // Followers
        
        var d_1options3 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
          name: 'Sales',
          data: [38, 60, 38, 52, 36, 40, 28 ]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#4361ee'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .40,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
        }
        
        // Referral
        
        var d_1options4 = {
        chart: {
          id: 'sparkline1',
          type: 'area',
          height: 160,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
            curve: 'smooth',
            width: 2,
        },
        series: [{
          name: 'Sales',
          data: [ 60, 28, 52, 38, 40, 36, 38]
        }],
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: {
          min: 0
        },
        colors: ['#e7515a'],
        tooltip: {
          x: {
            show: false,
          }
        },
        grid: {
            show: false,
            xaxis: {
                lines: {
                    show: false
                }
            },
            padding: {
            top: 5,
            right: 0,
            left: 0
            }, 
        },
        fill: {
          type:"gradient",
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              inverseColors: !1,
              opacityFrom: .40,
              opacityTo: .05,
              stops: [100, 100]
          }
        }
        }
        
        // Engagement Rate
        
        var d_1options5 = {
          chart: {
            id: 'sparkline1',
            type: 'area',
            height: 160,
            sparkline: {
              enabled: true
            },
          },
          stroke: {
              curve: 'smooth',
              width: 2,
          },
          fill: {
            opacity: 1,
          },
          series: [{
            name: 'Sales',
            data: [28, 50, 36, 60, 38, 52, 38 ]
          }],
          labels: ['1', '2', '3', '4', '5', '6', '7'],
          yaxis: {
            min: 0
          },
          colors: ['#00ab55'],
          tooltip: {
            x: {
              show: false,
            }
          },
          grid: {
              show: false,
              xaxis: {
                  lines: {
                      show: false
                  }
              },
              padding: {
              top: 5,
              right: 0,
              left: 0
              }, 
          },
          fill: {
            type:"gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .40,
                opacityTo: .05,
                stops: [100, 100]
            }
          }
        }
  
      }
        
        /**
            ==============================
            |    @Render Charts Script    |
            ==============================
        */
  
  
        /*
            ======================================
                Visitor Statistics | Script
            ======================================
        */
  
        // Total Visits
        d_1C_1 = new ApexCharts(document.querySelector("#total-users"), spark1);
        d_1C_1.render();
  
        // Paid Visits
        d_1C_2 = new ApexCharts(document.querySelector("#paid-visits"), spark2);
        d_1C_2.render();
  
        /*
            ===================================
                Unique Visitors | Script
            ===================================
        */
  
        var d_1C_3 = new ApexCharts(
            document.querySelector("#uniqueVisits"),
            d_1options1
        );
        d_1C_3.render();
  
  
        /*
            ==============================
                Statistics | Script
            ==============================
        */
  
  
        // Followers
  
        var d_1C_5 = new ApexCharts(document.querySelector("#hybrid_followers"), d_1options3);
        d_1C_5.render()
  
        // Referral
  
        var d_1C_6 = new ApexCharts(document.querySelector("#hybrid_followers1"), d_1options4);
        d_1C_6.render()
  
        // Engagement Rate
  
        var d_1C_7 = new ApexCharts(document.querySelector("#hybrid_followers3"), d_1options5);
        d_1C_7.render()
  
  
  
      /*
          =============================================
              Perfect Scrollbar | Notifications
          =============================================
      */
      const ps = new PerfectScrollbar(document.querySelector('.mt-container'));
  
  
  
      /**
       * =================================================================================================
       * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
       * =================================================================================================
       */
  
      document.querySelector('.theme-toggle').addEventListener('click', function() {
  
        getcorkThemeObject = localStorage.getItem("theme");
        getParseObject = JSON.parse(getcorkThemeObject)
        ParsedObject = getParseObject;
  
        // console.log(ParsedObject.settings.layout.darkMode)
  
        if (ParsedObject.settings.layout.darkMode) {
  
             /*
                ==============================
                |    @Re-Render Charts Script    |
                ==============================
            */
        
            /*
                ===================================
                    Unique Visitors | Script
                ===================================
            */
        
            d_1C_3.updateOptions({
            grid: {
                    borderColor: '#191e3a',
                },
            })
            
            /*
                ==============================
                    Statistics | Script
                ==============================
            */
        
        
            // Followers
  
            d_1C_5.updateOptions({
                fill: {
                    type:"gradient",
                    gradient: {
                        opacityFrom: .30,
                    }
                }
            })
        
            // Referral
  
            d_1C_6.updateOptions({
                fill: {
                    type:"gradient",
                    gradient: {
                        opacityFrom: .30,
                    }
                }
            })
        
            // Engagement Rate
  
            d_1C_7.updateOptions({
                fill: {
                    type:"gradient",
                    gradient: {
                        opacityFrom: .30,
                    }
                }
            })
            
        } else {
            
            /*
                ==============================
                |    @Re-Render Charts Script    |
                ==============================
            */
        
            /*
                ===================================
                    Unique Visitors | Script
                ===================================
            */
        
            d_1C_3.updateOptions({
            grid: {
                    borderColor: '#e0e6ed',
                },
            })
          
            /*
                ==============================
                    Statistics | Script
                ==============================
            */
        
        
            // Followers
  
            d_1C_5.updateOptions({
                fill: {
                    type:"gradient",
                    gradient: {
                        opacityFrom: .40,
                    }
                }
            })
        
            // Referral
  
            d_1C_6.updateOptions({
                fill: {
                    type:"gradient",
                    gradient: {
                        opacityFrom: .40,
                    }
                }
            })
        
            // Engagement Rate
  
            d_1C_7.updateOptions({
                fill: {
                    type:"gradient",
                    gradient: {
                        opacityFrom: .40,
                    }
                }
            })
  
        }
       
    })
  
  
    } catch(e) {
      // statements
      console.log(e);
    }
})


/** 
 * 
 * Sales
 * 
**/

window.addEventListener("load", function(){
    try {
  
      getcorkThemeObject = localStorage.getItem("theme");
      getParseObject = JSON.parse(getcorkThemeObject)
      ParsedObject = getParseObject;
  
      if (ParsedObject.settings.layout.darkMode) {
        
        var Theme = 'dark';
    
        Apex.tooltip = {
            theme: Theme
        }
    
        /**
            ==============================
            |    @Options Charts Script   |
            ==============================
        */
        
        /*
            =============================
                Daily Sales | Options
            =============================
        */
        var d_2options1 = {
          chart: {
              height: 160,
              type: 'bar',
              stacked: true,
              stackType: '100%',
              toolbar: {
                  show: false,
              }
          },
          dataLabels: {
              enabled: false,
          },
          stroke: {
              show: true,
              width: [3, 4],
              curve: "smooth",
          },
          colors: ['#e2a03f', '#e0e6ed'],
          series: [{
              name: 'Sales',
              data: [44, 55, 41, 67, 22, 43, 21]
          },{
              name: 'Last Week',
              data: [13, 23, 20, 8, 13, 27, 33]
          }],
          xaxis: {
              labels: {
                  show: false,
              },
              categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
              crosshairs: {
              show: false
              }
          },
          yaxis: {
              show: false
          },
          fill: {
              opacity: 1
          },
          plotOptions: {
              bar: {
                  horizontal: false,
                  columnWidth: '25%',
                  borderRadius: 8,
              }
          },
          legend: {
              show: false,
          },
          grid: {
              show: false,
              xaxis: {
                  lines: {
                      show: false
                  }
              },
              padding: {
              top: -20,
              right: 0,
              bottom: -40,
              left: 0
              }, 
          },
          responsive: [
              {
                  breakpoint: 575,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 5,
                              columnWidth: '35%'
                          }
                      },
                  }
              },
          ],
        }
        
        /*
            =============================
                Total Orders | Options
            =============================
        */
        var d_2options2 = {
          chart: {
            id: 'sparkline1',
            group: 'sparklines',
            type: 'area',
            height: 290,
            sparkline: {
              enabled: true
            },
          },
          stroke: {
              curve: 'smooth',
              width: 2
          },
          fill: {
            type:"gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .30,
                opacityTo: .05,
                stops: [100, 100]
            }
          },
          series: [{
            name: 'Sales',
            data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
          }],
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          yaxis: {
            min: 0
          },
          grid: {
            padding: {
              top: 125,
              right: 0,
              bottom: 0,
              left: 0
            }, 
          },
          tooltip: {
            x: {
              show: false,
            },
            theme: Theme
          },
          colors: ['#00ab55']
        }
        
        /*
            =================================
                Revenue Monthly | Options
            =================================
        */
        var options1 = {
          chart: {
            fontFamily: 'Nunito, sans-serif',
            height: 365,
            type: 'area',
            zoom: {
                enabled: false
            },
            dropShadow: {
              enabled: true,
              opacity: 0.2,
              blur: 10,
              left: -7,
              top: 22
            },
            toolbar: {
              show: false
            },
          },
          colors: ['#e7515a', '#2196f3'],
          dataLabels: {
              enabled: false
          },
          markers: {
            discrete: [{
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: '#000',
            strokeColor: '#000',
            size: 5
          }, {
            seriesIndex: 2,
            dataPointIndex: 11,
            fillColor: '#000',
            strokeColor: '#000',
            size: 4
          }]
          },
          subtitle: {
            text: '$10,840',
            align: 'left',
            margin: 0,
            offsetX: 100,
            offsetY: 20,
            floating: false,
            style: {
              fontSize: '18px',
              color:  '#00ab55'
            }
          },
          title: {
            text: 'Total Profit',
            align: 'left',
            margin: 0,
            offsetX: -10,
            offsetY: 20,
            floating: false,
            style: {
              fontSize: '18px',
              color:  '#bfc9d4'
            },
          },
          stroke: {
              show: true,
              curve: 'smooth',
              width: 2,
              lineCap: 'square'
          },
          series: [{
              name: 'Expenses',
              data: [16800, 16800, 15500, 14800, 15500, 17000, 21000, 16000, 15000, 17000, 14000, 17000]
          }, {
              name: 'Income',
              data: [16500, 17500, 16200, 17300, 16000, 21500, 16000, 17000, 16000, 19000, 18000, 19000]
          }],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          xaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              show: true
            },
            labels: {
              offsetX: 0,
              offsetY: 5,
              style: {
                  fontSize: '12px',
                  fontFamily: 'Nunito, sans-serif',
                  cssClass: 'apexcharts-xaxis-title',
              },
            }
          },
          yaxis: {
            labels: {
              formatter: function(value, index) {
                return (value / 1000) + 'K'
              },
              offsetX: -15,
              offsetY: 0,
              style: {
                  fontSize: '12px',
                  fontFamily: 'Nunito, sans-serif',
                  cssClass: 'apexcharts-yaxis-title',
              },
            }
          },
          grid: {
            borderColor: '#191e3a',
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
              top: -50,
              right: 0,
              bottom: 0,
              left: 5
            },
          }, 
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -50,
            fontSize: '16px',
            fontFamily: 'Quicksand, sans-serif',
            markers: {
              width: 10,
              height: 10,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 12,
              onClick: undefined,
              offsetX: -5,
              offsetY: 0
            },    
            itemMargin: {
              horizontal: 10,
              vertical: 20
            }
            
          },
          tooltip: {
            theme: Theme,
            marker: {
              show: true,
            },
            x: {
              show: false,
            }
          },
          fill: {
              type:"gradient",
              gradient: {
                  type: "vertical",
                  shadeIntensity: 1,
                  inverseColors: !1,
                  opacityFrom: .19,
                  opacityTo: .05,
                  stops: [100, 100]
              }
          },
          responsive: [{
            breakpoint: 575,
            options: {
              legend: {
                  offsetY: -50,
              },
            },
          }]
        }
        
        /*
            ==================================
                Sales By Category | Options
            ==================================
        */
        var options = {
            chart: {
                type: 'donut',
                width: 370,
                height: 430
            },
            colors: ['#622bd7', '#e2a03f', '#e7515a', '#e2a03f'],
            dataLabels: {
              enabled: false
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                  width: 10,
                  height: 10,
                  offsetX: -5,
                  offsetY: 0
                },
                itemMargin: {
                  horizontal: 10,
                  vertical: 30
                }
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '75%',
                  background: 'transparent',
                  labels: {
                    show: true,
                    name: {
                      show: true,
                      fontSize: '29px',
                      fontFamily: 'Nunito, sans-serif',
                      color: undefined,
                      offsetY: -10
                    },
                    value: {
                      show: true,
                      fontSize: '26px',
                      fontFamily: 'Nunito, sans-serif',
                      color: '#bfc9d4',
                      offsetY: 16,
                      formatter: function (val) {
                        return val
                      }
                    },
                    total: {
                      show: true,
                      showAlways: true,
                      label: 'Total',
                      color: '#888ea8',
                      formatter: function (w) {
                        return w.globals.seriesTotals.reduce( function(a, b) {
                          return a + b
                        }, 0)
                      }
                    }
                  }
                }
              }
            },
            stroke: {
              show: true,
              width: 15,
              colors: '#0e1726'
            },
            series: [985, 737, 270],
            labels: ['Apparel', 'Sports', 'Others'],
      
            responsive: [
              { 
                breakpoint: 1440, options: {
                  chart: {
                    width: 325
                  },
                }
              },
              { 
                breakpoint: 1199, options: {
                  chart: {
                    width: 380
                  },
                }
              },
              { 
                breakpoint: 575, options: {
                  chart: {
                    width: 320
                  },
                }
              },
            ],
        }
  
      } else {
  
        var Theme = 'dark';
    
        Apex.tooltip = {
            theme: Theme
        }
    
        /**
            ==============================
            |    @Options Charts Script   |
            ==============================
        */
        
        /*
            =============================
                Daily Sales | Options
            =============================
        */
        var d_2options1 = {
          chart: {
              height: 160,
              type: 'bar',
              stacked: true,
              stackType: '100%',
              toolbar: {
                  show: false,
              }
          },
          dataLabels: {
              enabled: false,
          },
          stroke: {
              show: true,
              width: [3, 4],
              curve: "smooth",
          },
          colors: ['#e2a03f', '#e0e6ed'],
          series: [{
              name: 'Sales',
              data: [44, 55, 41, 67, 22, 43, 21]
          },{
              name: 'Last Week',
              data: [13, 23, 20, 8, 13, 27, 33]
          }],
          xaxis: {
              labels: {
                  show: false,
              },
              categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
              crosshairs: {
              show: false
              }
          },
          yaxis: {
              show: false
          },
          fill: {
              opacity: 1
          },
          plotOptions: {
              bar: {
                  horizontal: false,
                  columnWidth: '25%',
                  borderRadius: 8,
              }
          },
          legend: {
              show: false,
          },
          grid: {
              show: false,
              xaxis: {
                  lines: {
                      show: false
                  }
              },
              padding: {
              top: -20,
              right: 0,
              bottom: -40,
              left: 0
              }, 
          },
          responsive: [
              {
                  breakpoint: 575,
                  options: {
                      plotOptions: {
                          bar: {
                              borderRadius: 5,
                              columnWidth: '35%'
                          }
                      },
                  }
              },
          ],
        }
        
        /*
            =============================
                Total Orders | Options
            =============================
        */
        var d_2options2 = {
          chart: {
            id: 'sparkline1',
            group: 'sparklines',
            type: 'area',
            height: 290,
            sparkline: {
              enabled: true
            },
          },
          stroke: {
              curve: 'smooth',
              width: 2
          },
          fill: {
            opacity: 1,
            // type:"gradient",
            // gradient: {
            //     type: "vertical",
            //     shadeIntensity: 1,
            //     inverseColors: !1,
            //     opacityFrom: .30,
            //     opacityTo: .05,
            //     stops: [100, 100]
            // }
          },
          series: [{
            name: 'Sales',
            data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
          }],
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
          yaxis: {
            min: 0
          },
          grid: {
            padding: {
              top: 125,
              right: 0,
              bottom: 0,
              left: 0
            }, 
          },
          tooltip: {
            x: {
              show: false,
            },
            theme: Theme
          },
          colors: ['#00ab55']
        }
        
        /*
            =================================
                Revenue Monthly | Options
            =================================
        */
        var options1 = {
          chart: {
            fontFamily: 'Nunito, sans-serif',
            height: 365,
            type: 'area',
            zoom: {
                enabled: false
            },
            dropShadow: {
              enabled: true,
              opacity: 0.2,
              blur: 10,
              left: -7,
              top: 22
            },
            toolbar: {
              show: false
            },
          },
          colors: ['#1b55e2', '#e7515a'],
          dataLabels: {
              enabled: false
          },
          markers: {
            discrete: [{
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: '#000',
            strokeColor: '#000',
            size: 5
          }, {
            seriesIndex: 2,
            dataPointIndex: 11,
            fillColor: '#000',
            strokeColor: '#000',
            size: 4
          }]
          },
          subtitle: {
            text: '$10,840',
            align: 'left',
            margin: 0,
            offsetX: 100,
            offsetY: 20,
            floating: false,
            style: {
              fontSize: '18px',
              color:  '#4361ee'
            }
          },
          title: {
            text: 'Total Profit',
            align: 'left',
            margin: 0,
            offsetX: -10,
            offsetY: 20,
            floating: false,
            style: {
              fontSize: '18px',
              color:  '#0e1726'
            },
          },
          stroke: {
              show: true,
              curve: 'smooth',
              width: 2,
              lineCap: 'square'
          },
          series: [{
              name: 'Expenses',
              data: [16800, 16800, 15500, 14800, 15500, 17000, 21000, 16000, 15000, 17000, 14000, 17000]
          }, {
              name: 'Income',
              data: [16500, 17500, 16200, 17300, 16000, 21500, 16000, 17000, 16000, 19000, 18000, 19000]
          }],
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          xaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              show: true
            },
            labels: {
              offsetX: 0,
              offsetY: 5,
              style: {
                  fontSize: '12px',
                  fontFamily: 'Nunito, sans-serif',
                  cssClass: 'apexcharts-xaxis-title',
              },
            }
          },
          yaxis: {
            labels: {
              formatter: function(value, index) {
                return (value / 1000) + 'K'
              },
              offsetX: -15,
              offsetY: 0,
              style: {
                  fontSize: '12px',
                  fontFamily: 'Nunito, sans-serif',
                  cssClass: 'apexcharts-yaxis-title',
              },
            }
          },
          grid: {
            borderColor: '#e0e6ed',
            strokeDashArray: 5,
            xaxis: {
                lines: {
                    show: true
                }
            },   
            yaxis: {
                lines: {
                    show: false,
                }
            },
            padding: {
              top: -50,
              right: 0,
              bottom: 0,
              left: 5
            },
          }, 
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetY: -50,
            fontSize: '16px',
            fontFamily: 'Quicksand, sans-serif',
            markers: {
              width: 10,
              height: 10,
              strokeWidth: 0,
              strokeColor: '#fff',
              fillColors: undefined,
              radius: 12,
              onClick: undefined,
              offsetX: -5,
              offsetY: 0
            },    
            itemMargin: {
              horizontal: 10,
              vertical: 20
            }
            
          },
          tooltip: {
            theme: Theme,
            marker: {
              show: true,
            },
            x: {
              show: false,
            }
          },
          fill: {
              type:"gradient",
              gradient: {
                  type: "vertical",
                  shadeIntensity: 1,
                  inverseColors: !1,
                  opacityFrom: .19,
                  opacityTo: .05,
                  stops: [100, 100]
              }
          },
          responsive: [{
            breakpoint: 575,
            options: {
              legend: {
                  offsetY: -50,
              },
            },
          }]
        }
        
        /*
            ==================================
                Sales By Category | Options
            ==================================
        */
        var options = {
            chart: {
                type: 'donut',
                width: 370,
                height: 430
            },
            colors: ['#622bd7', '#e2a03f', '#e7515a', '#e2a03f'],
            dataLabels: {
              enabled: false
            },
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                  width: 10,
                  height: 10,
                  offsetX: -5,
                  offsetY: 0
                },
                itemMargin: {
                  horizontal: 10,
                  vertical: 30
                }
            },
            plotOptions: {
              pie: {
                donut: {
                  size: '75%',
                  background: 'transparent',
                  labels: {
                    show: true,
                    name: {
                      show: true,
                      fontSize: '29px',
                      fontFamily: 'Nunito, sans-serif',
                      color: undefined,
                      offsetY: -10
                    },
                    value: {
                      show: true,
                      fontSize: '26px',
                      fontFamily: 'Nunito, sans-serif',
                      color: '#0e1726',
                      offsetY: 16,
                      formatter: function (val) {
                        return val
                      }
                    },
                    total: {
                      show: true,
                      showAlways: true,
                      label: 'Total',
                      color: '#888ea8',
                      formatter: function (w) {
                        return w.globals.seriesTotals.reduce( function(a, b) {
                          return a + b
                        }, 0)
                      }
                    }
                  }
                }
              }
            },
            stroke: {
              show: true,
              width: 15,
              colors: '#fff'
            },
            series: [985, 737, 270],
            labels: ['Apparel', 'Sports', 'Others'],
      
            responsive: [
              { 
                breakpoint: 1440, options: {
                  chart: {
                    width: 325
                  },
                }
              },
              { 
                breakpoint: 1199, options: {
                  chart: {
                    width: 380
                  },
                }
              },
              { 
                breakpoint: 575, options: {
                  chart: {
                    width: 320
                  },
                }
              },
            ],
        }
      }
      
    
    /**
        ==============================
        |    @Render Charts Script    |
        ==============================
    */
    
    
    /*
        ============================
            Daily Sales | Render
        ============================
    */
    var d_2C_1 = new ApexCharts(document.querySelector("#daily-sales"), d_2options1);
    d_2C_1.render();
    
    /*
        ============================
            Total Orders | Render
        ============================
    */
    var d_2C_2 = new ApexCharts(document.querySelector("#total-orders"), d_2options2);
    d_2C_2.render();
    
    /*
        ================================
            Revenue Monthly | Render
        ================================
    */
    var chart1 = new ApexCharts(
        document.querySelector("#revenueMonthly"),
        options1
    );
    
    chart1.render();
    
    /*
        =================================
            Sales By Category | Render
        =================================
    */
    var chart = new ApexCharts(
        document.querySelector("#chart-2"),
        options
    );
    
    chart.render();
    
    /*
        =============================================
            Perfect Scrollbar | Recent Activities
        =============================================
    */
    const ps = new PerfectScrollbar(document.querySelector('.mt-container-ra'));
    
    // const topSellingProduct = new PerfectScrollbar('.widget-table-three .table-scroll table', {
    //   wheelSpeed:.5,
    //   swipeEasing:!0,
    //   minScrollbarLength:40,
    //   maxScrollbarLength:100,
    //   suppressScrollY: true
    
    // });
  
  
  
  
  
    /**
       * =================================================================================================
       * |     @Re_Render | Re render all the necessary JS when clicked to switch/toggle theme           |
       * =================================================================================================
       */
    
    document.querySelector('.theme-toggle').addEventListener('click', function() {
  
      // console.log(localStorage);
  
      getcorkThemeObject = localStorage.getItem("theme");
      getParseObject = JSON.parse(getcorkThemeObject)
      ParsedObject = getParseObject;
  
      if (ParsedObject.settings.layout.darkMode) {
  
        /*
        =================================
            Revenue Monthly | Options
        =================================
      */
  
        chart1.updateOptions({
          colors: ['#e7515a', '#2196f3'],
          subtitle: {
            style: {
              color:  '#00ab55'
            }
          },
          title: {
            style: {
              color:  '#bfc9d4'
            }
          },
          grid: {
            borderColor: '#191e3a',
          }
        })
  
  
        /*
        ==================================
            Sales By Category | Options
        ==================================
        */
  
        chart.updateOptions({
          stroke: {
            colors: '#0e1726'
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  value: {
                    color: '#bfc9d4'
                  }
                }
              }
            }
          }
        })
  
  
        /*
            =============================
                Total Orders | Options
            =============================
        */
  
        d_2C_2.updateOptions({
          fill: {
            type:"gradient",
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .30,
                opacityTo: .05,
                stops: [100, 100]
            }
          }
        })
  
      } else {
  
        /*
        =================================
            Revenue Monthly | Options
        =================================
      */
  
        chart1.updateOptions({
          colors: ['#1b55e2', '#e7515a'],
          subtitle: {
            style: {
              color:  '#4361ee'
            }
          },
          title: {
            style: {
              color:  '#0e1726'
            }
          },
          grid: {
            borderColor: '#e0e6ed',
          }
        })
  
  
        /*
        ==================================
            Sales By Category | Options
        ==================================
        */
  
        chart.updateOptions({
          stroke: {
            colors: '#fff'
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  value: {
                    color: '#0e1726'
                  }
                }
              }
            }
          }
        })
  
  
        /*
            =============================
                Total Orders | Options
            =============================
        */
  
        d_2C_2.updateOptions({
          fill: {
            type:"gradient",
            opacity: 0.9,
            gradient: {
                type: "vertical",
                shadeIntensity: 1,
                inverseColors: !1,
                opacityFrom: .45,
                opacityTo: 0.1,
                stops: [100, 100]
            }
          }
        })
        
        
      }
  
    })
    
    
    } catch(e) {
        console.log(e);
    }
})