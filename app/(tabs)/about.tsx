import { StyleSheet, View, Text, ScrollView, Linking, TouchableOpacity, Image } from 'react-native';
import { Mail, Globe, Github, Twitter } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://i.imgur.com/QZbnwQJ.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.header}>EnviroeWatch</Text>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
      
      <View style={styles.content}>
        <Text style={styles.description}>
          EnviroeWatch is an advanced environmental monitoring platform that empowers 
          scientists, researchers, and environmental enthusiasts to track and analyze 
          landscape changes over time. Using cutting-edge machine learning and image 
          processing, we help identify critical environmental changes and support 
          conservation efforts worldwide.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Features</Text>
          <View style={styles.featureGrid}>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Real-time Analysis</Text>
              <Text style={styles.featureDescription}>
                Instant environmental assessment using advanced AI algorithms
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Data Tracking</Text>
              <Text style={styles.featureDescription}>
                Monitor changes over time with detailed historical data
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Location Mapping</Text>
              <Text style={styles.featureDescription}>
                Precise GPS tracking for accurate geographical data
              </Text>
            </View>
            <View style={styles.featureCard}>
              <Text style={styles.featureTitle}>Expert Reports</Text>
              <Text style={styles.featureDescription}>
                Comprehensive analysis reports with actionable insights
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Connect With Us</Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => Linking.openURL('mailto:contact@enviroewatch.org')}
            >
              <Mail size={20} color="#ffffff" />
              <Text style={styles.socialText}>Email</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.socialButton, { backgroundColor: '#1DA1F2' }]}
              onPress={() => Linking.openURL('https://twitter.com/enviroewatch')}
            >
              <Twitter size={20} color="#ffffff" />
              <Text style={styles.socialText}>Twitter</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.socialButton, { backgroundColor: '#24292e' }]}
              onPress={() => Linking.openURL('https://github.com/enviroewatch')}
            >
              <Github size={20} color="#ffffff" />
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <TouchableOpacity 
            style={styles.supportButton}
            onPress={() => Linking.openURL('https://enviroewatch.org/support')}
          >
            <Text style={styles.supportButtonText}>Visit Help Center</Text>
            <Globe size={20} color="#059669" />
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          © 2024 EnviroeWatch. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  hero: {
    padding: 32,
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    borderBottomWidth: 1,
    borderBottomColor: '#86efac',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#059669',
  },
  version: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    marginBottom: 32,
    textAlign: 'center',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  featureCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#059669',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#059669',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    gap: 8,
  },
  socialText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0fdf4',
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  supportButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#059669',
  },
  footer: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginTop: 32,
  },
});