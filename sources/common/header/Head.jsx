import React from "react";


const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+212767689181</label>
            <i className="fa fa-envelope"></i>
            <label>talibi.achraf.dev@gmail.com</label>
          </div>
          <div className="right row RText">

            <label>Besoin d'aide ?</label>
            <span></span>
            <label htmlFor="">MA</label>
            <span>💵</span>
            <label htmlFor="">MAD</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
