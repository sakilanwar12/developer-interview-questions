import { menus } from "@/lib/menus";

function Nav() {
  return (
    <nav>
      <ul className="flex gap-4">
        {menus?.map((item) => (
          <li key={item.value}>
            <a href={item.value} className="text-base text-default-50 hover:text-primary">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
