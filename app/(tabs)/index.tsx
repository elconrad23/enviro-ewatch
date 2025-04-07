import { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Platform, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera, Upload, MapPin } from 'lucide-react-native';

export default function MonitorScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [location, setLocation] = useState('No location data');

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setLocation('Sample Location, Earth');
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setLocation('Sample Location, Earth');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Environmental Monitoring System</Text>

        <View style={styles.imageContainer}>
          {image ? (
            <View style={styles.imageWrapper}>
              <Image source={{ uri: image }} style={styles.preview} />
              <View style={styles.locationBadge}>
                <MapPin size={16} color="#059669" />
                <Text style={styles.locationText}>{location}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.placeholder}>
              <Camera size={48} color="#059669" />
              <Text style={styles.placeholderText}>Take or upload a photo to begin monitoring</Text>
            </View>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Camera size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Capture</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.uploadButton]} onPress={pickImage}>
            <Upload size={24} color="#ffffff" />
            <Text style={styles.buttonText}>Upload</Text>
          </TouchableOpacity>
        </View>

        {image && (
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Image Analysis</Text>
            <Text style={styles.infoText}>
              Processing your environmental data. Our AI system will analyze vegetation health, soil conditions, and potential environmental changes.
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#f8fafc',
    height: 300,
  },
  imageWrapper: {
    flex: 1,
    position: 'relative',
  },
  preview: {
    width: '100%',
    height: '100%',
  },
  locationBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  locationText: {
    color: '#059669',
    fontSize: 14,
    fontWeight: '500',
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  placeholderText: {
    color: '#6b7280',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    gap: 16,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#059669',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  uploadButton: {
    backgroundColor: '#0d9488',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f0fdf4',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#86efac',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#059669',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
});