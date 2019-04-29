Reveal.addEventListener('ready', function(){
    var battler = {
        "data": {
            "url": "data/battles.json"
        },
        "vconcat": [
            {
                "mark": "rect",
                "title": "Summary of All Important Battles",
                "encoding": {
                    "x": {
                        "field": "name",
                        "type": "nominal"
                    },
                    "y": {
                        "field": "year",
                        "type": "ordinal"
                    },
                    "color": {
                        "field": "attacker_size",
                        "type": "quantitative"
                    }
                }
            },
            {
                "vconcat": [
                    {
                        "title": "Information of Battles",
                        "mark": "bar",
                        "transform": [
                            {
                                "fold": [
                                    "attacker_1",
                                    "attacker_2",
                                    "attacker_3",
                                    "attacker_4",
                                    "defender_1",
                                    "defender_2",
                                    "defender_3",
                                    "defender_4",
                                    "attacker_king",
                                    "defender_king",
                                    "battle_type",
                                    "attacker_outcome",
                                    "year"
                                ],
                                "as": [
                                    "field_chosen",
                                    "x_field_chosen"
                                ]
                            },
                            {
                                "fold": [
                                    "attacker_1",
                                    "attacker_2",
                                    "attacker_3",
                                    "attacker_4",
                                    "defender_1",
                                    "defender_2",
                                    "defender_3",
                                    "defender_4",
                                    "attacker_king",
                                    "defender_king",
                                    "battle_type",
                                    "attacker_outcome",
                                    "year"
                                ],
                                "as": [
                                    "var_color",
                                    "color_field_chosen"
                                ]
                            },
                            {
                                "filter": {
                                    "selection": "x_axis"
                                }
                            },
                            {
                                "filter": {
                                    "selection": "color_axis"
                                }
                            }
                        ],
                        "selection": {
                            "x_axis": {
                                "type": "single",
                                "fields": [
                                    "field_chosen"
                                ],
                                "bind": {
                                    "input": "select",
                                    "options": [
                                        "attacker_1",
                                        "attacker_2",
                                        "attacker_3",
                                        "attacker_4",
                                        "defender_1",
                                        "defender_2",
                                        "defender_3",
                                        "defender_4",
                                        "attacker_king",
                                        "defender_king",
                                        "battle_type",
                                        "attacker_outcome",
                                        "year"
                                    ]
                                }
                            },
                            "color_axis": {
                                "type": "single",
                                "empty": "none",
                                "fields": [
                                    "var_color"
                                ],
                                "bind": {
                                    "input": "select",
                                    "options": [
                                        "attacker_1",
                                        "attacker_2",
                                        "attacker_3",
                                        "attacker_4",
                                        "defender_1",
                                        "defender_2",
                                        "defender_3",
                                        "defender_4",
                                        "attacker_king",
                                        "defender_king",
                                        "battle_type",
                                        "attacker_outcome",
                                        "year"
                                    ]
                                }
                            },
                            "brush": {
                                "type": "interval",
                                "encodings": [
                                    "x"
                                ]
                            }
                        },
                        "encoding": {
                            "x": {
                                "field": "x_field_chosen",
                                "type": "nominal"
                            },
                            "y": {
                                "aggregate": "count",
                                "type": "quantitative"
                            },
                            "color": {
                                "condition": {
                                    "selection": "brush",
                                    "field": "color_field_chosen",
                                    "type": "nominal",
                                    "scale": {
                                        "range": [
                                            "#fabebe",
                                            "#d3eeb4",
                                            "#aec7e8",
                                            "#ffd8b1",
                                            "#9467bd",
                                            "#008080",
                                            "#fffac8",
                                            "#aaffc3",
                                            "#ffe119",
                                            "#bcf60c",
                                            "#e6beff",
                                            "#f58231",
                                            "#46f0f0"
                                        ]
                                    }
                                },
                                "value": "grey"
                            }
                        }
                    },
                    {
                        "transform": [
                            {
                                "fold": [
                                    "attacker_1",
                                    "attacker_2",
                                    "attacker_3",
                                    "attacker_4",
                                    "defender_1",
                                    "defender_2",
                                    "defender_3",
                                    "defender_4",
                                    "attacker_king",
                                    "defender_king",
                                    "battle_type",
                                    "attacker_outcome",
                                    "year"
                                ],
                                "as": [
                                    "field_chosen",
                                    "x_field_chosen"
                                ]
                            },
                            {
                                "filter": {
                                    "selection": "x_axis"
                                }
                            },
                            {
                                "filter": {
                                    "selection": "brush"
                                }
                            }
                        ],
                        "mark": "bar",
                        "title": "Details for Each Year",
                        "encoding": {
                            "y": {
                                "field": "year",
                                "type": "ordinal"
                            },
                            "x": {
                                "field": "x_field_chosen",
                                "type": "nominal"
                            },
                            "color":{
                                "aggregate": "count",
                                "type": "quantitative"
                            }
                        }
                    }
                ]
            }
        ]
    };
    
    var embedded = vegaEmbed('#battlerVis', battler);
})
