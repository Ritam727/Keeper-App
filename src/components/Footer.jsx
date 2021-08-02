import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p><a href="https://github.com/Ritam727/Keeper-App"><GitHubIcon /></a></p>
    </footer>
  );
}

export default Footer;
