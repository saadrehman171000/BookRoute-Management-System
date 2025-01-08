import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import {
  Card,
  Text,
  Button,
  TextInput,
  RadioButton,
  useTheme,
  Portal,
  Modal,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Task = {
  id: string;
  name: string;
  school: string;
};

const FeedbackScreen = () => {
  const [selectedTask, setSelectedTask] = useState<string>('');
  const [bookCondition, setBookCondition] = useState<string>('good');
  const [teacherName, setTeacherName] = useState<string>('');
  const [teacherFeedback, setTeacherFeedback] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [successModal, setSuccessModal] = useState<boolean>(false);
  
  const theme = useTheme();

  const tasks: Task[] = [
    { 
      id: '1',
      name: 'City Public School - Science Books',
      school: 'City Public School'
    },
    { 
      id: '2',
      name: "St. Mary's High School - Mathematics Books",
      school: "St. Mary's High School"
    }
  ];

  const handleSubmit = () => {
    // Handle submission logic here
    setSuccessModal(true);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.title}>
            Submit Delivery Feedback
          </Text>

          {/* Task Selection */}
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Select Task
            </Text>
            <View style={styles.taskSelector}>
              {tasks.map((task) => (
                <Button
                  key={task.id}
                  mode={selectedTask === task.id ? 'contained' : 'outlined'}
                  onPress={() => setSelectedTask(task.id)}
                  style={styles.taskButton}
                >
                  {task.name}
                </Button>
              ))}
            </View>
          </View>

          {/* Book Condition */}
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Book Condition on Delivery
            </Text>
            <RadioButton.Group
              onValueChange={value => setBookCondition(value)}
              value={bookCondition}
            >
              <View style={styles.radioGroup}>
                <RadioButton.Item label="Good" value="good" />
                <RadioButton.Item label="Fair" value="fair" />
                <RadioButton.Item label="Poor" value="poor" />
              </View>
            </RadioButton.Group>
          </View>

          {/* Teacher Information */}
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Teacher Information
            </Text>
            <TextInput
              label="Teacher's Name"
              value={teacherName}
              onChangeText={setTeacherName}
              mode="outlined"
              style={styles.input}
            />
            <TextInput
              label="Teacher's Feedback"
              value={teacherFeedback}
              onChangeText={setTeacherFeedback}
              mode="outlined"
              multiline
              numberOfLines={3}
              style={styles.input}
            />
          </View>

          {/* Additional Notes */}
          <View style={styles.section}>
            <Text variant="titleMedium" style={styles.sectionTitle}>
              Additional Notes
            </Text>
            <TextInput
              label="Any other observations or comments"
              value={additionalNotes}
              onChangeText={setAdditionalNotes}
              mode="outlined"
              multiline
              numberOfLines={4}
              style={styles.input}
            />
          </View>

          <Button
            mode="contained"
            onPress={handleSubmit}
            style={styles.submitButton}
            icon="check-circle"
          >
            Submit Feedback
          </Button>
        </Card.Content>
      </Card>

      <Portal>
        <Modal
          visible={successModal}
          onDismiss={() => setSuccessModal(false)}
          contentContainerStyle={styles.modal}
        >
          <View style={styles.modalContent}>
            <MaterialCommunityIcons
              name="check-circle"
              size={64}
              color={theme.colors.primary}
            />
            <Text variant="headlineSmall" style={styles.modalTitle}>
              Feedback Submitted
            </Text>
            <Text variant="bodyMedium" style={styles.modalText}>
              Thank you for submitting your feedback. This will help us improve our service.
            </Text>
            <Button
              mode="contained"
              onPress={() => setSuccessModal(false)}
              style={styles.modalButton}
            >
              Close
            </Button>
          </View>
        </Modal>
      </Portal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  title: {
    marginBottom: 24,
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
    fontWeight: '500',
  },
  taskSelector: {
    gap: 8,
  },
  taskButton: {
    marginBottom: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  input: {
    marginBottom: 8,
  },
  submitButton: {
    marginTop: 8,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 8,
  },
  modalContent: {
    alignItems: 'center',
    padding: 16,
  },
  modalTitle: {
    marginTop: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 24,
    color: '#6b7280',
  },
  modalButton: {
    minWidth: 100,
  },
});

export default FeedbackScreen;