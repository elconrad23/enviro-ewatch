import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { ChartLine as LineChart, ArrowRight, Leaf, Droplet, Sun } from 'lucide-react-native';

const mockResults = [
  {
    id: 1,
    date: '2024-02-20',
    imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
    location: 'Mountain Valley Region',
    analysis: {
      vegetation: 'High density (85%)',
      moisture: 'Optimal levels',
      sunlight: 'Good exposure',
    },
  },
  {
    id: 2,
    date: '2024-02-19',
    imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    location: 'Coastal Area',
    analysis: {
      vegetation: 'Medium density (65%)',
      moisture: 'Below average',
      sunlight: 'Excellent exposure',
    },
  },
];

export default function ResultsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Environmental Analysis</Text>
        <Text style={styles.headerSubtitle}>Recent Monitoring Results</Text>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <LineChart size={24} color="#059669" />
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Locations Monitored</Text>
        </View>
        <View style={styles.statCard}>
          <Leaf size={24} color="#059669" />
          <Text style={styles.statNumber}>75%</Text>
          <Text style={styles.statLabel}>Average Vegetation</Text>
        </View>
      </View>

      {mockResults.map((result) => (
        <View key={result.id} style={styles.resultCard}>
          <Image
            source={{ uri: result.imageUrl }}
            style={styles.resultImage}
          />
          <View style={styles.resultContent}>
            <View style={styles.resultHeader}>
              <Text style={styles.date}>{result.date}</Text>
              <Text style={styles.location}>{result.location}</Text>
            </View>

            <View style={styles.analysisContainer}>
              <View style={styles.analysisItem}>
                <Leaf size={20} color="#059669" />
                <Text style={styles.analysisText}>{result.analysis.vegetation}</Text>
              </View>
              <View style={styles.analysisItem}>
                <Droplet size={20} color="#0ea5e9" />
                <Text style={styles.analysisText}>{result.analysis.moisture}</Text>
              </View>
              <View style={styles.analysisItem}>
                <Sun size={20} color="#eab308" />
                <Text style={styles.analysisText}>{result.analysis.sunlight}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsText}>View Full Report</Text>
              <ArrowRight size={16} color="#059669" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8fafc',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#059669',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f0fdf4',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    gap: 8,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#059669',
  },
  statLabel: {
    fontSize: 12,
    color: '#374151',
    textAlign: 'center',
  },
  resultCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  resultImage: {
    width: '100%',
    height: 200,
  },
  resultContent: {
    padding: 16,
  },
  resultHeader: {
    marginBottom: 12,
  },
  date: {
    fontSize: 14,
    color: '#6b7280',
  },
  location: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 4,
  },
  analysisContainer: {
    gap: 8,
  },
  analysisItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  analysisText: {
    fontSize: 14,
    color: '#374151',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f0fdf4',
    borderRadius: 8,
    gap: 8,
  },
  detailsText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#059669',
  },
});