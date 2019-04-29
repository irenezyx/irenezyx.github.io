Reveal.addEventListener('ready', function(){
    var dyia = {
      "data": {"url": "data/character-deaths.json"},
      "vconcat": [
        {
          "hconcat": [
            {
              "title": "Book of Deaths of Each Allegiance",
              "selection": {
                "GoT1": {
                  "type": "single",
                  "fields": ["Book of Death", "Nobility"],
                  "bind": {
                    "Book of Death": {"input": "range", "min": 0, "max": 5, "step": 1},
                    "Nobility": {"input": "select", "options": [null, 1, 0]}
                  }
                }
              },
              "mark": "circle",
              "encoding": {
                "x": {"field": "Book Intro Chapter","type": "quantitative"},
                "y": {"field": "Death Chapter","type": "quantitative"},
                "color": {
                  "condition": {
                      "selection": "GoT1",
                      "field": "Allegiances", "type": "nominal"
                  },
                  "value": "grey"
                },
                "size": {
                "condition": {"selection": "GoT1", "value": 100},
                "value": 30
                }
              }
            },
            {
              "title": {
                "text": "Count of Deaths of each Allegiance in Each Book",
                "color": "#6FA99E"
              },
              "transform": [
                {
                  "filter": {"selection": "GoT1"}
                }
              ],
              "mark": {
                "type": "bar",
                "color": "#6FA99E"
              },
              "encoding": {
                "x": {
                    "field": "Allegiances",
                    "type": "nominal",
                    "axis": {
                       
                      "titleColor": "#6FA99E"
                    }
                },
                "y": {
                    "aggregate": "count", 
                    "type": "quantitative",
                    "axis": {
                        "title": "Records of Deaths",
                        "titleColor": "#6FA99E"
                    }
                }
              }
            }
          ] 
        },
        {
          "hconcat": [
            {
              "title": "Year of Deaths of Each Allegiance",
              "selection": {
                "GoT2": {
                  "type": "single",
                  "fields": ["Death Year", "Nobility"],
                  "bind": {
                    "Death Year": {"input": "range", "min": 297, "max": 301, "step": 1},
                    "Nobility": {"input": "select", "options": [null, 1, 0]}
                  }
                }
              },
              "mark": "circle",
              "encoding": {
                "x": {"field": "Book Intro Chapter","type": "quantitative"},
                "y": {"field": "Death Chapter","type": "quantitative"},
                "color": {
                  "condition": {
                      "selection": "GoT2",
                      "field": "Allegiances", "type": "nominal"
                  },
                  "value": "grey"
                },
                "size": {
                "condition": {"selection": "GoT2", "value": 100},
                "value": 30
                }
              }
            },
            {
              "title": {
                "text": "Count of Deaths of each Allegiance in Each Year",
                "color": "#DAB4BE"
              },
              "transform": [
                {
                  "filter": {"selection": "GoT2"}
                }
              ],
              "mark": {
                "type": "bar",
                "color": "#DAB4BE"
              },
              "encoding": {
                "x": {
                    "field": "Allegiances",
                    "type": "nominal",
                    "axis": {
                       
                      "titleColor": "#DAB4BE"
                    }
                },
                "y": {
                    "aggregate": "count", 
                    "type": "quantitative",
                    "axis": {
                        "title": "Records of Deaths",
                        "titleColor": "#DAB4BE"
                    }
                }
              }
            }
          ] 
        }
      ]
    };
    
    var embedded = vegaEmbed('#dyiaVis', dyia);
})
