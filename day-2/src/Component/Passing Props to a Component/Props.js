import React from "react";
import Profile from "./Profile";
const Props = (imageId, size) => {
  const people = [
    "Creola Katherine Johnson: mathematician",
    "Mario José Molina-Pasquel Henríquez: chemist",
    "Mohammad Abdus Salam: physicist",
    "Percy Lavon Julian: chemist",
    "Subrahmanyan Chandrasekhar: astrophysicist",
  ];
  let itemList = people.map((person) => <li>{person}</li>);

  const peoples = [
    {
      id: 0,
      name: "Creola Katherine Johnson",
      profession: "mathematician",
    },
    {
      id: 1,
      name: "Mario José Molina-Pasquel Henríquez",
      profession: "chemist",
    },
    {
      id: 2,
      name: "Mohammad Abdus Salam",
      profession: "physicist",
    },
    {
      name: "Percy Lavon Julian",
      profession: "chemist",
    },
    {
      name: "Subrahmanyan Chandrasekhar",
      profession: "astrophysicist",
    },
  ];
  let itemForOnePerson = peoples.filter(
    (title) => peoples.profession === "chemist"
  );

  return (
    <div className="row g-3">
      <h1>Noble prize</h1>
      <section className="border p-4 col-md-6 rounded-3">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar rounded"
          src={Profile("szV5sdG")}
          alt="man"
          width={70}
          height={70}
        />
        <ul className="mt-3">
          <li>
            <b>Profession: </b>
            <i>physicist and chemist</i>
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>
      <section className="border p-4 col-md-6 rounded-3">
        <h2 draggable="true" className="">
          Maria Skłodowska-Curie
        </h2>
        <img
          className="avatar rounded"
          src={Profile("YfeOqp2")}
          alt="man"
          width={70}
          height={70}
        />
        <ul className="mt-3">
          <li>
            <b>Profession: </b>
            <i>geochemist</i>
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
      <h3>There are also other scientist</h3>
      <ol className="ms-5">{itemList}</ol>
      <ul className="ms-5">{itemForOnePerson}</ul>

      <div className=".container  mt-3 col-xl-6">
        <h2>Basic Table</h2>
        <p>
          The .table class adds basic styling (light padding and horizontal
          dividers) to a table:
        </p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Props;
