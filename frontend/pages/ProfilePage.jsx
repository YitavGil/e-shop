import { useEffect, useState } from "react";
import Header from "../src/components/layout/Header";
import styles from "../src/styles/styles";
import ProfileSideBar from "../components/profile/ProfileSidebar";
import ProfileContent from "../components/profile/ProfileContent";

const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[335px]">
          <ProfileSideBar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
};

export default ProfilePage;
