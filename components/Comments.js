import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

function Comments({ comments, onCloseModal, isModalOpen }) {
  return (
    <Modal animationType="slide" visible={isModalOpen} transparent={true}>
      <View style={styles.container}>
        <Pressable onPress={onCloseModal}>
          <Text>Close</Text>
        </Pressable>
        {comments.map((comment) => {
          return <Text key={comment._id}>{comment.outfitPostComment}</Text>;
        })}
      </View>
    </Modal>
  );
}

export default Comments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    borderRadius: 16,
    marginTop: 40,
    padding: "16",
  },
});
