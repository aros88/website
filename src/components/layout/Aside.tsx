import React from "react";
import Avatar from "../Avatar";
import Stack from "../Stack";
import Links from "../Links";
import { SiBuymeacoffee } from "react-icons/si";

const Aside: React.FC = () => {
  return (
    <aside className="aside">
      <Avatar />
      <div className="aside-stack">
        <Stack />
      </div>
      <div className="aside-links">
        <Links />
      </div>
      <div className="aside-footer">
        <p>
          If you enjoyed your stay and would like to make a donation (thank
          you!), you can buy me a cup of coffee:
        </p>
        <a href="https://www.buymeacoffee.com/aros88" target="_blank">
          <SiBuymeacoffee title="buy me a coffee" />
        </a>
      </div>
    </aside>
  );
};

export default Aside;
