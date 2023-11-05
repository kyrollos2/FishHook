import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class FishingMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fishingReports: [],
    };
  }

  componentDidMount() {
    // Fetch fishing reports from a server and update the component state
    fetch('http://localhost:3000/fishingReports')
      .then(response => response.json())
      .then(fishingReports => this.setState({ fishingReports }))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* Initialize the MapView component */}
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 2,
            longitudeDelta: 2,
          }}
        >
          {this.state.fishingReports.map((report, index) => {
            let color;
            // Determine circle color based on the number of fishing reports
            if (report.reports >= 15) {
              color = 'red';
            } else if (report.reports >= 5) {
              color = 'orange';
            } else if (report.reports >= 3) {
              color = 'yellow';
            } else {
              color = 'green'; // Default color for cases with fewer than 3 reports
            }

            // Render colored circles on the map based on report data
            return (
              <MapView.Circle
                key={index}
                center={report.coords}
                radius={500} // Set the radius of the circle (adjust as needed)
                strokeWidth={1}
                strokeColor="#000" // Border color
                fillColor={color} // Fill color
                fillOpacity={0.5} // Fill opacity
              />
            );
          })}
        </MapView>
      </View>
    );
  }
}
