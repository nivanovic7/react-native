import { FlatList } from "react-native";
import ImageSliderItem from "./ImageSliderItem";

function ImageSlider({ data }) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      data={data}
      renderItem={({ item, index }) => {
        return <ImageSliderItem item={item} index={index} />;
      }}
    />
  );
}

export default ImageSlider;
