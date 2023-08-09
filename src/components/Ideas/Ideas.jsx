import React from "react";
import "./Ideas.css";

function Ideas() {
  return (
    <div className="white">
      <h2 className="whiteh2">
        You know all those great ideas you have? We want you to try them, lots
        of them, and find out what works.
      </h2>

      <div className="spiral">
        <div className="innercircle"></div>
        <img src="/image.svg" alt="" className="boy" />
        <div className="spirall">
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6196c797f76aeb859035a12a_arrowhead-right.svg"
            alt=""
          />
          <h2 className="font-family['Mabry Pro'] font-light text-3xl text-center">
            The Gumroad Way
          </h2>
          <aside></aside>
        </div>
        <div className="spirall">
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6196c797f76aeb859035a12a_arrowhead-right.svg"
            alt=""
          />
          <h2 className="font-family['Mabry Pro'] font-light text-3xl text-center">
            Start Small
          </h2>
          <aside></aside>
        </div>
        <div className="spirall">
          <h2 className="font-family['Mabry Pro'] font-light text-3xl text-center">
            Learn Quickly
          </h2>
          <aside></aside>
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6196c797fad72026bb5ff0a0_arrowhead-left.svg"
            alt=""
          />
        </div>
        <div className="spirall">
          <h2 className="font-family['Mabry Pro'] font-light text-3xl text-center">
            Get Better Together
          </h2>
          <aside></aside>
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6196c797fad72026bb5ff0a0_arrowhead-left.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Ideas;
