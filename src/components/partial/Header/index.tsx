import AppLogo from "@/components/AppLogo";
import { Button } from "@/components/ui/button";
import Nav from "./Nav";

function Header() {
  return (
    <header className="w-full p-4 bg-popover border-b border-border shadow">
      <div className="container">
        <div className="flex">
          <AppLogo />
          <div className="flex-1 flex items-center gap-3 justify-end">
            <Nav />
            <Button>Github</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
