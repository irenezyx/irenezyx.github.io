Reveal.addEventListener('ready', function() {
    var statesMedicareViz = {
        "data": {"url": "data/medicare.csv"},
        "vconcat": [
            {
            "title": "Medicare Enrollees of Each State in 2014",
            "selection": {"brush": {"type": "interval", "encodings": ["x"]}},
            "mark": "rect",
            "encoding": {
                "x": {
                "field": "State name", 
                "type": "nominal"
                },
                "color": { 
                "condition": {
                    "selection": "brush",
                    "field": "Medicare enrollees (2014)", 
                    "type": "quantitative"
                },
                "value": "grey"
                }
            }
            },
            {
            "hconcat": [
                {
                "layer": [
                    {
                    "title": "Total Medicare Reimbursements per Enrollee in Two Adjusting Methods of Selected States",
                    "selection": {"biBrush": {"type": "interval"}},
                    "transform": [{"filter": {"selection": "brush"}}, {"filter": {"selection": "Dropdown"}}],
                    "mark": {
                        "type": "bar", 
                        "color": "#85C5A6", 
                        "point": {"fill": "#85C5A6"}
                    },
                    "encoding": {
                        "x": {
                        "field": "State name",
                        "type": "nominal"
                        },
                        "y": {
                        "field": "Total Medicare reimbursements per enrollee - ASR",
                        "type": "quantitative",
                        "axis": {
                            "title": "Total Medicare reimbursements per enrollee - ASR", 
                            "titleColor":"#85C5A6"
                        },
                        "opacity": {"value": 0.6}
                        }
                    }
                    },
                    {
                    "transform": [{"filter": {"selection": "brush"}}],
                    "mark": {"type": "bar", "point": true},
                    "encoding": {
                        "x": {
                        "field": "State name",
                        "type": "nominal"
                        },
                        "y": {
                        "field": "Total Medicare reimbursements per enrollee - PASR",
                        "type": "quantitative",
                        "axis": {
                            "title": "Total Medicare reimbursements per enrollee - PASR", 
                            "titleColor":"#85A9C5"
                        }
                        },
                        "opacity": {"value": 0.6}
                    }
                    }
                ],
                "resolve": {"scale": {"y": "independent"}}
                }
            ]
            },
            {
            "hconcat": [
                {
                "layer": [
                    {
                    "title": "Spending with ASR Adjusted in Each Field for Selected States",
                    "selection": {
                        "Dropdown": {
                        "type": "single",
                        "fields": ["Range of Medicare enrollees (2014)"],
                        "bind": {
                            "input": "select", 
                            "options": [
                            null,
                            "0 - 100,000",
                            "100,000 - 200,000",
                            "200,000 - 300,000",
                            "300,000 - 400,000",
                            "400,000 - 500,000",
                            "500,000 - 600,000",
                            "600,000 - 700,000",
                            "700,000 - 800,000",
                            "800,000 - 900,000",
                            "900,000 - 1000,000",
                            "1,000,000 - 2,000,000",
                            "2,000,000 - 3,000,000"
                            ]
                        }
                        }
                    },
                    "transform": [
                        {"filter": {"selection": "brush"}},
                        {"filter": {"selection": "biBrush"}},
                        {"filter": {"selection": "Dropdown"}}
                    ],
                    "mark": {"type": "line", "color": "#e7ba52", "point": {"fill": "#e7ba52"}},
                    "encoding":{
                        "x": {"field": "State name", "type": "nominal"},
                        "y": {
                        "field": "Hospital & skilled nursing facility reimbursements per enrollee - ASR", 
                        "type": "quantitative",
                        "axis": {
                            "title": "Spending in each field - ASR"
                        }
                        }
                    }
                    },
                    {
                    "transform": [
                        {"filter": {"selection": "brush"}},
                        {"filter": {"selection": "biBrush"}},
                        {"filter": {"selection": "Dropdown"}}
                    ],
                    "mark": {"type": "line", "color": "#ff9896", "point": {"fill": "#ff9896"}},
                    "encoding":{
                        "x": {"field": "State name", "type": "nominal"},
                        "y": {"field": "Outpatient facility reimbursements per enrollee - ASR", "type": "quantitative"}
                    }
                    },
                    {
                    "transform": [
                        {"filter": {"selection": "brush"}},
                        {"filter": {"selection": "biBrush"}},
                        {"filter": {"selection": "Dropdown"}}
                    ],
                    "mark": {"type": "line", "color": "#aec7e8", "point": {"fill": "#aec7e8"}},
                    "encoding":{
                        "x": {"field": "State name", "type": "nominal"},
                        "y": {"field": "Physician reimbursements per enrollee - ASR", "type": "quantitative"}
                    }
                    },
                    {
                    "transform": [
                        {"filter": {"selection": "brush"}},
                        {"filter": {"selection": "biBrush"}},
                        {"filter": {"selection": "Dropdown"}}
                    ],
                    "mark": {"type": "line", "color": "#1f77b4", "point": {"fill": "#1f77b4"}},
                    "encoding":{
                        "x": {"field": "State name", "type": "nominal"},
                        "y": {"field": "Home health agency reimbursements per enrollee - ASR", "type": "quantitative"}
                    }
                    },
                    {
                    "transform": [
                        {"filter": {"selection": "brush"}},
                        {"filter": {"selection": "biBrush"}},
                        {"filter": {"selection": "Dropdown"}}
                    ],
                    "mark": {"type": "line", "color": "#9467bd", "point": {"fill": "#9467bd"}},
                    "encoding":{
                        "x": {"field": "State name", "type": "nominal"},
                        "y": {"field": "Hospice reimbursements per enrollee - ASR", "type": "quantitative"}
                    }
                    },
                    {
                    "transform": [
                        {"filter": {"selection": "brush"}},
                        {"filter": {"selection": "biBrush"}},
                        {"filter": {"selection": "Dropdown"}}
                    ],
                    "mark": {"type": "line", "color": "#d3eeb4", "point": {"fill": "#d3eeb4"}},
                    "encoding":{
                        "x": {"field": "State name", "type": "nominal"},
                        "y": {"field": "Durable medical equipment reimbursements per enrollee - ASR", "type": "quantitative"}
                    }
                    }
                ]
                },
                {
                "mark": {"type":"point"},
                "encoding": {
                    "color": {
                    "field": "fields",
                    "type": "nominal",
                    "scale": {
                        "domain": [
                        "Hospital & skilled nursing facility reimbursements per enrollee",
                        "Outpatient facility reimbursements per enrollee",
                        "Physician reimbursements per enrollee",
                        "Home health agency reimbursements per enrollee",
                        "Hospice reimbursements per enrollee",
                        "Durable medical equipment reimbursements per enrollee"],
                        "range": ["#e7ba52","#ff9896","#aec7e8","#1f77b4","#9467bd", "#d3eeb4"]
                    },
                    "legend": {"title": "fields"}
                    }
                }
                }
            ]
            }
        ]
    }
    vegaEmbed('#medicareVis', statesMedicareViz);
})
