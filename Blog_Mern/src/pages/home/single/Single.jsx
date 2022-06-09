import Sidebar from "../../../components/sidebar/Sidebar";
import SinglePost from "../../../singlePost/SinglePost";
import "./single.css";
import React from "react";
export default function Single() {
  return (
    <div className="single">
    <SinglePost />
    <Sidebar />
    </div>
  )
}
