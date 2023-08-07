import { Box as MuiBox, useTheme } from '@mui/material'
import Header from '../../components/Header'
import { ResponsiveLine } from '@nivo/line'

const customData = [
  {
    "id": "japan",
    "color": "hsl(18, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 212
      },
      {
        "x": "helicopter",
        "y": 268
      },
      {
        "x": "boat",
        "y": 289
      },
      {
        "x": "train",
        "y": 129
      },
      {
        "x": "subway",
        "y": 198
      },
      {
        "x": "bus",
        "y": 229
      },
      {
        "x": "car",
        "y": 118
      },
      {
        "x": "moto",
        "y": 189
      },
      {
        "x": "bicycle",
        "y": 294
      },
      {
        "x": "horse",
        "y": 251
      },
      {
        "x": "skateboard",
        "y": 222
      },
      {
        "x": "others",
        "y": 34
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(198, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 26
      },
      {
        "x": "helicopter",
        "y": 64
      },
      {
        "x": "boat",
        "y": 141
      },
      {
        "x": "train",
        "y": 262
      },
      {
        "x": "subway",
        "y": 74
      },
      {
        "x": "bus",
        "y": 103
      },
      {
        "x": "car",
        "y": 6
      },
      {
        "x": "moto",
        "y": 105
      },
      {
        "x": "bicycle",
        "y": 195
      },
      {
        "x": "horse",
        "y": 216
      },
      {
        "x": "skateboard",
        "y": 82
      },
      {
        "x": "others",
        "y": 198
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(163, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 276
      },
      {
        "x": "helicopter",
        "y": 220
      },
      {
        "x": "boat",
        "y": 59
      },
      {
        "x": "train",
        "y": 107
      },
      {
        "x": "subway",
        "y": 116
      },
      {
        "x": "bus",
        "y": 38
      },
      {
        "x": "car",
        "y": 240
      },
      {
        "x": "moto",
        "y": 75
      },
      {
        "x": "bicycle",
        "y": 87
      },
      {
        "x": "horse",
        "y": 152
      },
      {
        "x": "skateboard",
        "y": 181
      },
      {
        "x": "others",
        "y": 208
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(57, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 213
      },
      {
        "x": "helicopter",
        "y": 285
      },
      {
        "x": "boat",
        "y": 211
      },
      {
        "x": "train",
        "y": 135
      },
      {
        "x": "subway",
        "y": 141
      },
      {
        "x": "bus",
        "y": 124
      },
      {
        "x": "car",
        "y": 293
      },
      {
        "x": "moto",
        "y": 43
      },
      {
        "x": "bicycle",
        "y": 284
      },
      {
        "x": "horse",
        "y": 27
      },
      {
        "x": "skateboard",
        "y": 54
      },
      {
        "x": "others",
        "y": 219
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(149, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 124
      },
      {
        "x": "helicopter",
        "y": 5
      },
      {
        "x": "boat",
        "y": 174
      },
      {
        "x": "train",
        "y": 54
      },
      {
        "x": "subway",
        "y": 76
      },
      {
        "x": "bus",
        "y": 110
      },
      {
        "x": "car",
        "y": 276
      },
      {
        "x": "moto",
        "y": 273
      },
      {
        "x": "bicycle",
        "y": 107
      },
      {
        "x": "horse",
        "y": 209
      },
      {
        "x": "skateboard",
        "y": 112
      },
      {
        "x": "others",
        "y": 102
      }
    ]
  }
]

const MyResponsiveLine = ({ data }: { data: any}) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor="black"
        pointLabelYOffset={-17}
        enableSlices="x"
        useMesh={true}
        legends={[]}
    />
)

// todo: split into components
const LineChart = () => {
  return <MuiBox m='20px'>
    <Header title="Line Chart" subtitle='The simple Line Chart using nivo'/>
    <MuiBox height='500px'>
      <MyResponsiveLine data={customData} />
    </MuiBox>
  </MuiBox>
}

export default LineChart
