import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSecction'

const AlbumDetail = ({album}) => {
    const {title, artist, thumbnail_image, image} = album;
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle
    } = styles;
    return (
      <Card>
          <CardSection>
              <View style={thumbnailContainerStyle}>
                  <Image
                      style={thumbnailStyle}
                      source={{ uri: thumbnail_image }}

                  />
              </View>
              <View style={headerContentStyle}>
                  <Text style={headerTextStyle}>{title}</Text>
                  <Text>{artist}</Text>
              </View>
          </CardSection>
          <CardSection>
              <Images source={{ uri: image}} />
          </CardSection>
      </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
};

export default AlbumDetail;