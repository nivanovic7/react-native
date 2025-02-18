import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

function Comments({ comment, onCloseModal, isModalOpen }) {
  console.log(comment);
  return (
    <Modal animationType="slide" visible={isModalOpen} transparent={true}>
      <View style={styles.container}>
        <Pressable style={styles.closeBtn} onPress={onCloseModal}>
          <Text>Close</Text>
        </Pressable>
        {comment.length &&
          comment.map((comment) => {
            console.log(comment.user[0].avatar.imageSmallSource);
            return (
              <View style={styles.comment} key={comment._key}>
                <Image
                  style={styles.avatar}
                  width={45}
                  height={45}
                  source={{ uri: comment.user[0].avatar.imageSmallSource }}
                />
                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Text style={styles.name}>{comment.user[0].name}</Text>
                    <Text style={styles.created}>{comment.created}</Text>
                  </View>
                  <Text>{comment.outfitPostComment}</Text>
                  <Pressable>
                    <Text style={{ color: "gray" }}>Reply</Text>
                  </Pressable>
                </View>
              </View>
            );
          })}
      </View>
    </Modal>
  );
}

export default Comments;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 16,
    marginTop: 40,
    padding: "16",
    gap: 20,
  },
  closeBtn: {
    marginLeft: "auto",
  },
  comment: {
    flexDirection: "row",
    gap: 10,
  },
  avatar: {
    borderRadius: 50,
  },
  name: {
    fontWeight: "bold",
  },
  created: {
    fontSize: 12,
    color: "gray",
  },
});
