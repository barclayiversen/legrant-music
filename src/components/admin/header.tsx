import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderComponentProps {
  signOut: any;
  toggleModal: any;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  signOut,
  toggleModal,
}) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  const tracksContainerStyle = {
    height: `calc(100vh - ${headerHeight}px)`,
  };

  return (
    <div ref={headerRef} className="bg-black p-4 text-white" id="header">
      <div className="flex justify-between items-center">
        <button className="md:hidden" onClick={toggleModal}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          onClick={signOut}
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-700 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
