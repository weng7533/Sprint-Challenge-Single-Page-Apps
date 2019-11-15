import React, { useState } from "react";

export default function SearchForm(props) {

  return (
    <section className="search-form">

      <form className="search">
        <input
          type="text"
          onChange={props.searchHandler}
          name="name"
          tabIndex="0"

          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}
