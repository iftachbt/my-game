/* eslint-disable react/prop-types */
import React,{useState,useEffect} from "react";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/user";
import { appBarTheme } from "./header.style";
import { ThemeProvider } from '@mui/material/styles';
import {VolumeUp,VolumeOff} from '@mui/icons-material';


const Header = (props) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null);

  let pages = [];
  if(props.location === "mainGame"){
    pages.push("save","menu")
  }
  function handlePageClick(event){
    const val = event.target.getAttribute('value')
    if(val === "save") props.setPushSave(true)
    if(val === "menu") navigate("/menuPage")
    handleOpenNavMenu(event)
  };
  const handleMute = () =>{
    props.setMute(!props.isMute)
}
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function logoutHandler(){
    logout()
    props.setUser(null)
    navigate('/')
}

  return (
    <ThemeProvider theme={appBarTheme} >
    <AppBar position="static" color="primary">
      <Container maxWidth="x5">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOME
            </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography  onClick={handlePageClick} value={page} textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <IconButton
                aria-label="toggle background audio"
                onClick={handleMute}
                onMouseDown={handleMute}
              >
                {!props.isMute ? <VolumeUp /> : <VolumeOff />}
              </IconButton>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate('/')}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            HOME
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                onClick={handlePageClick} 
                value={page}
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <IconButton
                aria-label="toggle background audio"
                onClick={handleMute}
                onMouseDown={handleMute}
              >
                {!props.isMute ? <VolumeUp /> : <VolumeOff />}
              </IconButton>
          </Box>

          {props.user ?(<Box sx={{ flexGrow: 0 }}>
              <Button onClick={handleOpenUserMenu} sx={{ p: 1 }} color="inherit">{props.user.username}</Button>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key='Logout' onClick={logoutHandler}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>) :(
            <div>
                <Button onClick={()=>navigate("/login")} color="inherit">Login</Button>
            </div>
            )}
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default Header;
