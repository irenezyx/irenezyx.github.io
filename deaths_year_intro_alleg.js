Reveal.addEventListener('ready', function(){
    var dyia = {
        "data": {"url": "data/character-deaths.json"},
        "selection": {
            "GOT": {
              "type": "single",
              "fields": ["Book of Death", "Death Year"],
              "bind": {
                "Book of Death": {"input": "range", "min": 0, "max": 5, "step": 1},
                "Death Year": {"input": "range", "min": 297, "max": 301, "step": 1}
              }
            }
        },
        "mark": "circle",
        "encoding": {
          "x": {"field": "Book Intro Chapter","type": "quantitative"},
          "y": {"field": "Death Chapter","type": "quantitative"},
          "color": {
            "condition": {
                "selection": "GOT",
                "field": "Allegiances", "type": "nominal"
            },
            "value": "grey"
          },
          "size": {
          "condition": {"selection": "GOT", "value": 100},
          "value": 30
          }
        }
    };
    
    var embedded = vegaEmbed('#dyiaVis', dyia);
})
