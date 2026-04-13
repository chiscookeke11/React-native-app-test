import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type PickedImage = {
  uri: string;
  fileSize?: number;
};

type ImageUploadFieldProps = {
  label?: string;
  maxSizeInMb?: number;
  onChange?: (uri: string | null) => void;
  onPickImage?: () => Promise<PickedImage | null>;
};

export default function ImageUploadField({
  label = 'Business Logo (Optional)',
  maxSizeInMb = 500,
  onChange,
  onPickImage,
}: ImageUploadFieldProps) {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    if (!onPickImage) {
      Alert.alert('Upload not connected', 'Pass onPickImage to connect this field to your image picker.');
      return;
    }

    const result = await onPickImage();

    if (!result) return;

    const maxSizeInBytes = maxSizeInMb * 1024 * 1024;

    if (result.fileSize && result.fileSize > maxSizeInBytes) {
      Alert.alert('File too large', `Please select an image up to ${maxSizeInMb}MB.`);
      return;
    }

    setImageUri(result.uri);
    onChange?.(result.uri);
  };

  const removeImage = () => {
    setImageUri(null);
    onChange?.(null);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity style={styles.uploadBox} onPress={pickImage} activeOpacity={0.8}>
        {imageUri ? (
          <>
            <Image source={{ uri: imageUri }} style={styles.previewImage} />
            <TouchableOpacity style={styles.removeButton} onPress={removeImage}>
              <Ionicons name="close-circle" size={24} color="#ff4d4f" />
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.placeholderWrapper}>
            <Ionicons name="image-outline" size={26} color="#10182A" />
            <Text style={styles.placeholderTitle}>Upload your image here</Text>
            <Text style={styles.placeholderSubtext}>Max file size up to {maxSizeInMb}mb</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#10182A',
    fontFamily: 'Sora_400Regular',
  },
  uploadBox: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#A9AFBD',
    borderRadius: 14,
    width: '100%',
    minHeight: 130,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F8F9',
    overflow: 'hidden',
    position: 'relative',
  },
  placeholderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  placeholderTitle: {
    color: '#10182A',
    fontSize: 18,
    fontFamily: 'PlusJakartaSans_500Medium',
  },
  placeholderSubtext: {
    color: '#616A7E',
    fontSize: 13,
    fontFamily: 'Sora_400Regular',
  },
  previewImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  removeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#fff',
    borderRadius: 999,
  },
});
