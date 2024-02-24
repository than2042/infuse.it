import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Link from "next/link";

export default function NavBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, background: "#F66640" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href={"./recommend"} aria-label="recommend">
          <IconButton aria-label="glass icon">
            <LocalBarIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
        <Link href={"./search"} aria-label="search">
          <IconButton aria-label="search icon">
            <SearchIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
        <Link href={"./favourites"} aria-label="favourites">
          <IconButton aria-label="heart icon">
            <FavoriteIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
        <Link href={"./profile"} aria-label="user profile">
          <IconButton aria-label="user icon">
            <PersonIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
