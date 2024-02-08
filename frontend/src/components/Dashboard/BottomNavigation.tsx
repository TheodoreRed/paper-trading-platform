import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGears,
  faHouse,
  faMagnifyingGlass as faMG,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from "../../hooks/useUser";
import { ActiveTab } from "../../context/UserContextProvider";

interface Tab {
  id: ActiveTab;
  icon: IconDefinition;
  size: string;
  iconSize: string;
}

const BottomNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useUser();

  const tabs: Tab[] = [
    { id: "settings", icon: faGears, size: "w-1/4", iconSize: "text-2xl" },
    { id: "home", icon: faHouse, size: "w-1/2", iconSize: "text-3xl" },
    { id: "search", icon: faMG, size: "w-1/4", iconSize: "text-2xl" },
  ];

  const getButtonStyles = (tab: Tab): string =>
    `flex items-center justify-center ${tab.size} p-5 border ${activeTab === tab.id ? "border-black bg-white" : "border-white"}`;

  const getIconStyles = (tab: Tab): string =>
    `${tab.iconSize} ${activeTab === tab.id ? "text-black" : "text-white"}`;

  return (
    <div className="fixed inset-x-0 bottom-0 flex">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={getButtonStyles(tab)}
        >
          <FontAwesomeIcon className={getIconStyles(tab)} icon={tab.icon} />
        </button>
      ))}
    </div>
  );
};

export default BottomNavigation;
