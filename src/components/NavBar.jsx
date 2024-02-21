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
        <Link href="/recommend">
          <IconButton>
            <LocalBarIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
        <Link href="/search">
          <IconButton>
            <SearchIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
        <Link href="/favourites">
          <IconButton>
            <FavoriteIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
        <Link href="/profile">
          <IconButton>
            <PersonIcon fontSize="large" sx={{ color: "#F9F4F0" }} />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
