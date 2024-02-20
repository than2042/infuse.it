"use client";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";

export default function FavouriteButton({
  handleAddFav,
  handleDeleteFav,
  favStatus,
}) {
  return (
    <>
      {favStatus ? (
        <IconButton onClick={async () => handleDeleteFav()}>
          <FavoriteIcon />
        </IconButton>
      ) : (
        <IconButton onClick={async () => handleAddFav()}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
    </>
  );
}
