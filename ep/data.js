var APP_DATA = {
  "scenes": [
    {
      "id": "0-climbing-hall",
      "name": "Climbing Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6260486081816019,
          "pitch": -0.5106971672765397,
          "rotation": 0.7853981633974483,
          "target": "1-training-room"
        },
        {
          "yaw": -1.2818201049619429,
          "pitch": -0.8633403926052736,
          "rotation": 0,
          "target": "2-roof"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0710424560886143,
          "pitch": -0.037396976174054686,
          "title": "Rock Climbing Hall",
          "text": "In this hall there are two massive climbing walls. They are in different height and difficulty, which are suitable for beginners to advanced climbers."
        }
      ]
    },
    {
      "id": "1-training-room",
      "name": "Training Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17843733876134493,
          "pitch": -0.28160582831500847,
          "rotation": 0.7853981633974483,
          "target": "2-roof"
        },
        {
          "yaw": -3.0470057734311915,
          "pitch": 0.12799396650214767,
          "rotation": 3.9269908169872414,
          "target": "0-climbing-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-roof",
      "name": "Roof",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.46825287116092085,
          "pitch": 0.31291103174837076,
          "rotation": 2.356194490192345,
          "target": "1-training-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.7166584633205986,
          "pitch": -0.27363343311616717,
          "title": "Bee Keeping",
          "text": "Keeping bees on its roof can boost plant pollination in the city."
        },
        {
          "yaw": 1.1361665505109215,
          "pitch": -0.5778821280760553,
          "title": "Solar Foil Roof",
          "text": "Solar film panels can not only generate energy, but also act as a canopy to provide some coverage for the upper part of the ramp"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
