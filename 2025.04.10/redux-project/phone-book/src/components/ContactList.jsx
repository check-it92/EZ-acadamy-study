import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux"; // 값을 찾아오기 위한 목적

const ContactList = () => {
  let [filteredList, setFilteredList] = useState([]);
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword); // 검색값

  //특정 키워드에 따라 관리해주는 값이 마운트가 될때 (생애주기) 관리하는 요소 =useEffect
  // 이때 의존성 배열은 keyword가 객체가 된다.
  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);
  return (
    <>
      <SearchBox />
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
